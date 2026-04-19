import { getCollection } from 'astro:content';

export async function GET() {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  const siteUrl = 'https://diy-kurashi-note.com';

  const categories = ['diy', 'gadget', 'kurashi', 'gundam', 'ai'];

  const staticPages = [
    { url: `${siteUrl}/`, priority: '1.0', changefreq: 'daily' },
    { url: `${siteUrl}/about/`, priority: '0.6', changefreq: 'monthly' },
    { url: `${siteUrl}/contact/`, priority: '0.5', changefreq: 'monthly' },
    { url: `${siteUrl}/privacy-policy/`, priority: '0.3', changefreq: 'yearly' },
    ...categories.map(cat => ({
      url: `${siteUrl}/category/${cat}/`,
      priority: '0.8',
      changefreq: 'weekly',
    })),
  ];

  const postEntries = posts.map(post => ({
    url: `${siteUrl}/blog/${post.slug}/`,
    priority: '0.7',
    changefreq: 'monthly',
    lastmod: (post.data.updatedDate ?? post.data.pubDate).toISOString().split('T')[0],
  }));

  const allEntries = [...staticPages, ...postEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries.map(entry => `  <url>
    <loc>${entry.url}</loc>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>${'lastmod' in entry && entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ''}
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
