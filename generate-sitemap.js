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

// 🌍 Your live domain
const BASE_URL = "https://ajinkyainamdar.vercel.app";

function generateSitemap() {
  // ✅ Static pages (added /blog main page)
  const staticPages = ["", "projects", "cv", "contact", "blog"];

  const staticUrls = staticPages
    .map((page) => {
      const priority = page === "blog" ? "0.9" : "1.0";
      return `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join("");

  // 📝 Blog posts (dynamic)
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

// 🚀 Auto-regenerate sitemap whenever blogData.js changes
fs.watchFile(blogDataPath, (curr, prev) => {
  console.log("🔄 blogData.js changed — regenerating sitemap...");
  generateSitemap();
});

// Initial generation
generateSitemap();
