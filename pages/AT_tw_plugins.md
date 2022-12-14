# Talwind CSS plugins

- <span class="text-yellow-600">Existuje několik oficiálních pluginů:</span>
<br>

```js
module.exports = {
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ]
}
```
<br>

- <span class="text-yellow-600">Plugin je třeba nainstalovat pomocí npm install např. <kbd>npm install -D @tailwindcss/forms</kbd></span>
<br>

- <span class="text-yellow-600">A přidat do plugins v<kbd>tailwind.config.cjs</kbd></span>
<br>

```js{0|1-4}
module.exports = {
  plugins: [
    require('@tailwindcss/forms'),
    // ...
  ],
}
```