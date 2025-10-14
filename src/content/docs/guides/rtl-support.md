---
title: RTL Support
description: Ensure your CSS supports right-to-left direction with minimal modifications
severity: medium
tags: CSS
---

Most of the projects our team work on will support English and Arabic languages, both having different directions for displaying content.
In order to avoid rewriting a lot of CSS for the RTL version, use side-neutral CSS properties (ending with -inline-start or -inline-end, as opposed to -left or -right).

```css
/* ✅ Works as intended for both LTR and RTL directions */
.container {
  margin-inline-start: 2rem;
  padding-inline-end: 0.5rem;
  border-inline-end: 1px solid red;
}

/* ❌ Using -left or -right properties will require us to write
 a lot of "undoing" CSS to accomplish the same thing */

.container {
  margin-left: 2rem;
  padding-right: 0.5rem;
  border-right: 1px solid red;
  *[dir='rtl'] & {
    margin-left: 0;
    margin-right: 2rem;
    padding-right: 0rem;
    padding-left: 0.5rem;
    border-right: 0;
    border-left: 1px solid red;
  }
}
```
