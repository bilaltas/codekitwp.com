<template>
	<main id="support">
		<OrganismsSupportHero />
		<!-- <OrganismsSupportForm /> -->
		<OrganismsFAQ />
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: "Support",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Looking for some help? You can simply contact with us by filling the form below for both pre-sale questions and plugin support."
				},
				{
					hid: "twitter:description",
					name: "twitter:description",
					content: "Looking for some help? You can simply contact with us by filling the form below for both pre-sale questions and plugin support."
				},
				{
					hid: "og:description",
					property: "og:description",
					content: "Looking for some help? You can simply contact with us by filling the form below for both pre-sale questions and plugin support."
				}
			]
		};
	}
};
</script>
