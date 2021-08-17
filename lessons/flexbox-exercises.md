---
path: "/flexbox-exercises"
title: "Flexbox Exercises"
order: "1D"
section: "Flexbox"
description: ""
icon: "grip-lines"
---

We'll complete three parts to this exercise, depending on time.

### Part 4A: Collections

This is the first section of a larger page we'll code over the course of today.

Refer to desktop.png, tablet.png, and mobile.png for the look we want with this page.

In the starting "begin" folder, you'll find HTML and CSS to get you started.

Jen inserted only 6 classes, one per `<figure>` element, to completely style this document. No additional classes should be necessary to style the page. (Practice your selectors!)

### Part 4B: Mission

You're given a logo and text for a mission section of the page. Lay this out in some way across the breakpoints.

I've provided two suggestions -- the suggestion I'll use going forward (using a float and CSS shapes) and an alternative (using Flexbox). There are screenshots for all breakpoints for you to look at.

#### Suggested approach

Logo.png is the standard PNG logo file, cropped closely around the logo itself. This is useful if you put the image in one Flexbox cell and the text in another, which is my alternative approach.

Logo2.png has a wider background. You may want to use this if you'd like to experiment with CSS shapes. For example, make the text follow the diagonal slant of the logo side.

If you take the approach with CSS shapes, you will need to float the image rather than placing it in its own Flexbox cell. **Remember to clear your float!**

#### Shape suggestion

a. [Visit MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/shape-outside) and copy the `shape-outside` code for a polygon:

`shape-outside: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);`

b. Apply that to your image in the CSS and save.

c. Open the page in **Firefox** (NOT CHROME) and use the devtools to manipulate the points on the shape to where you want them. (This feature is not available in Chrome.)

d. Copy the finalized `shape-outside` CSS declaration and paste to your CSS document.

### Part 4C: Footer

Lay out the footer with the markup given. I've given you two SVGs for social media images; feel free to add more if you wish. You may link these to the home pages for the social media sites or to your own pages.

You may need to modify the HTML slightly to make this layout work.

I've provided screenshots for how I did this.

