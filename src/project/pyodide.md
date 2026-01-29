---
title: Pyodide (Python in the browser)
layout: secondary-page.njk
layoutStyle: one-column
---

This page shows a minimal Pyodide example using a CDN. You can replace the Python code and build an interactive demo. This runs Python live in the browser.

## Demo

### Python Code

The following code is loaded from [demo.py](/static/js/demo.py):

```python
# Calculate statistics on student test scores
scores = [85, 92, 78, 88, 95, 82, 90]
mean_score = sum(scores) / len(scores)
sorted_scores = sorted(scores)
median_score = sorted_scores[len(scores) // 2]

print(f"Test Scores: {scores}")
print(f"Average: {mean_score:.1f}")
print(f"Median: {median_score}")
print(f"Range: {min(scores)} - {max(scores)}")

# Generate Fibonacci sequence
def fibonacci(n):
    a, b = 0, 1
    result = []
    for _ in range(n):
        result.append(a)
        a, b = b, a + b
    return result

fib = fibonacci(10)
print(f"\nFirst 10 Fibonacci numbers: {fib}")

# Create matplotlib visualization
import matplotlib.pyplot as plt
import io
import base64

fig, (ax1, ax2) = plt.subplots(1, 2, figsize=(10, 4))

# Plot 1: Test scores
ax1.bar(range(1, len(scores)+1), scores, color='steelblue')
ax1.axhline(mean_score, color='red', linestyle='--', label=f'Mean: {mean_score:.1f}')
ax1.set_xlabel('Student')
ax1.set_ylabel('Score')
ax1.set_title('Test Scores Distribution')
ax1.legend()
ax1.grid(axis='y', alpha=0.3)

# Plot 2: Fibonacci growth
ax2.plot(fib, marker='o', color='green', linewidth=2)
ax2.set_xlabel('Position')
ax2.set_ylabel('Value')
ax2.set_title('Fibonacci Sequence Growth')
ax2.grid(alpha=0.3)

plt.tight_layout()

# Convert to base64
buf = io.BytesIO()
plt.savefig(buf, format='png', dpi=100, bbox_inches='tight')
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode('utf-8')
img_base64
```

### Run it

<button id="run-pyodide">Run Python Code</button>
<pre id="pyodide-output">(output will appear here)</pre>
<div id="plot-container"></div>

<script>
  (function () {
    const output = document.getElementById('pyodide-output');
    const button = document.getElementById('run-pyodide');
    const plotContainer = document.getElementById('plot-container');

    function log(msg) {
      output.textContent += `\n${msg}`;
    }

    async function run() {
      output.textContent = 'Loading Pyodide…';
      plotContainer.innerHTML = '';

      // Pyodide CDN (no build tooling required)
      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js';
      document.head.appendChild(script);

      await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
      });

      const pyodide = await loadPyodide();
      output.textContent = 'Installing matplotlib…\n';
      
      // Install matplotlib
      await pyodide.loadPackage('matplotlib');
      
      output.textContent = 'Fetching Python code…\n';
      
      // Fetch the Python code from demo.py
      const response = await fetch('/static/py/demo.py');
      const pythonCode = await response.text();
      
      output.textContent = 'Running Python…\n';

      // Capture stdout
      let outputText = '';
      pyodide.setStdout({ 
        batched: (text) => { outputText += text + '\n'; }
      });

      // Run the Python code from the file
      await pyodide.runPythonAsync(pythonCode);

      output.textContent = outputText;
      log('Tip: Edit the Python code in /src/static/js/demo.py and re-run!');
      
      // Get the base64 image from Python
      const imgData = await pyodide.runPythonAsync('img_base64');
      
      // Display the plot
      const img = document.createElement('img');
      img.src = 'data:image/png;base64,' + imgData;
      img.style.maxWidth = '100%';
      img.style.marginTop = '20px';
      img.style.border = '1px solid #ddd';
      img.style.borderRadius = '8px';
      plotContainer.appendChild(img);
    }

    button.addEventListener('click', () => {
      run().catch((err) => {
        output.textContent = 'Error:\n' + String(err);
      });
    });
  })();
</script>

## Notes

- For anything beyond simple demos, consider using Pyodide packages (or `micropip`) and keep your UI small and focused.
- If you need to load datasets, consider adding them to `src/static/` and fetching them.
