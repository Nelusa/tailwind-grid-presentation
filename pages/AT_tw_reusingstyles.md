# Recyklace stylů

<br>
<span class="text-sm">Aby se zamezilo neustálému opakování kousků kódu se stejnými styly, lze použít několik způsobů:</span>
<br>

- <span class="text-sm text-yellow-600">Cykly, mapování, vyjmutí kódu jako komponenty</span>
<br>

```html{0|2-4|0}
  <div class="mt-3 flex -space-x-2 overflow-hidden">
    {#each contributors as user}
      <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="{user.avatarUrl}" alt="{user.handle}"/>
    {/each}
  </div>
```


- <span class="text-sm text-yellow-600">Použití třídy pomocí @apply v tailwind.config.cjs</span>
<br>

```css{0|1-5|0}
@layer components {
  .btn-primary {
    @apply py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75;
  }
}
```

```html{0|1-3}
<button class="btn-primary">
  Save changes
</button>
```
