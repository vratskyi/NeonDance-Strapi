<template>
	<main
		@mouseenter="
			{
				faq(), hoverItem();
			}
		"
		class="main-container">
		<div
			class="w-full grid place-items-start place-content-start p-5 lg:px-10 lg:pt-5 bg-gradient-to-r from-purple-500/30 to-blue-500/10 rounded-b-2xl shadow-2xl shadow-purple-500/20">
			<ThePageTitle pageTitle="Contacts" />
		</div>
		<div>
			<TheBioCards />
		</div>
		<div
			class="grid lg:grid-cols-1 2xl:grid-cols-2 place-content-center p-5 lg:p-10 gap-8 lg:mx-auto lg:max-w-3xl lg:w-full 2xl:mx-0 2xl:max-w-none 2xl:w-auto">
			<div
				class="grid place-content-center place-self-start bg-gradient-to-r from-purple-500/30 to-blue-500/10 rounded-xl p-5">
				<div class="mb-10">
					<h3
						class="text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl text-shadow text-white text-shadow font-black">
						Ready to go?
					</h3>
					<p class="mt-4 text-lg text-white/80">
						You can describe in short what project you want, also you can attach
						a link to an example of a project that you want, I will study your
						wishes and contact to clarify the details and further cooperation,
						as well we can meet in Kyiv or communicate by video in any social
						network <span class="pulseNeon text-lg">😇</span>
					</p>
				</div>
				<div>
					<TheContactForm />
				</div>
			</div>
			<TheContactFaq />
		</div>
	</main>
</template>

<script setup>
	useHead({
		title: 'Contacts',
	});
</script>

<script>
	export default {
		methods: {
			hoverItem: function () {
				const triggers = document.querySelectorAll('#hoverItem');
				const triggerArray = Array.from(triggers).entries();

				for (let [index, trigger] of triggerArray) {
					const addHover = () => {
						triggers[index].classList.add('pulseNeon');
					};
					const removeHover = () => {
						triggers[index].classList.remove('pulseNeon');
					};
					trigger.addEventListener('mouseenter', addHover);
					trigger.addEventListener('mouseleave', removeHover);
				}
			},
			faq: function () {
				const triggers = document.querySelectorAll('.faqButton');
				const triggerArray = Array.from(triggers).entries();
				const faqContent = document.querySelectorAll('#faqContent');

				for (let [index, trigger] of triggerArray) {
					const toggleModal = () => {
						if (faqContent[index].classList.contains('hidden')) {
							faqContent[index].classList.replace('hidden', 'block');
						} else if (faqContent[index].classList.contains('block')) {
							faqContent[index].classList.replace('block', 'hidden');
						}
					};
					trigger.addEventListener('click', toggleModal);
				}
			},
		},
		mounted() {
			this.faq();
			this.hoverItem();
		},
	};
</script>
