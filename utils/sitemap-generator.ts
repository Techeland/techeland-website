// lightweight sitemap generator for export-time usage or CI
import fs from "fs";

export function writeSitemap(urls: string[], outPath = "./public/sitemap.xml") {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls
    .map((u) => ` <url><loc>${u}</loc></url>`)
    .join("\n")}\n</urlset>`;
  fs.writeFileSync(outPath, xml);
}
