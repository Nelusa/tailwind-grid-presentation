 #
 <br>
 <br>
 Funkce <kbd>repeat()</kbd> je zvláště užitečná s <kbd>fr</kbd>. Například <kbd>repeat(5, 1fr)</kbd> rozdělí layout na pět stejných řádků nebo sloupců.

A konečně, druhý parametr <kbd>repeat()</kbd> může mít více hodnot:

```css {0|4}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: repeat(2, 20px 50px)
}
```
<p class="italic text-sm">Tento kód vytvoří čtyři sloupce, kde první a třetí sloupec bude mít šířku 20 pixelů a druhý a čtvrtý bude šířku 50 pixelů.</p>