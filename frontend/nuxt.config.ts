// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxt/image-edge',
		'@nuxtjs/tailwindcss',
		'@nuxtjs/strapi',
		'@pinia/nuxt',
		'@nuxtjs/apollo',
		[
			'@pinia/nuxt',
			{
				autoImports: [
					'defineStore', // import { defineStore } from 'pinia'
					['defineStore', 'definePiniaStore'], // import { defineStore as definePiniaStore } from 'pinia'
				],
			},
		],
	],
	runtimeConfig: {
		public: {
			strapi: {
				url: 'http://localhost:1337', // can be overridden by NUXT_PUBLIC_STRAPI_URL environment variable
				entities: ['services'],
				key: 'NeonDanceAPI',
				prefix: '/api',
				version: 'v4',
				cookie: {},
				cookieName: 'strapi_jwt',
			},
		},
	},
	strapi: {
		// Options
		url: process.env.STRAPI_URL || 'http://localhost:1337/api',
	},
	apollo: {
		clients: {
			default: {
				httpEndpoint: 'http://localhost:1337/graphql',
			},
		},
	},
	image: {},
	routeRules: {
		// '/portfolio': { static: true  },
	},
	app: {
		head: {
			script: [
				// {
				// 	src: 'https://cdn.splitbee.io/sb.js',
				// 	'data-token': 'HC52KM9FUODR',
				// 	async: true,
				// 	crossorigin: 'anonymous',
				// },
			],
			title: 'VRATSKYI',
			meta: [
				{ charset: 'utf-8' },
				{
					name: 'viewport',
					content: 'width=device-width, initial-scale=1, shrink-to-fit=no',
				},
				{
					name: 'title',
					content: 'VRATSKYI - The future is now',
				},
				{
					name: 'author',
					content: 'Oleksii Vratskyi',
				},
				{
					name: 'description',
					content:
						'My name is Oleksii Vratskyi, and I am a freelancer from Ukraine, I am engaged in website development in different directions for several years, in this time I have managed to work with online stores, landing pages, blogs, etc.',
				},
				{
					name: 'keywords',
					content:
						'IT, blog, front-end, tricks, css, html, development, ui, ux, design, figma, order, website, services, create website on vue, create website on nuxt, webdesign',
				},
				{
					property: 'og:type',
					content: 'website',
				},
				{
					property: 'og:locale',
					content: 'en_US',
				},
				{
					property: 'og:locale:alternate',
					content: 'uk_UA',
				},
				{
					property: 'og:site_name',
					content: 'VRATSKYI',
				},
				{
					property: 'og:image:width',
					content: '120',
				},
				{
					property: 'og:image:height',
					content: '20',
				},
				{
					property: 'og:image',
					content: 'https://vratsky.com/assets/img/shortLogo.png',
				},
				{
					property: 'og:title',
					content: 'VRATSKYI - The future is now',
				},
				{
					property: 'og:description',
					content:
						'My name is Oleksii Vratskyi, and I am a freelancer from Ukraine, I am engaged in website development in different directions for several years, in this time I have managed to work with online stores, landing pages, blogs, etc.',
				},
			],
			link: [
				{
					rel: 'stylesheet',
					href: '/assets/styles/styles.css',
				},
				{
					rel: 'preconnect',
					href: 'https://api.fontshare.com',
				},
				{
					rel: 'stylesheet',
					href: 'https://api.fontshare.com/v2/css?f[]=poppins@900,500,400,100,300,101,800,700,200,600&display=swap',
				},
				{
					rel: 'icon',
					type: 'image/x-icon',
					href: '/favicon.ico',
				},
			],
		},
		pageTransition: { name: 'page', mode: 'out-in' },
	},
});
