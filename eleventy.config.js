import { HtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addFilter("toISOString", (dateObj) =>
    new Date(dateObj).toISOString(),
  );

  eleventyConfig.addPassthroughCopy({ "src/public": "/" });

  eleventyConfig.setServerOptions({
    watch: ["_site/assets/css/*.css", "_site/assets/js/*.js"],
  });

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
