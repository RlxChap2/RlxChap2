<!-- Hallmark · pre-emit critique: P5 H5 E4 S5 R5 V5 · genre: editorial · macrostructure: Long Document · theme: Newsprint · enrichment: none · nav: N6 · footer: Ft1 -->

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

---

I build software that can be opened, run, tested, and argued with. My current work spans Rust desktop applications, TypeScript APIs, developer tooling, and small systems experiments in C. I also contribute documentation, tests, and Arabic localization upstream.

The standard I aim for is simple: a useful program, a legible repository, and claims that stop where the evidence stops.

## Selected Work

### [rsdownit](https://github.com/RlxChap2/rsdownit)

A Windows-first desktop application for saving public video and audio. The project includes a native download queue, signed updates, publisher-checksummed tool installation, release provenance, URL and filename safety policy, unit tests, and desktop smoke tests.

`Rust` · `Tauri 2` · `React` · `TypeScript` · `Vitest` · `Playwright`

[Release v0.1.1](https://github.com/RlxChap2/rsdownit/releases/tag/v0.1.1) · [CI](https://github.com/RlxChap2/rsdownit/actions/workflows/build.yml) · [Security model](https://github.com/RlxChap2/rsdownit#privacy-and-security)

### [Bonyan API](https://github.com/BonyanOSS/Bonyan-API)

A maintained API for Quran, tafsir, azkar, hadith, prayer times, Hijri dates, and qibla direction. Each upstream request has a timeout. Failed or malformed responses move to the next provider while the API preserves one output shape. The repository ships an OpenAPI contract, health and readiness probes, tests, and a container build.

`TypeScript` · `Node.js` · `Fastify` · `Vitest` · `OpenAPI` · `Docker`

[Live API](https://api.bonyanoss.org/) · [Documentation](https://docs.bonyanoss.org/) · [OpenAPI 3.1](https://github.com/BonyanOSS/Bonyan-API/blob/main/openapi.yaml)

### [MASC-256](https://github.com/RlxChap2/MASC-256)

An experimental authenticated stream-cipher study in C. Version 2 separates keys, authenticates ciphertext and associated data, rejects tampering, and publishes deterministic test vectors. It is intentionally documented as research—not production cryptography—and recommends established AEAD constructions for real systems.

`C` · `CMake` · `HMAC-SHA256` · `Authenticated Encryption`

[Release v2.0.0](https://github.com/RlxChap2/MASC-256/releases/tag/v2.0.0) · [Architecture](https://github.com/RlxChap2/MASC-256#architecture) · [Validation roadmap](https://github.com/RlxChap2/MASC-256#validation-roadmap)

### [ContribScope](https://github.com/RlxChap2/contribscope)

A Cloudflare Worker that renders README-ready contributor grids as SVG. It handles repo, multi-repo, organization, and user scopes; deduplicates contributors across repositories; validates query input; and keeps tokens out of URLs and shared caches.

`TypeScript` · `Cloudflare Workers` · `Hono` · `Vitest` · `SVG`

[Live service](https://dapotato.xyz/) · [API reference](https://github.com/RlxChap2/contribscope#api) · [Security model](https://github.com/RlxChap2/contribscope#security-model)

See [PROJECTS.md](PROJECTS.md) for released applications, focused utilities, organization work, and learning archives.

## Open-Source Record

As of 28 July 2026, the public record shows [48 authored pull requests](https://github.com/search?q=author%3ARlxChap2+is%3Apr&type=pullrequests), including [37 merged changes](https://github.com/search?q=author%3ARlxChap2+is%3Apr+is%3Amerged&type=pullrequests). I count public results only so another reviewer can reproduce the number.

- Merged documentation fixes in [NVIDIA/NemoClaw#5522](https://github.com/NVIDIA/NemoClaw/pull/5522) and [discord/discord-api-docs#8408](https://github.com/discord/discord-api-docs/pull/8408).
- Open test work in [expressjs/express#7050](https://github.com/expressjs/express/pull/7050), icon support in [Material Icon Theme#3469](https://github.com/material-extensions/vscode-material-icon-theme/pull/3469), and Arabic documentation in [webpack.js.org#8252](https://github.com/webpack/webpack.js.org/pull/8252).
- Ongoing maintenance across [BonyanOSS](https://github.com/BonyanOSS) and [ctlib](https://github.com/ctlib), plus Arabic localization through [Crowdin](https://crowdin.com/profile/rlxchap2).

The fuller ledger is in [CONTRIBUTIONS.md](CONTRIBUTIONS.md).

## Engineering Practice

My strongest repositories show the practices I care about: narrow public APIs, explicit failure paths, tests that run in CI, reproducible releases, security notes, and documentation that states limitations before benefits.

Current working set: `TypeScript` · `Node.js` · `Fastify` · `React` · `Rust` · `Tauri` · `C` · `CMake` · `Vitest` · `Playwright` · `GitHub Actions` · `Docker` · `OpenAPI` · `Cloudflare Workers`.

## Selected Credentials

- [Software Engineer](https://www.hackerrank.com/certificates/0180157c6b8f) and [Node.js Intermediate](https://www.hackerrank.com/certificates/3b87e1c97a60) — HackerRank
- [SQL Advanced](https://www.hackerrank.com/certificates/6705b20dd48c) — HackerRank
- [Get started with classes, properties, and methods in C#](https://learn.microsoft.com/api/credentials/share/en-us/MohammedMahmoud-7840/82E7E3ACA652BA1?sharingId=3CDE825C12D79E30) — Microsoft Applied Skills
- [Designing RESTful APIs](https://www.linkedin.com/learning/certificates/e7e5af304ce3cfff9fd02cfa597f19fbbfdc6f6878f90ec372386b103c3e213c) — LinkedIn Learning

The complete, dated list and its verification notes are in [CERTIFICATIONS.md](CERTIFICATIONS.md).

## Contact

I am open to software engineering opportunities and focused open-source collaboration in backend systems, developer tooling, desktop software, and security-minded utilities. Email [rlxchap2@outlook.com](mailto:rlxchap2@outlook.com), or reach me on [LinkedIn](https://www.linkedin.com/in/mohammed-mahmouds).

<p align="center">
  <sub><a href="SPONSORS.md">Support the public work</a> · <a href="LEARNING.md">Learning notes</a> · Last reviewed 28 July 2026</sub>
</p>
