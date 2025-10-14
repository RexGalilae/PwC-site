---
title: Avoid Inline Styles
description: Don't use inline styles.
severity: high
tags: CSS
---

1. Unmaintainable
2. Difficult to override
3. Diffcult to standardize
4. Results in incredibly bloated HTML

```tsx
// ❌ Don't do this
<div style={{ color: 'red', fontSize: '16px' }}>Hello, World!</div>
```

```tsx
// ✅ Do this instead
<div className="text-red-500 text-base">Hello, World!</div>
```

You may argue they're essentially the same thing, but notice how the second example uses standardized classes that are easy to override and maintain across the project. Bonus points for readability as well.

Being PwC devs, we trust you to not use them unless there's no other option but we had to put this here just in case.
