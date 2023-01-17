<template>
	<main @mouseenter="showModal()" class="main-container">
		<div id="blurContent" class="transition-all duration-300">
			<div
				class="w-full grid grid-cols-1 lg:grid-cols-2 place-items-start place-content-start p-5 lg:px-10 lg:pt-5 z-10 bg-gradient-to-r from-purple-500/30 to-blue-500/10 rounded-b-2xl shadow-2xl shadow-purple-500/20">
				<ThePageTitle pageTitle="Portfolio" />

				<div class="hidden lg:flex self-center justify-self-end">
					<nuxt-link to="/services">
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
				class="grid mt-[1%] 2xl:mt-[3%] place-content-center 2xl:place-content-arround p-5 2xl:p-0">
				<div
					class="grid place-self-start 2xl:mb-10 text-white shadow-top shadow-bottom px-10 py-5 rounded-xl min-w-full">
					<h3 class="text-lg md:text-4xl 2xl:text-3xl font-black">
						Here is my last projects
					</h3>
					<h4 class="text-base md:text-2xl xl:text-xl">
						You can see more of my projects on
						<nuxt-link to="https://www.behance.net/alexvracky" target="_blank"
							><span
								class="underline underline-offset-4 decoration-sky-500 transition-colors hover:decoration-sky-300 pulseNeon"
								>Behance</span
							></nuxt-link
						>
					</h4>
				</div>
				<ThePortfolioCards />
			</div>
		</div>
		<ThePortfolioModals />
	</main>
</template>

<script setup>
	useHead({
		title: 'Portfolio',
	});
</script>

<script>
	export default {
		methods: {
			showModal: function () {
				// console.log("Dude im here 😅");
				const triggers = document.getElementsByClassName('modalTrigger');
				const triggerArray = Array.from(triggers).entries();
				const modals = document.querySelectorAll('#modal');
				const closeButtons = document.getElementsByClassName('closeModal');
				const overflow = document.querySelector('.overflow-y-auto');
				const blurContent = document.querySelector('#blurContent');

				for (let [index, trigger] of triggerArray) {
					const toggleModal = () => {
						if (modals[index].classList.contains('hideModal')) {
							modals[index].classList.replace('hideModal', 'showModal');
							overflow.classList.remove('overflow-y-auto');
							blurContent.classList.add('blur');
						} else if (modals[index].classList.contains('showModal')) {
							modals[index].classList.replace('showModal', 'hideModal');
							overflow.classList.add('overflow-y-auto');
							blurContent.classList.remove('blur');
						} else {
							console.log("Error: can't open modal. ", modals[index]);
						}
					};
					trigger.addEventListener('click', toggleModal);
					closeButtons[index].addEventListener('click', toggleModal);
				}
			},
			mounted() {
				this.showModal();
			},
		},
	};
</script>
