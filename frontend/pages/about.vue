<template>
	<main class="main-container block">
		<div
			class="w-full grid grid-cols-1 lg:grid-cols-2 place-items-start place-content-start p-5 lg:px-10 lg:pt-5 z-10 bg-gradient-to-r from-purple-500/30 to-blue-500/10 rounded-b-2xl shadow-2xl shadow-purple-500/20">
			<ThePageTitle pageTitle="About" />
			<div class="hidden lg:flex self-center justify-self-end">
				<nuxt-link to="/portfolio">
					<svg
						class="w-8 h-8 text-white"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
					</svg>
				</nuxt-link>
			</div>
		</div>
		<div
			class="grid lg:grid-cols-2 px-5 2xl:px-10 py-10 mb-10 lg:mb-0 md:py-10 lg:py-5 2xl:py-5 mt-3 lg:mt-6 2xl:mt-10 mx-auto">
			<div
				class="grid lg:border-r-2 md:text-lg lg:text-base border-stone-300/50 lg:pr-10 gap-y-6 lg:gap-y-4">
				<p class="text-white break-words">
					My name is Oleksii Vratskyi, and I am a freelancer from Ukraine, I am
					engaged in website development in different directions for several
					years, in this time I have managed to work with online stores, landing
					pages, blogs, etc.
				</p>
				<p
					class="text-white break-words bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-5 rounded-xl indent-4">
					I will be glad to work with you to create together a good product that
					will allow you to attract more customers, as well as increase the
					attractiveness of your company on the Internet. <br />
					<svg
						aria-hidden="true"
						class="mt-5 mx-auto w-8 h-8 text-white/50"
						viewBox="0 0 24 27"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
							fill="currentColor" />
					</svg>
					<span
						class="text-sm md:text-lg lg:text-sm inline-block text-center px-2 lg:px-8 2xl:px-20"
						>I consider that every word must be backed up by deeds, here are
						<nuxt-link to="/portfolio"
							><span
								class="underline underline-offset-4 decoration-sky-500 transition-colors hover:decoration-sky-300 pulseNeon"
								>my latest works.</span
							></nuxt-link
						></span
					>
				</p>
				<p class="text-white break-words">
					Now I do self-study, as well as making sites for small businesses.
					Currently learning and actively practicing in their projects:
					Tailwindcss, vue 3 & nuxt 3, my goal is to become a cool non-standard
					Front-end developer, also I took a UI/UX Designer course at DAN.it,
					Israeli teaching methodology.
				</p>
			</div>

			<div
				class="grid place-content-center my-5 md:my-0 md:mt-10 lg:mt-0 md:px-5 2xl:px-10 2xl:py-4 text-white">
				<h3 class="text-xl font-black text-white leading-loose">
					I use next generation thechnologies to build
					<span
						class="bg-gradient-to-r from-blue-500/50 to-purple-500/50 p-2 text-white uppercase rounded-xl text-shadow pulseNeon"
						>fast</span
					>
					and
					<span
						class="bg-gradient-to-r from-blue-500/50 to-purple-500/50 p-2 text-white uppercase rounded-xl text-shadow pulseNeon"
						>modern</span
					>
					websites:
				</h3>
				<div
					class="grid grid-cols-5 place-items-center place-content-end my-6 p-5 gap-x-4 md:gap-x-0">
					<a href="https://tailwindcss.com/" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							width="48"
							height="48"
							viewBox="0 0 48 48">
							<path
								fill="#00acc1"
								d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z"></path>
						</svg>
					</a>

					<a href="https://vuejs.org/" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							class="inline-block"
							width="48"
							height="48"
							viewBox="0 0 48 48">
							<polygon
								fill="#81c784"
								points="23.987,17 18.734,8 2.974,8 23.987,44 45,8 29.24,8"></polygon>
							<polygon
								fill="#455a64"
								points="29.24,8 23.987,17 18.734,8 11.146,8 23.987,30 36.828,8"></polygon>
						</svg>
					</a>

					<a href="https://v3.nuxtjs.org/" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							class="inline-block"
							width="48"
							height="48"
							viewBox="0 0 48 48">
							<polygon
								fill="none"
								points="26.055,24.519 18.71,37 33.401,37"></polygon>
							<path
								fill="none"
								d="M14.279,36.641l9.455-16.065l-4.653-7.907L4.762,37h9.366C14.178,36.88,14.212,36.756,14.279,36.641	C14.279,36.642,14.279,36.642,14.279,36.641z"></path>
							<path
								fill="#1de9b6"
								d="M14.262,39.569c-0.453-0.792-0.481-1.74-0.134-2.569H4.762l14.319-24.331l4.653,7.907l2.321-3.943	l-4.358-7.404c-0.551-0.937-1.528-1.496-2.615-1.497c0,0,0,0-0.001,0c-1.086,0-2.064,0.559-2.616,1.496L0.458,36.425	c-0.551,0.936-0.559,2.103-0.02,3.046S1.988,41,3.074,41h13.438C15.58,40.908,14.732,40.392,14.262,39.569z M2.182,37.44h0.01H2.182	z"></path>
							<path
								fill="#00bfa5"
								d="M47.65,36.641L33.478,12.562c-0.53-0.9-1.469-1.437-2.513-1.437c-1.044,0-1.984,0.537-2.514,1.437	l-2.396,4.071l2.321,3.943l2.589-4.398L43,37h-5c0.258,0.802,0.151,1.724-0.276,2.471C37.185,40.414,36.086,41,35,41l0,0	c0.001,0.013-0.001-0.013,0,0h10c1.043,0,2.149-0.525,2.667-1.431C48.186,38.664,48.179,37.542,47.65,36.641z"></path>
							<path
								fill="#00838f"
								d="M38,37c-0.068-0.21-0.182-0.381-0.296-0.575l-9.328-15.849l-2.321-3.943l-2.321,3.943l-9.455,16.065	c0,0,0,0.001,0,0.001c-0.067,0.113-0.101,0.238-0.151,0.358c-0.347,0.829-0.32,1.778,0.134,2.569c0.47,0.822,1.318,1.338,2.25,1.431	h18.576c1.086,0,2.096-0.586,2.635-1.529C38.151,38.724,38.258,37.802,38,37z M26.055,24.519L33.401,37H18.71L26.055,24.519z"></path>
						</svg>
					</a>

					<a
						href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
						target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							class="inline-block"
							width="48"
							height="48"
							viewBox="0 0 48 48">
							<path fill="#ffd600" d="M6,42V6h36v36H6z"></path>
							<path
								fill="#000001"
								d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
						</svg>
					</a>

					<a href="https://www.figma.com/" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							class="inline-block"
							width="48"
							height="48"
							viewBox="0 0 48 48">
							<linearGradient
								id="q17mbB32E_FbIzPpfjq_Ta_W0YEwBDDfTeu_gr1"
								x1="16.309"
								x2="23.023"
								y1="1.101"
								y2="19.546"
								gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="#f44f5a"></stop>
								<stop offset=".443" stop-color="#ee3d4a"></stop>
								<stop offset="1" stop-color="#e52030"></stop>
							</linearGradient>
							<path
								fill="url(#q17mbB32E_FbIzPpfjq_Ta_W0YEwBDDfTeu_gr1)"
								d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"></path>
							<linearGradient
								id="q17mbB32E_FbIzPpfjq_Tb_W0YEwBDDfTeu_gr2"
								x1="15.64"
								x2="22.314"
								y1="14.636"
								y2="32.971"
								gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="#ae4cd5"></stop>
								<stop offset="1" stop-color="#9331bf"></stop>
							</linearGradient>
							<path
								fill="url(#q17mbB32E_FbIzPpfjq_Tb_W0YEwBDDfTeu_gr2)"
								d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"></path>
							<linearGradient
								id="q17mbB32E_FbIzPpfjq_Tc_W0YEwBDDfTeu_gr3"
								x1="14.81"
								x2="21.821"
								y1="26.357"
								y2="45.617"
								gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="#33c481"></stop>
								<stop offset="1" stop-color="#21a366"></stop>
							</linearGradient>
							<path
								fill="url(#q17mbB32E_FbIzPpfjq_Tc_W0YEwBDDfTeu_gr3)"
								d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"></path>
							<linearGradient
								id="q17mbB32E_FbIzPpfjq_Td_W0YEwBDDfTeu_gr4"
								x1="27.498"
								x2="34.119"
								y1=".512"
								y2="18.702"
								gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="#f09ca2"></stop>
								<stop offset="1" stop-color="#eb6773"></stop>
							</linearGradient>
							<path
								fill="url(#q17mbB32E_FbIzPpfjq_Td_W0YEwBDDfTeu_gr4)"
								d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"></path>
							<linearGradient
								id="q17mbB32E_FbIzPpfjq_Te_W0YEwBDDfTeu_gr5"
								x1="28.714"
								x2="34.857"
								y1="14.972"
								y2="31.85"
								gradientUnits="userSpaceOnUse">
								<stop offset="0" stop-color="#32bdef"></stop>
								<stop offset="1" stop-color="#1ea2e4"></stop>
							</linearGradient>
							<circle
								cx="32"
								cy="24"
								r="7"
								fill="url(#q17mbB32E_FbIzPpfjq_Te_W0YEwBDDfTeu_gr5)"></circle>
						</svg>
					</a>
				</div>

				<h3 class="text-xl font-black text-white leading-loose">
					Also in
					<span
						class="bg-gradient-to-r from-blue-500/50 to-purple-500/50 p-2 text-white uppercase rounded-xl text-shadow pulseNeon"
						>team</span
					>
					we use such technologies:
				</h3>
				<div
					class="grid grid-cols-4 place-items-center place-content-end my-6 p-5 gap-x-4 md:gap-x-0">
					<a href="https://laravel.com/" target="_blank">
						<img
							src="data:image/png;base64,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" />
					</a>

					<a href="https://www.rust-lang.org/" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							class="inline-block"
							width="48"
							height="48"
							viewBox="0 0 48 48">
							<path
								fill="#ffff"
								d="M42.164,24L44,22.03l-2.185-1.574l1.416-2.29l-2.45-1.117l0.942-2.522l-2.621-0.618l0.432-2.658	l-2.691-0.095l-0.095-2.691l-2.658,0.432l-0.618-2.621l-2.522,0.942l-1.117-2.45l-2.29,1.416L25.97,4L24,5.836L22.03,4l-1.574,2.185	l-2.29-1.416l-1.117,2.45l-2.522-0.942l-0.618,2.621l-2.658-0.432l-0.095,2.691l-2.691,0.095l0.432,2.658l-2.621,0.618l0.942,2.522	l-2.45,1.117l1.416,2.29L4,22.03L5.836,24L4,25.97l2.185,1.574l-1.416,2.29l2.45,1.117l-0.942,2.522l2.621,0.618l-0.432,2.658	l2.691,0.095l0.095,2.691l2.658-0.432l0.618,2.621l2.522-0.942l1.117,2.45l2.29-1.416L22.03,44L24,42.164L25.97,44l1.574-2.185	l2.29,1.416l1.117-2.45l2.522,0.942l0.618-2.621l2.658,0.432l0.095-2.691l2.691-0.095l-0.432-2.658l2.621-0.618l-0.942-2.522	l2.45-1.117l-1.416-2.29L44,25.97L42.164,24z M24,7c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S23.448,7,24,7z M9,18	c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S8.448,18,9,18z M8.808,29C8.29,27.426,8,25.748,8,24	c0-0.704,0.061-1.392,0.149-2.072l2.707-1.45c0.55-0.294,0.824-0.895,0.738-1.478H13v10H8.808z M15,38c-0.552,0-1-0.448-1-1	s0.448-1,1-1s1,0.448,1,1S15.552,38,15,38z M33,38c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S33.552,38,33,38z M35.444,35.171	l-3.112-0.497c-0.784-0.125-1.521,0.409-1.646,1.193l-0.459,2.877C28.313,39.552,26.209,40,24,40c-2.256,0-4.4-0.472-6.346-1.314	l-0.43-2.692c-0.125-0.784-0.862-1.318-1.646-1.193l-2.932,0.468c-0.691-0.696-1.319-1.456-1.873-2.27h13.178v-4H20v-3h2.872	c5.474,0,0.987,7,8.247,7h6.108C36.697,33.777,36.098,34.501,35.444,35.171z M20.238,22v-3h5.198c0.82,0,1.485,0.665,1.485,1.485	v0.03c0,0.82-0.665,1.485-1.485,1.485H20.238z M39.927,25.436h-2.611v1.232c0,1.37-0.854,2.332-1.844,2.332	c-2.547,0-1.855-3.537-4.953-5.08c2.312-0.381,4.084-2.43,4.084-4.92c0-2.761-2.172-5-4.851-5h-5.802h-8.168h-4.262	c2.272-2.832,5.483-4.876,9.166-5.652l2.297,2.297c0.561,0.561,1.471,0.561,2.032,0l2.297-2.297c4.64,0.978,8.54,3.962,10.744,8.007	l-1.167,2.178c-0.375,0.7-0.111,1.571,0.588,1.945l2.342,1.254C39.927,22.475,40,23.228,40,24C40,24.485,39.97,24.962,39.927,25.436	z M39,20c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S39.552,20,39,20z"></path>
						</svg>
					</a>

					<a href="https://www.php.net/" target="_blank">
						<img
							src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEXUlEQVRoge2ZzWtcVRjGf++dSaqZSWylSWpMk1gFrRIXbkRRBKWIK7EIUhfVNCkFF35A3bsvxV2gaKbYTdCFYF3GTSlS6h9Q6kdtPjA2icTUmUkaZu55XOSmJtNzZ+YOHaeF/FZzz3nnPc9zz33Pvfdc2GGHHe5rLOkfMmev70uF6QEFrgesG6kXqUdmGcAwdgOY1CksvTGIyjLLAyBWAJlUxGwRswXQkrlgMUyVZ4sjj9246wYyZ6/vC1zqpNARoC/JAA0wb9ikc+VTxeMHFmoF1zTQmZt9U9JXwEN3RV793DTsaH504Hy1oKoGIvHfAsFdlVY/oWGHq5mINZD54vdeC1JXYeOabiH/uLKeWj0x9KevM/bMBkH6U1ovHqDL0vZJXGesgahg7wkMYrV4DXRMzPbR/NUmCf0dZ6Yf8XV4DaRl/c3V0wDtgVeT14Bwvc1Vk5x06Hp87f4aMHmDW4mCIIEB2T1nAOc/qXEzsLepYhrBrNvXnPY1CuuISXMJKG45zgAH2Xa/0AWwEvAysCtqXAcugtrAXgHywOWK3PuAJ4E2ryY5r6YYA9plvpu0MVY4NnhlW9s3SmXyMx8bdgowK7e/nT/R91d2YmYO2Fw5lgujg4c6z8zvVbq0hLhWGBs8VJk+emjMCb1xhybjgboNGP7gTbpyc8+HuM4Areav8FPxs6HTmYnpZwwbqfa/SnrP3cgUyusvAATl1Gx+pP+XPWeuHSml0z8D21ZCs2CXL0dMDfiDN3Fy4yamJPsxu392HCCw4Lsk4gFWw7X9JqZMTCkVXs3mpl/9+8TjN4ELnnDvSfXfB6SqBip4GgBjOcF/fBjiYPT7jlxxmhq6hJAuY7YsWEd8DiDnnt36cGuBveuiQQOzdV+astqLKco/RGPOU27/OuoarleT10AtCmNDH2w97vpy7mGH+2hrW35k4GKtPGvHHp0DthVzJjf7OtKL9WqJWYW4Ve1N53YROx7EbNjhPqSi6LIT05Ngm/eT5cLo4DuVebYW8cb7Na+Z9D6e9xTBrboNmNk6UqwBJzdu8JwsSu3FXuK/ZdT7MrJRxMHUbYlVsBgDMY8SznvNtpj6DQh/0bUSxSwEXgNx09VKTC5BDaBV+R4lxKVsbiZEdMUNpHTp12xuRmjbNkxvNjezLJUsGmA4m5tZliNVtwGCtboNgC3F5OmqUWsAuz0xAWLPluNUxXFtTIu+5pgi9ge3FFkCA4E/uJWEgavfQGhWc0/yf8cFCWbA8UdTxTRC2Xk1eQ2sjg7MA/NNFZSMucRbi4ZNNk9PMiRitcQacK58ClhpiqJkrFh76XRcZ6yB4vEDC4a9B4RNkVUfoYmjhaNPxK6KVff986MD5w07TGtmYsXEW/mxwe+rBdX1iSl77rceldpORrvEzd43nZOYtPbS6WpnfpOGP/JB2C0LNj7ymXULdUYZ9wCYLCvUttFkJZkKCBHNpmF5pCXMFkxuCVJLjXzk22GHHe5z/gXbuaLVDsSrqQAAAABJRU5ErkJggg==" />
					</a>

					<a href="https://www.mongodb.com/" target="_blank">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							x="0px"
							y="0px"
							class="inline-block"
							width="48"
							height="48"
							viewBox="0 0 48 48">
							<path
								fill="#5d4037"
								d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path>
							<path
								fill="#4caf50"
								d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path>
							<path fill="#dcedc8" d="M23 28H25V36H23z"></path>
							<path
								fill="#4caf50"
								d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path>
							<path
								fill="#81c784"
								d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
	useHead({
		title: 'About',
	});
</script>
