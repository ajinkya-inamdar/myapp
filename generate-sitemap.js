// generate-sitemap.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Setup __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your blog data
const blogDataPath = path.join(__dirname, "src/data/blogData.js");

// Extract blog info (id, slug, date) without importing images
let blogPosts = [];
try {
  const blogDataText = fs.readFileSync(blogDataPath, "utf8");

  // Match id, slug, and date with regex
  const matches = [
    ...blogDataText.matchAll(
      /id:\s*['"`](.*?)['"`],[\s\S]*?slug:\s*['"`](.*?)['"`],[\s\S]*?date:\s*['"`](.*?)['"`]/g
    ),
  ];

  blogPosts = matches.map(([_, id, slug, date]) => ({
    id,
    slug,
    date,
  }));
} catch (err) {
  console.error("⚠️ Could not read blogData.js file:", err);
}

// 🌍 Your live domain (change if needed)
const BASE_URL = "https://ajinkyainamdar.vercel.app";

function generateSitemap() {
  // ✅ Static pages
  const staticPages = ["", "projects", "cv", "contact"];

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

  // 📝 Blog pages
  const blogUrls = blogPosts
    .map(
      (post) => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}/${post.id}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  // 🗺️ Final sitemap XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls}
${blogUrls}
</urlset>`;

  // ✍️ Write sitemap.xml inside /public
  const outputPath = path.join(__dirname, "public", "sitemap.xml");
  fs.writeFileSync(outputPath, sitemap);
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
