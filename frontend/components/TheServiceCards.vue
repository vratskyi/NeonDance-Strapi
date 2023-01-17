<template>
	<div
		class="grid lg:grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 lg:col-span-1 xl:col-span-2 2xl:col-span-3 gap-5 place-self-start">
		<div v-if="loading" class="text-emerald-500 text-center text-2xl font-bold">
			Loading..
		</div>
		<div v-if="error" class="text-rose-500 text-center text-2xl font-bold">
			Error..
		</div>
		<div
			v-for="service in services"
			key="service"
			class="grid place-self-start rounded-2xl h-full w-full lg:min-w-[300px] lg:min-h-[250px] break-words bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-5 transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
			<div>
				<h3 class="text-xl xl:text-2xl text-white font-black">
					{{ service.attributes.name }}
					<span class="font-black text-white/80"
						>${{ service.attributes.price }}</span
					>
				</h3>
			</div>
			<div class="grid place-items-start row-span-3">
				<p class="text-white/80 break-words text-base xl:text-base my-4">
					{{ service.attributes.description }}
				</p>
			</div>
		</div>
	</div>
</template>

<script setup>
	const { find } = useStrapi();
	const { loading, error, data: services } = await find('services');
</script>
