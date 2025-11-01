// generate-blogs-sitemap.js

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 📁 Setup dirname (for ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🌍 Your live site URL
const BASE_URL = "https://ajinkyainamdar.vercel.app";

// 🗂 Path to your blog data file
const blogDataPath = path.join(__dirname, "src", "data", "blogData.js");

// 🧠 Function to extract blog data using regex
function getBlogPosts() {
  try {
    const content = fs.readFileSync(blogDataPath, "utf8");

    // 🔍 Regex to extract id, slug, and date from your blog objects
    const regex =
      /id:\s*['"`]?(\d+)['"`]?.*?slug:\s*['"`]([^'"`]+)['"`].*?date:\s*['"`]([^'"`]+)['"`]/gs;

    const posts = [];
    let match;

    while ((match = regex.exec(content)) !== null) {
      posts.push({
        id: match[1],
        slug: match[2],
        date: match[3],
      });
    }

    console.log(`📰 Found ${posts.length} blog posts`);
    return posts;
  } catch (err) {
    console.error("❌ Error reading blogData.js:", err);
    return [];
  }
}

// 🧾 Generate sitemap XML
function generateSitemap() {
  const posts = getBlogPosts();

  if (posts.length === 0) {
    console.warn("⚠️ No blogs found! Check blogData.js structure or regex.");
  }

  const urls = posts
    .map(
      (post) => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}/${post.id}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
    )
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const outputDir = path.join(__dirname, "public");
  const outputFile = path.join(outputDir, "blogs-sitemap.xml");

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(outputFile, xml, "utf8");
  console.log("✅ blogs-sitemap.xml generated successfully!");
}

// 🚀 Run script
generateSitemap();
process.exit(0);
