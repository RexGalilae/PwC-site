---
title: When You're Truncating Text Inside an HTML Element
description: When you're truncating text inside an HTML element, add the `title` attribute
severity: low
tags: HTML, a11y
---

Typically, you'd want to truncate text inside an HTML element when the text is too long to fit in the container. This is a common practice in web development, especially when you're working with dynamic content.

When you're truncating text, make sure to add the `title` attribute to the element. This way, when the user hovers over the truncated text, they can see the full text in a tooltip.

Here's an example:

```html
<!-- ✅ Good -->
<p
  style="width: 100px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;"
  title="This is a very long text that is being truncated"
>
  This is a very long text...
</p>
```

### Why?

<video src="https://github.com/user-attachments/assets/350dbd42-b6ba-465c-8fbc-e23332833fe5" width="400px"></video>

Here's a demo of this feature in action. Notice how the browser picks up the complete text and displays it in a tooltip when you hover over the truncated text. This feature is a nice-to-have that QAs won't nag at you for nor will the UX team specifically request, yet your users will be grateful for it.

## Bonus point for a11y

If you want to cater to users who use screen readers, you can add the `aria-label` attribute to the element. This way, when the screen reader reads the element, it will read the full text instead of the truncated text.
