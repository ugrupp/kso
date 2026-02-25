import { HtmlBasePlugin } from "@11ty/eleventy";
import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import svgSprite from "eleventy-plugin-svg-sprite";

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
    // output image widths
    widths: ["auto"],

    htmlOptions: {
      imgAttributes: {
        loading: "lazy",
        decoding: "async",
      },
    },
  });

  eleventyConfig.addPlugin(svgSprite, {
    path: "./src/assets/svg",
  });

  return {
    dir: {
      input: "src",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
