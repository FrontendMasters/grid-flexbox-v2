---
path: "/intro"
title: "Flexbox Introduction"
order: "1A"
section: "Flexbox"
description: "Introduction to Flexbox and CSS Grids"
icon: "grip-lines"
---

### Layout Options in CSS Overview

Jen runs through a few slides describing layout options in CSS.

[Slide PDF](https://github.com/FrontendMasters/grid-flexbox-v2/blob/main/day-1-flexbox/1-flexbox-intro/day1.pdf)

### Flexbox intro to basic properties

Jen demonstrates the basic Flexbox properties as described below.

[Starting CodePen](https://codepen.io/jen4web/pen/yLbjKWm?editors=1100)

[Flexbox Properties.txt](https://github.com/FrontendMasters/grid-flexbox-v2/blob/main/day-1-flexbox/1-flexbox-intro/Flexbox%20Properties.txt) is a useful document to have nearby when working in Flexbox. It explains which properties apply to parents and children, along with most of their possible values.

You may also refer to [CSS Tricks Guide to Flexbox.](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

#### Flexbox Explained

For each of the directions below, add these declarations to the existing ul or li elements.

The first grouping has to do with the flex-container, or the ul in this example.

1. **ul { display: flex; }**
   This gets everything on a single line. By default, the direction is in a row and in standard order.

2. **ul {display: flex; flex-direction: X; }**
   _X = `row`, `row-reverse`, `column`, `column-reverse`_
   This takes the elements and places them in a single row or a single column. Ordering is either in source order or the reverse of the source order. Flex-direction defines our main axis.

3. **ul { display: flex; flex-direction: as before, flex-wrap: X;}**
   _X = `wrap`, `wrap-reverse`, or `nowrap`_
   `flex-direction` orders the individual items.
   `flex-wrap` orders the rows/columns created.

4. **ul { display: flex; flex-flow: X;}**
   `flex-flow` is shorthand for `flex-direction` and `flex-wrap`
   It takes two arguments, just like the individual properties.
   Example: `row wrap`, `row-reverse wrap`, `column nowrap`, `column-reverse wrap-reverse`, etc
   Just because the row/column is reversed does not mean the wrap has to be reversed

5. **ul { display: flex; flex-flow: row wrap; justify-content: X; }**
   _X = `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`_
   `justify-content` determines the distribution of the flex items within the flex container on the main axis — in other words, how should space be allocated relative to the width of each item?
   If flex direction is row, then horizontal is the main axis. When flex-direction is column, then column is the main axis.

6. **ul { display: flex; flex-flow: row wrap; justify-content: center; align-items: X}**
   _X = `flex-start`, `flex-end`, `center`, `baseline`, `stretch`_
   This aligns our items on the cross axis. Since we’re working with a row currently, this is aligning elements in vertical space.

7. **ul { display: flex; flex-flow: row wrap; justify-content: center; align-items: center; align-content: X}**
   \*X = `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`
   Notice that changing `align-content` further aligns all boxes to the center of the `ul`. Without this, the boxes are distributed with `space-around` by default.

The next set of properties are about the individual flex-items, or the li’s in this example.

8. **.flex2{ border: 2px dotted blue; order: X; }**
   _X can be an integer._
   1 will move the `.flex2` boxes to the end of the list, while -1 will move them to the start of the list. 0 is neutral.

9. **.flex2{ border: 2px dotted blue; flex-basis: X; }**
   `flex-basis` is analogous to width, but not quite the same thing. Width is an absolute measurement — an element is that wide, all the time. We can measure width in relative units (say 25% instead of 250px), but in the end, the measurement itself never changes. For `flex-basis`, we try to achieve a given width with the space available. It could be smaller than this width, or it could be wider, depending on the extra space and how that’s supposed to be distributed. Distribution of extra space is controlled by `flex-grow` and `flex-shrink` (below).

10. **.flex2{ border: 2px dotted blue; flex-grow: X; }**
    _X can be 0 or a positive integer._ (It won’t break with a negative integer, but it won’t do anything either.)
    `flex-grow`, like `flex-shrink` (below), distributes extra space once each element is displayed on the page. In this example, our flex items are center-aligned (see `justify-content: center` on the ul). By assigning a value to `flex-grow`, any extra space will be assigned in greater proportion to this element, making it larger relative to the other items. Note there is no unit with this measurement — it’s simply a proportion.

11. **.flex2{ border: 2px dotted blue; flex-shrink: X; }**
    _X can be 0 or a positive integer._ (It won’t break with a negative integer, but it won’t do anything either.)
    `flex-shrink` controls what happens to extra space as elements shrink. By assigning a value to flex-shrink, as elements get smaller on the page, this element will get smaller faster than the others. Note there is no unit with this measurement — it’s simply a proportion.

12. **.flex2{ border: 2px dotted blue; flex: G S B; }**
    G = `flex-grow`
    S = `flex-shrink`
    B = `flex-basis`
    This is the shorthand for combining `flex-grow`, `flex-shrink`, and `flex-basis`.

