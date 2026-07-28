---
layout: about
title: about
permalink: /
subtitle: Associate Professor · Ph.D. Supervisor · Shanghai Jiao Tong University

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>Shanghai, China</p>

selected_papers: true
social: true

announcements:
  enabled: false
  scrollable: false
  limit: 0

latest_posts:
  enabled: false
---

<style>
  @media (max-width: 575.98px) {
    .profile {
      float: none !important;
      max-width: 15rem;
      margin: 0 auto 1.5rem !important;
    }

    .profile .more-info {
      text-align: center;
    }
  }
</style>

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

I am an Associate Professor and Ph.D. supervisor in the
[School of Biomedical Engineering](https://bme.sjtu.edu.cn/En/),
[Shanghai Jiao Tong University](https://en.sjtu.edu.cn/), where I joined the
faculty in 2023.

My group develops bioelectronic and robotic systems that translate neural and
motor signals into **restorative stimulation, intuitive machine control, and
embodied action**. Our work integrates medical electronics, neural and motor
biosensing, artificial intelligence, and robotics across the full engineering
chain, from sensing hardware and intent-decoding algorithms to embedded
software and clinically oriented validation.

Our current research is organized around three connected directions:
implantable artificial spinal cords and neural systems for people with
paralysis; intelligent human–machine interfaces for neural prostheses,
exoskeletons, and accessible interaction; and brain–computer interfaces and
embodied intelligence, where robots learn human movement from motion capture,
inertial sensing, and surface electromyography.

**Email:** [chenyundai@sjtu.edu.cn](mailto:chenyundai@sjtu.edu.cn)

<a class="btn btn-outline-primary" href="{{ '/research/' | relative_url }}">Explore research</a>
<a class="btn btn-outline-primary" href="https://scholar.google.com/citations?user=UaWbs_EAAAAJ&hl=en">Google Scholar</a>
<a class="btn btn-outline-primary" href="https://bme.sjtu.edu.cn/En/FacultyDetail/950">SJTU profile</a>

<div style="clear: both"></div>

## Research at a glance

<div class="row row-cols-1 row-cols-md-3 mt-4">
  <div class="col mb-3">
    <div class="card h-100 hoverable">
      <div class="card-body">
        <div class="font-weight-bold mb-2">01 · RESTORE</div>
        <h5 class="font-weight-bold">Artificial neural systems</h5>
        <p>Implantable artificial spinal cords, closed-loop neural systems, and peripheral rehabilitation technologies for restoring movement after paralysis.</p>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card h-100 hoverable">
      <div class="card-body">
        <div class="font-weight-bold mb-2">02 · INTERACT</div>
        <h5 class="font-weight-bold">Intelligent human–machine interfaces</h5>
        <p>Biosignal acquisition, intent decoding, and real-time control for neural prostheses, exoskeletons, and accessible interactive devices.</p>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card h-100 hoverable">
      <div class="card-body">
        <div class="font-weight-bold mb-2">03 · EMBODY</div>
        <h5 class="font-weight-bold">Brain–computer interfaces and embodied intelligence</h5>
        <p>Learning transferable human motion and behavior from motion capture, inertial measurement units, and surface electromyography for embodied robots.</p>
      </div>
    </div>
  </div>
</div>

## Translation and impact

Our group works across discovery, engineering, and deployment. Multiple
prosthetic technologies developed through this work have reached commercial
products, with their real-world use followed by a Boston television station.
Research funded by Huawei Central Research Institute also supported the
development of a human–machine interaction module for Huawei Watch.

Over the past three years, I have published more than 50 papers and served as
principal investigator on two projects funded by the National Natural Science
Foundation of China and two provincial or ministerial-level projects. My work
has been recognized by the Shanghai Overseas High-Level Talent Program and the
Shanghai Pujiang Talent Program.

Before joining Shanghai Jiao Tong University, I worked at the Shanghai
Municipal Development and Reform Commission, where I advanced policy reforms
for industry–academia–research collaboration and contributed the chapter on
technology-led emerging industries to Shanghai's 14th Five-Year Plan.
