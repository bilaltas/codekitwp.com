<template>
	<header>
		<div class="container mx-auto flex items-center">
			<div class="flex items-center">
				<NuxtLink to="/">
					<headerLogo />
				</NuxtLink>
				<p class="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-100 xl:border-opacity-40 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5">
					<span class="hidden xl:inline">Beautifully integrated development environment for WordPress</span>
				</p>
			</div>
			<nav class="w-full grid grid-flow-col items-center gap-6 mt-4 sm:mt-0 sm:w-auto sm:ml-auto">
				<NuxtLink to="/features">Features</NuxtLink>
				<NuxtLink to="/pricing">Pricing &amp; <abbr title="Frequently asked questions">FAQ</abbr></NuxtLink>
				<NuxtLink to="/support">Support</NuxtLink>
				<NuxtLink to="/login" class="button">
					Buy Pro
					<svg width="11" height="10" fill="none" class="flex-none ml-1.5 text-white group-hover:text-teal-600">
						<path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
					</svg>
				</NuxtLink>
			</nav>
		</div>
	</header>
</template>

<script>
export default {};
</script>

<style lang="postcss">
header {
	@apply flex-none relative z-50 text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-4;

	nav {
		& > a {
			@apply text-gray-600
			hover:text-gray-900
			transition;

			&.nuxt-link-exact-active {
				@apply text-cc-main;
			}

			&.button {
				@apply inline-flex items-center justify-center h-9 px-4 font-bold text-white bg-gray-900 hover:bg-cc-main hover:text-white transition text-xs border-2 border-transparent rounded-full focus:outline-none;
			}
		}
	}
}
</style>
