<template>
	<div class="grid relative min-h-screen overflow-clip bg-black">
		<TheHeader />
		<TheToast />
		<video
			id="bgVideo"
			src="/assets/video/videoplayback-min.mp4"
			class="absolute bottom-0 left-0 top-0 right-0 h-full w-full object-fill object-center opacity-50 blur-2xl"
			autoplay
			loop
			muted></video>
		<slot @mouseenter="hoverItem()" />
	</div>
</template>

<script>
	export default {
		mounted() {
			document.querySelectorAll('.menuTrigger').forEach((link) => {
				if (link.href === window.location.href) {
					link.setAttribute('aria-current', 'page');
				}
			});
			setTimeout(() => {
				function toast() {
					if (localStorage.getItem('toastState') != 'true') {
						localStorage.setItem('toastState', 'true');
						document.querySelector('#toast-success').classList.remove('hidden');
					}
				}
				const toastClose = document.querySelector('#toastClose');
				toastClose.addEventListener('click', toast());
			}, 2000);
		},
	};
</script>
