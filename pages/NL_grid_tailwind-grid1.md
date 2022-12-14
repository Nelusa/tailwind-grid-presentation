# Tailwind & Grid

… a tím se taky dostávám k Tailwindu! 

Tailwind ve svém defaultním nastavení pro základní layout pracuje s frakcemi, repeat() a minmax() funkcí, takže si to všechno vezmeme a převedeme do Tailwindu:

```css
.grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
}
```
<br>
```html
<div class="grid grid-cols-1">
  <div>01</div>
  <!-- ... -->
  <div>09</div>
</div>
```