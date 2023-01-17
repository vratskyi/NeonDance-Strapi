<template>
	<div class="grid place-items-start">
		<h1
			class="text-2xl md:text-3xl font-black text-shadow pulseNeon bg-clip-text text-white/50">
			{{ pageTitle }}
		</h1>
	</div>
</template>

<script>
	export default {
		props: ['pageTitle'],
	};
</script>
