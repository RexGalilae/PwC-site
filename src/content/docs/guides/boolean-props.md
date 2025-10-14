---
title: Boolean Props
description: Boolean props should be `false` by default.
severity: low
tags: React
---

While building components that accept `boolean` type props, it's helpful if you let the prop be optional and `false` by default.

### Why?

It allows cleaner implementations. For example,

❌ For a prop that's `true` by default, you'd have to override it by passing an ugly looking prop like so,

```tsx
// Don't expand items by default
<Accordion expandByDefault={false}>{ items }</Accordion>

// Expand items by default
<Accordion>{ items }</Accordion>
```

✅ It's preferable to refactor the prop as `collapseByDefault` which can be set to `false` by default without changing the default behavior of the component. The usage would look much cleaner like this,

```tsx
// Don't expand items by default
<Accordion collapseByDefault>{ items }</Accordion>

// Expand items by default
<Accordion>{ items }</Accordion>
```
