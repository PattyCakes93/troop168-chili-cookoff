#!/bin/bash
# This script ensures vite and nanoid are available in production
# even though they're marked as devDependencies

echo "Installing required runtime dependencies..."
npm install --no-save vite@^5.4.20 nanoid@^5.0.9

echo "Heroku postbuild complete!"
