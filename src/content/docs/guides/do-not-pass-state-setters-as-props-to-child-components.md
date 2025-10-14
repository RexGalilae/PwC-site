---
title: Do NOT Pass State Setters as Props to Child Components
description: Do NOT pass state setters as props to child components.
severity: high
tags: React
---

:::tip[Here's a principle to live by]
**Each component should be responsible for its own state and its own state only.**
:::

Passing state setters as props to child components is a violation of this principle. It couples the parent and child components too tightly, making it difficult to refactor or reuse the child component in other parts of the application.

Here's an example of what NOT to do:

```tsx
// ❌ Don't do this
function ParentComponent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <ChildComponent count={count} setCount={setCount} />
    </div>
  );
}
```

```tsx
// ✅ Do this instead
function ParentComponent() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    // Here, the only component responsible for updating the count is the ParentComponent
    // This way all logic related to updating the count is contained within the ParentComponent
    setCount(count + 1);
  };

  return (
    <div>
      <ChildComponent count={count} handleIncrement={handleIncrement} />
    </div>
  );
}
```
