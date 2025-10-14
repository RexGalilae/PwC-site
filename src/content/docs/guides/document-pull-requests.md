---
title: Document Pull Requests
description: Ensure your pull requests are well-documented.
severity: medium
tags: devOps
---

In order to make the review process as smooth as possible and avoid silly UI bugs being reported, here are some guidelines to follow:

- Submit screenshots/videos from your local environment of the components you've worked on, preferably with different kinds of settings (e.g. behavior in RTL vs LTR mode, how they look on different kinds of devices - 4K monitors, desktops, tablets and mobile, etc). This will allow you and the PR reviewers to compare your output with the design file (Figma, XD, etc) and catch a lot of UI defects early on.
- Connect your PRs with a corresponding task/bug from Jira or Azure DevOps where possible. Later on this could be very useful in explaining why a specific code change was made.
- Specify meaningful commit messages, and reuse the commit messages to generate your PR descriptions. Some version control platforms like GitHub will have an option to generate PR descriptions based on the included commits, and this can be very useful for producing content like release notes.
