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
						link: '/guide/',
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
				starlightSidebarSwipe(),
				starlightUiTweaks({
					navbarLinks: [
						{
							label: "Dokumentation",
							href: "/guide/",
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
									href: "/en/guide/",
								},
								{
									label: "FAQ",
									href: "/faq/",
								},
							],
            			},
          			},
					footer: {
						showSocialIcons: false,
						copyright: "Urban GmbH & Co. KG. Alle Rechte vorbehalten.",
						firstColumn: {
							title: "Unternehmen",
							links: [
								{
									label: "Über Urban",
									href: "https://www.urbanonline.de/ueber-urban",
								},
    							{
									label: "Mitarbeiter",
									href: "https://www.urbanonline.de/ueber-urban/mitarbeiter"
								},
    							{
									label: "Karriere und Ausbildung",
									href: "https://www.urbanonline.de/ueber-urban/karriere-und-ausbildung"
								}
							],
						},
						secondColumn: {
      						title: "Produkte",
      						links: [
    							{
									label: "Übersicht",
									href: "https://www.urbanonline.de/produkte"
								},
								{
									label: "Kälberaufzucht",
									href: "https://www.urbanonline.de/produkte/fuer-die-kaelberaufzucht"
								},
								{
									label: "Lämmeraufzucht",
									href: "https://www.urbanonline.de/produkte/fuer-die-laemmeraufzucht"
								},
							]
						},
    					thirdColumn: {
      						title: "Kontakt",
      						links: [
						        {
									label: "Firmenzentrale",
									href: "https://www.urbanonline.de/kontakt"
								},
        						{ label: "Vertriebspartner",
									href: "https://www.urbanonline.de/map"
								},
      						],
    					},
    					fourthColumn: {
      						title: "Rechtliches",
      						links: [
            					{
									label: "Impressum",
									href: "https://www.urbanonline.de/impressum"
								},
            					{
									label: "Datenschutz",
									href: "https://www.urbanonline.de/datenschutz"
								},
								{
									label: "AGB",
									href: "https://www.urbanonline.de/fileadmin/user_upload/2014_04_DE_AGB_FB-072a_20000_1_.pdf"
								},
      						],
    					},
  					},
  					locales: {
    					en: {
      						footer: {
								showSocialIcons: false,
        						copyright: "Urban GmbH & Co. KG. All rights reserved.",
        						firstColumn: {
          							title: "Company",
          							links: [
            							{
											label: "About Urban",
											href: "https://www.urbanonline.de/en/about-urban"
										},
            							{
											label: "Employees",
											href: "https://www.urbanonline.de/en/about-urban/employees"
										},
            							{
											label: "Career and education",
											href: "https://www.urbanonline.de/en/about-urban/career-and-education"
										},
          							],
								},
        						secondColumn: {
          							title: "Products",
          							links: [
            							{
											label: "Overview",
											href: "https://www.urbanonline.de/en/urban-products"
										},
            							{
											label: "Calf rearing",
											href: "https://www.urbanonline.de/en/urban-products/for-the-calf-rearing"
										},
            							{
											label: "Lamb and kid rearing",
											href: "https://www.urbanonline.de/en/urban-products/for-the-lamb-and-kid-rearing"
										},
          							],
						        },
        						thirdColumn: {
          							title: "Contact",
          							links: [
            							{
											label: "Head office",
											href: "https://www.urbanonline.de/en/contact"
										},
            							{
											label: "Urban partners	",
											href: "https://www.urbanonline.de/en/map"
										},
          							],
        						},
        						fourthColumn: {
          							title: "Legal matters",
          							links: [
            						{
										label: "Legal notice",
										href: "https://www.urbanonline.de/en/legal-notice"
									},
            						{
										label: "Privacy Policy",
										href: "https://www.urbanonline.de/en/privacy-policy"
									},
									{
										label: "Terms and conditions",
										href: "https://www.urbanonline.de/fileadmin/user_upload/2014_04_EN_AGB_FB-072b_20000.pdf"
									},
          						],
        					},
      					},
    				},
  				},
			}),
	    	],
			components: {
				// Override the default `Sidebar` component with a custom one.
				Sidebar: './src/components/Sidebar.astro',
			},
		}),
	],
});
