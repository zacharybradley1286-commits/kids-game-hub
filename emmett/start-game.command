#!/bin/bash
# Double-click this file (Finder) to launch Monster Truck Mayhem.
# It starts a tiny local web server and opens the game in your browser.
# Close the Terminal window (or press Ctrl+C) when you're done playing.

cd "$(dirname "$0")" || exit 1

PORT=8000
# If 8000 is busy, find the next free port.
while lsof -ti tcp:$PORT >/dev/null 2>&1; do
  PORT=$((PORT + 1))
done

echo "Starting Monster Truck Mayhem on http://localhost:$PORT ..."
# Open the browser shortly after the server starts.
( sleep 1; open "http://localhost:$PORT/index.html" ) &

# Serve this folder. Python 3 ships with macOS.
python3 -m http.server "$PORT"
