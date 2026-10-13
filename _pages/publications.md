---
layout: page
permalink: /publications/
title: publications
description: Research publications in computer vision and 3D scene reconstruction.
nav: true
nav_order: 2
---

<link rel="stylesheet" href="{{ '/assets/css/publication-cards.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/site-overrides.css' | relative_url | bust_file_cache }}">
<script defer src="{{ '/assets/js/publication-preview.js' | relative_url }}"></script>

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

{% bibliography %}

</div>
