---
layout: page
permalink: /research/
title: research
description: Research program of the Bi Group — organized by topic, with the group's papers on each.
nav: true
nav_order: 1
toc:
  sidebar: left
---

<!--
  STATUS NOTE (safe to delete once reviewed).
  - Five topics. Each: figure placeholder + "Why it matters" intro + Directions +
    the full list of papers tagged with that topic in _bibliography/papers.bib
    (rendered via {% raw %}{% bibliography --query @*[topic~=...] %}{% endraw %}).
  - The "Why it matters" intros are FIRST DRAFTS (each ends with [VERIFY]); replace
    them with prose from your research statement.
  - To move a paper between topics, edit its `topic = {...}` field in the .bib.
  - Figures: drop images in assets/img/research/ (names in each box), then swap the
    box for the figure.liquid include shown inside it.
  - Untagged papers (a few collaborative / earlier works) appear only on the
    full publications page, by design.
-->

<style>
  .fig-placeholder {
    border: 2px dashed var(--global-divider-color);
    border-radius: 8px;
    padding: 2.2rem 1rem;
    text-align: center;
    color: var(--global-text-color-light);
    margin: 1.4rem 0;
    font-size: 0.9rem;
  }
  .fig-placeholder code { font-size: 0.82rem; }
</style>

We work in **theoretical condensed matter physics**, using quantum field theory, topology, and generalized symmetry to predict, classify, and characterize phases of matter and phase transitions that lie beyond the Landau and free-fermion paradigms. The five directions below organize our program; each introduces the topic and lists the group's papers on it. _[VERIFY — refine the unifying thesis for the program.]_

---

## Mixed-state phases of quantum matter

<div class="fig-placeholder" markdown="0">
  Figure placeholder — drop an image at <code>assets/img/research/mixed-state.png</code>, then replace this box with:<br>
  <code>{&#37; include figure.liquid path="assets/img/research/mixed-state.png" caption="..." &#37;}</code>
</div>

**Why it matters.** In open and decohered quantum systems — subject to measurement, noise, or coupling to an environment — the very notion of a "phase" must be rebuilt: density matrices can carry order, topology, and criticality with no equilibrium counterpart. A central organizing idea is the distinction between *strong* and *weak* symmetries, and the *average* symmetries that survive disorder and decoherence. Our group develops the classification and diagnostics of these mixed-state phases, and a topological-holography framework that maps them onto more familiar equilibrium problems. _[VERIFY]_

**Directions.**

- Average symmetry-protected topological (ASPT) phases under disorder and decoherence.
- Strong-to-weak spontaneous symmetry breaking — including of higher-form symmetries — and intrinsically mixed-state order.
- Topological holography and mixed-state diagnostics (strange correlators, fidelity, purified density operators).

<div class="publications">
{% bibliography --query @*[topic~=mixed_state] %}
</div>

---

## Quantum matter with generalized symmetry

<div class="fig-placeholder" markdown="0">
  Figure placeholder — drop an image at <code>assets/img/research/generalized-symmetry.png</code>, then replace this box with a <code>figure.liquid</code> include.
</div>

**Why it matters.** Modern notions of symmetry — subsystem, dipolar/multipolar, and higher-form symmetries — dramatically enlarge the landscape of possible phases and impose constraints (Lieb–Schultz–Mattis theorems, 't Hooft anomalies) that ordinary symmetries cannot. These generalized symmetries underlie fracton order, with its restricted-mobility excitations, and tie condensed matter to formal developments in quantum field theory. We construct and classify the phases they protect, including interacting fractonic and higher-order topological phases. _[VERIFY]_

**Directions.**

- Fracton, subsystem-symmetric, and dipolar / modulated-symmetry phases.
- Classification and construction of interacting fractonic and higher-order topological phases.
- Dipole-driven non-Fermi liquids and modulated-symmetry SPTs, including in mixed states.

<div class="publications">
{% bibliography --query @*[topic~=generalized_symmetry] %}
</div>

---

## Topological phases of matter and quantum field theory

<div class="fig-placeholder" markdown="0">
  Figure placeholder — drop an image at <code>assets/img/research/topological-qft.png</code>, then replace this box with a <code>figure.liquid</code> include.
</div>

**Why it matters.** Symmetry-protected topological (SPT) phases look featureless in the bulk yet carry protected, anomalous boundaries — physics invisible to Landau order parameters. Classifying these phases and constructing the field theories that capture them — through nonlinear sigma models, strange correlators, anomaly inflow, and dualities — is a foundation of our work and underpins the directions above. _[VERIFY]_

**Directions.**

- Classification and construction of bosonic and fermionic SPT phases (group cohomology and beyond).
- Anomalies, strange correlators, and the boundary field theories of topological phases.
- Field-theoretic dualities and lattice realizations of strongly coupled gauge theories.

<div class="publications">
{% bibliography --query @*[topic~=topological_qft] %}
</div>

---

## Correlated and topological phases in moiré materials

<div class="fig-placeholder" markdown="0">
  Figure placeholder — drop an image at <code>assets/img/research/moire.png</code>, then replace this box with a <code>figure.liquid</code> include.
</div>

**Why it matters.** Moiré superlattices produce flat electronic bands in which interactions dominate, realizing correlated and topological states — Mott insulators, superconductors, ferroelectrics, and fractional Chern insulators — that are tunable in situ. Our group designs moiré and strained heterostructures to engineer target band structures, and predicts the correlated phases they host, linking moiré band topology to bulk symmetry-protected order. _[VERIFY]_

**Directions.**

- Flat-band and superlattice engineering by strain and stacking, including moiré kagome lattices.
- Correlated and topological states: unconventional ferroelectricity, excitonic orders, fractional quantum anomalous Hall states.
- Wannier-orbital interaction models bridging moiré band topology and correlated phases.

<div class="publications">
{% bibliography --query @*[topic~=moire] %}
</div>

---

## Unconventional quantum criticality and gapless phases

<div class="fig-placeholder" markdown="0">
  Figure placeholder — drop an image at <code>assets/img/research/criticality.png</code>, then replace this box with a <code>figure.liquid</code> include.
</div>

**Why it matters.** Some of the most striking quantum many-body phenomena are gapless: continuous transitions forbidden by Landau theory (deconfined quantum criticality), metals without quasiparticles (non-Fermi liquids), and strongly interacting conformal field theories. We construct and constrain the field theories of these gapless states — extending deconfined criticality to $3{+}1$ dimensions, mapping out dualities, and analyzing non-Fermi-liquid and SYK-type instabilities. _[VERIFY]_

**Directions.**

- Deconfined quantum critical points and beyond-Landau continuous transitions.
- Non-Fermi liquids, SYK-type models, and composite-fermion metals.
- Strongly interacting boundary CFTs and superfluid–insulator criticality.

<div class="publications">
{% bibliography --query @*[topic~=criticality] %}
</div>

---

The complete list of publications — including collaborative and earlier work not grouped above — is on the [publications page](/zhenbi-group/publications/) and [Google Scholar](https://scholar.google.com/citations?user=M8lsE8sAAAAJ&hl=en).
