document.addEventListener("DOMContentLoaded", () => {
  if (typeof mermaid === "undefined") return;

  // Convert fenced blocks like ```mermaid to Mermaid-friendly containers.
  const codeBlocks = document.querySelectorAll("pre code.language-mermaid");
  for (const code of codeBlocks) {
    const pre = code.closest("pre");
    if (!pre) continue;

    const diagram = document.createElement("pre");
    diagram.className = "mermaid";
    diagram.textContent = code.textContent;
    pre.replaceWith(diagram);
  }

  mermaid.initialize({ startOnLoad: true });
});
