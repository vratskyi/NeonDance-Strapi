<template>
	<header
		class="fixed left-0 right-0 top-[89%] shadow-top shadow-bottom xl:grid h-[80px] md:h-[100px] lg:max-h-[90%] lg:h-full lg:ml-5 lg:mb-[3.333%] rounded-2xl lg:rounded-xl mx-3 mb-1 lg:my-auto lg:max-w-[130px] xl:max-w-[160px] 2xl:max-w-[180px] lg:w-full lg:p-4 2xl:p-6 z-50 backdrop-blur-lg text-stone-300 lg:overflow-y-auto overflow-x-clip shadow-2xl shadow-purple-500/50">
		<nav
			class="grid md:place-content-center lg:place-content-around h-full my-auto">
			<div
				class="hidden md:mb-24 lg:mb-0 2xl:grid place-items-center place-content-center">
				<nuxt-img
					src="/assets/img/Oleksii-Vratskyi.webp"
					class="inline-block 2xl:h-20 2xl:w-20 rounded-full ring-2 object-cover object-top ring-white"
					alt="Oleksii Vratskyi" />
			</div>

			<ul
				class="grid grid-cols-5 lg:grid-cols-1 place-items-center w-full h-full my-auto text-md md:gap-x-6 lg:gap-x-0 lg:gap-y-2.5 2xl:gap-y-6">
				<li>
					<nuxt-link
						id="hoverItem"
						to="/"
						class="inline-block py-4 px-3.5 lg:px-6 transition-all hover:scale-105 hover:bg-black/20 hover:text-white rounded-[28px] lg:rounded-lg">
						<div
							class="inline-grid place-items-center font-extralight text-xs md:text-lg lg:text-sm">
							<svg
								class="inline-grid mb-2 w-5 h-5 md:w-9 md:h-9 lg:h-6 lg:w-6"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M6 22.8787C4.34315 22.8787 3 21.5355 3 19.8787V9.87866C3 9.84477 3.00169 9.81126 3.00498 9.77823H3C3 9.20227 3.2288 8.64989 3.63607 8.24262L9.87868 2.00002C11.0502 0.828445 12.9497 0.828445 14.1213 2.00002L20.3639 8.24264C20.7712 8.6499 21 9.20227 21 9.77823H20.995C20.9983 9.81126 21 9.84477 21 9.87866V19.8787C21 21.5355 19.6569 22.8787 18 22.8787H6ZM12.7071 3.41423L19 9.70713V19.8787C19 20.4309 18.5523 20.8787 18 20.8787H15V15.8787C15 14.2218 13.6569 12.8787 12 12.8787C10.3431 12.8787 9 14.2218 9 15.8787V20.8787H6C5.44772 20.8787 5 20.4309 5 19.8787V9.7072L11.2929 3.41423C11.6834 3.02371 12.3166 3.02371 12.7071 3.41423Z"
									fill="currentColor" />
							</svg>
							Home
						</div>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link
						id="hoverItem"
						to="/about"
						class="inline-block py-4 px-3.5 lg:px-6 transition-all hover:scale-105 hover:bg-black/20 hover:text-white rounded-[28px] lg:rounded-lg">
						<div
							class="inline-grid place-items-center font-extralight text-xs md:text-lg lg:text-sm">
							<svg
								class="inline-grid mb-2 w-5 h-5 md:w-9 md:h-9 lg:h-6 lg:w-6"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M15 4H21V10H15V4Z" fill="currentColor" />
								<path
									d="M3 12C3 16.9706 7.02944 21 12 21C16.9706 21 21 16.9706 21 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12H3Z"
									fill="currentColor" />
								<path
									d="M6 10C7.65685 10 9 8.65685 9 7C9 5.34315 7.65685 4 6 4C4.34315 4 3 5.34315 3 7C3 8.65685 4.34315 10 6 10Z"
									fill="currentColor" />
							</svg>
							About
						</div>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link
						id="hoverItem"
						to="/portfolio"
						class="inline-block py-4 px-3.5 lg:px-6 transition-all hover:scale-105 hover:bg-black/20 hover:text-white rounded-[28px] lg:rounded-lg">
						<div
							class="inline-grid place-items-center font-extralight text-xs md:text-lg lg:text-sm">
							<svg
								class="inline-grid mb-2 w-5 h-5 md:w-9 md:h-9 lg:h-6 lg:w-6"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path d="M14 11H10V13H14V11Z" fill="currentColor" />
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
									fill="currentColor" />
							</svg>
							Portfolio
						</div>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link
						id="hoverItem"
						to="/services"
						class="inline-block py-4 px-3.5 lg:px-6 transition-all hover:scale-105 hover:bg-black/20 hover:text-white rounded-[28px] lg:rounded-lg">
						<div
							class="inline-grid place-items-center font-extralight text-xs md:text-lg lg:text-sm">
							<svg
								class="inline-grid mb-2 w-5 h-5 md:w-9 md:h-9 lg:h-6 lg:w-6"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M14.738 19.9964C14.8186 19.9988 14.8994 20 14.9806 20C19.3989 20 22.9806 16.4183 22.9806 12C22.9806 7.58172 19.3989 4 14.9806 4C12.4542 4 10.2013 5.17108 8.73522 7H7.51941C3.92956 7 1.01941 9.91015 1.01941 13.5C1.01941 17.0899 3.92956 20 7.51941 20H14.5194C14.5926 20 14.6654 19.9988 14.738 19.9964ZM16.6913 17.721C19.0415 16.9522 20.9806 14.6815 20.9806 12C20.9806 8.68629 18.2943 6 14.9806 6C11.6669 6 8.98059 8.68629 8.98059 12H6.98059C6.98059 10.9391 7.1871 9.92643 7.56211 9H7.51941C5.03413 9 3.01941 11.0147 3.01941 13.5C3.01941 15.9853 5.03413 18 7.51941 18H14.5194C15.0691 18 15.9041 17.9014 16.6913 17.721Z"
									fill="currentColor" />
							</svg>
							Services
						</div>
					</nuxt-link>
				</li>
				<li>
					<nuxt-link
						id="hoverItem"
						to="/contact"
						class="inline-block py-4 px-3.5 lg:px-6 transition-all hover:scale-105 hover:bg-black/20 hover:text-white rounded-[28px] lg:rounded-lg">
						<div
							class="inline-grid place-items-center font-extralight text-xs md:text-lg lg:text-sm">
							<svg
								class="inline-grid mb-2 w-5 h-5 md:w-9 md:h-9 lg:h-6 lg:w-6"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M3.00977 5.83789C3.00977 5.28561 3.45748 4.83789 4.00977 4.83789H20C20.5523 4.83789 21 5.28561 21 5.83789V17.1621C21 18.2667 20.1046 19.1621 19 19.1621H5C3.89543 19.1621 3 18.2667 3 17.1621V6.16211C3 6.11449 3.00333 6.06765 3.00977 6.0218V5.83789ZM5 8.06165V17.1621H19V8.06199L14.1215 12.9405C12.9499 14.1121 11.0504 14.1121 9.87885 12.9405L5 8.06165ZM6.57232 6.80554H17.428L12.7073 11.5263C12.3168 11.9168 11.6836 11.9168 11.2931 11.5263L6.57232 6.80554Z"
									fill="currentColor" />
							</svg>
							Contacts
						</div>
					</nuxt-link>
				</li>
			</ul>
			<div
				class="hidden lg:grid grid-rows-2 z-40 text-center py-2 text-xs text-white/80">
				<nuxt-img
					src="/assets/img/fullLogo.webp"
					class="mb-3 opacity-80"
					width="120"
					height="18"
					alt="Oleksii Vratskyi - full logo"></nuxt-img>
				<p>Copiright <span>&#169;</span> 2023</p>
				<p
					class="text-white/50 shadow-top shadow-bottom p-2 rounded-2xl text-[10px]">
					Neon Dance <span>v.0.2.7</span>
					<span>
						GitHub:
						<a
							href="https://github.com/vratskyi/neon-dance"
							class="uppercase"
							target="_blank"
							>vratskyi</a
						>
					</span>
				</p>
			</div>
		</nav>
	</header>
</template>

<style scoped>
	.router-link-active.router-link-exact-active {
		color: white;
		transform: scale(1.05);
		background-color: rgb(0 0 0 / 0.2);
		animation: pulsate 1.5s infinite alternate;
	}
</style>
