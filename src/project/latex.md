---
title: LaTeX Math (KaTeX)
layout: secondary-page.njk
layoutStyle: one-column
---

KaTeX auto-renders math client-side.

## Inline math

Euler’s identity: $e^{i\pi} + 1 = 0$.

## Display math

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}
$$

## Notes

- Delimiters supported: `$...$`, `$$...$$`, `\\(...\\)`, `\\[...\\]`.
- If you need equations inside code blocks, KaTeX won’t touch them.

## More Examples

### Matrices

$$
\begin{bmatrix}
1 & 2 \\
3 & 4
\end{bmatrix}
$$

### Aligned equations

$$
\begin{align*}
a^2 + b^2 &= c^2 \\
e^{i\pi} + 1 &= 0
\end{align*}
$$

### Greek letters

$\alpha, \beta, \gamma, \delta$

---

**Tip:** For large equations, use display mode (`$$...$$`).
