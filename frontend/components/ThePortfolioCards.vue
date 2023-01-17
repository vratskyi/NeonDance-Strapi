<template>
	<div
		class="grid grid-cols-1 md:grid-cols-2 mb-20 lg:mb-0 mt-10 2xl:mt-0 gap-8 place-items-center">
		<!-- Item 1 -->
		<div class="duration-150 ease-in-out rounded-lg">
			<div class="transition-all duration-150 hover:scale-105">
				<button class="modalTrigger" type="button">
					<nuxt-img
						src="/assets/img/water-website-min.png"
						class="max-w-[300px] w-full aspect-video transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500"
						alt="h2ovoda.com.ua is a water delivery service based on Astro SSR technology"
						loading="over-eager" />
				</button>
			</div>
		</div>
		<!-- Item 2 -->
		<div class="duration-150 ease-in-out rounded-lg">
			<div class="transition-all duration-150 hover:scale-105">
				<button class="modalTrigger" type="button">
					<nuxt-img
						src="/assets/img/online-store.png"
						class="max-w-[300px] w-full aspect-video transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500"
						alt="lmd.lviv.ua is a paper gift bags service based on WordPress & WooCommerce technology" />
				</button>
			</div>
		</div>
		<!-- Item 3 -->
		<div class="duration-150 ease-in-out rounded-lg">
			<div class="transition-all duration-150 hover:scale-105">
				<button class="modalTrigger" type="button">
					<nuxt-img
						src="/assets/img/landing-page.png"
						class="max-w-[300px] w-full aspect-video transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500"
						alt="vratsky.com is a personal portfolio site based on Vue 3 and Nuxt 3 technologies" />
				</button>
			</div>
		</div>
		<!-- Item 4 -->
		<div class="duration-150 ease-in-out">
			<div class="transition-all duration-150 hover:scale-105">
				<button class="modalTrigger" type="button">
					<nuxt-img
						src="/assets/img/personal-blog.png"
						class="max-w-[300px] w-full aspect-video transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500"
						alt="blog.vratsky.com is a personal blog site based on Astro SSR technology" />
				</button>
			</div>
		</div>
	</div>
</template>
