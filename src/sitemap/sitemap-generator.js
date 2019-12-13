require("babel-register")({
    presets: ["es2015", "react"]
  });
   
  require.extensions['.scss'] = function () {
    return null;
  };
  
  require.extensions['.png'] = function () {
    return null;
  };
  
  require.extensions['.svg'] = function () {
    return null;
  };
  
  require.extensions['.jpg'] = function () {
    return null;
  };


  const router = require("./sitemap-routes").default;
  const Sitemap = require("react-router-sitemap").default;
  
  function generateSitemap() {
      return (
        new Sitemap(router)
            .build("https://sj-log.netlify.com")
            .save("./public/sitemap.xml")
      );
  }
  
  generateSitemap();