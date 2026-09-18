# Industrial redesign preview

Branch: `codex/industrial-redesign`

A new homepage, responsive navigation, footer, shared page heroes and calls to action. The design uses graphite, warm neutral surfaces, orange accents, and the repository's existing photography. Existing service details, forms, employee app, and legal routes remain available.

## Run locally

From this repository:

```sh
npm install
npm run dev -- --hostname 127.0.0.1 --port 3001
```

Visit http://localhost:3001. For a production preview, stop the development server before running `npm run build`, then run `npm run start -- --hostname 127.0.0.1 --port 3001`. Development and production builds share `.next` and should not run concurrently.

## Verification

- Production build, ESLint, and TypeScript checks passed.
- Main pages returned HTTP 200.
- Desktop homepage and mobile navigation reviewed in-browser.
- Mobile homepage and contact page had no horizontal overflow.
- Service anchor navigation verified.
- Contact email delivery was not exercised; the existing backend and its environment configuration are unchanged.

This is a local review branch. It has not been deployed or pushed to GitHub.
