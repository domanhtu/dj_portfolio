#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."

set -a
source .env
source .env.development
set +a

: "${SPOTIFY_CLIENT_ID:?missing SPOTIFY_CLIENT_ID in .env}"
: "${SPOTIFY_CLIENT_SECRET:?missing SPOTIFY_CLIENT_SECRET in .env}"
: "${SPOTIFY_REDIRECT_URI:?missing SPOTIFY_REDIRECT_URI in .env.development}"

CODE="${1:-}"

if [ -z "$CODE" ]; then
  SCOPE="playlist-read-private%20playlist-read-collaborative"
  echo "1. Open this URL, log in, and approve access:"
  echo
  echo "https://accounts.spotify.com/authorize?response_type=code&client_id=${SPOTIFY_CLIENT_ID}&scope=${SCOPE}&redirect_uri=${SPOTIFY_REDIRECT_URI}"
  echo
  echo "2. The browser will redirect to a page that fails to load (that's fine)."
  echo "   Copy the 'code' value from its address bar, e.g.:"
  echo "   ${SPOTIFY_REDIRECT_URI}?code=THIS_PART"
  echo
  echo "3. Re-run: npm run spotify:reauth -- \"<code>\""
  exit 0
fi

RESPONSE=$(curl -s -X POST https://accounts.spotify.com/api/token \
  -u "${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}" \
  -d grant_type=authorization_code \
  -d code="${CODE}" \
  -d redirect_uri="${SPOTIFY_REDIRECT_URI}")

REFRESH_TOKEN=$(echo "$RESPONSE" | grep -o '"refresh_token":"[^"]*"' | sed 's/"refresh_token":"//;s/"$//')

if [ -z "$REFRESH_TOKEN" ]; then
  echo "Token exchange failed:"
  echo "$RESPONSE"
  exit 1
fi

echo "SPOTIFY_REFRESH_TOKEN=${REFRESH_TOKEN}"

if [ -f .env.development.local ] && grep -q '^SPOTIFY_REFRESH_TOKEN=' .env.development.local; then
  sed -i "s/^SPOTIFY_REFRESH_TOKEN=.*/SPOTIFY_REFRESH_TOKEN=${REFRESH_TOKEN}/" .env.development.local
else
  echo "SPOTIFY_REFRESH_TOKEN=${REFRESH_TOKEN}" >> .env.development.local
fi
echo
echo "Updated .env.development.local — restart 'npm run dev' to pick it up."
echo
echo "For production: paste the token above into the Vercel project's env vars"
echo "(Project Settings -> Environment Variables), then redeploy."
