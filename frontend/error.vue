<template>
	<NuxtLayout name="default" class="flex flex-col text-center">
		<div class="main-container place-content-center">
			<p
				class="main-title font-black uppercase text-shadow neonText bg-clip-text text-white/50 mb-4">
				{{ error.statusCode }}
			</p>
			<p
				class="text-2xl md:text-3xl lg:text-4xl 2xl:text-4xl mt-5 font-bold text-shadow bg-clip-text text-white/80">
				Wow.. we can't do this..
			</p>
			<p
				class="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl mt-3 font-bold text-shadow bg-clip-text text-white/80">
				{{ error.message }}
			</p>
			<button
				@click="handleClearError"
				class="grid place-self-center text-white/80 text-center py-3 px-5 mt-14 w-[150px] transition-all duration-150 rounded-lg text-sm bg-gradient-to-r from-purple-500/30 to-blue-500/10 hover:shadow-2xl hover:shadow-indigo-500">
				Back to Home
			</button>
		</div>
	</NuxtLayout>
</template>

<script setup>
	defineProps(['error']);
	const handleClearError = () => clearError({ redirect: '/' });
</script>
