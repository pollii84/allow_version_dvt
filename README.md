# ElectricVision Track

Marketing site for ElectricVision Track, a construction management platform for electrical contractors.

## Run

```sh
docker compose -f docker-compose.alloy.yaml up -d
```

The application listens on `http://localhost:3000`. Alloy proxies the application through `http://localhost:8080`.

## Structure

- `site/index.html` — page markup, with translatable strings marked by `data-i18n` keys
- `site/styles.css` — styles
- `site/i18n.js` — English and Romanian dictionaries, language switch, and `localStorage` persistence

## Localization

The header language switch toggles between `EN` and `RO`. The selected language is stored in
`localStorage` under `ev-track-lang` and restored on the next visit; otherwise the browser
language is used, falling back to English. To add a string, add a `data-i18n="some.key"`
attribute in `site/index.html` and the matching key to both dictionaries in `site/i18n.js`.
