require("babel-register")({
  presets: ["es2015", "react"]
});
 
const router = require("./sitemap-generator.js").default;
const Sitemap = require("react-router-sitemap").default;

function generateSitemap() {
    return (
      new Sitemap(router)
          .build("https://sj-log.netlify.com")
          .save("./public/sitemap.xml")
    );
}

generateSitemap();