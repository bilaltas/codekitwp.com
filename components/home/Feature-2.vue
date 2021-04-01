<template>
	<div class="feature-section text-left grid grid-cols-2 gap-20 my-28">
		<div class="align-center items-center flex">
			<div class="flex-1">
				<iconsCode />
				<h3 class="text-4xl text-black font-semibold tracking-tight leading-tight flex-1">
					Directly integrate <br />
					any type of code
				</h3>
				<p class="text-black text-opacity-70 mt-5 leading-relaxed font-body text-base flex-1">Our code editor integrates syntax highlighting, autocompletion with advanced navigation of your codes. An ideal editor for node.js, Python and Ruby development. We provide more templates such as Webpack (and Gulp) templates, EmberJS templates to meet your development needs.</p>
				<a class="border-b-2 text-black border-black border-opacity-20 hover:border-opacity-100 transition font-serif font-bold pb-0.5 inline-flex mt-5 items-center" href="#">
					See compatible languages
					<iconsArrowRight />
				</a>
			</div>
		</div>
		<div>
			<img src="~static/feature-1.png" alt="" />
		</div>
	</div>
</template>

<script>
export default {
	components: true
};
</script>
