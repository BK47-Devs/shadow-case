# Contributing

Short rules so we can work in one repo without stepping on each other.

## Branching

- `main` is always deployable. **Nobody pushes to `main` directly.**
- Work in short lived branches, created from the latest `main`.
- One branch = one small, focused change. Avoid long lived personal branches.

### Branch names

```
<type>/<issue-number>-<short-description>
```

- `<type>`: one of the types below.
- `<issue-number>`: required for `feat`, `fix`, `refactor` and `story`. Optional for small `docs` / `test` / `chore` work.
- `<short-description>`: 2 to 4 words, lowercase, hyphens only.
- No names or initials in branch names. Git records the author, and the issue assignee shows who owns the work.

| Type       | Use for                         | Example                        |
| ---------- | ------------------------------- | ------------------------------ |
| `feat`     | new feature                     | `feat/42-notebook-page`        |
| `fix`      | bug fix                         | `fix/57-clue-unlock-condition` |
| `docs`     | documentation only              | `docs/architecture-update`     |
| `refactor` | code change, no behavior change | `refactor/48-story-service`    |
| `test`     | adding or fixing tests          | `test/engine-conditions`       |
| `chore`    | tooling, config, dependencies   | `chore/eslint-config`          |
| `story`    | story content (scenes, clues)   | `story/61-chapter-3-blackout`  |

Rules:

- Lowercase only (Git is case sensitive), hyphens between words.
- One branch per issue. Split big issues into smaller ones.
- Create the branch from the issue page, or locally from an up to date main, and include Closes #N in the PR
- Branches are short lived and deleted after the merge.

## Commits

Use [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <short summary in present tense>
```

Scopes: `client`, `server`, `shared`, `story`, `ci`, `docs`.

Examples:

- `feat(server): add POST /story/choose endpoint`
- `fix(client): stop double-submit on choice buttons`
- `story(golden-watch): add chapter 3 blackout branches`

## Pull requests

1. Keep PRs small (aim for under ~400 changed lines).
2. Fill in the PR template. Link the issue (`Closes #42`).
3. CI must pass (lint, type-check, tests, story validation).
4. At least **2 approving reviews** from someone else before merging.
5. Author resolves all review comments, then **merges** into `main`.
6. Delete the branch after merging.

## Code conventions

- **TypeScript only**.
- **Formatting and linting:** Prettier + ESLint. Run before committing; CI enforces it.
- **Naming:**
  - files and folders: `kebab-case` (React components: `PascalCase.tsx`)
  - variables and functions: `camelCase`
  - types, interfaces, components, classes: `PascalCase`
  - constants: `UPPER_SNAKE_CASE`
  - database tables and columns: `snake_case`
- **Backend layers:** routes -> controllers -> services -> repositories. A layer only calls the one below it. Only repositories touch the database.
- **Validation:** validate all external input (requests, story files) with Zod schemas from `/shared`.
- **Tests:** new logic comes with tests (Vitest). Bug fixes come with a test that failed before the fix.

## Issues and labels

- Every task is a GitHub issue.
- Labels: `feat`, `bug`, `docs`, `story`, `good first issue`, `blocked`, plus priority `p1`/`p2`/`p3`.
- Track progress on the GitHub Projects board: Backlog -> In progress -> In review -> Done.