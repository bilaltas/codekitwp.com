<template>
	<div>
		<Header />
		<homeHero />
		<div class="features py-24">
			<div class="container mx-auto">
				<homeFeature-1 />
				<homeFeature-2 />
				<homeFeature-3 />
				<homeFeature-4 />
			</div>
		</div>
		<homeTestimonials />
		<CTA />
		<Footer />
	</div>
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
