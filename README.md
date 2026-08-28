# Alloy Workspace

This repository contains a minimal static application configured for Alloy sessions.

## Run

```sh
docker compose -f docker-compose.alloy.yaml up -d
```

The application listens on `http://localhost:3000`. Alloy proxies the application through `http://localhost:8080`.
