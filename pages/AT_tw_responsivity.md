# Responzivní design

<br>
V Tailwind CSS je 5 předdefinovaných breakpointů pro responsivní design:
<br>

<span class="text-yellow-600">sm</span>  = @media (min-width: 640px) 
<br>
<span class="text-yellow-600">md</span>  =	@media (min-width: 768px) 
<br>
<span class="text-yellow-600">  lg</span>  = @media (min-width: 1024px) 
<br>
<span class="text-yellow-600">  xl</span>  =	@media (min-width: 1280px)
<br>
<span class="text-yellow-600">2xl</span> =	@media (min-width: 1536px)
<br>
<br>

Tailwind třídy jsou responsivní a používají mobile-first přístup, <span class="text-yellow-600">nepoužívejte tedy breakpoint <kbd>sm:</kbd> pro stylování mobilní obrazovky</span>. 

<br>
Příklad použití breakpointu:
<br>

```html{0|1-2}
<!-- Width of 16 by default, 32 on medium screens, and 48 on large screens -->
<img class="w-16 md:w-32 lg:w-48" src="...">
```

