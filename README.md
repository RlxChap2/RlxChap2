<h1 align="center">Mohammed Mahmoud</h1>

<p align="center"><strong>Software Engineering Student · Backend, Desktop, and Open-Source Systems</strong></p>

<p align="center">
  Faculty of Computers and Information, Assiut University · Assiut, Egypt
</p>

<p align="center">
  <a href="https://rlxchap2.github.io/portfolio/">Portfolio</a>
  ·
  <a href="PROJECTS.md">Projects</a>
  ·
  <a href="CONTRIBUTIONS.md">Open Source</a>
  ·
  <a href="CERTIFICATIONS.md">Credentials</a>
  ·
  <a href="https://www.linkedin.com/in/mohammed-mahmouds">LinkedIn</a>
  ·
  <a href="mailto:rlxchap2@outlook.com">Email</a>
</p>

I build TypeScript services, Rust desktop apps, and developer tools. I care about clear failure paths, tests in CI, release checksums and build provenance, and documentation that states limits plainly.

## Selected work

### [MediaFilez Desktop](https://github.com/MediaFilez/mediafilez-desktop)

Windows app for saving public video, images, galleries, and audio. It uses a local-first resolver chain, validates downloaded files, verifies managed-tool checksums, and supports signed in-app updates. An unpublished 2.0 update targeting Android, macOS, and Linux is in development.

`Rust` `Tauri 2` `React` `TypeScript` `Vitest` `Playwright`

[Releases](https://github.com/MediaFilez/mediafilez-desktop/releases) | [CI](https://github.com/MediaFilez/mediafilez-desktop/actions/workflows/build.yml) | [Security](https://github.com/MediaFilez/mediafilez-desktop#privacy-and-security)

### [MediaFilez](https://github.com/RlxChap2/MediaFilez) and [Media Worker](https://github.com/MediaFilez/media-worker)

Discord bot with a download queue, ordered engine fallback, media validation, upload-size fitting, and streamed attachments. The separate worker is an early extraction of the media core, with BullMQ jobs, cancellation, batch ZIPs, and local or Cloudflare R2 storage.

`JavaScript` `TypeScript` `Node.js` `Discord.js` `FFmpeg` `BullMQ` `Cloudflare R2`

[Bot releases](https://github.com/RlxChap2/MediaFilez/releases) | [Bot CI](https://github.com/RlxChap2/MediaFilez/actions/workflows/ci.yml) | [Worker design](https://github.com/MediaFilez/media-worker#current-execution-path)

### [Bonyan API](https://github.com/BonyanOSS/Bonyan-API) and [JavaScript SDK](https://github.com/BonyanOSS/bonyan-sdk-js)

Maintained API for Quran, hadith, prayer times, and related Islamic content, with provider fallback, normalized responses, timeouts, health probes, tests, and an OpenAPI contract. Its typed SDK adds input validation, retries, and typed errors.

`TypeScript` `Node.js` `Fastify` `OpenAPI` `Docker` `Vitest`

[Live API](https://api.bonyanoss.org/) | [Documentation](https://docs.bonyanoss.org/) | [npm](https://www.npmjs.com/package/@bonyanoss/bonyan-api)

### [ContribScope](https://github.com/RlxChap2/contribscope)

Cloudflare Worker that renders contributor grids as SVG. It supports repository, multi-repository, organization, and user scopes while deduplicating contributors and keeping access tokens out of URLs and shared caches.

`TypeScript` `Hono` `Cloudflare Workers` `Vitest` `SVG`

[Live service](https://contribscope.relax3962.workers.dev/) | [API](https://github.com/RlxChap2/contribscope#api) | [Security](https://github.com/RlxChap2/contribscope#security-model)

### [MASC-256](https://github.com/RlxChap2/MASC-256)

Experimental authenticated stream-cipher study in C with key separation, associated data, tamper rejection, and deterministic test vectors. It is research code, not production cryptography.

`C` `CMake` `HMAC-SHA256` `Authenticated Encryption`

[Release](https://github.com/RlxChap2/MASC-256/releases/tag/v2.0.0) | [Architecture](https://github.com/RlxChap2/MASC-256#architecture) | [Validation plan](https://github.com/RlxChap2/MASC-256#validation-roadmap)

More work: [PROJECTS.md](PROJECTS.md)

## Open source

- Merged property tests for address lookup table fee-payer policies in [Solana Kora#648](https://github.com/solana-foundation/kora/pull/648), and a correction to the Identify example in [Discord API Docs#8408](https://github.com/discord/discord-api-docs/pull/8408).
- Open pull requests cover timezone handling for JSON dates in [Microsoft Power Fx#3088](https://github.com/microsoft/Power-Fx/pull/3088), `res.set()` edge-case tests in [Express#7050](https://github.com/expressjs/express/pull/7050), and Arabic documentation in [webpack.js.org#8252](https://github.com/webpack/webpack.js.org/pull/8252).
- Rebuilt Bonyan's English and Arabic documentation with generated OpenAPI references ([#4](https://github.com/BonyanOSS/docs/pull/4)). [Crowdin profile](https://crowdin.com/profile/rlxchap2).

[Contribution snapshot](CONTRIBUTIONS.md) | [Current public pull requests](https://github.com/search?q=author%3ARlxChap2+is%3Apr+is%3Apublic&type=pullrequests)

## Working set

- **Backend:** TypeScript, JavaScript, Node.js, Fastify, OpenAPI, PostgreSQL, Docker
- **Desktop and systems:** Rust, Tauri, C, CMake
- **Quality and delivery:** Vitest, Playwright, GitHub Actions, updater signing, checksums
- **Open source:** issue reproduction, focused pull requests, review, and Arabic localization

## Contact

Open to software engineering roles and focused open-source work in backend systems, desktop software, and developer tooling.

[rlxchap2@outlook.com](mailto:rlxchap2@outlook.com) | [LinkedIn](https://www.linkedin.com/in/mohammed-mahmouds) | [Learning guide](LEARNING.md) | [Sponsorship](SPONSORS.md)

<sub>Reviewed 30 September 2026.</sub>
