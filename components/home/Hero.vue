<template>
	<div class="hero home relative overflow-hidden">
		<div class="container mx-auto py-20 lg:py-40 grid grid-cols-1 lg:grid-cols-2 gap-4">
			<div class="w-full relative">
				<h1 class="text-white text-5xl xl:text-6xl lg:text-5xl tracking-tight leading-tight font-bold hero-heading">
					Complete <br class="hidden md:flex" />Code Editor<br class="hidden md:flex" />
					for WordPress.
				</h1>
				<p class="text-lg text-white text-opacity-60 leading-relaxed mt-3 mb-6">
					Finally, a simple, intuitive interface and easy workflow <br class="hidden md:flex" />
					for WordPress custom codes.
				</p>
				<a href="/pricing" aria-label="Buy Pro version" class="text-white bg-red-900 hover:bg-red-800 transition font-bold uppercase text-sm px-6 py-3 rounded-full mr-1 mb-1 inline-flex items-center" role="button">
					Buy Pro Now
					<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M4 12h16" />
						<path d="M13 5l7 7-7 7" />
					</svg>
				</a>
				<a href="https://wordpress.org/plugins/custom-codes/" aria-label="Download free version" target="_blank" class="text-white text-opacity-40 background-transparent font-bold uppercase px-3 py-1 text-xs transition hover:text-opacity-100 inline-flex items-center mt-3 md:mt-0" role="button">
					<svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
						<path d="M12 15V3m0 12l-4-4m4 4l4-4" />
						<path d="M2 17l.621 2.485A2 2 0 004.561 21H19.439a2 2 0 001.94-1.515L22 17" />
					</svg>
					Try Free Version
				</a>
			</div>
			<div class="hidden md:flex z-10">
				<img class="screen" src="~static/cc-hero.png" alt="CodeKit Editor" />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.screen {
	position: absolute;
	bottom: -40px;
	width: 1200px;
	@apply md:ml-96 lg:ml-14 xl:ml-12;
}
</style>
