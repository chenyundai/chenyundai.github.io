---
layout: page
permalink: /publications/
title: publications
description: Selected recent publications in neural engineering, human–machine interaction, and embodied intelligence.
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
      const etAl = document.createElement("em");
      etAl.textContent = "et al.";

      if (firstAuthor === selfName) {
        author.replaceChildren(self.cloneNode(true), document.createTextNode(", "), etAl);
      } else {
        author.replaceChildren(
          document.createTextNode(`${firstAuthor}, `),
          etAl,
          document.createTextNode(", "),
          self.cloneNode(true),
        );
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

These metrics are a [Google Scholar](https://scholar.google.com/citations?user=UaWbs_EAAAAJ&hl=en)
snapshot from July 2026. The list below is curated for venue quality, recency,
and alignment with our current research programs. It focuses on peer-reviewed
work published from 2023 to 2026; Google Scholar provides the complete,
continuously updated publication record.

## Representative publications, 2023–2026

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
