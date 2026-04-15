// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://setup.urbanonline.cloud',
	integrations: [
		starlight({
			title: {
				de: 'Einrichtung der Urban App Alma Pro',
				en: 'Setup: Urban App Alma Pro',
			},
			social: [
				{
					icon: 'facebook',
					label: 'Facebook',
					href: 'https://www.facebook.com/urbanonline',
				},
				{
					icon: 'instagram',
					label: 'Instagram',
					href: 'https://www.instagram.com/urban_fuetterungstechnik/',
				},
				{
					icon: 'youtube',
					label: 'YouTube',
					href: 'https://www.youtube.com/user/calffeeding',
				},
				{
					icon: 'tiktok',
					label: 'TikTok',
					href: 'https://www.tiktok.com/@urban_fuetterungstechnik',
				},
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
