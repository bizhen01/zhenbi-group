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
  NOTE (safe to delete): five topics, each = description + the full list
  of papers tagged with that topic in _bibliography/papers.bib, via
  {% raw %}{% bibliography --query @*[topic~=...] --group_by none %}{% endraw %}.
  A paper can carry multiple space-separated topics and will appear under each.
  The descriptions below are drafts — refine them from the research statement.
-->

We work in **theoretical condensed matter physics**, at the interface of quantum field theory, topology, and the theory of strongly correlated and open quantum systems. A common thread runs through the group's work: using symmetry — increasingly, its modern generalizations — together with anomalies and dualities to predict, classify, and characterize phases of matter and phase transitions that lie beyond the Landau symmetry-breaking and free-fermion paradigms. The five directions below span this program, from the mixed-state phases of open quantum systems to the field theories of gapless quantum matter.

---

## Mixed-state phases of quantum matter

Real quantum systems are never perfectly isolated. They are measured, jostled by noise, and entangled with their surroundings — and for most of physics this openness was treated as a nuisance, the decoherence that washes quantum behavior away. A central theme of our work is that the opposite can hold: open, noisy quantum systems can host genuinely new phases of matter, with forms of order, topology, and criticality that have no counterpart in the isolated, ground-state world. Capturing them forces us to rethink ideas as basic as symmetry itself — in a system described only statistically, by a mixed state, a symmetry can be obeyed in more than one distinct sense, and the tension between those senses gives rise to new phases and transitions. We are building the theory of this landscape: which mixed-state phases are possible, how they emerge under measurement and decoherence, and how to tell them apart. These questions are fundamental, and also timely — they describe exactly the noisy, controllable quantum systems now being built in laboratories and quantum computers.

<div class="publications">
{% bibliography --query @*[topic~=mixed_state] --group_by none %}
</div>

---

## Quantum matter with generalized symmetry

Symmetry is the deepest organizing principle in physics: it fixes conservation laws, classifies particles, and determines the phases that matter can take. In recent years that principle has itself been dramatically expanded. A system's symmetries, it turns out, need not act on it all at once — they can be confined to lower-dimensional slices of it, keep track of where objects sit or how their charge is distributed, or act on extended objects like loops rather than on points. These *generalized symmetries* vastly enlarge the space of phases that quantum matter can realize, while sharpening the constraints — anomalies and no-go theorems — that limit what any phase can do. Their most dramatic consequence is *fracton order*, a phase whose elementary excitations are frozen in place, or can move only along a line or a plane — behavior with no counterpart in conventional matter, and one that has built surprising bridges between condensed matter, quantum information, and quantum field theory. Our group maps this expanding landscape: we classify the new phases that generalized symmetries make possible and uncover their unexpected consequences, from novel topological states to exotic metals whose behavior is dictated not by ordinary charge, but by the conservation of dipoles.

<div class="publications">
{% bibliography --query @*[topic~=generalized_symmetry] --group_by none %}
</div>

---

## Topological phases of matter and quantum field theory

Conventional phases of matter are defined by the order they display — a magnet points in a definite direction, a crystal arranges its atoms in a regular pattern. Topological phases are different. They can look essentially featureless in the bulk, yet remain distinct from ordinary matter, with the difference showing up only at their boundaries: an edge that is forced to conduct, or to behave in some other unusual way, and that no local change can remove. What protects this behavior is a concept borrowed from particle physics — an *anomaly* — which places topological phases at the interface of condensed matter and quantum field theory. Our group works to understand why such phases exist, to classify the forms they can take (particularly once strong interactions are included), and to construct the field theories that describe them. Using *dualities* — equivalences between theories that look quite different — we connect concrete lattice models and candidate materials to more formal structures in theoretical physics, work that underpins much of our research on the topics above.

<div class="publications">
{% bibliography --query @*[topic~=topological_qft] --group_by none %}
</div>

---

## Correlated and topological phases in moiré materials

Take two atomically thin sheets of crystal, stack them, and give one a tiny twist. The result is one of the most remarkable discoveries in recent condensed-matter physics: a *moiré* superlattice, in which the electrons slow down so dramatically that their mutual interactions — usually a small correction — come to dominate everything. Such materials behave like a designer laboratory for quantum matter, realizing insulators, superconductors, ferroelectrics, and even fractionalized states that normally require enormous magnetic fields — all in a single device, and all tunable on the fly with a knob as simple as an applied voltage. Our group works on the theory of these systems: we design the stacked and strained structures needed to realize a target electronic behavior, and we predict the correlated and topological phases that emerge inside them. A recurring theme is the interplay between the geometry and topology of the engineered bands and the strongly interacting states they give rise to — a place where the abstract ideas of topology meet materials one can actually build and measure.

<div class="publications">
{% bibliography --query @*[topic~=moire] --group_by none %}
</div>

---

## Unconventional quantum criticality and gapless phases

When matter changes from one phase to another — water freezing, a metal becoming magnetic — something dramatic happens right at the transition, where the system turns exquisitely sensitive and fluctuates on every length scale at once. For most of the twentieth century a single framework, due to Landau, explained these critical points. But some of the most fascinating quantum transitions refuse to fit it: matter can pass continuously between two utterly different ordered states through a critical point whose natural language is not the original particles at all, but emergent gauge fields and fractionalized excitations that exist only there. Gapless matter can be just as strange away from any transition — as in “strange metals,” where the electron itself ceases to behave as a well-defined particle, a puzzle at the heart of many quantum materials. Our group builds and analyzes the theories of these gapless states, extending them to higher dimensions and tying them together through dualities, to map out the universal behavior that becomes possible once one leaves the comfort of Landau's paradigm.

<div class="publications">
{% bibliography --query @*[topic~=criticality] --group_by none %}
</div>

---

The complete list of publications — including collaborative and earlier work not grouped above — is on the [publications page](/zhenbi-group/publications/) and [Google Scholar](https://scholar.google.com/citations?user=M8lsE8sAAAAJ&hl=en).
