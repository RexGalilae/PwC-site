---
title: Reusable API Wrappers
description: Create reusable API wrappers.
severity: medium
tags: API, integrations
---

Our projects typically deal with a large number of integrations, and while we may use different HTTP clients for handling API calls (e.g. axios, fetch() etc), it's typically a good idea to create our own wrappers around those.

Doing this will standardize our API interactions in several ways:

- Custom API headers such as bearer tokens can be automatically passed in every API call
- API exceptions and errors can be handled in more predictable ways
- Retry logic can be easily added (with custom delays, repetitions and conditions)
