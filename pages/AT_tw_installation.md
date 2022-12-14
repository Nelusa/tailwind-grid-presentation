# Instalace Talwind CSS

- <span class="text-sm">Instalace do projektu s Vite pomocí <kbd>npm install -D tailwindcss postcss autoprefixer</kbd></span>
<br>
- <span class="text-sm">Vytvoření souborů *tailwind.config.cjs* and *postcss.config.cjs*. pomocí <kbd>npx tailwindcss init -p</kbd></span>
<br>
- <span class="text-sm">Nastavení *content* v *tailwind.config.cjs*:</span>

```js {0|1-10|2-5}
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

- <span class="text-sm">Nastavení *./src/index.css*</span>

```css{0|1-3}
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- <span class="text-sm">Spuštění pomocí <kbd>npm run dev</kbd></span>