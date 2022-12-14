# Pseudo-classes & pseudo-elements

- <span class="text-yellow-600">Stylování elementů pomocí pseudotříd jako hover, visible, first (first-child), stavů formuláře (invalid) apod.</span>
<br>

```html{0|1-4|0}
<button class="bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
  Save changes
</button>
```
<br>

- <span class="text-yellow-600">Stylování pseudo-elementů ::before a ::after :</span>
<br>

```html{0|2-4|0}
<label class="block">
  <span class="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
    Email
  </span>
  <input type="email" name="email" class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
</label>
```
<br>

- <span class="text-yellow-600">Podmíněné stylování pomocí modifikátorů checked, disabled, hidden apod.</span>
<br>

```html{0|1} 
<div aria-checked="true" class="bg-gray-600 aria-checked:bg-sky-700"></div>
```