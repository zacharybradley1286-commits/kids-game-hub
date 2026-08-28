import { get, put, head, BlobPreconditionFailedError } from '@vercel/blob';

// Shared leaderboard for Star Pong.
//
// Stored as a single small JSON blob. Writes use an ETag precondition
// (`ifMatch`) so two players finishing at the same time can't clobber each
// other — on a conflict we re-read and retry with the fresh list.

const BLOB_PATH = 'starpong/leaderboard.json';
const MAX_SCORES = 10;
const MAX_NAME_LEN = 12;
const MAX_RETRIES = 6;

const sleep = ms => new Promise(r => setTimeout(r, ms));

/**
 * True when a write lost a race against another write. The Blob SDK reports
 * this two different ways, so check both rather than just the typed error.
 */
function isConflict(err) {
  if (err instanceof BlobPreconditionFailedError) return true;
  if (err?.name === 'BlobPreconditionFailedError') return true;
  const msg = err?.message || '';
  return /precondition|conflicting operation|conditional request/i.test(msg);
}

/** Read the leaderboard plus its current ETag (null etag = not created yet). */
async function readBoard() {
  try {
    // useCache:false — the CDN would otherwise serve a stale board right
    // after someone posts a score.
    const res = await get(BLOB_PATH, { access: 'private', useCache: false });
    if (!res || res.statusCode !== 200) return { scores: [], etag: null };

    const text = await new Response(res.stream).text();
    const parsed = JSON.parse(text);
    const scores = Array.isArray(parsed?.scores) ? parsed.scores : [];
    return { scores: sanitize(scores), etag: res.blob.etag };
  } catch (err) {
    // Blob not created yet, or unreadable — start from an empty board.
    return { scores: [], etag: null };
  }
}

function sanitize(list) {
  return list
    .filter(s => s && typeof s.name === 'string' && Number.isFinite(Number(s.score)))
    .map(s => ({
      name: String(s.name).slice(0, MAX_NAME_LEN),
      score: Math.floor(Number(s.score)),
      at: typeof s.at === 'string' ? s.at : undefined
    }))
    .filter(s => s.score > 0 && s.score <= 100000)
    .sort((a, b) => b.score - a.score)
    .slice(0, MAX_SCORES);
}

async function writeBoard(scores, etag) {
  const body = JSON.stringify({ scores, updatedAt: new Date().toISOString() });
  await put(BLOB_PATH, body, {
    access: 'private',
    contentType: 'application/json',
    addRandomSuffix: false,
    allowOverwrite: true,
    // Only write if nobody else changed the board since we read it.
    ...(etag ? { ifMatch: etag } : {})
  });
}

export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');

  try {
    if (req.method === 'GET') {
      const { scores } = await readBoard();
      return res.status(200).json({ scores });
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : (req.body || {});
      const rawName = typeof body.name === 'string' ? body.name.trim() : '';
      const score = Math.floor(Number(body.score));

      if (!rawName) return res.status(400).json({ error: 'name required' });
      if (!Number.isFinite(score) || score <= 0 || score > 100000) {
        return res.status(400).json({ error: 'invalid score' });
      }
      const name = rawName.slice(0, MAX_NAME_LEN);

      // Optimistic concurrency: read, merge, conditional write, retry on clash.
      for (let attempt = 0; attempt < MAX_RETRIES; attempt++) {
        const { scores, etag } = await readBoard();
        const merged = sanitize([...scores, { name, score, at: new Date().toISOString() }]);

        try {
          await writeBoard(merged, etag);
          const rank = merged.findIndex(s => s.name === name && s.score === score);
          return res.status(200).json({
            scores: merged,
            rank: rank >= 0 ? rank + 1 : null,
            made: rank >= 0
          });
        } catch (err) {
          // A racing write surfaces either as a precondition failure or as a
          // generic BlobError saying the conditional request hit a
          // "conflicting operation" — treat both as retryable.
          if (!isConflict(err) || attempt === MAX_RETRIES - 1) throw err;
          // Someone else wrote first: back off briefly, then merge onto
          // their board instead of overwriting it.
          await sleep(60 * (attempt + 1) + Math.floor(Math.random() * 60));
        }
      }
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'method not allowed' });
  } catch (err) {
    console.error('scores api error:', err);
    return res.status(500).json({ error: 'server error' });
  }
}
