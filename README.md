# Portfolio Site

A static, no-build portfolio site. Three files: `index.html`, `style.css`, `script.js`.

## Run it locally

No install needed — any of these work:

```bash
# Option A: Python (built into most systems)
python3 -m http.server 8000
# then open http://localhost:8000

# Option B: Node (if you have it)
npx serve .
```

You can also just double-click `index.html` to open it directly in a browser,
though a local server is closer to how it'll behave once hosted.

## Edit your content

Everything you'd want to change lives in one place: the `SITE` object at the
top of `script.js` — your name, tagline, projects, skills, and contact links.
No other file needs touching for content edits.

## Host it for free

Pick whichever is easiest for you — all are free for a static site like this:

**GitHub Pages**
1. Push this folder to a GitHub repo.
2. Repo → Settings → Pages → set source to your main branch, root folder.
3. Your site is live at `https://<username>.github.io/<repo>`.

**Netlify**
1. Go to app.netlify.com → "Add new site" → "Deploy manually".
2. Drag the `portfolio-site` folder into the browser window.
3. Done — live URL in seconds, custom domain optional.

**Vercel**
1. `npx vercel` from inside this folder (or connect the GitHub repo on vercel.com).
2. Accept the defaults — it's a static site, no build command needed.

**Cloudflare Pages**
1. Connect the GitHub repo, or drag-and-drop the folder in the dashboard.
2. No build command, output directory is the project root.

All four give you HTTPS and a free subdomain out of the box; each also lets
you attach a custom domain for free if you buy one elsewhere.

## What to extend first

1. **Real content** — swap the placeholder name/projects/links in `script.js`
   for yours. This is the highest-leverage change by far.
2. **Project images** — cards are currently text-only. Add a `thumbnail`
   field per project in `SITE.projects` and an `<img>` in the card template
   in `script.js` for visual portfolios (design, photography, etc.).
3. **A resume/CV link** — add it to `SITE.contact.links`, or add a dedicated
   button in the hero if it's central to your job search.
4. **Per-project pages** — right now project links (`url`) go nowhere useful.
   For deeper case studies, either link out to a GitHub repo/live demo, or
   create `work/project-slug.html` pages and point `url` at them.
5. **A contact form** — the contact section is link-only right now. Netlify
   and Cloudflare Pages both support free serverless form handling if you
   want an actual form instead of a mailto link.
6. **Analytics** — if you want visitor counts, Plausible or Cloudflare Web
   Analytics are privacy-friendly and have free tiers that work fine on a
   static site like this.
