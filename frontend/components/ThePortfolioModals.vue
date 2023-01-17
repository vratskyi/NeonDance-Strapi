<template>
	<div>
		<!-- MODAL 1 project -->
		<div
			class="grid grid-cols-1 place-items-center place-content-center text-white z-50">
			<div
				id="modal"
				class="hideModal absolute shadow-top shadow-bottom transition-all duration-300 ease-in-out left-0 right-0 top-0 bottom-0 z-50 xl:w-[900px] 2xl:w-[1100px] xl:h-[360px] m-auto backdrop-blur-3xl shadow-top shadow-bottom lg:rounded-t-2xl rounded-b-2xl lg:rounded-b-3xl shadow-2xl shadow-purple-500/50">
				<div class="absolute top-0 right-0 p-4 z-40">
					<button class="closeModal">
						<svg
							class="w-8 h-8 transition-colors duration-300 hover:text-rose-500/70"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
								fill="currentColor" />
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
								fill="currentColor" />
						</svg>
					</button>
				</div>
				<div
					class="grid grid-cols-1 xl:grid-cols-2 lg:mt-[5%] xl:mt-0 lg:max-w-[600px] xl:lg:max-w-full m-auto place-items-center place-content-around lg:p-5">
					<div class="p-5">
						<div>
							<h3 class="sub-title text-white text-shadow font-black">
								Water H2O
							</h3>
							<h4 class="text-base md:text-xl text-white text-shadow">
								Website of a local water delivery service
							</h4>
						</div>

						<div>
							<span
								class="bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white uppercase rounded-xl text-shadow text-sm font-black mt-4 inline-block">
								Description </span
							><span
								class="ml-1 lg:ml-4 bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white uppercase rounded-xl text-shadow text-sm font-black mt-4 inline-block">
								<nuxt-link to="https://h2ovoda.com.ua/" target="_blank"
									>Watch live project
									<svg
										class="w-5 h-5 inline-block"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg">
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></nuxt-link
							></span>
							<p class="mt-4 text-lg">
								Developed the design in Figma, Done the layout, Made edits to
								the client, Filled it with content, Added functionality, Gave
								the client the finished product, Now I'm maintaining the site.
							</p>
						</div>
					</div>
					<div class="order-first">
						<img
							src="@/assets/img/water-website-min.png"
							class="max-w-[500px] w-full aspect-video"
							loading="lazy"
							alt="h2ovoda.com.ua is a water delivery service based on Astro SSR technology" />
					</div>
				</div>
			</div>
		</div>
		<!-- MODAL 2 project -->
		<div
			class="grid grid-cols-1 place-items-center place-content-center text-white z-50">
			<div
				id="modal"
				class="hideModal absolute transition-all duration-300 ease-in-out top-0 bottom-0 left-0 right-0 z-50 xl:w-[900px] 2xl:w-[1100px] xl:h-[340px] 2xl:h-[320px] m-auto backdrop-blur-3xl shadow-top shadow-bottom lg:rounded-t-2xl rounded-b-2xl lg:rounded-b-3xl shadow-2xl shadow-purple-500/50">
				<div class="absolute top-0 right-0 p-4 z-40">
					<button class="closeModal">
						<svg
							class="w-8 h-8 transition-colors duration-300 hover:text-rose-500/70"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
								fill="currentColor" />
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
								fill="currentColor" />
						</svg>
					</button>
				</div>
				<div
					class="grid grid-cols-1 xl:grid-cols-2 lg:mt-[5%] xl:mt-0 lg:max-w-[600px] xl:lg:max-w-full m-auto place-items-center place-content-around lg:p-5">
					<div class="p-5">
						<div>
							<h3 class="sub-title text-white text-shadow font-black">
								Online Store
							</h3>
							<h4 class="text-xl text-white text-shadow">
								Paper gift bags service
							</h4>
						</div>
						<span
							class="bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white uppercase rounded-xl text-shadow text-sm font-black mt-4 inline-block">
							Description </span
						><span
							class="ml-1 lg:ml-4 bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white uppercase rounded-xl text-shadow text-sm font-black mt-4 inline-block">
							<nuxt-link to="http://lmd.lviv.ua/" target="_blank"
								>Watch live project
								<svg
									class="w-5 h-5 inline-block"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></nuxt-link
						></span>
						<p class="mt-4 text-base">
							This online store is based on WordPress CMS and WooCommerce, I
							redesigned the old site to a modern design and optimized the
							loading time, thanks to a comprehensive approach, the number of
							visitors and sales increased. Now the site is at the top of google
							in Ukraine.
						</p>
					</div>
					<div class="order-first">
						<img
							src="@/assets/img/online-store.png"
							class="max-w-[500px] w-full aspect-video"
							loading="lazy"
							alt="lmd.lviv.ua is a paper gift bags service based on WordPress & WooCommerce technology" />
					</div>
				</div>
			</div>
		</div>
		<!-- MODAL 3 project -->
		<div
			class="grid grid-cols-1 place-items-center place-content-center text-white z-50">
			<div
				id="modal"
				class="hideModal absolute transition-all duration-300 ease-in-out left-0 right-0 top-0 bottom-0 z-50 xl:w-[900px] 2xl:w-[1100px] xl:h-[320px] m-auto backdrop-blur-3xl shadow-top shadow-bottom lg:rounded-t-2xl rounded-b-2xl lg:rounded-b-3xl shadow-2xl shadow-purple-500/50">
				<div class="absolute top-0 right-0 p-4 z-40">
					<button class="closeModal">
						<svg
							class="w-8 h-8 transition-colors duration-300 hover:text-rose-500/70"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
								fill="currentColor" />
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
								fill="currentColor" />
						</svg>
					</button>
				</div>
				<div
					class="grid grid-cols-1 xl:grid-cols-2 lg:mt-[5%] xl:mt-0 lg:max-w-[600px] xl:lg:max-w-full m-auto place-items-center place-content-around lg:p-5">
					<div class="p-5">
						<div>
							<h3 class="sub-title text-white text-shadow font-black">
								Landing Page
							</h3>
							<h4 class="text-xl text-white text-shadow">My old website</h4>
						</div>

						<span
							class="bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white uppercase rounded-xl text-shadow text-sm font-black mt-4 inline-block">
							Description
						</span>
						<p class="mt-4 text-xl">
							One of my old sites that was created using TailwindCSS,
							JavaScript, and UI Kit Flowbite.
						</p>
					</div>
					<div class="order-first">
						<img
							src="@/assets/img/landing-page.png"
							class="max-w-[500px] w-full aspect-video"
							loading="lazy"
							alt="vratsky.com is a personal portfolio site based on Vue 3 and Nuxt 3 technologies" />
					</div>
				</div>
			</div>
		</div>
		<!-- MODAL 4 project -->
		<div
			class="grid grid-cols-1 place-items-center place-content-center text-white z-50">
			<div
				id="modal"
				class="hideModal absolute transition-all duration-300 ease-in-out left-0 right-0 top-0 bottom-0 z-50 xl:w-[900px] 2xl:w-[1100px] xl:h-[360px] 2xl:h-[320px] m-auto backdrop-blur-3xl shadow-top shadow-bottom lg:rounded-t-2xl rounded-b-2xl lg:rounded-b-3xl shadow-2xl shadow-purple-500/50">
				<div class="absolute top-0 right-0 p-4 z-40">
					<button class="closeModal">
						<svg
							class="w-8 h-8 transition-colors duration-300 hover:text-rose-500/70"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M16.3394 9.32245C16.7434 8.94589 16.7657 8.31312 16.3891 7.90911C16.0126 7.50509 15.3798 7.48283 14.9758 7.85938L12.0497 10.5866L9.32245 7.66048C8.94589 7.25647 8.31312 7.23421 7.90911 7.61076C7.50509 7.98731 7.48283 8.62008 7.85938 9.0241L10.5866 11.9502L7.66048 14.6775C7.25647 15.054 7.23421 15.6868 7.61076 16.0908C7.98731 16.4948 8.62008 16.5171 9.0241 16.1405L11.9502 13.4133L14.6775 16.3394C15.054 16.7434 15.6868 16.7657 16.0908 16.3891C16.4948 16.0126 16.5171 15.3798 16.1405 14.9758L13.4133 12.0497L16.3394 9.32245Z"
								fill="currentColor" />
							<path
								fill-rule="evenodd"
								clip-rule="evenodd"
								d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
								fill="currentColor" />
						</svg>
					</button>
				</div>
				<div
					class="grid grid-cols-1 xl:grid-cols-2 lg:mt-[5%] xl:mt-0 lg:max-w-[600px] xl:lg:max-w-full m-auto place-items-center place-content-around lg:p-5">
					<div class="p-5">
						<div>
							<h3 class="sub-title text-white text-shadow font-black">Blog</h3>
							<h4 class="text-xl text-white text-shadow">My old blog</h4>
						</div>

						<span
							class="bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white uppercase rounded-xl text-shadow text-sm font-black mt-4 inline-block">
							Description </span
						><span
							class="ml-1 lg:ml-4 bg-gradient-to-r from-blue-500 to-purple-500 p-2 text-white uppercase rounded-xl text-shadow text-sm font-black mt-4 inline-block">
							<nuxt-link to="https://blog.vratsky.com/" target="_blank"
								>Watch live project
								<svg
									class="w-5 h-5 inline-block"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg">
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg></nuxt-link
						></span>
						<p class="mt-4 text-xl">
							My old blog, which is based on AstroSSR, as well as TailwindCSS
							and Flowbite UI. I created it to practice blog development, soon I
							will make a redesign and rewrite it on Nuxt3 with Content.v2
						</p>
					</div>
					<div class="order-first">
						<img
							src="@/assets/img/personal-blog.png"
							class="max-w-[500px] w-full aspect-video"
							loading="lazy"
							alt="blog.vratsky.com is a personal blog site based on Astro SSR technology" />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
