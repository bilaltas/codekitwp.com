<template>
	<main>
		<homeHero />
		<div class="features pt-24 pb-24 lg:pt-24 lg:pb-14">
			<div class="container mx-auto">
				<div class="feature-section justify-center text-center">
					<span class="font-mono uppercase rounded-full text-gray-200 py-1 px-4 text-xs inline-flex font-semibold tracking-wider">Features</span>
					<h2 class="text-3xl xl:text-section text-gray-900 tracking-tight leading-tight font-bold">The most powerful integrated IDE</h2>
					<p class="text-gray-500 mt-3 leading-relaxed font-body text-base ">
						With the power of our integrated IDE, Custom Code will significantly boost your development efficiency. <br />
						The features also provide continuous development and urgent deployment of codes without effort. <br />
						It is actually just like your favorite code editor.
					</p>
				</div>
				<div class="feature-section text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 my-14 lg:my-20">
					<div class="align-center items-center flex order-2 md:order-1">
						<div class="flex-1">
							<span class="font-mono uppercase rounded-full text-gray-200 py-1 text-xs inline-flex font-semibold tracking-wider">Editor</span>
							<h3 class="text-3xl xl:text-section text-gray-900 font-bold tracking-tight leading-tight flex-1">
								Directly integrate <br />
								any type of code
							</h3>
							<p class="text-gray-500 mt-4 leading-relaxed font-body text-base flex-1">CodeKit integrates syntax highlighting, autocompletion with advanced navigation of your codes. A truly ideal for both experienced developers and WordPress users who want to add simple codes to their websites. With CodeKit, you can also add your code for device-specific resolutions which is perfect for many reasons.</p>
							<nuxt-link to="/features/" class="inline-flex text-cc-main border-b border-cc-main pb-0.5 font-bold mt-4 items-center hover:text-gray-900 hover:border-gray-900 transition">
								Explore all features
								<svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" display="block" aria-hidden="true">
									<path d="M4 12h16" />
									<path d="M13 5l7 7-7 7" />
								</svg>
							</nuxt-link>
						</div>
					</div>
					<div class="order-1 md:order-2">
						<img class="md:w-full" data-src="~static/feature-1.png" alt="CodeKit's supported code languages" v-lazy-load />
					</div>
				</div>
				<div class="feature-section text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 my-14 lg:my-20">
					<div class="order-1 md:order-1">
						<img class="md:w-full" data-src="~static/feature-2.png" alt="CodeKit's supported code placements" v-lazy-load />
					</div>
					<div class="align-center items-center flex order-2 md:order-1">
						<div class="flex-1">
							<span class="font-mono uppercase rounded-full text-gray-200 py-1 text-xs inline-flex font-semibold tracking-wider">Deployment</span>
							<h3 class="text-3xl xl:text-section text-gray-900 font-bold tracking-tight leading-tight flex-1">
								Place your code <br />
								wherever you want
							</h3>
							<p class="text-gray-500 mt-4 leading-relaxed font-body text-base flex-1">Just like you can write device-specific codes on CodeKit, you can write location specific codes as well. Choose wide range of locations such as pages, admin area, custom post types, taxonomies, categories and much more and let CodeKit deploy your code according your selections.</p>
							<nuxt-link to="/features/" class="inline-flex text-cc-main border-b border-cc-main pb-0.5 font-bold mt-4 items-center hover:text-gray-900 hover:border-gray-900 transition">
								Explore all features
								<svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" display="block" aria-hidden="true">
									<path d="M4 12h16" />
									<path d="M13 5l7 7-7 7" />
								</svg>
							</nuxt-link>
						</div>
					</div>
				</div>
				<div class="feature-section text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 my-14 lg:my-20">
					<div class="align-center items-center flex order-2 md:order-1">
						<div class="flex-1">
							<span class="font-mono uppercase rounded-full text-gray-200 py-1 text-xs inline-flex font-semibold tracking-wider">Code Includes</span>
							<h3 class="text-3xl xl:text-section text-gray-900 font-bold tracking-tight leading-tight flex-1">
								Include your favorite<br />
								tools & frameworks
							</h3>
							<p class="text-gray-500 mt-4 leading-relaxed font-body text-base flex-1">Frameworks, code libraries, icon packs, fonts and much more makes our work easier but it’s not the same case as you try to integrate with your WordPress theme. With Code Includes, you can simply integrate any type of code through CDN, External URL, or your other code snippets to one of your code snippet.</p>
							<nuxt-link to="/features/" class="inline-flex text-cc-main border-b border-cc-main pb-0.5 font-bold mt-4 items-center hover:text-gray-900 hover:border-gray-900 transition">
								Explore all features
								<svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" display="block" aria-hidden="true">
									<path d="M4 12h16" />
									<path d="M13 5l7 7-7 7" />
								</svg>
							</nuxt-link>
						</div>
					</div>
					<div class="order-1 md:order-2">
						<img class="md:w-full" data-src="~static/feature-3.png" alt="CodeKit's supported code include" v-lazy-load />
					</div>
				</div>
			</div>
		</div>
		<homeTestimonials />
		<CTA />
	</main>
</template>

<script>
export default {};
</script>

<style lang="postcss"></style>
