<template>
	<main @mouseenter="initPopovers()" class="main-container">
		<div
			class="w-full grid grid-cols-1 lg:grid-cols-2 place-items-start place-content-start p-5 lg:px-10 lg:pt-5 z-10 bg-gradient-to-r from-purple-500/30 to-blue-500/10 rounded-b-2xl shadow-2xl shadow-purple-500/20">
			<ThePageTitle pageTitle="Services" />

			<div class="hidden lg:flex self-center justify-self-end">
				<nuxt-link to="/contact">
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
		<div class="grid p-5 lg:p-10">
			<div class="my-10">
				<h3 class="text-3xl xl:text-4xl text-white font-black">
					We can create for you something
					<span
						class="bg-gradient-to-r from-blue-500/50 to-purple-500/50 p-2 text-white uppercase rounded-xl text-shadow pulseNeon text-lg xl:text-xl 2xl:text-3xl font-black"
						>exceptional</span
					>
				</h3>
				<p
					class="text-white/80 break-words md:text-lg lg:text-lg my-5 font-bold lg:max-w-2xl">
					Thanks to modern technology and experience which has our team, we can
					provide you with services to develop from scratch (or not), various
					types of websites, such as those shown below.
					<span
						class="box-decoration-clone break-words shadow-top shadow-bottom p-[3px] text-white/80 rounded-xl"
						>Also we provide services to redesign your website, all details we
						can discuss in person.</span
					>
				</p>
			</div>
			<div
				class="grid lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-5 place-items-center">
				<TheAside />
				<TheServiceCards />
			</div>
			<div class="grid my-20">
				<div>
					<h3 class="text-3xl xl:text-4xl text-white font-black">
						How i work?
					</h3>
					<p
						class="text-white/80 break-words md:text-lg lg:text-lg my-5 font-bold lg:max-w-2xl">
						As you have already understood, I am a freelancer, so relatively
						small projects I develop myself, although, of course, if the project
						is technically complex, I involve programmers from my team, thanks
						to this I can offer you a good final cost of the project.
					</p>
				</div>
				<div class="grid grid-cols-2 lg:grid-cols-4 mt-5 gap-2 xl:gap-5">
					<div
						class="2xl:place-self-start min-w-full bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-4 xl:p-5 rounded-2xl transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<h3
							class="text-sm xl:text-lg text-white font-black before:content-['1'] before:pr-1.5 before:text-4xl before:text-white/50">
							Problem
						</h3>
						<p
							class="text-white/80 break-words text-base my-5 font-light lg:max-w-2xl">
							Search for potential project problems
						</p>
					</div>
					<div
						class="2xl:place-self-start min-w-full bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-4 xl:p-5 rounded-2xl transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<h3
							class="text-sm xl:text-lg text-white font-black before:content-['2'] before:pr-1.5 before:text-4xl before:text-white/50">
							Solution
						</h3>
						<p
							class="text-white/80 break-words text-base my-5 font-light lg:max-w-2xl">
							Finding solutions to project problems
						</p>
					</div>
					<div
						class="2xl:place-self-start min-w-full bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-4 xl:p-5 rounded-2xl transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<h3
							class="text-sm xl:text-lg text-white font-black before:content-['3'] before:pr-1.5 before:text-4xl before:text-white/50">
							Potential Users
						</h3>
						<p
							class="text-white/80 break-words text-base my-5 font-light lg:max-w-2xl">
							Searching for target customers of the project
						</p>
					</div>
					<div
						class="2xl:place-self-start min-w-full bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-4 xl:p-5 rounded-2xl transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<h3
							class="text-sm xl:text-lg text-white font-black before:content-['4'] before:pr-1.5 before:text-4xl before:text-white/50">
							Action Points
						</h3>
						<p
							class="text-white/80 break-words text-base my-5 font-light lg:max-w-2xl">
							Development of a roadmap for project development
						</p>
					</div>
					<div
						class="bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-4 xl:p-5 rounded-2xl transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<h3
							class="text-sm xl:text-lg text-white font-black before:content-['5'] before:pr-1.5 before:text-4xl before:text-white/50">
							Success Goal
						</h3>
						<p
							class="text-white/80 break-words text-base my-5 font-light lg:max-w-2xl">
							Defining project goals
						</p>
					</div>
					<div
						class="bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-4 xl:p-5 rounded-2xl transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<h3
							class="text-sm xl:text-lg text-white font-black before:content-['6'] before:pr-1.5 before:text-4xl before:text-white/50">
							Architecture
						</h3>
						<p
							class="text-white/80 break-words text-base my-5 font-light lg:max-w-2xl">
							Defining of project technologies
						</p>
					</div>
					<div
						class="2xl:place-self-start min-w-full bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-4 xl:p-5 rounded-2xl transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<h3
							class="text-sm xl:text-lg text-white font-black before:content-['7'] before:pr-1.5 before:text-4xl before:text-white/50">
							Project development
						</h3>
						<p
							class="text-white/80 break-words text-base my-5 font-light lg:max-w-2xl">
							Front-end, Framework, Back-end
						</p>
					</div>
					<div
						class="2xl:place-self-start min-w-full bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-4 xl:p-5 rounded-2xl transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<h3
							class="text-sm xl:text-lg text-white font-black before:content-['8'] before:pr-1.5 before:text-4xl before:text-white/50">
							Finul result
						</h3>
						<p
							class="text-white/80 break-words text-base my-5 font-light lg:max-w-2xl">
							Final result, submission of the project to the customer
						</p>
					</div>
				</div>
			</div>
			<div
				class="shadow-top shadow-bottom grid 2xl:grid-cols-2 place-content-start mb-10 lg:mb-0 w-full 2xl:place-items-center rounded-2xl break-words bg-gradient-to-r from-blue-500/30 to-purple-500/10 p-4 lg:p-10 my-10 transition-all duration-150">
				<div class="grid place-items-start 2xl:mx-auto max-w-2xl">
					<div class="lg:min-w-max">
						<h3 class="text-3xl xl:text-4xl text-white font-black">
							Just write to me to get started
						</h3>
					</div>
					<p
						class="text-white/80 break-words font-bold md:text-lg lg:text-md text-left py-5">
						By choosing us you bet on young and talented people, we love our
						business and with every project we strive to jump over the top, to
						go beyond templates and standards wherever possible. We will
						actively guide you from the beginning of the collaboration to its
						release, because it's our baby that will see the world, it's our
						reputation. Let's do something incredible together
						<span class="pulseNeon text-lg">😎🔥</span>
					</p>
					<p
						class="text-white/80 font-base text-sm max-w-lg text-left bg-gradient-to-r from-blue-500/30 to-purple-500/10 rounded-lg p-5 my-5">
						* The price is listed as initial, it may change depending on the
						complexity of the project.
					</p>
					<nuxt-link
						to="/contact"
						class="text-white text-center py-3 px-5 mt-5 w-[150px] transition-all duration-150 rounded-lg text-sm bg-gradient-to-r from-purple-500/30 to-blue-500/10 hover:shadow-2xl hover:shadow-indigo-500"
						>Get started</nuxt-link
					>
				</div>
				<div
					class="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-2 place-content-center text-center place-self-center gap-5 lg:gap-8 mt-10 mb-10 lg:mb-0 lg:mt-10 2xl:mt-0 text-white">
					<div
						class="grid place-items-center bg-gradient-to-r from-blue-500/30 to-purple-500/10 rounded-lg p-3 lg:p-5 xl:p-5 transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<div>
							<svg
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
						</div>
						<div
							class="p-2 text-sm xl:text-lg xl:font-black text-white my-2 xl:my-0">
							<h4 class="font-light">Done projects</h4>
						</div>
						<div class="text-xl font-black text-white/80">25+</div>
					</div>
					<div
						class="grid place-items-center bg-gradient-to-r from-blue-500/30 to-purple-500/10 rounded-lg p-3 lg:p-5 transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<div>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M12 19C10.067 19 8.31704 18.2165 7.05029 16.9498L12 12L12 5C15.866 5 19 8.13401 19 12C19 15.866 15.866 19 12 19Z"
									fill="currentColor" />
								<path
									fill-rule="evenodd"
									clip-rule="evenodd"
									d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
									fill="currentColor" />
							</svg>
						</div>
						<div
							class="p-2 text-sm xl:text-lg xl:font-black text-white my-2 xl:my-0">
							<h4 class="font-light">Developming</h4>
						</div>
						<div class="text-xl font-black text-white/80">3Y+</div>
					</div>
					<div
						class="grid place-items-center bg-gradient-to-r from-blue-500/30 to-purple-500/10 rounded-lg p-3 lg:p-5 transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<div>
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								xmlns="http://www.w3.org/2000/svg">
								<path
									d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
									fill="currentColor" />
							</svg>
						</div>
						<div
							class="p-2 text-sm xl:text-lg xl:font-black text-white my-2 xl:my-0">
							<h4 class="font-light">Technologies</h4>
						</div>
						<div class="text-xl font-black text-white/80">7+</div>
					</div>
					<div
						class="grid place-items-center bg-gradient-to-r from-blue-500/30 to-purple-500/10 rounded-lg p-3 lg:p-5 transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500">
						<div>
							<svg
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
						</div>
						<div
							class="p-2 text-sm xl:text-lg xl:font-black text-white my-2 xl:my-0">
							<h4 class="font-light">Sales growth</h4>
						</div>
						<div class="text-xl font-black text-white/80">1000%+</div>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script setup>
	import { onMounted } from 'vue';
	import { initPopovers } from 'flowbite';

	useHead({
		title: 'Services',
	});

	// initialize components based on data attribute selectors
	onMounted(() => {
		initPopovers();
	});
</script>
