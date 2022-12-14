---
# try also 'default' to start simple
theme: default
colorSchema: 'dark'

background: https://images.unsplash.com/photo-1497091071254-cc9b2ba7c48a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc2lnbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60
# apply any windi css classes to the current slide
class: 'text-center'
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# show line numbers in code blocks
lineNumbers: false
# some information about the slides, markdown enabled
info: |
  ## Tailwind & Grid
  Prezentace k FE mikroškolení
# persist drawings in exports and build
drawings:
  persist: false
# use UnoCSS
css: unocss
---

# Tailwind & Grid

Andy T. a Nelča L.

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
   Můžeme začít? <carbon:arrow-right class="inline"/>
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub"
    class="text-xl icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

<style>
h1 {
  background-color: #ffffff;
  background-image: linear-gradient(45deg, #ffffff 10%, #ffffff 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

---
layout: center
---
# 1. Tailwind

<style>
  h1 {
    font-size: 5rem !important;
    padding: 8rem;
    font-weight: 500
  }
</style>


<!-- Andy -->

---
src: ./pages/AT_tw_intro.md
hide: false
---

---
src: ./pages/AT_tw_benefits.md
hide: false
---

---
src: ./pages/AT_tw_installation.md
hide: false
---

---
src: ./pages/AT_tw_config.md
hide: false
---

---
src: ./pages/AT_tw_plugins.md
hide: false
---

---
src: ./pages/AT_tw_custom-styles.md
hide: false
---

---
src: ./pages/AT_tw_custom-styles2.md
hide: false
---

---
src: ./pages/AT_tw_modifiers.md
hide: false
---

---
src: ./pages/AT_tw_associatedstyles.md
hide: false
---

---
src: ./pages/NL_layout_container.md
---

---
src: ./pages/NL_layout_position1.md
---

---
src: ./pages/NL_layout_position2.md
---

---
src: ./pages/NL_layout_position3.md
---

---
src: ./pages/AT_tw_responsivity.md
hide: false
---

---
src: ./pages/AT_tw_customresponsivity.md
hide: false
---

---
src: ./pages/AT_tw_reusingstyles.md
hide: false
---


<!-- Nelča -->



---
src: ./pages/NL_layout_responsivity.md
hide: true
---

---
layout: center

---
# 2. Grid


<style>
  h1 {
    font-size: 5rem !important;
    padding: 8rem;
    font-weight: 500
  }
</style>

--- 
src: ./pages/NL_grid_benefits.md
hide: false
---

--- 
src: ./pages/NL_grid_create.md
hide: false
---

--- 
src: ./pages/NL_grid_grid-template.md
hide: false
---

--- 
src: ./pages/NL_grid_repeat1.md
hide: false
---

--- 
src: ./pages/NL_grid_repeat2.md
hide: false
---

--- 
src: ./pages/NL_grid_minmax.md
hide: false
---

--- 
src: ./pages/NL_grid_tailwind-grid1.md
hide: false
---

--- 
src: ./pages/NL_grid_tailwind-grid2.md
hide: false
---

--- 
src: ./pages/NL_grid_multiple-row-items1.md
hide: false
---

---
src: ./pages/NL_grid_multiple-row-items2.md
hide: false
---

---
src: ./pages/NL_grid_multiple-col-items1.md
hide: false
---

---
src: ./pages/NL_grid_grid-area.md
hide: false
---

---
src: ./pages/NL_grid_multiple-row-col_tw.md
hide: false
---

---
src: ./pages/NL_grid_grid-template-areas1.md
hide: false
---

---
src: ./pages/NL_grid_grid-template-areas2.md
hide: false
---

---
src: ./pages/NL_grid_grid-items1.md
hide: false
---

---
src: ./pages/NL_grid_grid-items2.md
hide: false
---

---
src: ./pages/NL_grid_grid-items3.md
hide: false
---

---
src: ./pages/NL_grid_grid-items4.md
hide: false
---

---
src: ./pages/NL_grid_grid-items5.md
hide: false
---

---
src: ./pages/NL_grid_grid-items6.md
hide: false
---

---
hide: false
class: text-center
src: ./pages/NL_grid_example.md
---



---
class: text-center
---

<style>
h1 {
  font-weight: 500 !important;
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
.slidev-layout th {
    padding: 0 !important;
}
.slidev-layout tbody {
  font-size: 0.9rem !important;
}
.slidev-layout td {
padding: 0.5rem !important;
}
 .shiki-container {
  scroll-behavior: smooth !important;
  overflow-y: scroll !important;
  display: block
 }

</style>

# Zdroje
<br>
<br>
<p class="text-yellow-500 text-lg font-bold">Tailwind CSS</p>

[Tailwind](https://tailwindcss.com/docs/installation) · [Form Plugin](https://github.com/tailwindlabs/tailwindcss-forms) · [State of CSS](https://2022.stateofcss.com/en-US/)

<br>
<p class="text-yellow-500 text-lg font-bold">Grid CSS</p>

[Grid v Tailwindu](https://tailwindcss.com/docs/grid-template-columns) · [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) · [Grid By Example](https://gridbyexample.com/) · [Grid Complete Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
