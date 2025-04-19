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
  "/services/mobile-app-development",
];

const BASE_URL = "https://inventionminds.com";

const getCurrentDate = () => {
  return new Date().toISOString().split("T")[0]; 
};

const getChangeFreq = (route) => {
  if (route === "/") return "monthly";
  if (route.includes("/services")) return "weekly";
  if (route === "/about" || route === "/contact-us" || route === "/career")
    return "yearly";
  return "monthly";
};

const getPriority = (route) => {
  if (route === "/") return "1.0";
  if (route === "/services" || route === "/contact-us") return "0.9";
  if (route.includes("/services/")) return "0.8";
  if (route === "/about" || route === "/career") return "0.7";
  return "0.5";
};

const generateSitemap = () => {
  const urls = routes.map((route) => {
    const loc = `${BASE_URL}${route}`;
    const lastmod = getCurrentDate();
    const changefreq = getChangeFreq(route);
    const priority = getPriority(route);

    return `<url>
      <loc>${loc}</loc>
      <lastmod>${lastmod}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>`;
  });

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