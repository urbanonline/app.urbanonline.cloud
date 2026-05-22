// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	site: 'https://setup.urbanonline.cloud',
	integrations: [
		starlight({
			title: {
				de: 'Urban Feed Monitor App',
				en: 'Urban Feed Monitor App',
			},
			favicon: './urban.ico',
			customCss: [
				'./src/styles/lite-yt-embed.css',
			],
			head: [
				{
					tag: "script",
					attrs: {
						src: "/scripts/lite-yt-embed.js"
					},
				},
			],
			// Set German as the default language for this site.
			defaultLocale: 'root',
			locales: {
				// German docs in `src/content/docs/`
				root: {
					label: 'Deutsch',
					lang: 'de'
				},
				// English docs in `src/content/docs/en/`
				en: {
					label: 'English',
				},
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
					label: 'Setup',
					items: [
						{ label: 'Alma Pro', slug: 'setup/alma-pro' },
					],
				},
			],
		}),
	],
});
