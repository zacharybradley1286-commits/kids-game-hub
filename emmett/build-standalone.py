#!/usr/bin/env python3
"""Build monster-truck-game-standalone.html from the modular sources.

Inlines styles/main.css and all src/*.js (in dependency order) into a single
self-contained HTML file that runs by double-clicking (no server needed).

Usage:  python3 build-standalone.py
"""
import re
import pathlib
import sys

ROOT = pathlib.Path(__file__).resolve().parent
OUT = ROOT / "monster-truck-game-standalone.html"

# JS modules in dependency order (leaf deps first).
ORDER = [
    "trucks", "storage", "audio", "input", "levels",
    "physics", "renderer", "state", "game", "ui", "main",
]


def build() -> str:
    css = (ROOT / "styles" / "main.css").read_text()

    parts = []
    for name in ORDER:
        src = (ROOT / "src" / f"{name}.js").read_text()
        lines = []
        for ln in src.splitlines():
            if re.match(r"\s*import\s", ln):
                continue  # drop ES import lines
            ln = re.sub(r"^(\s*)export\s+", r"\1", ln)  # strip 'export ' keyword
            lines.append(ln)
        body = "\n".join(lines)
        if name == "ui":
            # ui.js aliased drawTruckShape as drawShape via import; unify name.
            body = body.replace("drawShape(", "drawTruckShape(")
        parts.append(f"/* ===== {name}.js ===== */\n" + body)
    js = "\n\n".join(parts)

    html = (ROOT / "index.html").read_text()
    body_inner = re.search(r"<body>(.*)</body>", html, re.S).group(1)
    body_inner = re.sub(r"<script[^>]*></script>", "", body_inner).strip()

    return f"""<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Monster Truck Mayhem (standalone)</title>
  <style>
{css}
  </style>
</head>
<body>
{body_inner}

  <!-- All game code inlined so this file works by double-clicking (no server needed). -->
  <script>
(function() {{
"use strict";
{js}
}})();
  </script>
</body>
</html>
"""


def main() -> int:
    out = build()
    OUT.write_text(out)
    print(f"Built {OUT.name} ({len(out)} bytes)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
