# Website TODO — where to work

Everything below is a place you need to **add / edit / decide**. This file is
excluded from the published site, so it never appears online. Work top-down;
priority 1 items have the most impact on a tenure evaluator.

How to find a spot fast: open the file listed, then search (Cmd+F) for the
**search string** in backticks. Visible placeholders use the marker `[TODO`.

After editing, preview/publish with the commands in the last section.

---

## Priority 1 — Research page (the most important page)

File: **`_pages/research.md`**

This page reads like a short research statement. There are **6 themes**, each
with three things to fill. Plus one overview paragraph at the top.

- [ ] **Program overview** — search `[TODO — program overview`.
      Replace with 2–3 sentences naming the single thread that unifies all themes.
      (First thing an evaluator reads. Make it a thesis, not a topic list.)

For **each** of the 6 themes below, fill two prompts (search the heading, then
the `[TODO` lines right under it):

- [ ] **Topological phases beyond the standard ten-fold way**
  - [ ] "Why it matters" paragraph — search `phases outside the free-fermion`
  - [ ] "Key papers" links — search `key papers, e.g. [Author`
- [ ] **Quantum phase transitions beyond Landau**
  - [ ] "Why it matters" — search `universality classes are possible`
  - [ ] "Key papers" — search `deconfined criticality / dualities.]`
- [ ] **Quantum field theory and 't Hooft anomalies**
  - [ ] "Why it matters" — search `anomaly matching is a powerful`
  - [ ] "Key papers" — search `anomalies / dualities.]`
- [ ] **Moiré quantum materials**
  - [ ] "Why it matters" — search `moiré platforms are a uniquely`
  - [ ] "Key papers" — search `moiré / 2D materials.]`
- [ ] **Strongly correlated metals and non-Fermi liquids**
  - [ ] "Why it matters" — search `non-Fermi-liquid metals`
  - [ ] "Key papers" — search `SYK / non-Fermi liquids.]`
- [ ] **Quantum dynamics and open systems**
  - [ ] "Why it matters" — search `mixed-state phases and non-unitary`
  - [ ] "Key papers" — search `open systems / mixed-state phases.]`

How to write "Key papers" links: `[Bi, Senthil, *PRX* **9**, 021034 (2019)](https://link.aps.org/doi/...)`.

---

## Priority 1 — Research figures (6 of them)

File: **`_pages/research.md`** (search `fig-placeholder`) + folder **`assets/img/research/`**

Each theme has a dashed "Figure placeholder" box. To turn it into a real figure:

1. Save an image (PNG/JPG) into `assets/img/research/` with the exact name shown
   inside the box, e.g. `topological.png`, `dqcp.png`, `anomaly.png`,
   `moire.png`, `nfl.png`, `dynamics.png`.
2. Delete the `<div class="fig-placeholder">…</div>` block and paste the include
   that's printed inside it, e.g.:
   `{% raw %}{% include figure.liquid path="assets/img/research/topological.png" caption="One-line caption." %}{% endraw %}`

- [ ] topological.png
- [ ] dqcp.png
- [ ] anomaly.png
- [ ] moire.png
- [ ] nfl.png
- [ ] dynamics.png

(You can do these one at a time; unfilled ones just stay as placeholder boxes.)

---

## Priority 2 — Selected publications (curate the marquee list)

File: **`_bibliography/papers.bib`**

The Publications page shows a **Selected** list (top) and **All** list (below).
The Selected list = every entry with a `selected = {true}` line.

- [ ] **Decide your strongest ~6–10 papers** and mark each by adding a line
      `  selected    = {true},` inside its bib entry.
      Currently **5** are marked (search `selected    = {true}` — at the entries
      `ma2025topological`, `zheng2020unconventional`, `bi2020landau`,
      `bi2019adventure`, `bi2017bilayer`). Add/remove to taste.
- [ ] **(Optional, high value)** Add a one-line "why it matters" to a key entry
      via `  additional_info = {One sentence on the result.},` — note: confirm it
      renders the way you want, or just rely on the title/venue.
- [ ] **(Optional)** Flag independent-PI (Penn State) work, e.g. add
      `  abbr     = {Penn State},` to group papers so it's visible at a glance.

---

## Priority 2 — Homepage opening thesis

File: **`_pages/about.md`** (search `STRUCTURE NOTE`)

- [ ] Decide whether to open the landing page with **one sharp sentence** stating
      the program's significance, before the bullet list of themes. Right now the
      page opens with "The Bi Group … works on theoretical condensed matter
      physics." Consider leading with the "so what." (Currently the homepage looks
      almost unchanged — this is the edit that makes the landing page land.)

---

## Priority 3 — People / alumni placements

File: **`_pages/about_members_list.md`**

- [ ] **(Optional)** Add a one-line research focus after each current grad student,
      e.g. `- **Amogh Anakru** &nbsp; <em>focus: deconfined criticality</em>`
      (search `TIP:` for the hint).
- [ ] **Keep "Alumni & placements" current** — add every student/postdoc and where
      they landed as they move on. This is strong evidence of a training pipeline.

---

## Priority 3 — Teaching page (decide whether to show it)

File: **`_pages/teaching.md`**

- [ ] Fill the course table (search `[TODO]`) with your real Penn State courses.
- [ ] **Decision:** once filled, change `nav: false` → `nav: true` in the front
      matter (search `nav: false`) to show "teaching" in the top navigation.
      Leave it `false` to keep it hidden. (Teaching counts in a tenure case.)

---

## Priority 4 — CV (decide the route)

File: **`_pages/cv.md`**

The structured CV page currently uses demo data (`_data/cv.yml` is still the
al-folio "Albert Einstein" sample), so do **not** enable the structured page.
Recommended route = a PDF:

- [ ] Drop your CV PDF at **`assets/pdf/zhen_bi_cv.pdf`**.
- [ ] In `cv.md`, uncomment the `cv_pdf:` line (search `cv_pdf`).
- [ ] **Decision:** set `nav: true` in `cv.md` if you want a "CV" nav link.
      (Evaluators like a one-click CV.)

---

## Priority 4 — News (optional, signals activity)

Folder: **`_news/`** — one file per item, named `YYYY-MM-DD-slug.md`.

- [ ] **(Optional)** Add recent items (new papers, grants, talks, student awards).
      Copy the format of `_news/2024-04-01-nsf-career.md`. The newest few show on
      the homepage and on the News page.

---

## Things already done (no action needed)

- Alumni: Paul John Balderston added.
- NSF CAREER corrected to **2024** everywhere.
- Publications meta-description HTML bug fixed.
- Demo content removed (stock courses, test calendar); blog / bookshelf /
  projects / repositories kept hidden from nav.
- Nav is evaluator-focused: research · publications · people · news.

---

## Preview & publish

Preview locally (live reload at http://127.0.0.1:4000/zhenbi-group/):

```bash
cd group-website
export PATH="/opt/homebrew/opt/ruby/bin:/opt/homebrew/lib/ruby/gems/4.0.0/bin:$PATH"
bundle exec jekyll serve
```

Publish to the live site (GitHub Pages rebuilds automatically after push):

```bash
cd group-website
git add -A
git commit -m "Fill in <what you changed>"
git push origin main
```

Or just tell Claude "push the website" and it will build, verify, and push.
</content>
