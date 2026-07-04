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
  NOTE (safe to delete): five topics, each = description + Directions + the full list
  of papers tagged with that topic in _bibliography/papers.bib, via
  {% raw %}{% bibliography --query @*[topic~=...] --group_by none %}{% endraw %}.
  A paper can carry multiple space-separated topics and will appear under each.
  The descriptions below are drafts — refine them from the research statement.
-->

We work in **theoretical condensed matter physics**, at the interface of quantum field theory, topology, and the theory of strongly correlated and open quantum systems. A common thread runs through the group's work: using symmetry — increasingly, its modern generalizations — together with anomalies and dualities to predict, classify, and characterize phases of matter and phase transitions that lie beyond the Landau symmetry-breaking and free-fermion paradigms. The five directions below span this program, from the mixed-state phases of open quantum systems to the field theories of gapless quantum matter.

---

## Mixed-state phases of quantum matter

Quantum matter is almost never perfectly isolated. Measurement, noise, and coupling to an environment turn a pure ground state into a mixed density matrix, and this forces a rethinking of what a "phase" even is: density matrices can carry order, topology, and criticality with no counterpart in equilibrium ground-state physics. A central organizing principle is that symmetries split into two kinds in open systems — *strong* symmetries, obeyed by every quantum trajectory, and *weak* (average) symmetries, obeyed only on average — and the interplay between them opens an entirely new axis of the phase problem. Our group builds the classification of these mixed-state phases, including average symmetry-protected topological (ASPT) order and the phenomenon of strong-to-weak spontaneous symmetry breaking, and develops the information-theoretic diagnostics — strange correlators, fidelity measures, and locally purified density operators — that detect them. A recurring theme is *topological holography*: a dictionary that maps a decohered mixed state onto a more familiar equilibrium problem, making the exotic tractable.

**Directions.**

- Average symmetry-protected topological (ASPT) phases under disorder and decoherence.
- Strong-to-weak spontaneous symmetry breaking, including of higher-form symmetries, and intrinsically mixed-state order.
- Topological holography and mixed-state diagnostics (strange correlators, fidelity, purified density operators).

<div class="publications">
{% bibliography --query @*[topic~=mixed_state] --group_by none %}
</div>

---

## Quantum matter with generalized symmetry

Symmetry is the oldest organizing principle in physics, and it is currently being rewritten. Beyond the ordinary global symmetries of the textbook, quantum matter can be governed by subsystem, dipolar and multipolar, and higher-form symmetries — conservation laws that act on lower-dimensional subregions, or that count multipole moments rather than total charge. These generalized symmetries dramatically enlarge the landscape of possible phases and sharpen the constraints — Lieb–Schultz–Mattis theorems and 't Hooft anomalies — that any low-energy theory must obey. They also underlie *fracton order*, in which excitations are intrinsically immobile or can move only along restricted subspaces: a genuinely new kind of quantum matter that ties condensed matter to active frontiers in quantum field theory. We construct and classify the phases these symmetries protect, including interacting fractonic and higher-order topological phases, and we trace their striking dynamical consequences — such as non-Fermi-liquid metals driven by dipole conservation.

**Directions.**

- Fracton, subsystem-symmetric, and dipolar / modulated-symmetry phases.
- Classification and construction of interacting fractonic and higher-order topological phases.
- Dipole-driven non-Fermi liquids and modulated-symmetry SPTs, including in mixed states.

<div class="publications">
{% bibliography --query @*[topic~=generalized_symmetry] --group_by none %}
</div>

---

## Topological phases of matter and quantum field theory

Some of the most profound phases of matter have no local order parameter at all. Symmetry-protected topological (SPT) phases look completely featureless in the bulk, yet their boundaries are forced to be exotic — gapless, symmetry-breaking, or topologically ordered — by an 't Hooft anomaly that cannot be removed. Classifying these phases and constructing the quantum field theories that capture them has been a foundation of the group's work, using nonlinear sigma models with topological terms, the strange-correlator diagnostic, anomaly inflow, and webs of dualities that relate seemingly different theories. This program connects the concrete — lattice models and candidate material platforms for bosonic SPT states — to the formal — self-dual gauge theories and the boundary field theories of higher-dimensional topological phases — and it underpins much of the more recent work above.

**Directions.**

- Classification and construction of bosonic and fermionic SPT phases (group cohomology and beyond).
- Anomalies, strange correlators, and the boundary field theories of topological phases.
- Field-theoretic dualities and lattice realizations of strongly coupled gauge theories.

<div class="publications">
{% bibliography --query @*[topic~=topological_qft] --group_by none %}
</div>

---

## Correlated and topological phases in moiré materials

Stacking two-dimensional crystals with a small twist or lattice mismatch produces a moiré superlattice — and, with it, electronic bands so flat that interactions, rather than kinetic energy, set the physics. This makes moiré materials a uniquely tunable laboratory for correlated and topological states: Mott insulators, unconventional superconductors, ferroelectrics, and fractional Chern insulators can all appear in a single device and be dialed in situ with gates, strain, and displacement fields. Our group works on the theory side of this frontier — designing heterostructures through strain engineering, stacking, and superlattice geometry, including moiré kagome lattices, to realize target band structures, and predicting the correlated and topological phases they host. A guiding theme is the link between the topology of the moiré bands and the symmetry-protected order of the correlated states that emerge within them.

**Directions.**

- Flat-band and superlattice engineering by strain and stacking, including moiré kagome lattices.
- Correlated and topological states: unconventional ferroelectricity, excitonic orders, fractional quantum anomalous Hall states.
- Wannier-orbital interaction models bridging moiré band topology and correlated phases.

<div class="publications">
{% bibliography --query @*[topic~=moire] --group_by none %}
</div>

---

## Unconventional quantum criticality and gapless phases

Some of the most striking — and most stubborn — problems in quantum many-body physics are gapless. Landau's theory says a continuous phase transition needs a local order parameter that vanishes at the critical point; yet *deconfined* quantum critical points describe direct, continuous transitions between two distinct ordered phases, with emergent gauge fields and fractionalized excitations that belong to neither side. Metals can be just as anomalous: in a non-Fermi liquid the very notion of a quasiparticle dissolves, as in the Sachdev–Ye–Kitaev model and in composite-fermion metals. We construct and constrain the field theories of these gapless states — extending deconfined criticality to $3{+}1$ dimensions, mapping out the dualities that relate strongly coupled theories, and analyzing the instabilities of non-Fermi-liquid and SYK-type systems — to chart what universal behavior is possible beyond the Landau paradigm.

**Directions.**

- Deconfined quantum critical points and beyond-Landau continuous transitions.
- Non-Fermi liquids, SYK-type models, and composite-fermion metals.
- Strongly interacting boundary CFTs and superfluid–insulator criticality.

<div class="publications">
{% bibliography --query @*[topic~=criticality] --group_by none %}
</div>

---

The complete list of publications — including collaborative and earlier work not grouped above — is on the [publications page](/zhenbi-group/publications/) and [Google Scholar](https://scholar.google.com/citations?user=M8lsE8sAAAAJ&hl=en).
