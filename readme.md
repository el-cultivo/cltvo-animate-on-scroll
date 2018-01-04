# cltvo-animate-on-scroll

Módulo de jQuery que permite triggerear animaciones en el DOM. Esto se hace agregando una clase cuyo CSS generará la una animación.

## Instalación
`npm i cltvo-animate-on-scroll`

## Uso
```
//main.js
import animateOnScroll from 'cltvo-animate-on-scroll'
animateOnScroll($, 300, 'show', '.animatable_JS', '#my-container')

//animated.html
<div id="my-container">
  <div class="animatable_JS">Debe estar dentro de #my-container</div>
</div>

//animated.css
#my-container .animatable_JS {
  opacity: 0;
  transition: opacity 0.5s ease;
}

#my-container .animatable_JS.show {
  opacity: 1;
}
```

## Argumentos de la función
`animateOnScroll :: jQuery -> Offset -> TriggerClass -> AnimatableElementSelector -> RowSelector -> DOMAnimation`

Donde:
```
type Offset = Number - cantidad de pixeles que la pantalla debe recorrer antes de que se muestre triggerée la animación (a partir del Row seleccinado)
type TriggerClass = String -- i.e. 'show' o '.show' -- debe ser una clase pues se usa el método de jQuery "addClass"
type AnimatableElementSelector = String -- i.e. '.animatable_JS'
type RowSelector = String -- i.e. '#my-container'

```
## Nota
La función sólo opera una vez, y si el `scrollTop` de la ventana es mayor a la posición del Row, etonces, inmediatamente se habrá agregado esa clase
