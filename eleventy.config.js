import { HtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function (eleventyConfig) {
  eleventyConfig.addPlugin(HtmlBasePlugin);

  eleventyConfig.addFilter("toISOString", (dateObj) =>
    new Date(dateObj).toISOString(),
  );

  eleventyConfig.addPassthroughCopy({ "src/public": "/" });

  eleventyConfig.setServerOptions({
    watch: ["_site/assets/css/*.css", "_site/assets/js/*.js"],
  });

  eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    // output image formats
    formats: ["avif", "webp", "jpeg"],

    // output image widths
    widths: ["auto"],

    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
