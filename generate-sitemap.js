import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// 🔧 Setup dirname (for ES Modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🌍 Your live site URL
const BASE_URL = "https://ajinkyainamdar.vercel.app";

// 🗂 Path to your blog data file
const blogDataPath = path.join(__dirname, "src", "data", "blogData.js");

// 🧠 Function to safely parse blog data (no imports, just regex)
function getBlogPosts() {
  try {
    const fileContent = fs.readFileSync(blogDataPath, "utf8");

    // Capture id, slug, and date fields
    const regex =
      /id:\s*['"`]?(\d+)['"`]?.*?slug:\s*['"`]([^'"`]+)['"`].*?date:\s*['"`]([^'"`]+)['"`]/gs;

    const posts = [];
    let match;
    while ((match = regex.exec(fileContent)) !== null) {
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

// 🧾 Function to generate sitemap content
function generateSitemap() {
  const blogPosts = getBlogPosts();

  // Static site pages
  const staticPages = ["", "projects", "cv", "contact", "blog"];
  const staticUrls = staticPages
    .map(
      (page) => `
  <url>
    <loc>${BASE_URL}/${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>${page === "" ? "1.0" : "0.9"}</priority>
  </url>`
    )
    .join("");

  // Blog URLs
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

  // Full XML
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset 
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticUrls}
${blogUrls}
</urlset>`;

  // Write to /public/sitemap.xml
  const outputDir = path.join(__dirname, "public");
  const outputFile = path.join(outputDir, "sitemap.xml");

  if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

  fs.writeFileSync(outputFile, sitemapXml, "utf8");
  console.log("✅ Sitemap successfully created at:", outputFile);
}

// 🚀 Run once and exit
generateSitemap();
process.exit(0);
