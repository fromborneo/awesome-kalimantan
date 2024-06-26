module.exports = eleventyConfig => {
    const markdownItOpts = {
      html: true,
      breaks: true,
      linkify: true
    }
  
    const markdownIt = require('markdown-it')
  
    const markdownLib = markdownIt(markdownItOpts).use(markdownItCheckbox)
  
    eleventyConfig.addPassthroughCopy('css')
    eleventyConfig.setLibrary('md', markdownLib)
  
    return {
      pathPrefix: "/",
      passthroughFileCopy: true
    }
  }