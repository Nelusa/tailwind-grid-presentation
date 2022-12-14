```html {all|0}
<div class="container">
  <header>Welcome!</header>
  <section class="info">Info!</section>
  <section class="services">Services!</section>
  <footer>Contact us!</footer>
</div>
```
<br>

```css {0|6-8|9-10|13-18|all}
.container {
  display: grid;
  max-width: 900px;
  position: relative;
  margin: auto;
  grid-template-areas: "head head"
                       "info services"
                       "footer footer";
  grid-template-rows: 300px 800px 120px;
  grid-template-columns: 1fr 3fr;
}

header {
  grid-area: head;
}
.info {
  grid-area: info;
}
/* ... */

```