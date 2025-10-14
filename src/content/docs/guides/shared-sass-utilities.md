---
title: Shared SASS Utilities
description: Separate shared mixins, variables and classes into different files.
severity: high
tags: SASS
---

Store your share shared mixins, variables and global classes in separate files from each other. This is very important!

### Why?

When you import any SASS module into another, it compiles all the classes from the source file into the target, creating a tremendous amount of bloat. If a shared file containing say, 100 classes, is imported in 10 components' SASS modules on any page. You'll find the same 100 classes repeated across each and every SASS module. The resulting CSS would end up having 1000 class declarations which will never be used.

Let's illustrate with an example. Say you have a shared file called `base.scss` and a component SCSS file called `Component.module.scss`,

```scss
// base.scss
.hyperlink {
  text-decoration: underline;
  color: $color-hyperlink;
  cursor: pointer;
}

@mixin darkenOnHover {
  &:hover {
    filter: brightness(0.75);
  }
}
```

```scss
// Component.module.scss
@import '../base.scss';

.componentContainer {
  display: flex;
  justify-content: center;

  // The imported mixin is used here
  @include darkenOnHover;
}
```

Resulting CSS,

```css
/* ✅ All good */
.hyperlink {
  text-decoration: underline;
  color: #ebebeb;
  cursor: pointer;
}

.Component_componentContainer {
  display: flex;
  justify-content: center;
}

.Component_componentContainer:hover {
  filter: brightness(0.75);
}

/*
❌  A copy of the class scoped specifically for Component was created
    This class is just bloat as it wasn't used anywhere in Component.module.scss
    Now imagine a page loading at least 10 such components, each containing a duplicate
    copy of hyperlink
*/
.Component_hyperlink {
  text-decoration: underline;
  color: #ebebeb;
  cursor: pointer;
}
```
