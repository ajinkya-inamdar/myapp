// generate-pages-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://ajinkyainamdar.vercel.app";

const staticPages = ["", "projects", "cv", "blog", "contact"];

const urls = staticPages
  .map(
    (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${page === "" ? "1.0" : "0.9"}</priority>
  </url>`
  )
  .join("");

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

const publicDir = path.join(__dirname, "public");
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

fs.writeFileSync(path.join(publicDir, "pages-sitemap.xml"), sitemapXml, "utf8");

console.log("✅ pages-sitemap.xml generated successfully!");
