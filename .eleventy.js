module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/reset.css");
    eleventyConfig.addPassthroughCopy("src/bundle.css");
    eleventyConfig.addPassthroughCopy("src/bundle.js");

    return {
        dir: {
            input: "src",
            output: "dist"
        }
    };
};