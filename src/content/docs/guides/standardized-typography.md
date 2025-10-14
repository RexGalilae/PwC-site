---
title: Standardized Typography
description: Create standardized typography components (heading and paragraphs).
severity: high
tags: UI, UX, design
---

Similar to the point above, make sure to take time and familiarize yourself with all the fonts used across your project.
Identify all the heading and paragraph types, encapsulate them into their own typography components, and use those across your project.

This approach will produce several benefits and these are some examples:

- The client suddenly wants to change the English typeface used for all paragraph text across your application, and now you only need to make a change in several places (depending on how many types of paragraphs you've identified)
- The client is asking to add another language (e.g. Mandarin) to your application, and the chosen typeface's glyphs (letter symbols) are too large compared to your English typeface. In this case you could apply scaling logic to your typography components and keep this modification contained over there.
- With the clearly identified heading levels across your application (H1, H2, H3, etc), the produced HTML will be more semantically accurate.
