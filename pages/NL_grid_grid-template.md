# Vytváření sloupců a řádků, grid-template

<p class="text-sm">Ve výchozím nastavení obsahují mřížky pouze jeden sloupec. Pokud byste začali přidávat položky, každá položka by byla umístěna na nový řádek (a to by nebyl grid, že jo!). Abychom to změnili, musíme explicitně definovat počet řádků a sloupců v naší mřížce.</p>

Sloupce naší mřížky můžeme definovat pomocí vlastnosti CSS <kbd>grid-template-columns</kbd>. K určení počtu a velikosti řádků použijeme vlastnost <kbd>grid-template-rows</kbd>.

Zkrácená vlastnost <kbd>grid-template</kbd> může nahradit předchozí dvě CSS vlastnosti:

```css {1-6|2|5-6|7-8}
.grid {
	display: grid;
	width: 1000px;
	height: 400px;
	grid-template: 200px 100px 100px / 20% 10% 70%; 
	
    /* fraction: */ 
    grid-template: 2fr 1fr 1fr / 1fr 3fr 1fr;
}

```

<kbd>fr</kbd> je možné použít i s jinými jednotkami. Když k tomu dojde, každé „fr“ představuje zlomek *dostupného* prostoru.
