<template>
	<nav class="grid w-full grid-flow-row grid-cols-2 gap-3 mt-5 mb-3 md:mb-0 md:grid-cols-none md:grid-flow-col md:gap-6 md:w-auto md:mt-0 footer-nav" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
		<NuxtLink to="/features" aria-label="Features"><span>Features</span></NuxtLink>
		<NuxtLink to="/solutions" aria-label="Solutions"><span>Solutions</span></NuxtLink>
		<NuxtLink to="/pricing" aria-label="Pricing"><span>Pricing</span></NuxtLink>
		<NuxtLink to="/pricing#faq" aria-label="Frequently Asked Questions"><span>FAQs</span></NuxtLink>
		<NuxtLink to="/affiliates/" aria-label="Affiliates page">Affiliates</NuxtLink>
		<NuxtLink to="/account/" aria-label="My Account">My Account</NuxtLink>
		<NuxtLink to="/support" aria-label="Support"><span>Support</span></NuxtLink>
	</nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer-nav {
	& > a {
		@apply text-dark-700 transition-all hover:text-red-500;

		&.nuxt-link-exact-active {
			@apply text-red-500;
		}
	}
}
</style>
