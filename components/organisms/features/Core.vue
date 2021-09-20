<template>
	<section id="core" class="relative py-16 overflow-hidden text-left bg-dark-50 sm:py-18 md:py-24">
		<div class="container mx-auto">
			<div class="section-title">
				<AtomsSectionSub>Core Features</AtomsSectionSub>
				<AtomsSectionTitle>
					Natively integrated IDE <br class="hidden md:block" />
					on your WordPress Admin
				</AtomsSectionTitle>
			</div>

			<div class="flex flex-col lg:flex-row lg:gap-24">
				<div class="flex-1">
					<div class="feature-wrapper">
						<div class="my-10 text-white feature-block">
							<h3 class="flex items-center text-[22px] font-semibold tracking-tight text-dark-700">
								<svg class="inline-flex mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke-width="2" display="block" aria-hidden="true">
									<path fill-rule="evenodd" clip-rule="evenodd" d="M11.372.19c.38-.253.875-.253 1.256 0L23.492 7.4c.317.21.508.565.508.946v7.308c0 .38-.19.736-.508.947l-10.864 7.21c-.38.252-.875.252-1.256 0L.508 16.6A1.136 1.136 0 010 15.654V8.346c0-.38.19-.736.508-.947L11.372.19zm-9.1 10.273v3.058l2.288-1.54-2.288-1.518zm4.337 2.878L3.18 15.648l7.684 5.1v-4.583L6.61 13.341zm6.527 2.824v4.582l7.684-5.1-3.43-2.306-4.254 2.824zm6.303-4.183l2.29 1.54v-3.06l-2.29 1.52zm1.371-3.636l-3.41 2.263-4.264-2.868V3.253l7.674 5.093zm-9.946-5.093V7.74l-4.263 2.868L3.19 8.346l7.674-5.093zM12 9.715l-3.35 2.254L12 14.192l3.35-2.223L12 9.715z" />
								</svg>
								Wide-range of language support
							</h3>
							<p class="mt-2 text-[18px] leading-relaxed text-dark-600">CodeKit is the one and only plugin that supports more than 10+ languages in a single plugin. Do range of improvements without worrying about compilers and compatibility.</p>
						</div>
						<div class="my-10 text-white feature-block">
							<h4 class="flex items-center text-[22px] font-semibold tracking-tight text-dark-700">
								<svg class="inline-flex mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" aria-hidden="true">
									<rect x="2" y="4" width="20" height="16" rx="2" />
									<rect x="13" y="13" width="9" height="7" rx="2" stroke="#c33030" />
								</svg>
								Device specific development
							</h4>
							<p class="mt-2 text-[18px] leading-relaxed text-dark-600">Still not tired of writing media queries? Give it a try to editor device tabs for device-specific development. They are pre-configured according to the standards but you can always change it in the settings.</p>
						</div>
					</div>
				</div>
				<div class="flex-1">
					<div class="my-0 text-white md:my-10 feature-block">
						<h4 class="flex items-center text-[22px] font-semibold tracking-tight text-dark-700">
							<svg class="inline-flex mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" aria-hidden="true">
								<rect x="3" y="3" width="7" height="7" rx="1" stroke="#c33030" />
								<rect x="3" y="14" width="7" height="7" rx="1" />
								<rect x="14" y="3" width="7" height="7" rx="1" />
								<rect x="14" y="14" width="7" height="7" rx="1" stroke="#c33030" />
							</svg>
							Basic code deployment
						</h4>
						<p class="mt-2 text-[18px] leading-relaxed text-dark-600">Sometimes all we want to deploy a simple code block to single page. This is where Code Locations come in to play. Easily select the location/page and deploy your code.</p>
					</div>

					<div class="my-10 text-white feature-block">
						<h4 class="flex items-center text-[22px] font-semibold tracking-tight text-dark-700">
							<svg class="inline-flex mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" aria-hidden="true">
								<path d="M16.474 5.408l2.118 2.117m-.756-3.982L12.109 9.27a2.118 2.118 0 00-.58 1.082L11 13l2.648-.53c.41-.082.786-.283 1.082-.579l5.727-5.727a1.853 1.853 0 10-2.621-2.621z" />
								<path d="M19 15v3a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h3" stroke="#c33030" />
							</svg>
							Customizable IDE
						</h4>
						<p class="mt-2 text-[18px] leading-relaxed text-dark-600">We all know that developers are loyal to their IDE’s because all of the extensions, the interface, the colors and even typography. With CodeKit, you can customize your integrated IDE easily and make it more like your local IDE.</p>
					</div>
				</div>
			</div>
			<div class="grid grid-cols-3 gap-6 mt-6 screenshots">
				<a href="images/screenshot-1.png" target="_blank" class="overflow-hidden rounded-sm image-box h-54 screenshot">
					<img src="~static/images/screenshot-1.png" alt="CodeKit Feature 1" />
					<span>All codes screen</span>
				</a>
				<a href="images/screenshot-2.png" target="_blank" class="overflow-hidden rounded-sm image-box h-54 screenshot">
					<img src="~static/images/screenshot-2.png" alt="CodeKit Feature 2" />
					<span>The code editor</span>
				</a>
				<a href="images/screenshot-3.png" target="_blank" class="overflow-hidden rounded-sm image-box h-54 screenshot">
					<img src="~static/images/screenshot-3.png" alt="CodeKit Feature 3" />
					<span>Sample PHP code</span>
				</a>
				<a href="images/screenshot-4.png" target="_blank" class="overflow-hidden rounded-sm image-box h-54 screenshot">
					<img src="~static/images/screenshot-4.png" alt="CodeKit Feature 4" />
					<span>Sample Javasript code</span>
				</a>
				<a href="images/screenshot-5.png" target="_blank" class="overflow-hidden rounded-sm image-box h-54 screenshot">
					<img src="~static/images/screenshot-5.png" alt="CodeKit Feature 5" />
					<span>Editor settings</span>
				</a>
				<a href="images/screenshot-6.png" target="_blank" class="overflow-hidden rounded-sm image-box h-54 screenshot">
					<img src="~static/images/screenshot-6.png" alt="CodeKit Feature 6" />
					<span>Style breakpoints</span>
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.screenshots {
	.screenshot {
		@apply bg-white rounded-sm p-3 border border-dark-100 text-center;
	}
	span {
		@apply text-sm text-dark-500 flex mt-3 italic justify-center;
	}
}
</style>
