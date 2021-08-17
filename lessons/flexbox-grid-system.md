---
path: "/flexbox-grid-system"
title: "Flexbox Grid System"
order: "1B"
section: "Flexbox"
description: ""
icon: "grip-lines"
---

### Part 2A: Desktop Only

[Starting CodePen](https://codepen.io/jen4web/pen/OJmEmKb?editors=1100)

[Finished CodePen](https://codepen.io/jen4web/pen/VwbxBja?editors=1100)

Next, we'll create a 4-column grid system.

We'll also write some code for reversing the rows and reordering boxes within a row.


### Part 2B: Responsive System

Now we'll add media queries to make our grid system mobile-first.

[Starting CodePen (continues from the 2A finished state)](https://codepen.io/jen4web/pen/WNjyMev?editors=1100)

[Finished CodePen](https://codepen.io/jen4web/pen/ZEKRrzL?editors=1100)

### Part 2C: You Try It

Use the starting CodePen to code the layout as described.

[Starting CodePen](https://codepen.io/jen4web/pen/BaRVXeE)

[Finished CodePen](https://codepen.io/jen4web/pen/gOWjYBb)

### Math Notes

When approaching this problem, it's helpful to make the following adjustments.

A. Make sure you are working with the **border box model**, not the **content box model**.

[Border vs content box explained](https://frontendmasters.github.io/bootcamp/layout#box-model-types)

CSS to set the border box model - place at the top of your CSS file (or early in your CSS stack):

<pre>
html {
    box-sizing: border-box;
}
*, *::before, *::after {
    box-sizing: inherit;
}
</pre>

B. When constructing a grid of X columns, go through the following steps at EACH breakpoint and adjust `flex-basis` accordingly.

1. How many columns will you have at a maximum? In our example, it's 4 columns.

2. Draw a sketch with one box per column with a space in between.

3. Consider the width of the gap you'd like. Use % as your width. In our example, we had 3 gaps, and we used 4% width for each gap.

4. 100% - (3 gaps * 4%) = 88% left over for our 4 boxes.

5. 88% / 4 = 22% per box. Set the flex-basis to 22% for this size of box.

6. When combining boxes, figure the new box size over the columns and add in the gap(s).

<pre>
    | Box 1 |    | Box 2 |
        22% + 4% +  22%  = 48%

    | Box 1 |    | Box 2 |    | Box 3 |
        22% + 4% +  22%  + 4% + 22% = 74%
</pre>

7. Now write classes for the sizes you need.

**PRO TIP**: It's possible to tighten up the CSS even further with CSS variables and `calc()`. I cover this in ["Advanced CSS Layouts."](https://frontendmasters.com/courses/advanced-css-layouts/)

**NOTE**: There is a [new gap property](https://css-tricks.com/gaps-gasp/) in Flexbox as well, [described on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).

You will get slightly different results using `gap` rather than the method described above. Here, the gap will be preserved longer and boxes will wrap to the next line sooner than they will without a specific gap declared.

You may combine both methods without difficulty.

