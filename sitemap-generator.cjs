const fs = require("fs");
const path = require("path");

const routes = [
  "/", 
  "/about", 
  "/services", 
  "/contact-us", 
  "/career", 
  "/services/seo", 
  "/services/digital-marketing", 
  "/services/web-development", 
  "/services/ui-ux-design", 
  "/services/social-media", 
  "/services/creative-content", 
  "/services/responsive-design", 
  "/services/branding", 
  "/services/mobile-app-development"
];

// Base URL of your website
const BASE_URL = "https://www.yourwebsite.com";

// Generate the sitemap content
const generateSitemap = () => {
  const urls = routes.map(
    (route) =>
      `<url>
         <loc>${BASE_URL}${route}</loc>
       </url>`
  );

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join("\n")}
</urlset>`;
};

// Write the sitemap to a file
const sitemapContent = generateSitemap();
const outputPath = path.join(__dirname, "public", "sitemap.xml");

fs.writeFileSync(outputPath, sitemapContent, "utf8");
console.log(`Sitemap generated at: ${outputPath}`);
