---
layout: page
permalink: /publications/
title: publications
description: Publications in reverse chronological order. A complete list is available on <a href="https://scholar.google.com/citations?user=M8lsE8sAAAAJ&hl=en">Google Scholar</a>.
nav: true
nav_order: 2
---

<!-- _pages/publications.md -->

<!--
  STRUCTURE NOTE (safe to delete).
  - The "Selected" list shows only entries marked `selected={true}` in
    _bibliography/papers.bib. Curate this to the ~6-10 papers you want an
    evaluator to read first (your strongest / most representative work).
  - OPTIONAL, high value for tenure readers: add a one-line significance note
    to a key entry via an `additional_info = {…}` field in its bib entry,
    or denote independent-PI work with an `abbr` tag (e.g. abbr={Penn State}).
  - The "All" list shows everything; bibsearch filters across both.
-->

<!-- Bibsearch Feature -->
{% include bib_search.liquid %}

<div class="publications">

<h2>Selected publications</h2>

{% bibliography --query @*[selected=true] %}

<h2>All publications</h2>

{% bibliography %}

</div>
</content>
