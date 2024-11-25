# What is this?

This is a place where we come to make note of anything we believe needs to be on the white paper. Whether we're in the middle of work or in the shower, whenever we run into any thought that makes us go, "ah, this belongs on the white paper", it gets put here.

This is a brainstorming document. Feel free to jot down thoughts in any form without worrying about formatting:

## Table of Contents <!-- omit from toc -->

- [What is this?](#what-is-this)
- [Thoughts](#thoughts)
  - [1. \[CSS\] Every element that needs to be styled should have a class name](#1-css-every-element-that-needs-to-be-styled-should-have-a-class-name)
    - [Why?](#why)
  - [2. \[React\] Boolean Props](#2-react-boolean-props)
    - [Why?](#why-1)
  - [3. \[SASS\]\[CSS\] Variables](#3-sasscss-variables)
    - [Why?](#why-2)
  - [4. Don't use Bootstrap](#4-dont-use-bootstrap)
    - [Sure, but why not? It saves me time](#sure-but-why-not-it-saves-me-time)
    - [I still hate writing CSS. What should I do instead?](#i-still-hate-writing-css-what-should-i-do-instead)
  - [5. Don't use inline styles](#5-dont-use-inline-styles)
  - [6. \[SASS\] Shared mixins, variables and classes](#6-sass-shared-mixins-variables-and-classes)
    - [Why?](#why-3)
  - [7. Make sure to encapsulate all the functionality of every custom hook inside a helper function](#7-make-sure-to-encapsulate-all-the-functionality-of-every-custom-hook-inside-a-helper-function)
  - [8. \[CSS\] Ensure your CSS supports right-to-left direction with minimal modifications](#8-css-ensure-your-css-supports-right-to-left-direction-with-minimal-modifications)
  - [9. \[Pull Requests\] Ensure your pull requests are well documented](#9-pull-requests-ensure-your-pull-requests-are-well-documented)
  - [10. \[UI/UX Design\] Doing a good job in identifying reusable visual components will save you a lot of time down the line](#10-uiux-design-doing-a-good-job-in-identifying-reusable-visual-components-will-save-you-a-lot-of-time-down-the-line)
  - [11. \[UI/UX Design\] Create standardized typography components (heading and paragraphs)](#11-uiux-design-create-standardized-typography-components-heading-and-paragraphs)
  - [12. \[API Integration\] Create reusable API wrappers](#12-api-integration-create-reusable-api-wrappers)
  - [13. \[API Integration\] Store all API routes in one file](#13-api-integration-store-all-api-routes-in-one-file)
  - [14. \[React\] Don't jump straight in bed with Redux](#14-react-dont-jump-straight-in-bed-with-redux)
    - [Why?](#why-4)
  - [15. Learn progressive enhancement](#15-learn-progressive-enhancement)
    - [Huh?](#huh)
    - [Why?](#why-5)
    - [Unless...](#unless)
  - [16. Ever heard of the native Intl Web API?](#16-ever-heard-of-the-native-intl-web-api)
  - [17. Moment.js is dead](#17-momentjs-is-dead)
  - [18. Learn Web Storage APIs](#18-learn-web-storage-apis)
  - [19. Promise.all is your friend](#19-promiseall-is-your-friend)
  - [20. Write as few comments as you can](#20-write-as-few-comments-as-you-can)
    - [Why?](#why-6)
  - [21. Watch out for the explicit construction anti-pattern](#21-watch-out-for-the-explicit-construction-anti-pattern)
  - [22. Learn and apply WCAG](#22-learn-and-apply-wcag)
  - [23. Don't blindly await](#23-dont-blindly-await)
  - [24. When your function has many optional parameters, define the param as an object](#24-when-your-function-has-many-optional-parameters-define-the-param-as-an-object)
  - [25. \[React\] Do NOT pass state setters as props to child components](#25-react-do-not-pass-state-setters-as-props-to-child-components)
  - [26. \[HTML\]\[a11y\] When you're truncating text inside an HTML element](#26-htmla11y-when-youre-truncating-text-inside-an-html-element)
    - [Why?](#why-7)
  - [Bonus point for a11y](#bonus-point-for-a11y)
  - [27. \[React\] `dontUseEffect`](#27-react-dontuseeffect)
    - [I need to make an API call when the component mounts](#i-need-to-make-an-api-call-when-the-component-mounts)
      - [I get that this approach is cleaner but what's the harm?](#i-get-that-this-approach-is-cleaner-but-whats-the-harm)
    - [I have two state variables that need to be in sync](#i-have-two-state-variables-that-need-to-be-in-sync)
      - [useNaive 🙅](#usenaive-)
      - [useMemo 🤷](#usememo-)
      - [useReducer 🤔](#usereducer-)
  - [28. \[Communication\] Don't just say "hello!"](#28-communication-dont-just-say-hello)
    - [What did he do right?](#what-did-he-do-right)
- [Real-life Cases](#real-life-cases)
  - [Case Study: Query Params](#case-study-query-params)
    - [Problem](#problem)
      - [What's the problem?](#whats-the-problem)
  - [Solution](#solution)
    - [What are the benefits of this solution?](#what-are-the-benefits-of-this-solution)
- [Contributors](#contributors)

# Thoughts

## 1. [CSS] Every element that needs to be styled should have a class name

_Severity: High_

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

[**Back to ToC** ☝️](#table-of-contents-)

## 2. [React] Boolean Props

_Severity: Low_

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

[**Back to ToC** ☝️](#table-of-contents-)

## 3. [SASS][CSS] Variables

_Severity: Medium_

Use CSS variables for storing colors, dimensions, etc. wherever possible as CSS variable values can be assigned dynamically in the browser, unlike SASS variables that are computed during compilation.

### Why?

This allows FE developers to build user-selectable themes like dark/light mode, accessible color schemes, etc.

[**Back to ToC** ☝️](#table-of-contents-)

## 4. Don't use Bootstrap

_Severity: High_

<img src="https://github.com/user-attachments/assets/d930cc75-56d5-45d5-abdf-4d11abeb3ff7" width="400px" />

**Source:** Stolen from Reddit

Bootstrap was an excellent tool built for a particular type of developer in a particular age.

This was the age when MVC frameworks ruled the web and being a web developer meant you had a very strong handle on C#/Java but saw CSS as a chore at best, a nightmare at worst.

We're no longer in that age and you're by no means, that developer. You've probably put "Full Stack Developer" in your Resume (definitely with >4 years of experience with Next.js App Router).

It's time to exhibit your extensive repertoire of skills. You're not intimidated by flexboxes, grids and media queries. You believe in writing original style rules that respect the amount of time UX Designers put into making bespoke web experiences for our clients.

Update: Quite alarmingly, Bootstrap is still the [3rd most popular design system solution on the web](https://tsh.io/state-of-frontend/).

### Sure, but why not? It saves me time

The main challenge with Bootstrap is flexibilty. You can glance at a website and instantly recognize if it was built on Bootstrap. They all look the same! Remember when all websites used to look like these?

![image](https://github.com/user-attachments/assets/fb9b1a09-86f7-4b1f-ae60-fcc6c98a23f6)
**Source:** [Why do all websites look the same? | Friday](https://www.friday.ie/blog/why-do-all-websites-look-the-same/)

This is the catch which makes Bootstrap so easy to use, it does a lot of the styling legwork for you. This way, you lose granular control. Consider this most commonly used class,

```css
.card {
	position: relative;
	display: flex;
	flex-direction: column;
	/* Unintuitive, potentially problematic workaround for a flexbox
    bug that once existed on some older browsers */
	min-width: 0;
	word-wrap: break-word; /* Deprecated property */
	background-color: #fff;
	background-clip: border-box; /* Unnecessary in most cases */
	/* Inconsistent with the hex for the background color. RGBA
    might also be less performant */
	border: 1px solid rgba(0, 0, 0, 0.125);
	border-radius: 0.25rem;
}
```

As you can see, you've lost a lot of granular control here. You can only safely override many of these properties by writing inline CSS (god forbid!) or writing your own CSS classes that override these properties with `!important`.

For the more skeptical readers or bootstrap enthusiasts, here's another, probably worse, yet an equally common example:

```css
.row {
	display: flex;
	flex-wrap: wrap;
	/* ! Please don't ever use negative margins ! */
	margin-right: -15px;
	margin-left: -15px;
}
```

There's a very compelling argument to [ban margins in CSS](https://mxstbr.com/thoughts/margin) due to its several pitfalls, [bewildering rules](https://www.joshwcomeau.com/css/rules-of-margin-collapse/) and most importantly, violation of seperation of concerns. Yet, negative margins exist on a completely unrivalled plane of CSS blasphemy. (If you don't see an entry on negative margins in this document, ask Zaid, the author to write one immediately). Quite reliably, these CSS rules will end up causing unexpected, often unwanted behavior on your layouts, forcing you to find ways to override these rules.

At this point, you'd be spending more time writing hazardous, unmaintainable code to apologize for Bootstrap's cavalier approach to CSS than actually building layouts before your deadline.

Any time gains early on in the project are eventually reversed in the later stages of the project in identifying and overriding CSS you didn't know existed.

### I still hate writing CSS. What should I do instead?

People often argue that [Tailwind](https://tailwindcss.com/) is just repackaged Bootstrap. While the DX is quite reminiscent of Bootstrap, this couldn't be further from the truth. Here are two key reasons why:

1. **Tailwind is fully configurable and extendable.**
   You can define your own colors, margin sizes, border radii, animations, etc. based on the wireframes you're working with and either replace tailwind's defaults or extend them.

    Boostrap offers themes but it's very limited by comparison and difficult to set one up yourself.

2. **Each class serves a single purpose.**
   It's very hard to find a tailwind class with more than 2 lines of CSS in it. Even harder to find any class that can't be modified by other classes.

For example; the horrifying bootstrap `.card` example is implemented this way in tailwind,

```html
<div class="relative flex flex-col bg-white border border-gray-200 rounded">
	<!-- Card content goes here -->
</div>
```

Notice how each line of CSS in the first case is its own class and how `border-gray-200` combines with `border` to result in `border: 1px solid var(--gray-200)`. This granularity and modularity is a very powerful feature of tailwind, but it's also a huge pain to write and maintain.

It's very common to see JSX elements that are written like they're competing for a world record,

```tsx
function ProductCard({ product }) {
	return (
		{/* This line is 231 characters long! (Don't ask me how I counted it) */}
		<div className="flex flex-col items-center justify-between p-4 m-2 bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5">
			<img
				src={product.image}
				alt={product.name}
				className="w-full h-48 object-cover mb-4 rounded-md"
			/>
			{ /* 108 characters */ }
			<h2 className="text-xl font-semibold text-gray-800 mb-2 text-center line-clamp-2 hover:line-clamp-none">
				{product.name}
			</h2>
      { /* 88 characters */ }
			<p className="text-sm text-gray-600 mb-4 text-center line-clamp-3 hover:line-clamp-none">
				{product.description}
			</p>
			<div className="flex items-center justify-between w-full">
				<span className="text-lg font-bold text-blue-600">
					${product.price.toFixed(2)}
				</span>
        { /* 200 characters! Close runner up */ }
				<button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-300">
					Add to Cart
				</button>
			</div>
		</div>
	);
}
```

**Takeaway:**
If you're planning to stick around in your project in the long term, SCSS is your best best but Tailwind is still a decent option if you're building an ultra-quick PoC for Vikhyat and/or Ali.

[**Back to ToC** ☝️](#table-of-contents-)

## 5. Don't use inline styles

_Severity: High_

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
<div className="text-red-500 text-sm">Hello, World!</div>
```

You may argue they're essentially the same thing, but notice how the second example uses standardized classes that are easy to override and maintain across the project. Bonus points for readability as well.

Being PwC devs, we trust you to not use them unless there's no other option but we had to put this here just in case.

[**Back to ToC** ☝️](#table-of-contents-)

## 6. [SASS] Shared mixins, variables and classes

_Severity: High_

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

[**Back to ToC** ☝️](#table-of-contents-)

## 7. Make sure to encapsulate all the functionality of every custom hook inside a helper function

Ideally, a hook should only be a reactive wrapper around a helper function (or a set of helper functions). Consider the following example,

```ts
// TBD. Present useLocalStorage from STOCH as an example
```

[**Back to ToC** ☝️](#table-of-contents-)

## 8. [CSS] Ensure your CSS supports right-to-left direction with minimal modifications

Most of the projects our team work on will support English and Arabic languages, both having different directions for displaying content.
In order to avoid rewriting a lot of CSS for the RTL version, use side-neutral CSS properties (ending with -inline-start or -inline-end, as opposed to -left or -right).

```css
/* ✅ Works as intended for both LTR and RTL directions */
.container {
	margin-inline-start: 2rem;
	padding-inline-end: 0.5rem;
	border-inline-end: 1px solid red;
}

/* ❌  Using -left or -right properties will require us to write
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

[**Back to ToC** ☝️](#table-of-contents-)

## 9. [Pull Requests] Ensure your pull requests are well documented

In order to make the review process as smooth as possible and avoid silly UI bugs being reported, here are some guidelines to follow:

-   Submit screenshots/videos from your local environment of the components you've worked on, preferably with different kinds of settings (e.g. behavior in RTL vs LTR mode, how they look on different kinds of devices - 4K monitors, desktops, tablets and mobile, etc). This will allow you and the PR reviewers to compare your output with the design file (Figma, XD, etc) and catch a lot of UI defects early on.
-   Connect your PRs with a corresponding task/bug from Jira or Azure DevOps where possible. Later on this could be very useful in explaining why a specific code change was made.
-   Specify meaningful commit messages, and reuse the commit messages to generate your PR descriptions. Some version control platforms like GitHub will have an option to generate PR descriptions based on the included commits, and this can be very useful for producing content like release notes.

[**Back to ToC** ☝️](#table-of-contents-)

## 10. [UI/UX Design] Doing a good job in identifying reusable visual components will save you a lot of time down the line

Prior to starting development on a new project, make sure to familiarize yourself with the UI/UX of the whole project.
Thoroughly analyze the design files provided by the UX designers, take note of the trends across different pages, and start mapping similar pieces of UI into reusable components (containers, sections, etc).

Component identification can be difficult at first, but it will pay off rather soon as it results in consistent UI and minimal repetition of code (think how much easier bug fixes or enhancements will become if your only need to change your code in one place)

[**Back to ToC** ☝️](#table-of-contents-)

## 11. [UI/UX Design] Create standardized typography components (heading and paragraphs)

Similar to the point above, make sure to take time and familiarize yourself with all the fonts used across your project.
Identify all the heading and paragraph types, encapsulate them into their own typography components, and use those across your project.

This approach will produce several benefits and these are some examples:

-   The client suddenly wants to change the English typeface used for all paragraph text across your application, and now you only need to make a change in several places (depending on how many types of paragraphs you've identified)
-   The client is asking to add another language (e.g. Mandarin) to your application, and the chosen typeface's glyphs (letter symbols) are too large compared to your English typeface. In this case you could apply scaling logic to your typography components and keep this modification contained over there.
-   With the clearly identified heading levels across your application (H1, H2, H3, etc), the produced HTML will be more semantically accurate

[**Back to ToC** ☝️](#table-of-contents-)

## 12. [API Integration] Create reusable API wrappers

Our projects typically deal with a large number of integrations, and while we may use different HTTP clients for handling API calls (e.g. axios, fetch() etc), it's typically a good idea to create our own wrappers around those.

Doing this will standardize our API interactions in several ways:

-   Custom API headers such as bearer tokens can be automatically passed in every API call
-   API exceptions and errors can be handled in more predictable ways
-   Retry logic can be easily added (with custom delays, repetitions and conditions)

[**Back to ToC** ☝️](#table-of-contents-)

## 13. [API Integration] Store all API routes in one file

When all API routes used across a project are stored in one file, it is easier to understand how many APIs are being used in the project and to generate their documentation when required.

[**Back to ToC** ☝️](#table-of-contents-)

## 14. [React] Don't jump straight in bed with Redux

_Severity: Medium_

Understand how Redux works, and why you are using it in your app.

Are you using it just to avoid prop drilling because your app requires many components to access the same pieces of state? Since version 16.3, [React has created a new Context API](https://legacy.reactjs.org/blog/2018/03/29/react-v-16-3.html#official-context-api) to address this exact situation. [Learn how to use it](https://react.dev/learn/passing-data-deeply-with-context) to pass data deeply.

Is Redux used in your app to help with caching state from the server and nothing else? Check out Vercel's [SWR library](https://swr.vercel.app/) or [TanStack Query](https://tanstack.com/query/latest) (formerly react-query). These libraries are designed for just this use case, which means you probably don't need Redux at this point in your app.

### Why?

Redux is a full-featured, opinionated state management tool. It can do many things, but maybe isn't the best at all of them (Mark Erkson, maintainer of Redux, said so himself in [this episode on the JS Party podcast](https://changelog.com/jsparty/146) right around the hour-and-2-minute mark). Understanding what Redux does and the specific needs of your application allow you to decide the best tools to integrate with your application, instead of running `npm install react-redux` right after you create your React app and introduce indirection and unnecessary cluttering in your code.

If after you evaluate your needs and find a match in Redux's capabilities, then by all means, use Redux. It can do some things really well, like:

-   Preserving a single source of truth
-   Managing large amounts of application state that constantly change
-   Handling complex logic to update state
-   Maintaining a history of how the application state has changed over time
-   Caching state from a server

Oh, and before you get started, you might want to know, [Redux Toolkit](https://redux-toolkit.js.org/) is now the [officially-recommended](https://redux.js.org/introduction/why-rtk-is-redux-today) way to use Redux.

**Zaid's Note:** [Zustand](https://zustand-demo.pmnd.rs/) (pronounced `tsoo-shtahnd`) is rapidly replacing Redux on React projects as a simpler alternative (to even @reduxjs/toolkit)!

If for nothing else, do check out their landing page. It's a work of art ❤️

[**Back to ToC** ☝️](#table-of-contents-)

## 15. Learn progressive enhancement

_Severity: Medium_

### Huh?

Yes, exactly. What in the world is progressive enhancement?

The old trusty [MDN web docs](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement) tell us

> **Progressive enhancement** is a design philosophy that provides a baseline of essential content and functionality to as many users as possible while delivering the best possible experience only to users of the most modern browsers that can run all the required code.

So, progressive enhancement is a philosophy that aims to provide a stable, consistent user experience across user-agents (basically browsers when we are talking about the web). Translating this to layman's terms at the risk of providing a somewhat narrow definition, progressive enhancement is all about making your web app work without JavaScript. Make it _work_, not "pretty" or "dazzling" or even "smooth". **Work**. Christian Heilmann [explains it nicely using the escalator as an illustration](http://christianheilmann.com/2012/02/16/stumbling-on-the-escalator/).

But perhaps it is better to think of progressive enhancement as building a flight of stairs that can function as an escalator whenever possible (electricity is provided, its passengers have opted for it, etc.). This difference in mindset is [emphasized by Jeremy Keith](https://adactio.com/journal/9963) and is the crucial distinction between progressive enhancement and graceful degradation. Progressive enhancement builds from the ground up and adds extra enhancements for users who can experience them, while graceful degradation starts with the newest, fanciest technologies and tries to make sure there is something to fall back on in case they don't work. For those who entered the web dev space in the past decade, Single Page Applications have been "the thing" because of React, Vue, etc. Building progressive enhancement into our web apps requires a complete shift in our thinking and habits, back to the era of jQuery and Bootstrap (not that you should use either of these ancient artifacts) when progressive enhancement was (more so) the norm.

### Why?

Okay, but if progressive enhancement requires such a drastic change, is it really worth it? Who doesn't have JavaScript enabled on their browser, and who still uses IE nowadays? Read this [flow chart by Stuart Langridge](https://www.kryogenix.org/code/browser/everyonehasjs.html) and see for yourself. JavaScript can be unavailable a lot more often than we think, and not just because someone disabled it on their browser. And why do we care if these "edge cases" happen? Because [availability matters](https://www.kryogenix.org/code/browser/why-availability/). Progressive enhancement's content-/accessibility-first approach can help address [factors that influence conversion rate](https://blog.hubspot.com/marketing/page-load-time-conversion-rates) and [improve your customer retention](https://www.tawk.to/customer-happiness/why-high-availability-is-important-for-customer-retention/). Apply it and your website's traffic will benefit.

Furthermore, discussions around progressive enhancement have been on the rise again, so new frameworks like [Remix](https://remix.run/docs/en/main/pages/philosophy#progressive-enhancement) and [SvelteKit](https://kit.svelte.dev/docs/form-actions#progressive-enhancement) are built with it in mind, and existing frameworks like [Next.js](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions#progressive-enhancement) and [Gatsby](https://www.gatsbyjs.com/docs/glossary/progressive-enhancement/) are adding support for and documentation around it. There is no excuse for not learning it.

### Unless...

...progressive enhancement doesn't apply in your case.

There are times when progressive enhancement doesn't make sense because of the nature of what is being built. For instance, games that rely on JavaScript or online JS library playgrounds - it simply does not make sense for these to be progressively enhanced (yes, some sort of message should be displayed to the user in case anything fails, but that is just error handling and not progressive enhancement). Learn progressive enhancement, master it, and toss it aside when it doesn't apply.

[**Back to ToC** ☝️](#table-of-contents-)

## 16. Ever heard of the native Intl Web API?

## 17. Moment.js is dead

## 18. Learn Web Storage APIs

## 19. Promise.all is your friend

When `async / await` was introduced in ES8, it became the recommended practice to make code more readable. However, it has also led to atrocities like

## 20. Write as few comments as you can

_Severity: Medium_

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

[**Back to ToC** ☝️](#table-of-contents-)

## 21. Watch out for the explicit construction anti-pattern

## 22. Learn and apply WCAG

## 23. Don't blindly await

## 24. When your function has many optional parameters, define the param as an object

_Severity: Medium_

A real-life example from [Azure DevOps's Node.js API package](https://github.com/microsoft/azure-devops-node-api) that I recently had to endure:

```typescript
const response = await gitApi.getItems(
	repoId,
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
	undefined,
	{
		versionType: GitVersionType.Branch,
		version: branchName,
	},
);
```

Just do this instead, please:

```typescript
const response = await gitApi.getItems({
	repoId,
	versionDescriptor: {
		versionType: GitVersionType.Branch,
		version: branchName,
	},
});
```

It gets even worse when you want to pass that 9th parameter conditionally. If `branchName` is an optional parameter and isn't passed in the function call, we end up with atrocities like:

```typescript
// using Function.prototype.apply()
const response = await gitApi.getItems.apply(
	gitApi.getItems,
	...(branchName
		? [
				repoId,
				undefined,
				undefined,
				undefined,
				undefined,
				undefined,
				undefined,
				undefined,
				{
					versionType: GitVersionType.Branch,
					version: branchName,
				},
		  ]
		: [repoId]),
);

// or just the good old if/else
if (branchName) {
	// ugly call goes here
} else {
	// not-so-ugly call goes here
}
```

The same thing could be easily done with a single object as the param:

```typescript
const response = await gitApi.getItems.apply({
	repoId,
	...(branchName
		? {
				versionType: GitVersionType.Branch,
				version: branchName,
		  }
		: {}),
});
```

Much neater, right? I don't like writing `undefined` so many times, even if I can copy/paste it or know some cool keyboard shortcut to duplicate it in my IDE. So please don't make me write `undefined` 7 times just because I want to pass an optional param that might be... _\*sigh\*_, `undefined`.

[**Back to ToC** ☝️](#table-of-contents-)

## 25. [React] Do NOT pass state setters as props to child components

_Severity: High_

Here's a principle to live by: **Each component should be responsible for its own state and its own state only.**

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

[**Back to ToC** ☝️](#table-of-contents-)

## 26. [HTML][a11y] When you're truncating text inside an HTML element

_Severity: Low_

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

<video src="https://github.com/user-attachments/assets/350dbd42-b6ba-465c-8fbc-e23332833fe5" width="400px" />

Here's a demo of this feature in action. Notice how the browser picks up the complete text and displays it in a tooltip when you hover over the truncated text. This feature is a nice-to-have that QAs won't nag at you for nor will the UX team specifically request, yet your users will be grateful for it.

## Bonus point for a11y

If you want to cater to users who use screen readers, you can add the `aria-label` attribute to the element. This way, when the screen reader reads the element, it will read the full text instead of the truncated text.

[**Back to ToC** ☝️](#table-of-contents-)

## 27. [React] `dontUseEffect`

_Severity: High_

It's quite tempting to use `useEffect` to do a variety of tasks that make life easier (in the short run), however, it's worth remembering that every action you perform inside a `useEffect` hook is a side effect.

There are situations where you need side effects or they're simply unavoidable but any component with more than 2-3 `useEffect` hooks is a sitting red flag. If you have a small atomic component like a button or a card, you probably don't need a `useEffect` to begin with.

### I need to make an API call when the component mounts

_Extension of [a previous point](#12-api-integration-create-reusable-api-wrappers)_

Directly using `useEffect` for this can be more detrimental than helpful. Instead, consider creating a custom hook that encapsulates the API call logic.

Here's an example:

```tsx
// ✅ Good
// This hook can also be extended to receive queryParams as a separate object instead of a part of
// the URL but I left it this way for simplicity
function useFetch(url: string) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	// useEffect configured correctly so you don't have to on every component
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(url);
			const data = await response.json();
			// The BE team, for some reason, decides to nest the data several levels deep
			setData(
				// Navigating the JSON labyrinth here
				data.data.apiData.iPromiseThisContainsTheData.dataAlmostThere
					.finally.some.data,
			);
			setLoading(false);
		};

		try {
			fetchData();
		} catch (error) {
			setError(error);
		}
		// ⬇️ Only fires again when the baseURL or query params change
	}, [url]);

	return { data, loading };
}

function MyComponent() {
	const { data: userData, loading } = useFetch(url);

	if (loading) {
		return <p>Loading...</p>;
	}

	return <div>{userData}</div>;
}
```

The benefit of this approach is that you can have multiple `useFetch`s on a page firing calls independent of each other. There are other standardization and DRY benefits highlighted in a [previous section](#12-api-integration-create-reusable-api-wrappers) This approach is quite harmonious and readable at the same time. Wouldn't you agree?

[TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview) is a great library to use for API calls and has been used across tons of projects in production for a while now. It takes care of a lot of the boilerplate code you'd have to write for API calls and caching. In fact, it comes with so many bells and whistles that you [might not even need Redux to manage your state in most cases](#14-react-dont-jump-straight-in-bed-with-redux).

#### I get that this approach is cleaner but what's the harm?

Here's an unfortunate real life example:

```tsx
// ❌ Don't do this
function MyComponent() {
	// Data received from the API
	const [data, setData] = useState(null);
	// If set to true, a useEffect will fire an API call
	const [shouldFireApi, setShouldFireApi] = useState(false);
	// A parameter that is passed to the API call
	const [importantApiParam, setImportantApiParam] = useState(null);

	const handleApi = async () => {
		// API call logic that fetches data and sets it in state
	};

	// Fetches param from the page URL and updates importantApiParam
	useEffect(() => {
		const paramFromUrl = new URLSearchParams(window.location.search).get(
			'param',
		);

		// Asynchronously updates state in the next render
		setImportantApiParam(paramFromUrl);

		// ❌ This will cause the next hook to fire before the importantApiParam is set
		setShouldFireApi(true);
	}, [shouldFireApi]);

	// This hook fires when shouldFireApi is set to true anywhere in the component
	useEffect(() => {
		if (shouldFireApi) {
			handleApi();

			setShouldFireApi(false);
		}
	}, [shouldFireApi]);

	return <div>{data}</div>;
}
```

This may seem contrived, but it's not uncommon to see this kind of pattern in real life. In this example, a new varaible called `importantParam` had to be introduced, which the `handleApi` would pass to the API request as a param. Suddenly, `handleApi` was no longer firing when this state variable changed!

To remedy this, you'd add a useEffect that would then fire the API call when the `importantApiParam` changes like so,

```tsx
// Watches for changes in importantApiParam and fires the API call
useEffect(() => {
	if (importantApiParam) {
		handleApi();
	}
}, [importantApiParam]);
```

Excellent! This works but you've done is added a lot of complexity to your component. You've introduced a lot of state that you need to manage and keep track of. This is a lot of cognitive overhead for a simple API call.

What if, tomorrow, business says a new API param should also be passed to the API call? You'd have to add another state variable, another `useEffect` to manage that state, and another `useEffect` to fire the API call. This is a slippery slope that you don't want to be on.

So let's summarize the benefits of using a custom hook:

1. 🔎 **Readability**: It's easier to understand what a custom hook does by looking at its name than to read through a `useEffect` hook to understand what it does.
2. ♻️ **Reusability**: You'd often find that you're doing the same data fetching logic in multiple components. The API dev insists on nesting the data 3 levels deep, and you're stuck writing the same `useEffect` logic in multiple components. A custom hook solves this problem.
3. 🔁 **Prevent repetitive API calls**: If you're using a custom hook, you can easily prevent repetitive API calls caused by multiple component renders. This is especially useful if you're using a caching library like [TanStack Query](https://tanstack.com/query/latest/docs/framework/react/overview). Only when you open the network tab would you be surprised to see how many times a component can re-render in a single session.
4. 🕸️ **De-tangle yourself from an unmaintainable web of hooks**: [See example above](#whats-the-harm-in-using-useeffect-for-all-this-instead-of-a-custom-hook).

### I have two state variables that need to be in sync

In most cases, if you're in a situation where you need 2 variables to be in sync with each other, you're probably [framing your problem incorrectly to begin with](#usereducer-).

However, you might find yourself in an unavoidable situation where you need to keep 2 state variables in sync, especially when the state variables are used in a complex calculation. Here are 2 approaches:

#### useNaive 🙅

```tsx
const [count, setCount] = useState(0);

// Initialize countPlusOne to count + 1 (pretend this is a very complex calculation)
const [countPlusOne, setCountPlusOne] = useState(count + 1);

// Update countPlusOne whenever count changes
useEffect(() => {
	setCountPlusOne(count + 1);
}, [count]);
```

#### useMemo 🤷

```tsx
const [count, setCount] = useState(0);

// Define countPlusOne as a memoized value that updates to count + 1 whenever count changes
const countPlusOne = useMemo(() => count + 1, [count]);
```

Less boilerplate and more of keeping things closer to where they're used. The person who will be tirelessly maintaining your code when you go on your annual "spiritual" trip to Bali will thank you for it.

You might find yourself in a situation where you need to update several state variables based on the previous state. Perhaps these state variables are loosely coupled and don't need to be in sync all the time, but they still update together in some predictable way. This is where `useReducer` comes in.

#### useReducer 🤔

Let's take a step back and consider what solution we're trying to design. Here's the naive approach visualized:
<img width="869" alt="image" src="https://github.com/user-attachments/assets/ffc6eb4f-b92d-4dd5-94ac-35db27d9c0bf">

Despite the author's eye-pleasing visual rendition of the solution (or perhaps because of it), the problems here are painfully self-evident. This is a lot of boilerplate and a lot of cognitive (and performance) overhead for a simple problem. Things chained together like this are a nightmare to maintain and debug.

Let's take a step back and try to visualize an ideal solution. In an ideal world, we'd want to:

1. Bundle all the state variables together in some way.
2. Reduce the number of state updates to only those that are necessary.

This is exactly what `useReducer` helps us do!

```tsx
// Bundle all state variables into a single object. Again, a contrived example but pretend these are many variables
const initialState = {
	count: 0,
	countPlusOne: 0,
};

// Write actions that handle the necessary updates so you don't have to write the same logic in multiple places.
function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return {
				...state,
				count: state.count + 1,
				countPlusOne: state.count + 1,
			};
		case 'decrement':
			return {
				...state,
				count: state.count - 1,
				countPlusOne: state.count + 1,
			};
		default:
			throw new Error();
	}
}

function MyComponent() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div>
			<button onClick={() => dispatch({ type: 'increment' })}>+</button>
			<button onClick={() => dispatch({ type: 'decrement' })}>-</button>
			<p>count: {state.count}</p>
			<p>countPlusOne: {state.countPlusOne}</p>
		</div>
	);
}
```

Here's a visual representation of our new consolidated solution. Isn't she a beauty?

<img width="865" alt="image" src="https://github.com/user-attachments/assets/c2fa96c4-74b9-47ed-bb24-608f9d7b8807">

This is a much cleaner solution that keeps all the logic in one place. It's easier to maintain and debug, and it's more performant than the naive approach. It takes away the emphasis on the individual state variables and instead focuses on the state as a whole.

Truly, `useReducer` is probably the most underrated hook in React. It's a powerful tool that can help you manage complex state logic with ease. You probably wouldn't use it every day, but when you need it, it'll come in clutch for you.

To sum up, `useEffect` isn't the work of the devil but it also isn't the answer to every problem. It's a powerful tool, but it's easy to misuse. The next time you find yourself reaching for `useEffect`, take a step back and consider if there's a better way to solve your problem. Quite often, there is.

[**Back to ToC** ☝️](#table-of-contents-)

## 28. [Communication] Don't just say "hello!"

_Severity: Mid_

Haven't you been in a situation like this?

**Mark Antony (3 hours ago)**
Hello!

_goes on lunch break_

**Julius Caesar (2.5 hours ago)**
Hey! What's up?

_goes to pick up kids from school_

**Mark Antony (2 hours ago)**
I'm good! How about you?

**Julius Caesar (30 min ago)**
Hey! I'm doing great! How can I help?

**Julius Caesar (25 min ago)**
Hey, do you want to tell me what the issue is?

**Julius Caesar (20 min ago)**
Smh nvm, I have a meeting at the senate soon. Will check your messages later.

_mutes phone_

**Mark Antony (5 min ago)**
Oh wait! Don't go to the senate please! I was texting you to tell you just that!!! 😭

**Mark Antony (now)**
Uhmmm, you there? 👀

We all know [what happened next](https://en.wikipedia.org/wiki/Ides_of_March)

Consider the following excellent example of a conversation starter:

[![How to start a conversation](https://github.com/user-attachments/assets/72b5e6dd-c4df-4465-91cb-8f243615259f)](https://www.youtube.com/watch?v=Bu8bH2P37kY)

### What did he do right?

Let's break this down:

✅ Starts with a friendly greeting _Hello! How are you?_

✅ Immediately follows up with a description of what's blocking him _I'm under the water..._

✅ Politely asks for help whilst communicating a sense of urgency _Please help me!_

✅ Provides context for the problem he's facing _Here too much raining!_

Jokes aside, these pointers are what differentiate effective remote communicators from the rest. When you're reaching out to someone, make sure you're providing enough context for them to understand what you're asking for. This will save you both time and frustration.

[**Back to ToC** ☝️](#table-of-contents-)

# Real-life Cases

## Case Study: Query Params

### Problem

Here's the source code we found on a real life multimillion dollar website with millions of monthly visitors.

```ts
var str1 =
	contentTypes && contentTypes.length !== 0
		? `&${arrayToQueryString(contentTypes, typeParam)}`
		: '';

var str2 =
	selectedLocations && selectedLocations.length !== 0
		? `&${arrayToQueryString(selectedLocations, locationParam)}`
		: '';
var str3 = selectedSortBy?.length
	? `&${arrayToQueryString(selectedSortBy, sortByParam)}`
	: '';
var str4 = '';
if (selectedDate.startDate) {
	str4 = startDateParam ? `&${startDateParam}=${selectedDate.startDate}` : '';
}
if (selectedDate.endDate) {
	str4 += endDateParam ? `&${endDateParam}=${selectedDate.endDate}` : '';
}
var str5 = selectedCategory?.length
	? `&${arrayToQueryString(selectedCategory, categorieParam)}`
	: '';
var str6 = selectedSeasons?.length
	? `&${arrayToQueryString(selectedSeasons, seasonsParam)}`
	: '';

const allFilterStr = str1 + str2 + str3 + str4 + str5 + str6;

await handleApiRequest(apiUrl, lang, isLoadmore, '', allFilterStr);
```

#### What's the problem?

Ooof where do we start?

-   Uses `var` instead of `let` or `const`
-   Variable names are not descriptive
-   Code is structured in a very imperative way (do this then do that)
-   Lots of repeating code! A helper function that accepts an object of key-value pairs and returns a query string would be much cleaner
-   Not extensible. If you want to add a new filter, you'll have to add `str7` and make sure you update the `allFilterStr` variable
-   Too many parameters are being passed to the `handleApiRequest` function (See [this section for more](#24-when-your-function-has-many-optional-parameters-define-the-param-as-an-object))

## Solution

We can use a helper function that accepts an object of key-value pairs and returns a query string. This will make our code more readable and extensible.

```ts
const objectToQueryString = (obj: Record<string, any>) => {
	return Object.entries(obj)
		.filter(
			([_, value]) =>
				value !== null && value !== undefined && value !== '',
		)
		.map(([key, value]) => {
			if (Array.isArray(value)) {
				return value
					.map(
						(v) =>
							`${encodeURIComponent(key)}=${encodeURIComponent(
								v,
							)}`,
					)
					.join('&');
			}
			return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
		})
		.join('&');
};
```

Now we can use this function to create the query string for the `all` filter.

```ts
const allFilterStr = objectToQueryString({
	[typeParam]: contentTypes,
	[locationParam]: locations,
	// ...
});
```

### What are the benefits of this solution?

-   The code is more readable and easier to maintain
-   The code is more extensible.
-   The code is more testable with better error handling potential.

# Contributors

-   [Tarik Zulfikarpasic](mailto:tarik.zulfikarpasic@pwc.com)
-   [Peter Chen](mailto:peter.wei.chen@pwc.com)
-   [Zaid Hassan](mailto:mohammed.z.zaid@pwc.com)
