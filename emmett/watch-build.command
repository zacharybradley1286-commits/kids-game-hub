#!/bin/bash
# Double-click to auto-rebuild the standalone HTML whenever you edit a source
# file (anything in src/, styles/, or index.html). Keep this window open while
# you work; close it (or Ctrl+C) to stop watching.
#
# No dependencies: it polls file timestamps every second using Python.

cd "$(dirname "$0")" || exit 1

echo "Watching src/, styles/, and index.html for changes..."
echo "The standalone file will rebuild automatically. Press Ctrl+C to stop."
echo

python3 - <<'PY'
import os, time, glob, subprocess, sys

def snapshot():
    files = ["index.html"] + glob.glob("src/*.js") + glob.glob("styles/*.css")
    return {f: os.path.getmtime(f) for f in files if os.path.exists(f)}

def rebuild():
    r = subprocess.run([sys.executable, "build-standalone.py"])
    return r.returncode == 0

rebuild()  # build once on start
last = snapshot()
try:
    while True:
        time.sleep(1)
        now = snapshot()
        if now != last:
            ts = time.strftime("%H:%M:%S")
            print(f"[{ts}] change detected -> rebuilding")
            rebuild()
            last = now
except KeyboardInterrupt:
    print("\nStopped watching.")
PY
