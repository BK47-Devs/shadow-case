# Shadow Case

A story-driven mystery project built by **BK47-Devs**. Players follow a branching story, make choices and collect clues to solve each case.

## Getting Started

### Prerequisites

Make sure you have these installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (use the LTS version) <!-- TODO: add the exact version once the team agrees on one -->
- [Docker](https://www.docker.com/) and Docker Compose
- [VS Code](https://code.visualstudio.com/) (recommended)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/BK47-Devs/shadow-case.git
   cd shadow-case
   ```

2. **Create your environment file**

   ```bash
   cp .env.example .env
   ```

   Open `.env` and adjust the values if needed. Never commit your `.env` file.

3. **Start the database**

   ```bash
   docker compose up -d
   ```

   To stop it later:

   ```bash
   docker compose down
   ```

4. **Install dependencies**

   ```bash
   npm install
   ```

5. **Run the project**

   ```bash
   npm run dev
   ```
   
#### Project Structure
text
shadow-case/
├── .github/
│   ├── ISSUE_TEMPLATE/   # Issue templates
│   └── workflows/        # CI pipelines
├── packages/
│   ├── client/           # Frontend
│   │   └── src/
│   ├── server/           # Backend (routes -> controllers -> services -> repositories)
│   │   └── src/
│   └── shared/           # Zod schemas and types used by client and server
│       └── src/
├── docker-compose.yml    # PostgreSQL for local development
├── .env.example          # Template for your local .env
├── CONTRIBUTING.md       # Team rules
└── README.md

Rules for the backend layers:

A layer only calls the layer directly below it.
Only repositories talk to the database.
All external input (requests, story files) is validated with Zod schemas from packages/shared.

##### Browser Support

We aim to support the latest two versions of:

| Browser         | Supported |
| --------------- | --------- |
| Google Chrome   | Yes       |
| Microsoft Edge  | Yes       |
| Mozilla Firefox | Yes       |
| Safari          | Yes       |

###### Feedback

We welcome feedback, bug reports and ideas from everyone in the team.

1. **Search first.** Check the [open issues](https://github.com/BK47-Devs/shadow-case/issues) to see if it is already reported.
2. **Open a new issue.** Go to **Issues -> New issue** and pick the matching template.
3. **Add details.** Include what you expected, what happened, steps to reproduce, and screenshots or error messages if you have them. For bugs, also add your OS, Node version and browser.
4. **Label it.** Use `bug`, `feat`, `docs` or `story`, plus a priority (`p1`, `p2` or `p3`). Maintainers may adjust these.
5. **Code or content feedback.** Leave comments directly on the pull request.