<template>
	<main id="features">
		<OrganismsFeaturesHero />
		<OrganismsFeaturesBand />
		<OrganismsFeaturesCore />
		<OrganismsFeaturesPro />
		<OrganismsFeaturesComparison />
		<OrganismsHomeTestimonials />
		<OrganismsCTA />
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: "Features",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "CodeKit is the one and only plugin that provides integrated IDE, supporting wide range of languages and powerful code management interface in the marketplace."
				},
				{
					hid: "twitter:description",
					name: "twitter:description",
					content: "CodeKit is the one and only plugin that provides integrated IDE, supporting wide range of languages and powerful code management interface in the marketplace."
				},
				{
					hid: "og:description",
					property: "og:description",
					content: "CodeKit is the one and only plugin that provides integrated IDE, supporting wide range of languages and powerful code management interface in the marketplace."
				}
			]
		};
	}
};
</script>
