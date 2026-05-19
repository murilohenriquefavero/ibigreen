#!/bin/bash
cd "$(dirname "$0")/.."
export PATH="$(pwd)/node_modules/.bin:/usr/local/opt/node@20/bin:$PATH"
exec /usr/local/opt/node@20/bin/node ./node_modules/next/dist/bin/next dev --port 3015
