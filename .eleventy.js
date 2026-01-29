const markdownIt = require("markdown-it");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const { createRenderer } = require("ipynb2html");
const { Document } = require("nodom");
const path = require("node:path");
const fs = require("node:fs");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(syntaxHighlight);

  // Allow raw HTML in Markdown (needed for iframe embeds)
  eleventyConfig.setLibrary(
    "md",
    markdownIt({
      html: true,
      linkify: true,
      typographer: true,
    })
  );

  // Static assets
  eleventyConfig.addPassthroughCopy({ "src/static": "static" });

  // Render Jupyter notebooks to HTML during the build
  eleventyConfig.addTemplateFormats("ipynb");
  eleventyConfig.addExtension("ipynb", {
    outputFileExtension: "html",
    getData: (inputPath) => {
      const baseName = path.basename(inputPath, ".ipynb");
      const title = baseName
        .replace(/[-_]+/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      return {
        title,
        layout: "notebook.njk",
      };
    },
    compile: async (inputContent, inputPath) => {
      const renderer = createRenderer(new Document());

      return async () => {
        const raw = inputContent && inputContent.trim().length > 0
          ? inputContent
          : fs.readFileSync(inputPath, "utf8");

        return renderer(JSON.parse(raw)).outerHTML;
      };
    },
  });

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_templates",
      data: "_data",
      output: "_site",
    },
  };
};
