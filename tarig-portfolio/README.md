# Tarig Yagoub — Portfolio

Personal portfolio site for **Tarig Yagoub**, Software / Flutter Developer.
Built with React, TypeScript, Vite and Tailwind CSS. Static output — deployable
to GitHub Pages, Vercel, or Netlify, and ready to sit behind a custom domain.

## Tech stack

- React 18 + TypeScript
- Vite 5
- Tailwind CSS (custom design tokens, dark/light theme via CSS variables)
- No animation library — scroll reveals use `IntersectionObserver`, kept light on purpose
- Zero API keys committed anywhere in the code

## Project structure

```
src/
  components/
    layout/       Navbar, Footer
    sections/     Hero, About, Skills, Projects, Experience, Services, Contact...
    ui/           Reusable pieces (ProjectCard, ProjectModal, TerminalWindow...)
  data/            <- All editable content lives here
    projects.ts
    skills.ts
    experience.ts
    services.ts
    socials.ts
  hooks/           useScrollReveal, useTheme
  types/           Shared TypeScript interfaces
public/
  projects/        Put project screenshots here
.github/workflows/deploy.yml   GitHub Pages auto-deploy
```

## 1. Run it locally

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

Build for production:

```bash
npm run build     # outputs to dist/
npm run preview   # preview the production build locally
```

## 2. Update your personal information

Everything you'd want to change lives in `src/data/`, not inside components:

| File | What it controls |
|---|---|
| `src/data/socials.ts` | Email, GitHub, LinkedIn, Telegram, WhatsApp links |
| `src/data/projects.ts` | Every project card + its detail modal |
| `src/data/skills.ts` | Skill groups and items |
| `src/data/experience.ts` | Timeline entries |
| `src/data/services.ts` | Services list |

Search the project for `[YOUR_` and `[PLACEHOLDER` to find every value that
still needs replacing (e.g. `[YOUR_EMAIL]`, `[YOUR_GITHUB]`, `[YOUR_LINKEDIN]`,
`[YOUR_TELEGRAM]`, `[YOUR_WHATSAPP]`).

Also update in `index.html`:
- `<title>` and meta description if you want different wording
- `og:image` / `twitter:image` — add a real `public/og-image.png` (1200×630px)
- `canonical` URL and `og:url` — replace `[YOUR_DOMAIN]`

And in `public/robots.txt` / `public/sitemap.xml` — replace `[YOUR_DOMAIN]`.

## 3. Add a new project

Open `src/data/projects.ts` and add a new object to the array — no component
edits required:

```ts
{
  slug: "my-new-app",
  title: "My New App",
  summary: "One-line summary shown on the card.",
  description: "Full description shown in the detail modal.",
  problem: "What problem it solves.",
  solution: "How you solved it.",
  features: ["Feature one", "Feature two"],
  technologies: ["Flutter", "Firebase"],
  challenges: "Optional.",
  learned: "Optional.",
  image: "/projects/my-new-app.png",
  github: "https://github.com/[YOUR_GITHUB]/my-new-app",
  demo: "https://my-new-app.example.com",
  featured: true,
}
```

Drop the matching screenshot in `public/projects/`.

## 4. Connect the contact form (optional)

The form works out of the box via a `mailto:` fallback. To send messages
without opening the visitor's email client, get a free endpoint from
[Formspree](https://formspree.io) (or wire up EmailJS / your own backend),
then in `src/components/sections/Contact.tsx` set:

```ts
const FORM_ENDPOINT = "https://formspree.io/f/xxxxxxx";
```

No API key is ever stored in this codebase — Formspree's endpoint URL is not
a secret.

## 5. Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/[YOUR_GITHUB]/[REPO_NAME].git
git push -u origin main
```

## 6. Deploy

### Option A — GitHub Pages (included workflow)

A workflow at `.github/workflows/deploy.yml` builds and deploys automatically
on every push to `main`.

1. In your repo: **Settings → Pages → Source → GitHub Actions**.
2. If you're deploying to `<username>.github.io` (a *user* page), no changes
   needed — push to `main` and it deploys.
3. If you're deploying to `<username>.github.io/<repo-name>` (a *project*
   page), open `.github/workflows/deploy.yml` and uncomment the
   `VITE_BASE_PATH` line so built asset paths resolve under the subpath.
4. Push to `main` — check the **Actions** tab for build/deploy status. Every
   future `git push` redeploys automatically.

### Option B — Vercel

1. Import the GitHub repo at [vercel.com/new](https://vercel.com/new).
2. Framework preset: **Vite** (auto-detected). Build command `npm run build`,
   output directory `dist`.
3. Deploy. Every push to `main` redeploys automatically.

### Option C — Netlify

1. [app.netlify.com](https://app.netlify.com) → **Add new site → Import an
   existing project** → pick the repo.
2. Build command: `npm run build`. Publish directory: `dist`.
3. Deploy. Every push to `main` redeploys automatically.

## 7. Connect a custom domain (e.g. `tarigyagoub.dev`)

Buy the domain first (Namecheap, Google Domains successor, Cloudflare
Registrar, etc.) — none of the platforms above provide one for free.

### On GitHub Pages
1. Repo → **Settings → Pages → Custom domain** → enter your domain →
   Save (this creates a `CNAME` file in your deployed output automatically).
2. At your domain registrar's DNS settings:
   - For an apex domain (`tarigyagoub.dev`): add **A** records pointing to
     GitHub's Pages IPs:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - For a `www` or subdomain (`www.tarigyagoub.dev`): add a **CNAME** record
     pointing to `<username>.github.io`
3. Back in **Settings → Pages**, check **Enforce HTTPS** once DNS propagates
   (can take a few minutes to a few hours). GitHub issues the certificate
   automatically.

### On Vercel / Netlify
1. Project settings → **Domains** → add your domain.
2. Both give you the exact DNS records to add (usually an **A**/**ALIAS**
   record for the apex and a **CNAME** for `www`).
3. HTTPS certificates are issued and renewed automatically once DNS is
   verified — no manual step needed.

## Performance & accessibility notes

- No UI framework beyond React itself, no animation library — kept
  intentionally light.
- Images use `loading="lazy"`.
- Semantic HTML, visible focus states, `prefers-reduced-motion` respected.
- `manualChunks` splits React into its own chunk for better caching.

## License

This code is yours to use for your own portfolio.
