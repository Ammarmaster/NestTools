const fs = require('fs');

const content = fs.readFileSync('public/sitemap.xml', 'utf8').trim();

if (!content.startsWith('<?xml version="1.0" encoding="UTF-8"?>')) {
  console.error('Error: Missing XML declaration');
  process.exit(1);
}

if (!content.endsWith('</urlset>')) {
  console.error('Error: Missing closing </urlset> tag');
  process.exit(1);
}

const unescapedAmp = content.match(/&(?!amp;|lt;|gt;|quot;|apos;)/g);
if (unescapedAmp) {
  console.error('Error: Found unescaped ampersands:', unescapedAmp.length);
  process.exit(1);
}

const urlMatches = content.match(/<url>/g);
const locMatches = content.match(/<loc>https:\/\/toolnest\.jobsio\.in[^<]*<\/loc>/g);

console.log('SUCCESS: Sitemap validation passed!');
console.log('Total URLs:', urlMatches ? urlMatches.length : 0);
console.log('Total valid loc entries:', locMatches ? locMatches.length : 0);
console.log('Unescaped entities: 0');
console.log('File size:', (content.length / 1024).toFixed(1), 'KB');
