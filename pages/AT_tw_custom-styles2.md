# Vlastní nastavení stylů

- <span class="text-yellow-600">Přidání base stylů pomocí @layer v CSS:</span>
<br>

```css{0|5-9|0}
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl;
  }
}
```
<br>

- <span class="text-yellow-600">Přidání tříd ke komponentám nebo vlastních utilities pomocí @layer v CSS:</span>
<br>

```css{0|1-5|0} 
@layer components {
  .card {
    background-color: theme('colors.white');
  }
    }
```
```html{0|1}
<div class="card rounded-none"></div>
```






