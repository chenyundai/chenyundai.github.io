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
    <p>chenyundai@sjtu.edu.cn</p>

selected_papers: true
social: true

announcements:
  enabled: false
  scrollable: false
  limit: 0

latest_posts:
  enabled: false
---

<script src="{{ '/assets/js/theme-binary.js' | relative_url | bust_file_cache }}"></script>

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
      const hasFollowingAuthors = Array.from(self.parentNode.childNodes)
        .slice(Array.from(self.parentNode.childNodes).indexOf(self) + 1)
        .some((node) => node.textContent.trim());
      const selfHighlight = document.createElement("u");
      selfHighlight.textContent = selfName;

      if (firstAuthor === selfName) {
        author.replaceChildren(selfHighlight, document.createTextNode(", et al."));
      } else if (hasFollowingAuthors) {
        author.replaceChildren(
          document.createTextNode(`${firstAuthor}, et al., `),
          selfHighlight,
          document.createTextNode(", et al."),
        );
      } else {
        author.replaceChildren(document.createTextNode(`${firstAuthor}, et al., `), selfHighlight);
      }
    });
  });
</script>

I am an Associate Professor and Ph.D. supervisor in the
[School of Biomedical Engineering](https://bme.sjtu.edu.cn/En/),
[Shanghai Jiao Tong University](https://en.sjtu.edu.cn/), where I joined the
faculty in 2023.

My group develops integrated bioelectronic and robotic systems that convert
neural and motor biosignals into **restorative stimulation, intuitive device
control, and embodied robotic behavior**. We combine medical electronics,
multimodal biosensing, artificial intelligence, and robotics. Our work spans
custom hardware, intention decoding, embedded implementation, and clinically
oriented validation.

Our research spans three connected directions. First, we develop implantable
artificial spinal cords, closed-loop neural systems, and peripheral
rehabilitation technologies for people with paralysis. Second, we build
intention-aware interfaces for neural prostheses, exoskeletons, and accessible
computing. Third, we study brain–computer interfaces and embodied intelligence,
enabling robots to learn human movement from motion capture, inertial
measurement units (IMUs), and surface electromyography (sEMG).

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
        <p>Implantable artificial spinal cords, closed-loop neural systems, and peripheral rehabilitation technologies designed to restore movement after paralysis.</p>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card h-100 hoverable">
      <div class="card-body">
        <div class="font-weight-bold mb-2">02 · INTERACT</div>
        <h5 class="font-weight-bold">Intelligent human–machine interfaces</h5>
        <p>Biosignal acquisition, intention decoding, and real-time control for neural prostheses, exoskeletons, and accessible computing.</p>
      </div>
    </div>
  </div>
  <div class="col mb-3">
    <div class="card h-100 hoverable">
      <div class="card-body">
        <div class="font-weight-bold mb-2">03 · EMBODY</div>
        <h5 class="font-weight-bold">Brain–computer interfaces and embodied intelligence</h5>
        <p>Transferable robot learning from human demonstrations captured with motion capture, IMUs, and sEMG.</p>
      </div>
    </div>
  </div>
</div>

## Translation and impact

Our group works across scientific discovery, engineering, and deployment.
Multiple prosthetic technologies from this work have reached commercial
products, and their real-world use has been covered by a Boston television
station. Huawei Central Research Institute has also supported our development
of a human–machine interaction module for Huawei Watch.

Over the past three years, I have published more than 50 papers. I have served
as principal investigator on two projects funded by the National Natural
Science Foundation of China and two provincial or ministerial-level projects.
My work has been recognized by the Shanghai Overseas High-Level Talent Program
and the Shanghai Pujiang Talent Program.

Before joining Shanghai Jiao Tong University, I worked at the Shanghai
Municipal Development and Reform Commission. There, I helped advance policy
reforms for industry–academia–research collaboration and contributed the
chapter on technology-led emerging industries to Shanghai's 14th Five-Year
Plan.
