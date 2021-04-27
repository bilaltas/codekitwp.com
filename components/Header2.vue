<template>
	<header>
		<div class="container mx-auto flex items-center justify-between">
			<div class="flex items-center">
				<NuxtLink to="/">
					<headerLogo />
				</NuxtLink>
				<p class="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-100 xl:border-opacity-40 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5">
					<span class="hidden xl:inline">Beautifully integrated development environment for WordPress</span>
				</p>
			</div>
			<nav class="w-auto grid grid-flow-col items-center gap-4 md:gap-6 mt-0">
				<NuxtLink to="/features" class="hidden md:inline-flex">Features</NuxtLink>
				<NuxtLink to="/pricing" class="hidden md:inline-flex">Pricing &amp; <abbr title="Frequently asked questions">FAQ</abbr></NuxtLink>
				<NuxtLink to="/support" class="hidden md:inline-flex">Support</NuxtLink>
				<button href="#" class="inline-flex md:hidden text-gray-900" aria-label="Open Menu" title="Open Menu" @click="isMenuOpen = true">
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.5 14H24.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M3.5 7H24.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M3.5 21H24.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
				<NuxtLink to="/login" class="button hidden md:inline-flex">
					Buy Pro
					<svg width="11" height="10" fill="none" class="flex-none ml-1.5 text-white group-hover:text-teal-600">
						<path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
					</svg>
				</NuxtLink>
			</nav>
		</div>
		<div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
			<div class="pt-4 bg-white border-t shadow-sm">
				<div class="flex items-center justify-between mb-4 px-6">
					<div>
						<a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
							<headerLogo />
						</a>
					</div>
					<div>
						<button aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" @click="isMenuOpen = false">
							<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
								<path fill="currentColor" d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"></path>
							</svg>
						</button>
					</div>
				</div>
				<nav class="grid grid-flow-row gap-3">
					<NuxtLink to="/features" class="px-6">Features</NuxtLink>
					<NuxtLink to="/pricing" class="px-6">Pricing &amp; <abbr title="Frequently asked questions">FAQ</abbr></NuxtLink>
					<NuxtLink to="/support" class="px-6">Support</NuxtLink>
					<NuxtLink to="/my-account" class="px-6">My Account</NuxtLink>
					<NuxtLink to="/login" class="inline-flex items-center justify-center h-10 px-4 font-bold text-white bg-cc-main hover:bg-cc-main hover:text-white transition text-sm border-2 border-transparent rounded-none focus:outline-none sm:inline-flex mt-2">
						Buy Pro
						<svg width="11" height="10" fill="none" class="flex-none ml-1.5 text-white group-hover:text-teal-600">
							<path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
						</svg>
					</NuxtLink>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {
	data() {
		return {
			isMenuOpen: false
		};
	}
};
</script>

<style lang="postcss">
header {
	@apply flex-none relative z-50 text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-4 lg:py-4;
}

nav {
	& > a {
		@apply text-gray-600
			hover:text-gray-900
			transition;

		&.nuxt-link-exact-active {
			@apply text-cc-main;
		}

		&.button {
			@apply items-center justify-center h-9 px-4 font-bold text-white bg-gray-900 hover:bg-cc-main hover:text-white transition text-xs border-2 border-transparent rounded-full focus:outline-none;
		}
	}
}
</style>
