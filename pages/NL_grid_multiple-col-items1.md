# Grid Column
<br>
Předchozí tři vlastnosti existují i pro sloupce. <kbd>grid-column-start</kbd>, <kbd>grid-column-end</kbd> a <kbd>grid-column</kbd> fungují stejně jako vlastnosti řádku. Tyto vlastnosti umožňují, aby grid item zahrnovala více sloupců.

Při použití těchto vlastností můžeme použít klíčové slovo <kbd>span</kbd> k definování začátku nebo konce sloupce nebo řádku vzhledem k jeho druhému konci. Podívejte se, jak se <kbd>span</kbd> používá v kódu níže:

```css
.item {
	grid-column: 4 / span 2;
}
```
<p class="text-sm italic">To znamená, že prvek „item“ má začínat na čtvrtém sloupci a zabírat celkem dva sloupce místa. Naše item by tedy zabírala sloupce čtyři a pět.</p>
