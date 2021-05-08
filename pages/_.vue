<template>
	<main>
		<div class="hero relative h-96 py-96 flex items-center">
			<div class="container mx-auto text-center pt-14 pb-14 lg:pt-24 lg:pb-20 relative">
				<div class="text-7xl text-white font-bold tracking-tight leading-tight">404</div>
				<h1 class="text-white tracking-tight leading-tight text-4xl font-bold -mt-1 mb-1">
					Page not found
				</h1>
				<a href="/" class="text-base text-white text-opacity-60 hover:text-opacity-100 transition-all border-b border-opacity-10 border-white hover:border-opacity-100 leading-relaxed mt-3 inline-flex mb-6 items-center">
					<svg class="mr-1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" display="block" id="ArrowLeft">
						<path d="M11 5l-7 7 7 7" />
						<path d="M4 12h16" />
					</svg>
					Get back to home page
				</a>
			</div>
		</div>
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: "Page not found"
		};
	}
};
</script>

<style lang="postcss"></style>
