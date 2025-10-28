// generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// ESM-friendly __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Extract blog post data from blogData.js (ignoring image imports)
let blogPosts = [];
try {
  const blogDataText = fs.readFileSync(
    path.join(__dirname, "src/data/blogData.js"),
    "utf8"
  );

  // Extract slugs and dates using regex
  const matches = [
    ...blogDataText.matchAll(
      /slug:\s*['"`](.*?)['"`],[\s\S]*?date:\s*['"`](.*?)['"`]/g
    ),
  ];
  blogPosts = matches.map(([_, slug, date]) => ({ slug, date }));
} catch (err) {
  console.error("⚠️ Could not load blogData.js. Check path or format.", err);
}

// 🌍 Replace with your live domain (no trailing slash)
const BASE_URL = "https://ajinkyainamdar.vercel.app";

function generateSitemap() {
  // ✅ Add main pages and blog listing page
  const staticPages = ["", "projects", "cv", "contact", "blog"];

  // 🧱 Generate URLs for static pages
  const staticUrls = staticPages
    .map(
      (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>`
    )
    .join("");

  // 📝 Generate URLs for each blog post
  const blogUrls = blogPosts
    .map(
      (post) => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  // 🗺️ Combine all into sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls}
${blogUrls}
</urlset>`;

  // ✍️ Write sitemap to /public
  fs.writeFileSync("./public/sitemap.xml", sitemap);
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
