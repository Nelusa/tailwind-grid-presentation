# Container

Třída <kbd>container</kbd> nastavuje <kbd>max-width</kbd> element tak, aby odpovídal <kbd>min-width</kbd> aktuálnímu break-pointu (jako jsme zvyklí u klasického návrhu).

| Třída | Break point | Vlastnosti |
| --- | --- | --- |
| container | Žádný | width: 100%; |
|  | sm (640px) | max-width: 640px; |
|  | md (768px) | max-width: 768px; |
|  | lg (1024px) | max-width: 1024px; |
|  | xl (1280px) | max-width: 1280px; |
|  | 2xl (1536px) | max-width: 1536px; |

Lze například přidat <kbd>mx-auto</kbd> pro vycentrování obsahu, případně nastavit vycentrování přímo v configu.

```html
<div class="container mx-auto px-4">
	<!-- ... -->
</div>
```