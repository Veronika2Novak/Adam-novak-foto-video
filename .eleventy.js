module.exports = function(eleventyConfig) {
    
    eleventyConfig.addPassthroughCopy("photos");
    eleventyConfig.addPassthroughCopy("css");
    eleventyConfig.addPassthroughCopy("logos");

    return {
        // možné formáty šablon
        templateFormats: ["njk", "html", "md"],
        // jako šablonovací jazyk zvolíme Nunjucks`
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dataTemplateEngine: "njk",
      }
    
   };
   