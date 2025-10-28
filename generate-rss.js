// generate-sitemap-manual.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://ajinkyainamdar.vercel.app";

// Manually specify your blog posts here
const MANUAL_BLOG_POSTS = [
  // Add your posts like this:
  // { id: "1", slug: "my-first-post", date: "2024-01-01" },
  // { id: "2", slug: "another-post", date: "2024-01-02" },
];

function generateSitemap() {
  const blogPosts = MANUAL_BLOG_POSTS;
  
  // Static pages
  const staticPages = ["", "projects", "cv", "contact", "blog"];
  const staticUrls = staticPages.map(page => {
    const priority = page === "blog" ? "0.9" : "1.0";
    const pathPart = page ? `/${page}` : "";
    return `
  <url>
    <loc>${BASE_URL}${pathPart}</loc>
    <changefreq>weekly</changefreq>
    <priority>${priority}</priority>
  </url>`;
  }).join("");

  // Blog posts
  const blogUrls = blogPosts.map(post => `
  <url>
    <loc>${BASE_URL}/blog/${post.slug}/${post.id}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join("");

  // Final sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${blogUrls}
</urlset>`;

  const outputPath = path.join(__dirname, "public", "sitemap.xml");
  const publicDir = path.dirname(outputPath);
  
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  fs.writeFileSync(outputPath, sitemap);
  console.log(`✅ Sitemap generated with ${blogPosts.length} manual blog posts!`);
}

generateSitemap();