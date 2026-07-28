---
layout: page
permalink: /publications/
title: publications
description: Recent journal publications in neural engineering, human–machine interaction, and embodied intelligence.
nav: true
nav_order: 3
---

<script>
  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".publications .author").forEach((author) => {
      const self = author.querySelector("em");
      if (!self) return;

      const fullText = author.textContent.replace(/\s+/g, " ").trim();
      const firstAuthor = fullText.split(/,| and /, 1)[0].trim();
      const selfName = self.textContent.replace(/\s+/g, " ").trim();
      const selfHighlight = document.createElement("u");
      selfHighlight.textContent = selfName;

      if (firstAuthor === selfName) {
        author.replaceChildren(selfHighlight, document.createTextNode(", et al."));
      } else {
        author.replaceChildren(document.createTextNode(`${firstAuthor}, et al., `), selfHighlight);
      }
    });
  });
</script>

<div class="row row-cols-1 row-cols-md-3 mb-4">
  <div class="col mb-3">
    <div class="card h-100 z-depth-0 text-center">
      <div class="card-body">
        <div class="text-3xl font-weight-bold">2,740</div>
        <div>citations</div>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card h-100 z-depth-0 text-center">
      <div class="card-body">
        <div class="text-3xl font-weight-bold">32</div>
        <div>h-index</div>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card h-100 z-depth-0 text-center">
      <div class="card-body">
        <div class="text-3xl font-weight-bold">63</div>
        <div>i10-index</div>
      </div>
    </div>
  </div>
</div>

These metrics reflect a July 2026 snapshot from
[Google Scholar](https://scholar.google.com/citations?user=UaWbs_EAAAAJ&hl=en).
The list below presents peer-reviewed journal articles published from 2022 to
2026, selected for venue quality and relevance to our current research.
Google Scholar provides the complete and continuously updated publication
record.

## Selected journal publications, 2022–2026

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
