# Saurabh Upadhayay / Portfolio

A dark navy and blue portfolio with a photo-led introduction, animated role
headlines, and work in Windows onboarding, backend platforms and distributed systems.

Site: <https://i-s0nic.github.io/knowme/>

## Run locally

Use Node.js 22 and npm (`.nvmrc` is the version source for CI). Node 14 is not
supported. Select Node 22 for this terminal using your preferred local runtime
or version manager; changing a machine-wide Node installation is not necessary.

```powershell
node --version
npm ci
npm run dev
```

Open `http://127.0.0.1:8080/`, or the address Vite prints if that port is occupied.
Use npm and the committed `package-lock.json`, not Bun or a second lockfile.

```powershell
npm run check
npm run preview -- --port 4173
```

The production preview is at `http://127.0.0.1:4173/knowme/`. Both production and
development-mode builds use `/knowme/`; only the development server uses `/`.
Previewing locally does not publish anything.

`check` runs ESLint (zero warnings), TypeScript checks for both the app and Vite
configuration, then the production build. Individual commands are `npm run lint`,
`npm run typecheck`, and `npm run build`. No unit-test runner is configured.

### Dependency maintenance

Compatible dependency fixes have been applied. At handoff, `npm audit` still
reports four advisories (three moderate and one high), involving React Router
and the Vite/esbuild development toolchain. The remaining npm-suggested fixes
require major-version upgrades; they have not been forced into this redesign.
This is not an audit-clean dependency tree. Keep development and preview
servers local, and assess those upgrades separately before exposing a development
server or adding server-side rendering or user-controlled navigation targets.
GitHub Pages serves the built static files, not the Vite development server.

## Content and structure

The app uses React 18, TypeScript, Vite with React SWC, React Router, React Helmet,
Lucide icons, and plain CSS. It does not require Tailwind or a generated UI library.

- `src\data\portfolio.ts`: typed professional content, project details and links.
- `src\components`: portfolio sections and shared components.
- `src\pages`: home, projects and not-found pages.
- `src\index.css`: the dark visual system, responsive styles and CSS reset.
- `src\components\TypingTitle.tsx`: changing engineering specialties with cleaned-up timers.
- `src\components\ScrollReveal.tsx`: one-time, staggered section and card entrances.
- `public\portrait.webp`: portrait; other public assets include local artwork,
  favicon, social card and search-engine metadata.
- `public\companies`: local company and coding-club logos used beside role names.

Professional contributions and personal projects are distinguished. Email links
open the visitor's mail application. There is no backend, analytics service,
contact-form server, required environment configuration or secret to provision.

Detail cards open when their summary enters the viewport, close after the entire
disclosure has left it, and reopen on return. They do not close while their body
is still being read. Focusing inside a card or clicking its summary switches that
card to manual control until it is remounted (for example, after route navigation).
Fi's engineering and internship roles share one company card, with separate dates,
teams and contributions inside. Native keyboard and click controls remain available,
including in browsers without IntersectionObserver.

The photo-led hero has a rotating blue ring, a pulsing glow, a floating role badge
and a typing headline. Cards rise on hover and skill tags have a spring-like response.
Sections and cards enter with staggered animations as they scroll into view.
The hero's Pause motion control stops the typing headline, decorative motion and
transitions across routes for the current visit. System reduced-motion preferences
are respected automatically, and typing timers stop while the tab is hidden.
Unsupported browsers retain visible content and native disclosures.

The illustrations are original decorative representations, not product screenshots.
The visual design follows the original downloaded portfolio's dark palette,
portrait treatment and interactions. Company marks identify past and current roles,
not endorsements. Fi, Masai and Fractal assets came from the original portfolio;
TestMu AI and Ridecell assets came from their public websites. The Microsoft mark
uses its standard four-color arrangement. Assets are served locally, not hotlinked.

## GitHub Pages deployment

This configuration targets **`i-s0nic/knowme`** at the site address above.
In that repository, choose **Settings > Pages > Build and deployment > Source >
GitHub Actions**.

`.github\workflows\deploy.yml` runs on pushes to `main`, pull requests targeting
`main`, and manual runs from the Actions tab. Its build job uses Node 22, runs
`npm ci` and `npm run check`, and requires both `dist/index.html` and
`dist/404.html` to exist. Only `dist` is uploaded as the Pages artifact for main
branch deployment; source files and dependencies are not published as site assets.

A separate deploy job runs only for `main`, never for a pull request, and waits
for the build job. The workflow has read-only repository access; only the deploy
job receives `pages: write` and `id-token: write`. It uses the `github-pages`
environment and reports the deployment URL. GitHub's built-in Actions
authentication is sufficient: **no PAT or manually supplied secret is required**.
A manual run on another branch performs checks but does not deploy.

The workflow uses `checkout@v6`, `setup-node@v7`, `configure-pages@v5`,
`upload-pages-artifact@v4` and `deploy-pages@v4`. Committing or uploading this
source to `main` triggers deployment; local edits alone do not. The configuration
does not imply a deployment or an Actions run has already completed.

### Routing

Vite assets and BrowserRouter share `/knowme/`. The supplied `public\404.html`
redirects a deep link through the repository root; `index.html` restores its path,
query and fragment before React starts. Keep this real fallback file intact:
**do not replace it with a copy of `index.html`**. The projects URL is
`/knowme/projects`, not a HashRouter URL.

After deployment, open the home page, navigate to projects, and refresh
`https://i-s0nic.github.io/knowme/projects` directly. Also check section anchors,
unknown routes, filters, disclosures, keyboard navigation and the mobile menu.

## Replace an older repository from the source ZIP

The prepared source archive is `D:\source\Personal Projects\portfolio-github-pages.zip`.
**Extract it first, then replace the repository source with its contents. Do not
upload the ZIP itself as the website, and do not merely merge files over an old
checkout.** Stale generated `.tsx` files remain visible to TypeScript even when
the app no longer imports them.

Use your personal browser session to open `i-s0nic/knowme`; no work-account
authentication changes or local Git credentials are needed. Remove obsolete
files from the repository, then upload the extracted source with paths intact.
The repository root must contain `package.json`, `index.html`, `src`, `public`
and **`.github\workflows\deploy.yml`**. Make sure the hidden `.github` directory
and `.nvmrc` are included. In the browser, inspect and commit the changes to `main`
when ready, then follow the deployment in the Actions tab.

Remove these obsolete paths if they are present in the old repository:

- `src\components\ui\`, `src\hooks\`, `src\lib\`, `src\App.css`.
- `bun.lock`, `bun.lockb`, `components.json`, `tailwind.config.ts`, `postcss.config.js`.
- `public\favicon.ico`, `public\fi-money-vector-logo.svg`,
  `public\fractal-logo.jpeg`, `public\lambdatest-logo.jpeg`,
  `public\masai-logo.jpeg`, `public\placeholder.svg`,
  `public\ridecell-seeklogo.svg`, `public\SU.jpg` (replaced by `portrait.webp`).

Preserve the extracted `package-lock.json` and replace the old manifest and
workflow together. The source archive excludes `node_modules` and `dist`.
Do not upload runtime downloads, backups, screenshots or session artifacts.
GitHub Actions installs dependencies and builds the website from source.
