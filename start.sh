#!/data/data/com.termux/files/usr/bin/bash
DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PORT=8088

echo "========================================"
echo "🪚 Lemnaria – Atelier AI & 3D CAD"
echo "========================================"
echo "Serverul pornește la adresa:"
echo "👉 http://localhost:${PORT}"
echo "========================================"

if command -v termux-open-url >/dev/null 2>&1; then
  (sleep 1 && termux-open-url "http://localhost:${PORT}") &
fi

cd "$DIR" && python3 -m http.server "$PORT"
