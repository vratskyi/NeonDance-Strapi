<template>
	<form
		method="POST"
		action="order_water.php"
		enctype="multipart/form-data"
		@submit.prevent
		class="grid">
		<div class="grid lg:grid-cols-2 gap-x-4">
			<div class="lg:mb-6">
				<label for="name" class="block my-2 text-sm font-medium text-white/80"
					>Your Name</label
				>
				<input
					type="text"
					name="name"
					id="name"
					class="w-full shadow-top shadow-bottom bg-transparent placeholder-white/80 text-sm text-white/80 rounded-lg focus:ring-purple-500 block p-2.5"
					placeholder="Jon Smith"
					required />
			</div>
			<div class="mb-6">
				<label for="email" class="block my-2 text-sm font-medium text-white/80"
					>Your email</label
				>
				<input
					type="email"
					name="email"
					id="email"
					class="w-full shadow-top shadow-bottom bg-transparent placeholder-white/80 text-white/80 text-sm rounded-lg focus:ring-purple-500 block p-2.5"
					placeholder="name@vratsky.com"
					required />
			</div>
		</div>

		<h3 class="my-2 text-sm text-white/80">Who do you represent?</h3>
		<div class="grid lg:grid-cols-2 gap-y-4 lg:gap-y-0 gap-x-4">
			<div
				id="hoverItem"
				class="flex items-center px-5 bg-gradient-to-r from-purple-500/30 to-blue-500/10 transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500 rounded-lg">
				<input
					id="bordered-radio-1"
					type="radio"
					value="Myself"
					name="bordered-radio"
					class="w-1 h-1 text-purple-500 shadow-top shadow-bottom focus:ring-purple-500 focus:ring" />
				<label
					for="bordered-radio-1"
					class="py-4 ml-2 w-full text-sm font-medium text-white/80 cursor-pointer peer-checked:shadow-xl peer-checked:shadow-indigo-500 peer-checked:text-white"
					>Myself</label
				>
			</div>
			<div
				id="hoverItem"
				class="flex items-center px-5 bg-gradient-to-r from-purple-500/30 to-blue-500/10 transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500 rounded-lg">
				<input
					id="bordered-radio-2"
					type="radio"
					value="Company"
					name="bordered-radio"
					class="w-1 h-1 text-purple-500 shadow-top shadow-bottom focus:ring-purple-500 focus:ring" />
				<label
					for="bordered-radio-2"
					class="py-4 ml-2 w-full text-sm font-medium text-white/80 cursor-pointer peer-checked:shadow-xl peer-checked:shadow-indigo-500 peer-checked:text-white"
					>Company</label
				>
			</div>
		</div>

		<h3 class="mt-6 mb-2 text-sm text-white/80">Your budget for project:</h3>
		<ul class="grid w-full lg:grid-cols-3 gap-y-4 lg:gap-y-0">
			<li
				id="hoverItem"
				class="transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500 rounded-lg">
				<input
					type="checkbox"
					name="small"
					id="react-option"
					value="Small-$300"
					class="hidden peer"
					required />
				<label
					for="react-option"
					class="inline-grid px-3 py-5 w-full h-full lg:min-h-[110px] text-white/80 bg-gradient-to-r from-purple-500/30 to-blue-500/10 rounded-lg cursor-pointer peer-checked:shadow-xl peer-checked:shadow-indigo-500 peer-checked:text-white">
					<div class="block text-center">
						<span class="pulseNeon text-xl">🔥</span>
						<div class="w-full text-sm mt-3 font-semibold">Small - $300+</div>
					</div>
				</label>
			</li>
			<li
				id="hoverItem"
				class="lg:mx-2 transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500 rounded-lg">
				<input
					type="checkbox"
					name="medium"
					id="flowbite-option"
					value="Medium-$1000"
					class="hidden peer" />
				<label
					for="flowbite-option"
					class="inline-grid px-3 py-5 w-full h-full lg:min-h-[110px] text-white/80 bg-gradient-to-r from-purple-500/30 to-blue-500/10 rounded-lg cursor-pointer peer-checked:shadow-xl peer-checked:shadow-indigo-500 peer-checked:text-white">
					<div class="block text-center">
						<span class="pulseNeon text-2xl">🔥</span>
						<div class="w-full text-sm mt-3 font-semibold">Medium - $1000+</div>
					</div>
				</label>
			</li>
			<li
				id="hoverItem"
				class="transition-all duration-150 hover:shadow-2xl hover:shadow-indigo-500 rounded-lg">
				<input
					type="checkbox"
					name="big"
					id="angular-option"
					value="Big-$3000"
					class="hidden peer" />
				<label
					for="angular-option"
					class="inline-grid px-3 py-5 w-full h-full lg:min-h-[110px] text-white/80 bg-gradient-to-r from-purple-500/30 to-blue-500/10 rounded-lg cursor-pointer peer-checked:shadow-xl peer-checked:shadow-indigo-500 peer-checked:text-white">
					<div class="block text-center">
						<span class="pulseNeon text-3xl">🔥</span>
						<div class="w-full text-sm mt-3 lg:mt-2 font-semibold">
							Big - $3000+
						</div>
					</div>
				</label>
			</li>
		</ul>

		<label
			for="message"
			class="block lg:mt-6 mb-2 text-sm font-medium text-white/80"
			>Your message</label
		>
		<textarea
			id="message"
			name="message"
			rows="4"
			class="block p-2.5 w-full text-sm text-white/80 shadow-top shadow-bottom rounded-lg border focus:ring-purple-500 focus:border-purple-500"
			placeholder="Your message..."></textarea>

		<button
			id="hoverItem"
			type="submit"
			class="text-white text-center py-3 px-5 mt-5 w-[150px] transition-all duration-150 rounded-lg text-sm bg-gradient-to-r from-purple-500/30 to-blue-500/10 hover:shadow-2xl hover:shadow-indigo-500">
			Send massage
		</button>
	</form>
</template>
