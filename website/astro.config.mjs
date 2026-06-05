// @ts-check
import { defineConfig } from 'astro/config';
import { satteri } from '@astrojs/markdown-satteri';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
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
				'./src/styles/global.css',
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
				/* Spanish docs in `src/content/docs/es/`
				es: {label: 'Español',},
				// French docs in `src/content/docs/fr/`
				fr: {label: 'Français',},
				// Russian docs in `src/content/docs/ru/`
				ru: {label: 'Русский',}, */
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
						link: '/guide/',
						icon: 'open-book',
						id: 'user',
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
						id: 'service',
						items: [
							{
								label: 'Installation Cloud',
								translations: {
									en: 'Installation of cloud',
									es: 'Instalación de la nube',
									fr: 'Installation du cloud',
									ru: 'Установка облака',
								},
								items: [
									'guide/service',
									'guide/service/check-version',
									'guide/service/update-feeder',
								{
									label: '③ Setup Cloud',
									translations: {
										en: '③ Cloud setup',
									},
									items: [
										{ slug: 'guide/service/setup-cloud' },
										{ slug: 'guide/service/setup-cloud/network'},
										{ slug: 'guide/service/setup-cloud/registration'},
										{ slug: 'guide/service/setup-cloud/rest'},
										{ slug: 'guide/service/setup-cloud/sync' }]},
							]
						}],
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
    					es: {
      						footer: {
								showSocialIcons: false,
        						copyright: "Urban GmbH & Co. KG. Todos los derechos reservados.",
        						firstColumn: {
          							title: "Empresa",
          							links: [
            							{ label: "Sobre Urban", href: "https://www.urbanonline.de/es/sobre-urban" },
               							{ label: "Nuestros empleados", href: "https://www.urbanonline.de/es/sobre-urban/unsere-mitarbeiter" },
             						    { label: "Carrera y formación", href: "https://www.urbanonline.de/es/sobre-urban/carrera-y-formacion" },
          							],
								},
        						secondColumn: {
          							title: "Productos",
          							links: [
              					  		{ label: "Descripción general", href: "https://www.urbanonline.de/es/productos" },
         						        { label: "Crianza de terneros", href: "https://www.urbanonline.de/es/productos/para-la-crianza-de-terneros" },
              							{ label: "Crianza de corderos y cabritos", href: "https://www.urbanonline.de/es/productos/para-la-crianza-de-corderos-y-cabritos" },
       								     ],
						        },
        						thirdColumn: {
          							title: "Contacto",
          							links: [
            							{ label: "Sede central", href: "https://www.urbanonline.de/es/contacto" },
         							    { label: "Distribuidores", href: "https://www.urbanonline.de/es/map" },
       								     ],
        						},
        						fourthColumn: {
          							title: "Legal",
          							links: [
            							{ label: "Información legal", href: "https://www.urbanonline.de/es/aviso-legal" },
            							{ label: "Protección de datos", href: "https://www.urbanonline.de/es/proteccion-de-datos" },
            							{ label: "Condiciones generales", href: "https://www.urbanonline.de/es/agb" },
          						],
        					},
      					},
    				},
    					fr: {
      						footer: {
								showSocialIcons: false,
        						copyright: "Urban GmbH & Co. KG. Tous droits réservés.",
        						firstColumn: {
          							title: "La Société",
          							links: [
            							{ label: "À propos d'Urban", href: "https://www.urbanonline.de/fr/a-propos-durban" },
            							{ label: "Employés", href: "https://www.urbanonline.de/fr/a-propos-durban/employes" },
            							{ label: "Carrière et éducation", href: "https://www.urbanonline.de/fr/a-propos-durban/carriere-et-education" },
          							],
								},
        						secondColumn: {
          							title: "Produits",
          							links: [
            							{ label: "Aperçu", href: "https://www.urbanonline.de/fr/urban-produits" },
            							{ label: "Élevage de veaux", href: "https://www.urbanonline.de/fr/urban-produits/pour-elevage-de-veaux" },
            							{ label: "Élevage d'agneaux", href: "https://www.urbanonline.de/fr/urban-produits/pour-elevage-dagneaux" },
          							],
						        },
        						thirdColumn: {
          							title: "Contact",
          							links: [
            							{ label: "Siège social", href: "https://www.urbanonline.de/fr/contact" },
            							{ label: "Distributeurs", href: "https://www.urbanonline.de/fr/map" },
          							],
        						},
        						fourthColumn: {
          							title: "Informations légales",
          							links: [
            							{ label: "Mentions légales", href: "https://www.urbanonline.de/fr/mentions-legales" },
            							{ label: "Protection des données", href: "https://www.urbanonline.de/fr/protection-des-donnees" },
            							{ label: "Conditions générales", href: "https://www.urbanonline.de/fr/conditions-generales-de-ventes" },
          						],
        					},
      					},
    				},
    					ru: {
      						footer: {
								showSocialIcons: false,
        						copyright: "Urban GmbH & Co. KG. Все права защищены.",
        						firstColumn: {
          							title: "Компания",
          							links: [
            							{ label: "О компании Urban", href: "https://www.urbanonline.de/en/about-urban" },
            							{ label: "Сотрудники", href: "https://www.urbanonline.de/en/about-urban/employees" },
            							{ label: "Карьера и обучение", href: "https://www.urbanonline.de/en/about-urban/career-and-education" },
          							],
								},
        						secondColumn: {
          							title: "Продукты",
          							links: [
            							{ label: "Обзор", href: "https://www.urbanonline.de/en/urban-products" },
            							{ label: "Выращивание телят", href: "https://www.urbanonline.de/en/urban-products/for-the-calf-rearing" },
            							{ label: "Выращивание ягнят", href: "https://www.urbanonline.de/en/urban-products/for-the-lamb-and-kid-rearing" },
          							],
						        },
        						thirdColumn: {
          							title: "Контакт",
          							links: [
            							{ label: "Главный офис", href: "https://www.urbanonline.de/en/contact" },
            							{ label: "Дистрибьюторы", href: "https://www.urbanonline.de/en/map" },
          							],
        						},
        						fourthColumn: {
          							title: "Правовая информация",
          							links: [
            							{ label: "Правовые уведомления", href: "https://www.urbanonline.de/en/legal-notice" },
            							{ label: "Политика конфиденциальности", href: "https://www.urbanonline.de/en/privacy-policy" },
            							{ label: "Условия и положения", href: "https://www.urbanonline.de/en/terms-and-conditions" },
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
				SocialIcons: './src/components/SocialIcons.astro',
			},
		}),
	],
	markdown: {
		processor: satteri(),
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
