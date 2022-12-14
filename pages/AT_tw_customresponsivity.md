# Přizpůsobení breakpointů

- <span class="text-yellow-600">Breakpointy lze upravit, případně přidat v theme v tailwind.config.cjs:</span>
<br>

```js{0|2-5}
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
    <div class="min-[320px]:text-center max-[600px]:bg-sky-300"></div>
```
