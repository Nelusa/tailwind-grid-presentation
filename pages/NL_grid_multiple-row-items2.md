# Multiple Row Items
Jak zajistíme, aby jednotlivé grid items zabíraly více řádků?

Můžeme toho dosáhnout pomocí vlastností CSS <kbd>grid-row-start</kbd> a <kbd>grid-row-end</kbd>. Důležité je si uvědomit, že tentokrát nepoužíváme CSS na vnější <span class="text-yellow-500">grid container</span>; přidáváme CSS ke <span class="text-yellow-500">grid items</span>!

```css{all|0}
.item {
	grid-row-start: 1;
	grid-row-end: 3;
}
```

<p class="italic text-xs">Ohraničení řádků a sloupců v gridu začínají na 1 a končí na hodnotě, která je o 1 větší než počet řádků nebo sloupců v gridu. Hodnota pro <kbd>grid-row-start</kbd> by měla být řádkem, na kterém má grid item začínat. Hodnota pro <kbd>grid-row-end</kbd> by měla být o jednu větší než řádek, na kterém má grid item končit.</p>
<br>
Jako zkratku pak můžeme použít <kbd>grid-row</kbd>

```css {0|all}
.item {
	grid-row: 1 / 3;
}
```