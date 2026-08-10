# README.md:

1. How to install and run (assume a fresh machine).
2. Project structure — one paragraph.
3. Design decisions and trade-offs — one paragraph.
4. Known limitations — bullet list.

## 1. How to install and run:

IDE

- to setup environment, run `npm install` followed by `npx playwright install`
- to run tests, use `npm run test`
- to see the test report, use `npm run test:report`

GitHub

- to run tests from GitHub, go to Actions -> Run the workflow
- to see the test report, visit
  <a href="https://yellowkoodoo.github.io/odore-tech-task/">
  GitHub Test Results
  </a>
  (`https://yellowkoodoo.github.io/odore-tech-task/`)

## 2. Project structure

Files in the project are separated into dedicated directories to improve reusability, allowing easy navigation and simplified code maintenance
The project contains the next logical modules:

- DOCS
- framework
- tests

**Framework** folders organized to separate concerns:

- constants
- core
- enums
- flows
- pages
- resources
- types
- utils

**Tests** consume the framework through the typed app fixtures, which exposes PAGES and FLOWS namespaces

## 3. Design decisions and trade-offs — one paragraph.

The fixture layer exposes two variants — `appNoUser` for unauthenticated scenarios and `appWithUser` for authenticated ones — where appWithUser performs a one-time UI login, persists the session to json file via a module-level flag, and reloads that state for every subsequent test. This keeps login cost to a single browser round-trip per run.

Application pages as well as app fixtures are organized to mirror the site's navigation hierarchy, so any tester can locate the relevant page object by following the same flow they would in the browser, reducing onboarding time.

Shared UI elements are extracted into reusable components to avoid duplication.

`BasePage` serves as the foundation for all page objects, exposing shared behavior such as navigation, load state checks, and the `getByTestId` locator helper, so individual pages only define what is unique to them.

## 4. Known limitations

- **No real API login** — saucedemo.com has no auth API, so session setup always requires a headed browser interaction on the first test.

- **Static inventory data** — Inventory is a hardcoded const object, any product change on the site requires a manual update.

- **Single user type** — only standardUser is wired into appWithUser, other user types (locked-out, problem user) require manual fixture extension. See [BUGS](./DOCS/BUGS.md)
