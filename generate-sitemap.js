import fs from "fs";
import path from "path";

const BASE_URL = "https://ajinkyainamdar.vercel.app";

const pages = ["", "projects", "cv", "contact", "blog"];

const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.9"}</priority>
  </url>`
  )
  .join("")}
</urlset>`;

fs.writeFileSync("public/pages-sitemap.xml", sitemapContent);
console.log("✅ pages-sitemap.xml created!");
