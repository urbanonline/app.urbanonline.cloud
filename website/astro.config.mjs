// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'

export default defineConfig({
	site: 'https://app.urbanonline.cloud',
	integrations: [
		starlight({
			title: {
				de: 'Urban Feed Monitor App',
				en: 'Urban Feed Monitor App',
			},
			favicon: './urban.ico',
			customCss: [
				'./src/styles/lite-yt-embed.css',
				'./src/styles/colors.css',
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
			plugins: [
				starlightSidebarTopics([
					{
						label: {
							de: 'Doku für Anwender',
							en: 'User documentation'
						},
						link: '/guide/user/',
						icon: 'open-book',
						items: [
							{
								label: 'Installation der App',
								translations: {
									en: 'Installation of app',
								},
								items: [{ autogenerate: { directory: 'guide/user' } }]},
						],
					},
					{
						label: {
							de:	'Doku für Service',
							en:	'Service documentation',							
						},
						link: '/guide/service/',
						icon: 'open-book',
						items: [
							{
								label: 'Installation Cloud',
								translations: {
									en: 'Installation of cloud',
								},
								items: [{ autogenerate: { directory: 'guide/service' } }]},
						],
					},
					{
						label: {
							de: 'FAQ',
							en: 'FAQ',
						},
						link: '/faq',
						id: 'faq',
						icon: 'information',
						items: [ 'faq' ],
					},
				],
				{
					exclude: [ 'guide/toc' ]
				},
			),
	    	],
			components: {
				// Override the default `Sidebar` component with a custom one.
				Sidebar: './src/components/Sidebar.astro',
			},
		}),
	],
});
