# QA Engineer — Test Task

Role: Middle/Senior QA Engineer
Estimated effort: 4–6 hours (spread over up to 5 calendar days)
Deliverable: public/private Git repo link (GitHub, GitLab, or Bitbucket)

# Ground rules

1. AI-generated code will be rejected. We evaluate your engineering judgment, not a model's. Expect a follow-up call where you walk us through the code line by line and defend design choices. Copy-pasted LLM output shows up immediately in that conversation.
2. Use only publicly available libraries. Do not commit node_modules.
3. English for all artifacts (test cases, bug reports, comments, commit messages).
4. Commit history matters — small, meaningful commits are preferred over one dump.

# Application under test

https://www.saucedemo.com/ — a public demo storefront. Credentials are listed on the login page.
If you find this app unsuitable for any scenario, briefly justify and pick an alternative public app (e.g., OWASP Juice Shop). Do not target production systems you do not own.

# Part 1 — Manual QA (≈ 1.5–2 h)

## 1.1 Test design

Pick one end-to-end flow (login → cart → checkout → order confirmation). Produce a test case suite covering it.
Requirements:

Minimum 15 test cases.
Mix of positive, negative, boundary, and cross-field validation cases.
Each case: ID, title, preconditions, steps, expected result, priority (P1–P3).
Format: Markdown table, Excel, or Google Sheet (link inside the repo).
We evaluate: coverage breadth, ability to prioritize, clarity of steps, ability to spot non-obvious cases.

## 1.2 Exploratory session + bug report

Run a 60-minute exploratory session across the whole app. Log every defect you find in a BUGS.md file.

Each bug entry must include:

1. Title
2. Environment (browser, OS, viewport)
3. Steps to reproduce
4. Expected vs Actual
5. Severity + Priority (with a one-line justification)
6. Attachment (screenshot or short screen recording — commit or link)
7. At the top of BUGS.md write a 2–3 sentence summary of your session strategy — which heuristics or tours you used and why.

# Part 2 — Automation (≈ 2.5–4 h)

Build a Playwright + TypeScript project from scratch. Do not fork an existing template.

## 2.1 Scope

Automate 5–7 test scenarios covering the login/cart/checkout flow. Include at least:

1 happy-path E2E scenario
1 negative auth scenario
1 data-driven scenario (parameterized inputs)
1 scenario asserting UI state after browser reload / storage manipulation
1 scenario that intentionally fails on a real bug found in Part 1.2 (comment which one)

## 2.2 Technical requirements

1. Playwright-latest stable, TypeScript-strict: true.
2. Page Object Model (or a justified alternative — explain in README).
3. Fixtures for authenticated state (storageState) — no repeated UI login per test.
4. Web-first assertions only.No waitForTimeout, no arbitrary sleeps, no page.waitForSelector where a locator assertion would do.
5. Locators: role/label/text-based where possible; explain any CSS/XPath fallback inline.
6. Config: parallel workers, retries on CI only, HTML + list reporter, screenshot + trace on failure.
7. One npm script per common operation:test,test:headed,test:ui,test:report.
8. ESLint + Prettier configured.yarn lint/npm run lintmust pass.
9. CI file (GitHub Actions or GitLab CI) that installs deps, runs Playwright, uploads the HTML report as an artifact. It does not need to run green on their infra — it needs to be correctly authored.

## 2.3 README

1. How to install and run (assume a fresh machine).
2. Project structure — one paragraph.
3. Design decisions and trade-offs — one paragraph.
4. Known limitations — bullet list.
