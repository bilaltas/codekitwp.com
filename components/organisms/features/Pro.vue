<template>
	<section id="pro" class="relative py-16 overflow-hidden text-left bg-dark-900 sm:py-20 md:pt-24 md:pb-24">
		<div class="container mx-auto">
			<div class="section-title">
				<span class="inline-flex py-2 font-mono text-[13px] font-semibold tracking-wider uppercase rounded-full text-dark-100">PRO Features</span>
				<h2 class="text-[30px] leading-[36px] md:text-4xl xl:text-[48px] font-bold md:leading-[1.2] tracking-[-0.03em] text-dark-50">
					Take full control and <br />
					do more on your website
				</h2>
			</div>
			<div class="flex flex-col lg:flex-row lg:gap-24">
				<div class="flex-1">
					<div class="feature-wrapper">
						<div class="my-10 feature-block">
							<h3 class="flex items-center text-[22px] font-semibold tracking-tight text-dark-50 ">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M16 18L22 12L16 6" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M8 6L2 12L8 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>

								Extended language support
							</h3>
							<p class="mt-2 text-[18px] leading-relaxed text-dark-300">Keep developing and adding code snippets with the language you’re comfortable with. Extended language supports wider range of languages which make you feel home when developing with out-of-box languages.</p>
						</div>
						<div class="my-10 feature-block">
							<h4 class="flex items-center text-[22px] font-semibold tracking-tight text-dark-50">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M2 17L12 22L22 17" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
									<path d="M2 12L12 17L22 12" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								</svg>

								Code includes
							</h4>
							<p class="mt-2 text-[18px] leading-relaxed text-dark-300">Bootstrap lover? Maybe Tailwind? Maybe you just want to include a font, or icon pack through CDN? You can practically include any type of code, to your existing code snippet with few clicks.</p>
						</div>
					</div>
				</div>
				<div class="flex-1">
					<div class="my-0 text-white md:my-10 feature-block">
						<h4 class="flex items-center text-[22px] font-semibold tracking-tight text-dark-50">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M10 3H3V10H10V3Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M21 3H14V10H21V3Z" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M21 14H14V21H21V14Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M10 14H3V21H10V14Z" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>

							Advanced code deployment
						</h4>
						<p class="mt-2 text-[18px] leading-relaxed text-dark-300">Deploy your code on not just front-end or admin area, but all the pages, custom post types, taxonomies, archives and templates. This is the place where you have all the control over your code deployment.</p>
					</div>

					<div class="my-10 text-white feature-block">
						<h4 class="flex items-center text-[22px] font-semibold tracking-tight text-dark-50">
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M9.09009 8.99959C9.32519 8.33126 9.78924 7.7677 10.4 7.40873C11.0108 7.04975 11.729 6.91853 12.4273 7.0383C13.1255 7.15808 13.7589 7.52112 14.2152 8.06312C14.6714 8.60512 14.9211 9.29112 14.9201 9.99959C14.9201 11.9996 11.9201 12.9996 11.9201 12.9996" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
								<path d="M12 17H12.01" stroke="#EF4444" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
							</svg>

							Code Hints, Folding & Groups
						</h4>
						<p class="mt-2 text-[18px] leading-relaxed text-dark-300">Tidy up all of your code snippets into groups, fold them, get hints while you developing. The perfect developer suite for who hates the spagetti codes.</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.feature-block svg {
	@apply inline-flex mr-2.5;
}
</style>
