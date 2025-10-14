---
title: Use CSS Class Names
description: Every element that needs to be styled should have a class name
severity: high
tags: CSS
---

❌ Avoid writing CSS rules like,

```scss
.parent > div {
  // Time bomb code in the form of CSS goes here
}
```

✅ Instead, give your child class an identifiable and unique class name and write CSS like,

```scss
.parent .child {
  // NOTE: Please avoid naming it "child" or something generic
  // This name was merely used as an example.
}
```

### Why?

This makes code maintenance difficult as the code in the first snippet is poorly scoped and will target new child elements added to the parent during the development process. This will override existing CSS on other children and result in UI bugs and inconsistencies.

Authors Tarik Zulfikarpasic, Peter Chen and Zaid Hassan all contend that devs found breaching this golden rule should be socially ostracized and subjected to perform 1 week of QA Testing as punishment.

Critics of this penalty would argue that being forced to do QA would inevitably result in social ostracism anyway due to the nature of QA work. Such critics are invited to keep their opinions to themselves.
