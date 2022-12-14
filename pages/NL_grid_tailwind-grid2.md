Základní nastavení si, jak už říkala Andrejka, můžete samozřejmě změnit v tailwind.config.cjs:

```js {all|4-9|0}
module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid 
        '16': 'repeat(16, minmax(0, 1fr))',

        // Complex site-specific column configuration 
        'footer': '200px minmax(900px, 1fr) 100px',
      }
    }
  }
}

```

… případně využít arbitrary values v hranatých závorkách:

```html {0|1}
    <div class="grid grid-cols-[200px_minmax(900px,_1fr)_100px]">
    <!-- ... -->
    </div>
```

<arrow v-click="3" x1="600" y1="530" x2="400" y2="440" color="#666888" width="2" arrowSize="1" />

