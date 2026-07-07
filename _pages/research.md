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

The Bi Group works on the theory of quantum many-body systems — how the simple rules of quantum mechanics, applied to many interacting particles, give rise to distinct phases of matter and the transitions between them. We focus on phases and transitions that lie beyond the standard textbook framework, where the usual descriptions in terms of order parameters or independent electrons no longer apply. To understand them we draw on quantum field theory, topology, and the evolving notion of symmetry — using these tools to predict new phases, classify the forms they can take, and identify how to detect them. The five directions below span this program, from the topological and gapless phases of closed systems to the new forms of order that emerge in open, noisy quantum matter.

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

Stacking two atomically thin crystals with a small relative twist produces a *moiré* superlattice, a striking recent development in condensed-matter physics. In these structures the electrons move so slowly that their mutual interactions, usually a small correction, come to control the physics. This makes moiré materials a highly tunable setting for correlated and topological states — insulators, superconductors, ferroelectrics, and fractionalized states that ordinarily require strong magnetic fields can appear in a single device and be adjusted with an applied voltage. Our group works on the theory of these systems: we design the stacked and strained structures needed to realize a target electronic behavior, and we predict the correlated and topological phases that emerge inside them. A recurring theme is the interplay between the geometry and topology of the engineered bands and the interacting states they support, connecting the ideas of topology to materials that can be built and measured.

<div class="publications">
{% bibliography --query @*[topic~=moire] --group_by none %}
</div>

---

## Unconventional quantum criticality and gapless phases

When matter changes from one phase to another — water freezing, or a metal becoming magnetic — the system becomes especially sensitive right at the transition, fluctuating across many length scales at once. For much of the twentieth century, a single framework due to Landau described these critical points. Some quantum transitions, however, fall outside it: matter can pass continuously between two very different ordered states through a critical point whose natural description involves not the original particles, but emergent gauge fields and fractionalized excitations that appear only there. Gapless matter can be unusual away from any transition as well — as in "strange metals," where the electron no longer behaves as a well-defined particle, a long-standing puzzle in many quantum materials. Our group builds and analyzes the theories of these gapless states, extending them to higher dimensions and relating them through dualities, to understand what universal behavior is possible beyond the Landau paradigm.

<div class="publications">
{% bibliography --query @*[topic~=criticality] --group_by none %}
</div>

---

The complete list of publications — including collaborative and earlier work not grouped above — is on the [publications page](/zhenbi-group/publications/) and [Google Scholar](https://scholar.google.com/citations?user=M8lsE8sAAAAJ&hl=en).
