# VetRad IT Knowledge Base

Natural language chat over the VetRad IT ticket knowledge base, powered by Claude.

## Local setup

```bash
cd App/vetrad-kb
npm install
cp .env.example .env
# Edit .env and add your ANTHROPIC_API_KEY
node server.js
# Open http://localhost:3000
```

## Deploy to Railway

1. Push this folder to a GitHub repo
2. In Railway: New Project > Deploy from GitHub repo
3. Add env var: `ANTHROPIC_API_KEY`
4. Add env var: `NEON_CONNECTION_STRING` (copy from `_System/db_config.md`)
5. Railway auto-detects Node and deploys

## Notes

- The app reads the Neon DB connection string from `_System/db_config.md` when running locally.
- On Railway, set `NEON_CONNECTION_STRING` as an env var instead.
- Never commit `.env` or the connection string to GitHub.
