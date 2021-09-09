<template>
	<section id="home-features" class="pb-4 pt-36 bg-dark-50 features md:pt-24 md:pb-8">
		<div class="container mx-auto">
			<div class="justify-start text-left md:justify-center md:text-center feature-section">
				<AtomsSectionTitle>The most powerful integrated IDE</AtomsSectionTitle>
				<AtomsSectionContent>
					With the power of our integrated IDE, Custom Code will significantly <strong>boost your development efficiency.</strong> <br class="hidden lg:block" />
					The features also provide continuous development and urgent deployment of codes without effort. <br class="hidden lg:block" />
					It is actually just <strong>like your favorite code editor.</strong>
				</AtomsSectionContent>
			</div>
			<div class="grid grid-cols-1 gap-8 my-24 text-left feature-section lg:grid-cols-2 lg:gap-20 lg:my-20">
				<div class="flex items-center order-1 align-center md:order-1">
					<div class="flex-1">
						<AtomsSectionSub>Editor</AtomsSectionSub>
						<AtomsSectionTitle>
							Directly integrate <br class="hidden md:block" />
							any type of code
						</AtomsSectionTitle>
						<AtomsSectionContent>CodeKit integrates <strong>syntax highlighting</strong>, <strong>autocompletion</strong> with <strong>advanced navigation</strong> of your codes. A truly ideal for both experienced developers and WordPress users who want to add simple codes to their websites. With CodeKit, you can also add your <strong>code for device-specific resolutions</strong> which is perfect for many reasons. </AtomsSectionContent>
						<AtomsFeaturesLink />
					</div>
				</div>
				<div class="order-2 md:order-2">
					<img v-lazy-load class="md:w-full" src="~static/images/feature-1.svg" alt="CodeKit's supported code languages" />
				</div>
			</div>
			<div class="grid grid-cols-1 gap-8 my-24 text-left feature-section lg:grid-cols-2 lg:gap-20 lg:my-20">
				<div class="order-2 md:order-1">
					<img v-lazy-load class="md:w-full" src="~static/images/feature-2.svg" alt="CodeKit's supported code placements" />
				</div>
				<div class="flex items-center order-1 align-center md:order-1">
					<div class="flex-1">
						<AtomsSectionSub>Deployment</AtomsSectionSub>
						<AtomsSectionTitle>
							Place your code <br class="hidden md:block" />
							wherever you want
						</AtomsSectionTitle>
						<AtomsSectionContent>Just like you can write device-specific codes on CodeKit, you can write <strong>location specific codes</strong> as well. Choose wide range of locations such as pages, admin area, custom post types, taxonomies, categories and much more and let CodeKit deploy your code according your selections.</AtomsSectionContent>
						<AtomsFeaturesLink />
					</div>
				</div>
			</div>
			<div class="grid grid-cols-1 gap-8 my-24 text-left feature-section lg:grid-cols-2 lg:gap-20 lg:my-20">
				<div class="flex items-center order-1 align-center md:order-1">
					<div class="flex-1">
						<AtomsSectionSub>Code Includes</AtomsSectionSub>
						<AtomsSectionTitle>
							Include your favorite<br class="hidden md:block" />
							tools & frameworks
						</AtomsSectionTitle>
						<AtomsSectionContent>Frameworks, code libraries, icon packs, fonts and much more makes our work easier but it’s not the same case as you try to integrate with your WordPress theme. With Code Includes, you can simply <strong>integrate any type of code through</strong> CDN, External URL, or your other code snippets to one of your code snippet.</AtomsSectionContent>
						<AtomsFeaturesLink />
					</div>
				</div>
				<div class="order-2 md:order-2">
					<img v-lazy-load class="md:w-full" src="~static/images/feature-3.svg" alt="CodeKit's supported code include" />
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#home-features {
	margin-top: -300px;
	padding-top: 300px;
	@media (max-width: 414px) {
		margin-top: 0;
		padding-top: 32px;
	}

	a {
		@apply relative;
		&:before {
			content: "";
			width: 100%;
			height: 4px;
			position: absolute;
			bottom: 1px;
			@apply bg-red-500 transition-all;
		}
	}
}
</style>
