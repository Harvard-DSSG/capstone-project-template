---
title: Mermaid Diagrams
layout: secondary-page.njk
layoutStyle: one-column
---

Write Mermaid diagrams using fenced blocks labeled `mermaid`.

```mermaid
flowchart TD
  A[Research Question] --> B[Collect Sources]
  B --> C[Analyze]
  C --> D[Publish]
```

## Notes

- Mermaid is rendered client-side from a CDN.
- If you don’t see a diagram, check your browser console for errors.

## Sequence Diagram

```mermaid
sequenceDiagram
  participant User
  participant App
  User->>App: Clicks button
  App-->>User: Shows result
```

## Pie Chart

```mermaid
pie
  title Project Types
  "Research" : 40
  "Teaching" : 30
  "Events" : 30
```

---

**Tip:** See the [Mermaid docs](https://mermaid-js.github.io/) for more diagram types.
