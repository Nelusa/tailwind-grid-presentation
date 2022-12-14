# minmax()

<p class="text-sm">Dosud měly všechny mřížky, se kterými jsme pracovali, pevnou velikost. Někdy však můžete chtít, aby se velikost mřížky změnila na základě velikosti vašeho webového prohlížeče.</p>

V těchto situacích můžete chtít zabránit tomu, aby byl řádek nebo sloupec příliš velký nebo příliš malý. Pokud máte například v mřížce obrázek o šířce 100 pixelů, pravděpodobně nechcete, aby jeho sloupec byl užší než 100 pixelů! 

Tento problém nám může pomoci vyřešit funkce <kbd>minmax()</kbd>.

```css {3}
.grid {
  display: grid;
  grid-template-columns: 100px minmax(100px, 500px) 100px;
}
```