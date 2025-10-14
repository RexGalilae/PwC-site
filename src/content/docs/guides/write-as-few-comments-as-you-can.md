---
title: Write As Few Comments As You Can
description: Write as few comments as you can.
severity: medium
tags: clean code
---

I am a fan of coding, and I am a fan of writing. Naturally, when I started coding, I sprinkled my writing throughout my code in the form of comments. I wrote them envisioning that a completely code-illiterate person would be able to read and understand exactly what my code does and how it works.

Well, that may not have been a bad way to start software development - it helped me better understand the code that I was writing. But, how useful is it in real life?

Unless you are writing code that you expect complete programming noobs to read through, understand, and work on, it's better to avoid superfluous comments. Instead, aim to write code that is easy to understand.

### Why?

Let's look at the following example:

🤮 Bad

```javascript
var x = 9 / 5;
function myFunc(c) {
  return c * x + 32;
}
```

What is this function? What is it supposed to do? Takes a lot of guesswork, doesn't it?

😐 A little better

```javascript
// the conversion factor: 1°C = 9/5°F
var x = 9 / 5;
// function to convert Celsius to Fahrenheit
function myFunc(c) {
  return c * x + 32;
}
```

🥳 Good

```javascript
const FACTOR = 9 / 5;
function celsiusToFahrenheit(tempC) {
  return tempC * FACTOR + 32;
}
```

In essence, don't compensate bad code with comments. Fix bad code by writing clean, understandable, maintainable code. Reserve comments for code that is complex, or code that might be unexpected due to very specific reasons. This makes your code concise and helps you make clean coding a habit. Comments are for the weak, the complex, or the abnormal.
