# Responzivní design

Tailwind třídy jsou [responsivní](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design) a používají [mobile first](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Responsive/Mobile_first) přístup. Bleskurychle tak lze vytvářet responsivní komponenty s předpřipravenými breakpointy (virtuální hranice obrazovky, kdy se daný styl začíná aplikovat). 

Tailwind CSS je tedy <span class="text-yellow-600">plně responzivní, mobile first framework</span>, jehož layout je postaven na Flexboxu a na CSS Gridu. Breakpointů je celkem 5, přičemž nejmenší má danou výchozí hodnotu maximální šířky 640px (<kbd>sm</kbd>) a největší 1536px (<kbd>2xl</kbd>). Mezistupně jsou:

- <kbd>md</kbd> (768px),
- <kbd>lg</kbd> (1024px)
- <kbd>xl</kbd> (1280px).

Neuvedení žádného z nich automaticky znamená 100% šířka objektu. Všechny hodnoty je samozřejmě možné změnit v konfiguračním souboru.

Následující kód například zarovná text na střed a od <kbd>sm</kbd> (výchozí šířka 640 px) vlevo:

```css
<div class="text-center sm:text-left">
```