<template>
	<div class="feature-section text-center xl:text-left grid grid-cols-1 xl:grid-cols-2 gap-20 my-20">
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
</template>

<script>
export default {
	components: true
};
</script>
