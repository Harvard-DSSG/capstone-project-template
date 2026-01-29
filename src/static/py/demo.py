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
ax1.bar(range(1, len(scores) + 1), scores, color="steelblue")
ax1.axhline(mean_score, color="red", linestyle="--", label=f"Mean: {mean_score:.1f}")
ax1.set_xlabel("Student")
ax1.set_ylabel("Score")
ax1.set_title("Test Scores Distribution")
ax1.legend()
ax1.grid(axis="y", alpha=0.3)

# Plot 2: Fibonacci growth
ax2.plot(fib, marker="o", color="green", linewidth=2)
ax2.set_xlabel("Position")
ax2.set_ylabel("Value")
ax2.set_title("Fibonacci Sequence Growth")
ax2.grid(alpha=0.3)

plt.tight_layout()

# Convert to base64
buf = io.BytesIO()
plt.savefig(buf, format="png", dpi=100, bbox_inches="tight")
buf.seek(0)
img_base64 = base64.b64encode(buf.read()).decode("utf-8")
img_base64
