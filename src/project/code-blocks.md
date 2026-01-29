---
title: Code Blocks + Highlighting
layout: secondary-page.njk
layoutStyle: one-column
---

This page demonstrates fenced code blocks with syntax highlighting.

## Python

```python
import pandas as pd

df = pd.DataFrame({"a": [1, 2, 3], "b": [4, 5, 6]})
print(df.describe())
```

## JavaScript

```js
const items = [1, 2, 3];
const squares = items.map((n) => n * n);
console.log(squares);
```

## R

```r
x <- c(1, 2, 3, 4)
mean(x)
```

## Generic / untyped

```
This block has no language.
```

## Bash

```bash
echo "Hello, world!"
ls -l
```

## Table inside Markdown

| Language   | Example Syntax         |
|------------|-----------------------|
| Python     | `print("hi")`         |
| JavaScript | `console.log("hi")`   |
| Bash       | `echo "hi"`           |

## Tips

- Use the right language for syntax highlighting.
- Indent code blocks inside lists by four spaces.
- You can copy code blocks directly from the page.

---

Try mixing code and text for tutorials:

1. Explain the step.
2. Show the code:
	```python
	# Step 1: Import
	import numpy as np
	```
3. Add output blocks using triple backticks with no language.
	```
	Output: [1 2 3]
	```
