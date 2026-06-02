// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightSidebarTopics from 'starlight-sidebar-topics'
import starlightSidebarSwipe from 'starlight-sidebar-swipe'
import starlightUiTweaks from 'starlight-ui-tweaks'

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
				'./src/styles/ui-tweaks.css',
			],
			head: [
				{
					tag: "script",
					attrs: {
						src: "/scripts/lite-yt-embed.js"
					},
				},
			],
			defaultLocale: 'root',
			locales: {
				root: {
					label: 'Deutsch',
					lang: 'de'
				},
				en: {
					label: 'English',
				},
				es: {
					label: 'Español',
				},
				fr: {
					label: 'Français',
				},
				ru: {
					label: 'Русский',
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
							en: 'User documentation',
							es: 'Documentación para usuarios',
							fr: 'Documentation utilisateur',
							ru: 'Документация для пользователей',
						},
						link: '/guide/user/',
						icon: 'open-book',
						items: [
							{
								label: 'Installation der App',
								translations: {
									en: 'Installation of app',
									es: 'Instalación de la aplicación',
									fr: 'Installation de l\'application',
									ru: 'Установка приложения',
								},
								items: [{ autogenerate: { directory: 'guide/user' } }]},
						],
					},
					{
						label: {
							de: 'Doku für Service',
							en: 'Service documentation',
							es: 'Documentación de servicio',
							fr: 'Documentation service',
							ru: 'Документация для сервиса',
						},
						link: '/guide/service/',
						icon: 'open-book',
						items: [
							{
								label: 'Installation Cloud',
								translations: {
									en: 'Installation of cloud',
									es: 'Instalación de la nube',
									fr: 'Installation du cloud',
									ru: 'Установка облака',
								},
								items: [{ autogenerate: { directory: 'guide/service' } }]},
						],
					},
					{
						label: {
							de: 'FAQ',
							en: 'FAQ',
							es: 'FAQ',
							fr: 'FAQ',
							ru: 'FAQ',
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
				starlightSidebarSwipe(),
				starlightUiTweaks({
					navbarLinks: [
						{
							label: "Dokumentation",
							href: "/guide/user/",
						},
						{
							label: "FAQ",
							href: "/faq/",
						},
					],
					locales: {
						en: {
							navbarLinks: [
								{
									label: "Documentation",
									href: "/en/guide/user/",
								},
								{
									label: "FAQ",
									href: "/faq/",
								},
							],
						},
						es: {
							navbarLinks: [
								{
									label: "Documentación",
									href: "/es/guide/user/",
								},
								{
									label: "FAQ",
									href: "/faq/",
								},
							],
						},
						fr: {
							navbarLinks: [
								{
									label: "Documentation",
									href: "/fr/guide/user/",
								},
								{
									label: "FAQ",
									href: "/faq/",
								},
							],
						},
						ru: {
							navbarLinks: [
								{
									label: "Документация",
									href: "/ru/guide/user/",
								},
								{
									label: "FAQ",
									href: "/faq/",
								},
							],
						},
					},
				}),
			],
			components: {
				Sidebar: './src/components/Sidebar.astro',
			},
		}),
	],
});