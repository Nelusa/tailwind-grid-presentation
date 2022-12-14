# Stylování podle rodiče nebo sourozence

- <span class="text-yellow-600">Podle rodiče</span> - označením rodiče pomocí <kbd>group</kbd> a použití <kbd>group-*</kbd> k nastylování cílového elementu
<br>

```html{0|1,3-6|0}
<a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a>
```
<br>

- <span class="text-yellow-600">Podle sourozence</span> - označením sourozence pomocí <kbd>peer</kbd> a použití <kbd>peer-*</kbd> k nastylování cílového elementu
<br>

```html{0|4-5}
<form>
  <label class="block">
    <span class="block text-sm font-medium text-slate-700">Email</span>
    <input type="email" class="peer ..."/>
    <p class="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
      Please provide a valid email address.
    </p>
  </label>
</form>
```
