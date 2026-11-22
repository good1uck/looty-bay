const pathPrefix = process.env.PATH_PREFIX || "/looty-bay";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/css": "css" });

  eleventyConfig.addCollection("enGuides", (api) =>
    api
      .getFilteredByGlob("src/en/guides/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99))
  );
  eleventyConfig.addCollection("zhGuides", (api) =>
    api
      .getFilteredByGlob("src/zh/guides/*.md")
      .sort((a, b) => (a.data.order || 99) - (b.data.order || 99))
  );

  eleventyConfig.addFilter("isoDate", (value) => {
    if (!value) return "";
    const d = value instanceof Date ? value : new Date(value);
    return d.toISOString().slice(0, 10);
  });

  eleventyConfig.addFilter("year", () => new Date().getFullYear());

  eleventyConfig.addFilter("ui", (key, lang, i18n) => {
    const pack = i18n[lang] || i18n.en;
    return pack[key] || i18n.en[key] || key;
  });

  eleventyConfig.addFilter("altPath", function (translationKey, targetLang) {
    const i18n = this.ctx.i18n || this.eleventy?.env;
    // pages map lives on i18n.paths
    const paths = (this.ctx.i18n && this.ctx.i18n.paths) || {};
    const entry = paths[translationKey];
    if (entry && entry[targetLang]) return entry[targetLang];
    return targetLang === "zh" ? "/zh/" : "/en/";
  });

  eleventyConfig.addFilter("pageLang", (lang) => (lang === "zh" ? "zh-Hans" : "en"));

  // Prefix root-relative href/src for GitHub project Pages.
  eleventyConfig.addTransform("pathPrefixHref", function (content) {
    if (typeof content !== "string") return content;
    if (!this.page?.outputPath?.endsWith(".html")) return content;
    const prefix = (pathPrefix || "/").replace(/\/$/, "");
    if (!prefix) return content;
    return content.replace(/(href|src)="(\/[^"]*)"/g, (match, attr, path) => {
      if (path.startsWith("//")) return match;
      if (path === prefix || path.startsWith(`${prefix}/`)) return match;
      return `${attr}="${prefix}${path}"`;
    });
  });

  return {
    pathPrefix,
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"],
  };
}
