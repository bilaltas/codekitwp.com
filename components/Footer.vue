<template>
	<footer>
		<div class="container mx-auto flex justify-between">
			<a href="/components">
				<headerLogo />
			</a>
			<nav class="grid grid-flow-col gap-6">
				<NuxtLink to="/">Home</NuxtLink>
				<NuxtLink to="/features">Features</NuxtLink>
				<NuxtLink to="/pricing">Pricing &amp; <abbr title="frequently asked questions">FAQ</abbr></NuxtLink>
				<NuxtLink to="/support">Support</NuxtLink>
			</nav>
		</div>
		<div class="container mx-auto flex items-center flex-wrap md:flex-nowrap mt-5 pt-3 border-t border-gray-900 border-opacity-5 ">
			<nav class="w-full mt-1 lg:mt-4 sm:mt-0 sm:w-auto sm:mr-auto grid grid-flow-col gap-6 items-center text-xs">
				<span class="text-gray-500">&copy;2021 Copyright.</span>
				<NuxtLink to="/privacy-policy">
					<span class="hidden sm:inline">Privacy Policy</span>
				</NuxtLink>
				<NuxtLink to="/terms-of-service">
					<span class="hidden sm:inline">Terms of Service</span>
				</NuxtLink>
			</nav>
			<div class="w-full lg:mt-4 sm:mt-0 sm:w-auto sm:ml-auto text-xs">
				<span class="text-gray-500">
					<span class="lg:inline-block md:hidden">A product by PressX.</span>
					<span class="inline-block">
						Engineered with
						<svg class="inline-flex" width="10" height="10" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.5 6.125C3.41218 6.12489 3.32644 6.09835 3.25391 6.04885C2.17943 5.31945 1.71418 4.81934 1.45756 4.50666C0.910683 3.84016 0.648866 3.15588 0.656249 2.41486C0.664863 1.5657 1.34613 0.875 2.17492 0.875C2.77758 0.875 3.19498 1.21447 3.43807 1.49721C3.44577 1.50607 3.45528 1.51318 3.46597 1.51805C3.47665 1.52293 3.48826 1.52545 3.5 1.52545C3.51174 1.52545 3.52335 1.52293 3.53403 1.51805C3.54472 1.51318 3.55423 1.50607 3.56193 1.49721C3.80502 1.2142 4.22242 0.875 4.82508 0.875C5.65387 0.875 6.33514 1.5657 6.34375 2.415C6.35113 3.15615 6.08904 3.84043 5.54244 4.5068C5.28582 4.81947 4.82057 5.31959 3.74609 6.04898C3.67355 6.09844 3.5878 6.12493 3.5 6.125V6.125Z" fill="#DB4040" />
						</svg>
						in Istanbul,
					</span>
					<span class="inline-block">deployed worldwide.</span>
				</span>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>

<style lang="postcss">
footer {
	@apply relative z-50 text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-7;

	nav {
		& > a {
			@apply text-gray-600
			hover:text-cc-main
			transition;

			&.nuxt-link-exact-active {
				@apply text-cc-main;
			}
		}
	}
}
</style>
