/**
 * next-sitemap configuration
 * Docs: https://github.com/iamvishnusankar/next-sitemap
 */

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || 'https://example.com';

/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl,
	generateRobotsTxt: true,
	outDir: 'public',
	changefreq: 'weekly',
	priority: 0.7,
	exclude: ['/login'],
};
