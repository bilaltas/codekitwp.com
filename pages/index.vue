<template>
	<main>
		<homeHero />
		<div class="features py-14 lg:py-24">
			<div class="container mx-auto">
				<div class="feature-section justify-center text-center">
					<span class="font-mono uppercase rounded-full text-gray-200 py-1 px-4 text-xs inline-flex font-semibold tracking-wider">Features</span>
					<h2 class="text-3xl xl:text-heading text-gray-900 tracking-tight leading-tight font-bold">The most powerful integrated IDE</h2>
					<p class="text-gray-500 mt-3 leading-relaxed font-body text-base ">
						With the power of our integrated IDE, Custom Code will significantly boost your development efficiency. <br />
						The features also provide continuous development and urgent deployment of codes without effort. <br />
						It is actually just like your favorite code editor.
					</p>
				</div>
				<div class="feature-section text-center xl:text-left grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-20 my-14 lg:my-20">
					<div class="align-center items-center flex">
						<div class="flex-1">
							<iconsCode />
							<h3 class="text-3xl xl:text-heading text-gray-900 font-bold tracking-tight leading-tight flex-1">
								Directly integrate <br />
								any type of code
							</h3>
							<p class="text-gray-500 mt-5 leading-relaxed font-body text-base flex-1 xl:pr-20">Our code editor integrates syntax highlighting, autocompletion with advanced navigation of your codes. An ideal editor for node.js, Python and Ruby development. We provide more templates such as Webpack (and Gulp) templates, EmberJS templates to meet your development needs.</p>
						</div>
					</div>
					<div>
						<img src="~static/feature-1.png" alt="" />
					</div>
				</div>
				<div class="feature-section text-center xl:text-left grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-20 my-14 lg:my-20">
					<div>
						<img src="~static/feature-2.png" alt="" />
					</div>
					<div class="align-center items-center flex">
						<div class="flex-1">
							<iconsPlacement />
							<h3 class="text-3xl xl:text-heading text-gray-900 font-bold tracking-tight leading-tight flex-1">
								Place your code <br />
								wherever you want
							</h3>
							<p class="text-gray-500 mt-5 leading-relaxed font-body text-base flex-1 xl:pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest.</p>
						</div>
					</div>
				</div>
				<div class="feature-section text-center xl:text-left grid grid-cols-1 xl:grid-cols-2 gap-10 lg:gap-20 my-14 lg:my-20">
					<div class="align-center items-center flex">
						<div class="flex-1">
							<iconsInclude />
							<h3 class="text-3xl xl:text-heading text-gray-900 font-bold tracking-tight leading-tight flex-1">
								Include your favorite<br />
								tools & frameworks
							</h3>
							<p class="text-gray-500 mt-5 leading-relaxed font-body text-base flex-1 xl:pr-20">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest.</p>
						</div>
					</div>
					<div>
						<img src="~static/feature-3.png" alt="" />
					</div>
				</div>
			</div>
		</div>
		<homeTestimonials />
		<CTA />
	</main>
</template>

<script>
export default {
	head: {
		title: "The Code Editor for WordPress | Custom Codes",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "my website description"
			}
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	}
};
</script>

<style lang="postcss"></style>
