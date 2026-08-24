# Developer Learning Guide

A small set of strong resources, a build plan, and a clear finish line. Pick one path and make things. Collecting courses is not progress.

## How to use this guide

1. Choose one track for 12 weeks.
2. Use one main course and official documentation.
3. Spend at least half your study time writing, testing, and debugging code.
4. Ship one project before changing tracks.
5. Keep a weekly log: what you built, what failed, and what you will change.

A useful weekly rhythm:

- 3 sessions learning and taking short notes.
- 2 sessions building without copying the lesson.
- 1 session testing, refactoring, and writing documentation.
- 1 session reviewing or resting.

## 1. Build the foundation

Choose the smallest option that matches your goal.

| Goal | Start here | Use it for |
| --- | --- | --- |
| First computer science course | [CS50x](https://cs50.harvard.edu/x/) | Problem solving, C, memory, algorithms, Python, SQL, and web basics |
| Full self-taught CS curriculum | [OSSU Computer Science](https://github.com/ossu/computer-science) | A multi-year curriculum based on university courses |
| Practical command-line skills | [The Missing Semester](https://missing.csail.mit.edu/) | Shell, Git, editors, debugging, automation, and security |
| How computers work | [Nand2Tetris](https://www.nand2tetris.org/) | Logic gates, CPU design, virtual machines, compilers, and an operating system |
| Project-based web route | [The Odin Project](https://www.theodinproject.com/) | Full-stack projects with Git and deployment |
| Broad interactive practice | [freeCodeCamp](https://www.freecodecamp.org/learn/) | Guided exercises and certification projects |

Do not take all six. CS50x plus The Missing Semester is enough for a strong first phase.

## 2. Learn the tools used in real repositories

- **Git:** [Pro Git](https://git-scm.com/book/en/v2) for concepts and commands.
- **GitHub:** [GitHub Skills](https://skills.github.com/) for branches, pull requests, review, Actions, and Pages.
- **Markdown:** [GitHub writing guide](https://docs.github.com/en/get-started/writing-on-github) for READMEs, issues, and pull requests.
- **Debugging:** use the debugger, logs, small reproductions, and failing tests before changing code.
- **Linux and shell:** complete the shell and command-line sections of The Missing Semester.
- **SQL:** [PostgreSQL tutorial](https://www.postgresql.org/docs/current/tutorial.html) for queries, joins, transactions, and relational design.

Minimum Git practice: create a branch, make focused commits, open a pull request, review the diff, resolve one conflict, and tag one release.

## 3. Choose one technical track

### Backend with JavaScript and TypeScript

Study in this order:

1. [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
2. [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
3. [Node.js Learn](https://nodejs.org/en/learn)
4. [Fastify documentation](https://fastify.dev/docs/latest/)
5. [PostgreSQL documentation](https://www.postgresql.org/docs/current/)
6. [OpenAPI specification](https://spec.openapis.org/oas/latest.html)

Build an API with validation, authentication, a relational database, migrations, timeouts, structured errors, tests, and an OpenAPI document. Add a health endpoint and run it in Docker.

### Systems and desktop software

Study in this order:

1. [The Rust Book](https://doc.rust-lang.org/book/)
2. [Rustlings](https://github.com/rust-lang/rustlings)
3. [Command Line Applications in Rust](https://rust-cli.github.io/book/)
4. [Tauri documentation](https://v2.tauri.app/start/)
5. [Beej's Guide to C](https://beej.us/guide/bgc/)
6. [Nand2Tetris](https://www.nand2tetris.org/)

Build a CLI before a desktop app. Handle invalid input, file paths, cancellation, and platform differences. Add tests before packaging a release.

### Web security

Use legal labs and systems you own or have written permission to test.

1. [PortSwigger Web Security Academy](https://portswigger.net/web-security)
2. [OWASP Top 10](https://owasp.org/www-project-top-ten/)
3. [OWASP Web Security Testing Guide](https://wstg.owasp.org/)
4. [pwn.college](https://pwn.college/)
5. [Cryptopals](https://cryptopals.com/) for cryptography exercises

Learn HTTP, browser security, authentication, access control, injection, server-side request forgery, secure file handling, secrets, and threat modeling. Write a short report for every lab: scope, steps, evidence, impact, and fix.

Do not use experimental cryptography in production. Use mature libraries and established constructions such as AES-GCM or ChaCha20-Poly1305.

### Algorithms and interviews

- Learn: [Khan Academy Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)
- Structured practice: [NeetCode roadmap](https://neetcode.io/roadmap)
- Interview problems: [LeetCode](https://leetcode.com/)
- Competitive programming: [Codeforces](https://codeforces.com/) and [CP-Algorithms](https://cp-algorithms.com/)

For each problem, record the brute-force idea, chosen data structure, time complexity, space complexity, failed cases, and final test cases. One reviewed solution teaches more than five copied solutions.

## 4. Twelve-week build plan

| Weeks | Work | Evidence |
| --- | --- | --- |
| 1-2 | Language fundamentals, Git, shell, and debugging | Small exercises with clean commits |
| 3-4 | Data structures, HTTP or file I/O, and tests | CLI or small service with a test suite |
| 5-7 | Main project and its core use case | Working vertical slice and issue tracker |
| 8-9 | Database or persistent state, errors, and security checks | Integration tests and documented failure paths |
| 10 | CI, formatting, dependency checks, and packaging | Green workflow on a clean clone |
| 11 | Documentation, demo, and release | README, screenshot or example, tagged release |
| 12 | External review and fixes | Review notes, closed issues, and a short retrospective |

If the project cannot be demonstrated in two minutes, reduce its scope.

## 5. Project ladder

1. **CLI tool:** one job, clear input and output, useful errors, and tests.
2. **API:** validation, persistence, authentication, rate limits, and an API contract.
3. **User-facing app:** accessibility, loading and error states, packaging, and release notes.
4. **Open-source change:** reproduce an issue, discuss scope, send a focused pull request, and respond to review.

Good project ideas:

- Expense tracker with CSV import and PostgreSQL storage.
- URL monitor with timeouts, retries, alert history, and Docker.
- Local file organizer with dry-run mode, undo data, and path-safety tests.
- Small SDK for a public API with typed errors and integration tests.
- Security-header checker that explains findings and exports a report.

Avoid clones that stop at the UI. Add one difficult constraint: offline behavior, concurrent jobs, unreliable upstream APIs, large files, permissions, or reproducible releases.

## 6. Definition of done

Before calling a project portfolio-ready, check:

- A stranger can understand it in 30 seconds.
- Setup works from a clean clone.
- The main path has an example or screenshot.
- Tests cover success, invalid input, and one failure path.
- CI runs formatting, tests, and the build.
- Secrets stay out of the repository.
- Dependencies and licenses are recorded.
- Security and privacy limits are explicit.
- The repository has a short description, topics, and a useful homepage.
- A release or live demo proves the project runs.

## 7. Make your work reviewable

A strong repository answers four questions fast:

1. What problem does this solve?
2. How do I run or test it?
3. Which engineering decisions are worth reviewing?
4. What does it not promise?

Keep the README short. Put architecture, security, and contribution details in separate files when they need more space. Use issue links and pull requests as evidence instead of claiming the project is advanced.

## 8. Contribute to open source

1. Use a project before changing it.
2. Read `CONTRIBUTING.md`, issue templates, and the test commands.
3. Start with a reproducible bug, test gap, documentation error, or translation.
4. Ask before large changes.
5. Keep one pull request focused on one outcome.
6. Explain the problem, evidence, change, and verification.
7. Accept review without expanding the pull request into unrelated cleanup.

Useful entry points: [good first issue](https://github.com/topics/good-first-issue), [goodfirstissue.dev](https://goodfirstissue.dev/), and projects you already depend on.

## Arabic resources

- [Elzero Web School](https://elzero.org/): Arabic web-development paths and exercises.
- [Rwaq](https://www.rwaq.org/): Arabic courses across technical and academic subjects.
- [CoderHub](https://coderhub.sa/): Arabic programming challenges.
- Keep official English documentation beside any translated course. API details change faster than most tutorials.

## Resource rule

Use the course to learn the model, official documentation to check details, and a project to prove the skill. When stuck, reduce the problem, reproduce it, read the error, search the exact message, and write a test for the fix.

---

[Back to profile](README.md) | [Projects](PROJECTS.md)

<sub>Reviewed 24 August 2026.</sub>
