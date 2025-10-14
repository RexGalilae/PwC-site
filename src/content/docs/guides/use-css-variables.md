---
title: Use CSS variables
description: Use CSS variables wherever possible, as opposed to SASS variables.
severity: medium
tags: CSS, SASS
---

Use CSS variables for storing colors, dimensions, etc. wherever possible as CSS variable values can be assigned dynamically in the browser, unlike SASS variables that are computed during compilation.

### Why?

This allows FE developers to build user-selectable themes like dark/light mode, accessible color schemes, etc.
