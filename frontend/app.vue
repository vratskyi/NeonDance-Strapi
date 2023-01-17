import { ErrorCodes } from 'vue';

<template>
	<div>
		<Html lang="en" />
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
	@media only screen and (min-width: 600px) {
		.page-leave-active {
			transition: all 0.3s;
			will-change: transform;
		}
		.page-enter-active {
			transition: all 0.5s;
			will-change: transform;
		}
		.page-enter-from {
			transform: translateY(-100%);
			opacity: 1;
		}
		.page-leave-to {
			transform: translateY(100%);
			opacity: 0;
		}
	}
</style>
