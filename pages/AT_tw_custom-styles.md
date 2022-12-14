# Vlastní nastavení stylů

- <span class="text-yellow-600">Změny theme v tailwind.config.cjs:</span>
<br>

```js{0|2-5|0}
  theme: {
    screens: {
      lg: '976px',
      xl: '1440px',
    }
  }
```
<br>

- <span class="text-yellow-600">Použití arbitrary values:</span>
<br>

```html{0|1|0}
    <div class="top-[117px]"></div>
```
<br>

- <span class="text-yellow-600">Použití arbitrary properties:</span>
<br>

```html{0|1} 
    <div class="[mask-type:luminance]"></div>
```