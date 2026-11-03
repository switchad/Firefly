import type { APIRoute } from "astro";

export const prerender = true;

const base = import.meta.env.BASE_URL;

const robotsTxt = `
User-agent: *
Disallow: ${base}_astro/
Disallow: ${base}archive/?tag=
Disallow: ${base}archive/?category=
Disallow: ${base}archive/?uncategorized=

Sitemap: ${new URL(`${base}sitemap-index.xml`, import.meta.env.SITE).href}
`.trim();

export const GET: APIRoute = () => {
	return new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
};
