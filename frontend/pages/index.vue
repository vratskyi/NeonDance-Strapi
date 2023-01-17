<template>
	<div class="main-container overflow-y-clip">
		<div
			@mouseenter="effect3D()"
			class="effect h-full w-full grid place-content-center z-10 text-center preserve-3d cursor-default">
			<h1
				class="main-title font-black uppercase text-shadow pulseNeon bg-clip-text text-white/50 mb-4">
				Vratskyi
			</h1>
			<h2
				class="text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl uppercase font-bold text-shadow neonText bg-clip-text text-white/50">
				Front-end & UI/UX
			</h2>
			<nuxt-link
				@mouseenter="hover = true"
				@mouseleave="hover = false"
				v-bind:class="{ pulseNeon: hover }"
				to="/about"
				class="grid place-self-center text-white/80 text-center py-3 px-5 mt-5 w-[150px] transition-all duration-150 rounded-lg text-sm bg-gradient-to-r from-purple-500/30 to-blue-500/10 hover:shadow-2xl hover:shadow-indigo-500">
				About
			</nuxt-link>
		</div>
		<div class="h-full absolute top-0 left-0 right-0 bottom-0">
			<video
				src="/assets/video/bg-compressed.webm"
				class="h-full min-w-full rounded-2xl object-cover object-left opacity-20 blur-lg"
				autoplay
				loop
				muted></video>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				hover: false,
			};
		},
		methods: {
			effect3D() {
				const card = document.querySelector('.effect');
				const THRESHOLD = 15;

				function handleHover(e) {
					const { clientX, clientY, currentTarget } = e;
					const { clientWidth, clientHeight, offsetLeft, offsetTop } =
						currentTarget;

					const horizontal = (clientX - offsetLeft) / clientWidth;
					const vertical = (clientY - offsetTop) / clientHeight;
					const rotateX = (THRESHOLD / 2 - horizontal * THRESHOLD).toFixed(2);
					const rotateY = (vertical * THRESHOLD - THRESHOLD / 2).toFixed(2);
					card.style.transform = `perspective(${clientWidth}px) rotateX(${rotateY}deg) rotateY(${rotateX}deg) scale3d(1, 1, 1)`;
				}

				function resetStyles(e) {
					card.style.transform = `perspective(${e.currentTarget.clientWidth}px) rotateX(0deg) rotateY(0deg)`;
				}

				card.addEventListener('mousemove', handleHover);
				card.addEventListener('mouseleave', resetStyles);
				const motionMatchMedia = window.matchMedia('(prefers-reduced-motion)');

				if (!motionMatchMedia.matches) {
					card.addEventListener('mousemove', handleHover);
					card.addEventListener('mouseleave', resetStyles);
				}
			},
		},
	};
</script>
