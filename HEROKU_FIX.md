# Heroku Deployment Fix

## Problem
The app crashes on Heroku because the bundled server code imports `vite` and other dev dependencies that get pruned after the build.

## Solution

You need to add a `heroku-postbuild` script to ensure required packages aren't pruned. Edit your `package.json`:

### Option 1: Add heroku-postbuild script (Recommended)

In `package.json`, add this to the `"scripts"` section:

```json
"scripts": {
  "dev": "NODE_ENV=development tsx server/index.ts",
  "build": "vite build && esbuild server/index.ts --platform=node --packages=external --bundle --format=esm --outdir=dist",
  "start": "NODE_ENV=production node dist/index.js",
  "check": "tsc",
  "db:push": "drizzle-kit push",
  "heroku-postbuild": "npm run build && npm install --no-save vite@^5.4.20"
}
```

### Option 2: Move vite to dependencies

Alternatively, move `vite` from `devDependencies` to `dependencies`:

1. Cut this line from `devDependencies`: `"vite": "^5.4.20",`
2. Paste it into `dependencies` (alphabetically after `"vaul"`)

### After making the change:

```bash
git add .
git commit -m "Fix Heroku deployment by ensuring vite is available in production"
git push heroku main
```

## Why This Happens

The esbuild bundler uses `--packages=external` which leaves imports as external references rather than bundling them. The `server/vite.ts` file imports `vite` even though it's only used in development. When Heroku prunes devDependencies after the build, these imports fail at runtime.
