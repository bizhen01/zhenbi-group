# Bi Group Website — Deploy Notes

Project-local notes for getting the site live and maintaining it. The full upstream docs (al-folio) are in `INSTALL.md`, `CUSTOMIZE.md`, `FAQ.md`, `TROUBLESHOOTING.md`.

## What is already configured

- `_config.yml`: title, name, description, `url: https://bizhen01.github.io`, `baseurl: /zhenbi-group`, jekyll-scholar `last_name: [Bi]`.
- `_data/socials.yml`: email `zjb5184@psu.edu`, Google Scholar ID `M8lsE8sAAAAJ`, GitHub `bizhen01`.
- `_pages/about.md`: group landing page.
- `_pages/research.md`, `_pages/openings.md`: new pages.
- `_pages/profiles.md` + `_pages/about_zhenbi.md`: people page (PI seeded; member blocks commented out, ready to enable).
- `_pages/publications.md`: pulls from `_bibliography/papers.bib` (5 representative papers seeded — verify and expand).
- `_news/`: cleared of demo posts; one launch post + one CAREER award post seeded.
- Demo pages (blog, projects, repositories, books, dropdown, cv, teaching) set to `nav: false`. They still build, just not in the navbar. Delete the files entirely if you want them gone.

## Deploy via GitHub Pages (project site)

The default URL after deploy: **https://bizhen01.github.io/zhenbi-group**

1. Create a new repo on GitHub named **`zhenbi-group`** (must match `baseurl` in `_config.yml`).
   - Go to https://github.com/new — owner `bizhen01`, name `zhenbi-group`, public, no README/license/.gitignore.

2. Initialize git and push from this directory:
   ```bash
   cd 00_whoami/group-website
   git init
   git add -A
   git commit -m "Initial Bi Group website"
   git branch -M main
   git remote add origin https://github.com/bizhen01/zhenbi-group.git
   git push -u origin main
   ```

3. In the GitHub repo: **Settings → Pages → Build and deployment → Source: GitHub Actions**. The bundled `.github/workflows/deploy.yml` will run on push, build the site, and publish it to a `gh-pages` branch that GitHub Pages serves automatically.

4. First push will fail the workflow once because permissions need to be granted to the Action. Go to **Settings → Actions → General → Workflow permissions** and select **Read and write permissions**. Then re-run the failed workflow.

5. Visit https://bizhen01.github.io/zhenbi-group after the workflow succeeds (~2-3 minutes).

### Switch to a user site instead (optional)

If you want the site at the cleaner URL `https://bizhen01.github.io` (no `/zhenbi-group` suffix):

1. Rename the repo on GitHub to **`bizhen01.github.io`**.
2. In `_config.yml`, set `baseurl:` (empty) and keep `url: https://bizhen01.github.io`.
3. Find/replace `/zhenbi-group/` → `/` in `_pages/about.md`, `_pages/research.md`, `_pages/openings.md`.

Note: `bizhen01.github.io` is also where any *personal* site for you would live. For a dedicated *group* site, the project-site setup (current default) is the cleaner separation.

## Custom domain (optional, later)

If you eventually buy a domain (e.g. `bigroup.psu.edu` or `bigroup.org`):

1. Add a `CNAME` file at the repo root containing only the domain.
2. Configure DNS (CNAME record pointing to `bizhen01.github.io`).
3. Settings → Pages → Custom domain → set the domain → enable HTTPS.

## Local preview (optional but recommended for big edits)

Your system Ruby is 2.6, but al-folio needs Ruby ≥ 3.x. Two options:

### Option A — Docker (recommended by upstream)

```bash
cd 00_whoami/group-website
docker compose pull && docker compose up
# Open http://localhost:8080
```

### Option B — Native Ruby via Homebrew

```bash
brew install ruby@3.3
echo 'export PATH="/opt/homebrew/opt/ruby@3.3/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc

cd 00_whoami/group-website
bundle install
bundle exec jekyll serve --baseurl ""   # local preview ignores baseurl
# Open http://localhost:4000
```

Either way, GitHub Actions will rebuild and publish on every push regardless — local preview is only for catching mistakes before pushing.

## Day-to-day maintenance

| Task                        | What to edit                                                |
| --------------------------- | ----------------------------------------------------------- |
| Add a paper                 | `_bibliography/papers.bib` (paste BibTeX block)             |
| Add a news item             | New file in `_news/YYYY-MM-DD-slug.md`, `inline: true`      |
| Add a group member          | Uncomment a block in `_pages/profiles.md`, create matching `_pages/about_<name>.md`, add their photo to `assets/img/`, also add `_pages/about_<name>.md` to the `exclude:` list in `_config.yml` |
| Change PI bio               | `_pages/about_zhenbi.md`                                    |
| Update research blurb       | `_pages/research.md`                                        |
| Replace the front photo     | Drop a `prof_pic.jpg` into `assets/img/` (or change the `image:` field in `_pages/about.md`) |
| Mark a paper as "selected"  | Add `selected={true}` to its bib entry — appears on home    |
| Add CV PDF                  | Drop file at `assets/pdf/zhen_bi_cv.pdf`, then uncomment `cv_pdf:` in `_data/socials.yml` and `_pages/cv.md`, set `nav: true` in `_pages/cv.md` |

## Known TODOs after first deploy

- [ ] Replace `assets/img/prof_pic.jpg` with a real photo of Zhen.
- [ ] Verify the 5 seeded BibTeX entries (author lists, page numbers, arXiv IDs) — placeholders only.
- [ ] Bulk-import remaining publications from Google Scholar BibTeX export.
- [ ] Drop `assets/pdf/zhen_bi_cv.pdf` and enable the CV link.
- [ ] Add real group members to `_pages/profiles.md` once anyone joins.
- [ ] Decide whether to keep `nav: false` demo pages (`_pages/blog.md`, `_pages/projects.md`, `_pages/repositories.md`, `_pages/books.md`, `_pages/cv.md`, `_pages/teaching.md`, `_pages/dropdown.md`) or delete them outright.
- [ ] (Optional) Add `google_analytics:` ID and `google_site_verification:` in `_config.yml` for traffic analytics.
