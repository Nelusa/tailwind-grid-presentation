# Grid Area

Již jsme mohli použít <kbd>grid-row</kbd> a <kbd>grid-column</kbd> jako zkratku pro vlastnosti jako <kbd>grid-row-start</kbd> a <kbd>grid-row-end</kbd>. 

Pomocí vlastnosti <kbd>grid-area</kbd> můžeme refaktorovat ještě více. Tato vlastnost nastaví počáteční a koncovou pozici pro řádky i sloupce položky.

```css
.item {
	grid-area: 2 / 3 / 4 / span 5;
}
```

<kbd>grid-area</kbd> má čtyři hodnoty oddělené lomítky. Pořadí je důležité! Takto bude <kbd>grid-area</kbd> tyto hodnoty interpretovat:

1. <kbd>grid-row-start</kbd>
2. <kbd>grid-column-start</kbd>
3. <kbd>grid-row-end</kbd>
4. <kbd>grid-column-end</kbd>