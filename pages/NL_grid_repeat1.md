# Repeat()

Vlastnosti, které definují počet řádků a sloupců v gridu, mohou mít funkci jako hodnotu. 

Jednou z těchto funkcí je <kbd>repeat()</kbd>. Funkce <kbd>repeat()</kbd> byla vytvořena speciálně pro CSS Grid.

```css{0|4|0}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: repeat(3, 100px);
}
```

Funkce  <kbd>repeat()</kbd> bude duplikovat specifikace pro řádky nebo sloupce daný počet opakování. Ve výše uvedeném příkladu použití funkce  <kbd>repeat()</kbd> způsobí, že layout bude mít tři sloupce, každý o šířce 100 pixelů. 

Je to vlastně stejné jako následující kód:

```css {0|4}
.grid {
	display: grid;
	width: 300px;
	grid-template-columns: 100px 100px 100px;
}
```