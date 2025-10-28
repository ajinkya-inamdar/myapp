// generate-rss.js
import fs from "fs";

// 💡 Define static and blog pages (same as sitemap)
const staticPages = [
  { loc: "", title: "Home" },
  { loc: "projects", title: "Projects" },
  { loc: "cv", title: "CV" },
  { loc: "contact", title: "Contact" },
];

// 📝 Blog posts (same as in sitemap.js)
const blogPosts = [
  {
    slug: "why-netflix-no-vacation-policy-works",
    title: "Why Netflix’s No Vacation Policy Works",
    date: "2025-06-12",
  },
  {
    slug: "leadership-means-breaking-barriers",
    title: "Leadership Means Breaking Barriers",
    date: "2025-08-17",
  },
];

// 🌍 Your live website domain
const baseUrl = "https://ajinkyainamdar.vercel.app";

// 🧱 Combine static and blog items
const allPages = [
  ...staticPages.map((page) => ({
    url: `${baseUrl}/${page.loc}`,
    title: page.title,
    date: new Date().toISOString(),
    description: `Visit ${page.title} page on Ajinkya Inamdar’s website.`,
  })),
  ...blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    title: post.title,
    date: post.date,
    description: `Read ${post.title} on Ajinkya Inamdar’s blog.`,
  })),
];

// 📰 Create RSS items
const rssItems = allPages
  .map(
    (item) => `
  <item>
    <title>${item.title}</title>
    <link>${item.url}</link>
    <description>${item.description}</description>
    <pubDate>${new Date(item.date).toUTCString()}</pubDate>
  </item>`
  )
  .join("\n");

// 🗞️ Complete RSS XML
const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
<channel>
  <title>Ajinkya Inamdar - Website Updates</title>
  <link>${baseUrl}</link>
  <description>Stay updated with new pages and blogs from Ajinkya Inamdar’s website.</description>
  ${rssItems}
</channel>
</rss>`;

// ✍️ Write RSS feed to /public folder
fs.writeFileSync("./public/rss.xml", rssFeed, "utf8");
console.log("✅ RSS feed (all pages + blogs) generated successfully!");
