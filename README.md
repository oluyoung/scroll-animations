# Scroll Animations

Scroll animations for HTML elements using vanilla JS & CSS or [animate.css](https://animate.style/).

## Vanilla JS

#### Prerequisites
- Use the `observer-scroll.min.js` file in your project.
- Add the `observer-scroll.min.css` file to your project.
- Add this code block to your main css file.
```css
.scroll__hidden {
  opacity: 0;
  filter: blur(5px);
  transition: all 1.5s;
}
```

#### How to use
- Add the class `scroll__hidden` to the element you want to animate
- Add the scroll animation class from the list below to the element you want to animate.
- Add the class `scroll__delay` to the element you want delayed and it will be delayed by `0.2s * index` of the element.

#### Examples
##### Simple
```html
<h1 class="scroll__hidden scroll__slide" />
```
 
##### Elements with delay
```html
<ul>
  <li><img class="scroll__hidden scroll__fade scroll__delay" /></li>
  <li><img class="scroll__hidden scroll__fade scroll__delay" /></li>
  <li><img class="scroll__hidden scroll__fade scroll__delay" /></li>
  <li><img class="scroll__hidden scroll__fade scroll__delay" /></li>
</ul>
```

#### Different CSS classes for animations included:

- Fade In: `scroll__fadeIn`
- Scale In: `scroll__scaleIn`
- Slide In Right: `scroll__slideInRight`

Note: classes can also be combined. e.g `scroll__fadeIn scroll__scaleIn` but classes opposing each other e.g `scroll__slideInRight scroll__slideInLeft` should not be combined.


## Using animate.css

### Animate CSS Docs

The docs provide all the classes you need for animations
- https://animate.style/

#### How to use
- Add the animate.css stylesheet to your project. Tutorial is shown in the docs mentioned above.
- Add the `observer-scroll-animate.css.min.js` file to your project.
- Add this code block to your main css file.
```css
.animate__hidden {
  opacity: 0;
  filter: blur(5px);
  transition: all 1.5s;
}
```
- Add the class `animate__hidden` to the element you want to animate.
- Add the class `animate__delay` to the element you want delayed and it will be delayed by `0.2s * index` of the element.
- Add the data attribute `data-name` to the element you want to animate and set it to the name of the animation you want to use. e.g `<h1 data-name="animate__slideInRight" />`

#### Examples
##### Simple
```html
<h1 class="animate__hidden" data-name="animate__slideInRight" />
```

##### Elements with delay
```html
<ul>
  <li><img class="animate__hidden animate__delay" data-name="animate__fadeIn" /></li>
  <li><img class="animate__hidden animate__delay" data-name="animate__fadeIn" /></li>
  <li><img class="animate__hidden animate__delay" data-name="animate__fadeIn" /></li>
  <li><img class="animate__hidden animate__delay" data-name="animate__fadeIn" /></li>
</ul>
```
