---
path: "/flexbox-figure-figcaption"
title: "Figure Caption & Figure Caption with Flexbox"
order: "1C"
section: "Flexbox"
description: ""
icon: "grip-lines"
---

### Chapter 3: `figure` and `figcaption`

[Starting CodePen](https://codepen.io/jen4web/pen/BaRVYRN?editors=1100)

[Ending CodePen](https://codepen.io/jen4web/pen/ExmRQvL?editors=1100)

Flexbox may be applied to as many elements in the document as you wish. Remember to always manage parents (flex containers) and children (flex items) appropriately.

In this case, if we declare `display: flex` on the figure, then the caption may be placed next to the image (row) or underneath it (column) very easily.

Use relative and absolute positioning to move the caption onto the image. Change the color to include some transparency, or use the opacity property to manipulate the transparency.

Changed CSS:

<pre>
figure {
  display: flex;
  flex-flow: column nowrap;
  position: relative;
}
figcaption {
  position: absolute;
  bottom: 0%;
  width: 100%;
  opacity: 0.7;
}
</pre>
