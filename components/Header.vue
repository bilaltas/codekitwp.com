<template>
	<header role="banner">
		<div class="container mx-auto flex items-center justify-between">
			<div class="flex items-center">
				<NuxtLink to="/" aria-label="Home page" title="Home page">
					<headerLogo />
				</NuxtLink>
				<div class="hidden lg:block text-sm text-gray-500  border-l border-gray-100 border-opacity-40 ml-6 pl-6">
					<nav class="w-auto grid grid-flow-col items-center gap-4 md:gap-6 mt-0" role="navigation" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
						<NuxtLink to="/features" class="hidden md:inline-flex" aria-label="Features page">Features</NuxtLink>
						<NuxtLink to="/pricing" class="hidden md:inline-flex" aria-label="Pricing page">Pricing &amp; FAQ</NuxtLink>
						<NuxtLink to="/support" class="hidden md:inline-flex" aria-label="Support oage">Support</NuxtLink>
					</nav>
				</div>
			</div>
			<nav class="w-auto grid grid-flow-col items-center gap-3 md:gap-3 mt-0" role="navigation" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
				<NuxtLink to="/my-account" class="hidden md:inline-flex items-center justify-center h-9 px-4 font-semibold border text-gray-500 border-gray-100 border-opacity-50 hover:border-opacity-100 hover:text-gray-800 hover:shadow-sm transition text-nav rounded-full focus:shadow-outline focus:outline-none" aria-label="My Account" role="button">My Account</NuxtLink>
				<NuxtLink to="/pricing" class="button hidden md:inline-flex" aria-label="Buy Pro version" role="button">
					Buy Pro
					<svg width="11" height="10" fill="none" class="flex-none ml-1.5 text-white group-hover:text-teal-600" aria-hidden="true">
						<path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
					</svg>
				</NuxtLink>
				<button aria-label="Open Menu" title="Open Menu" class="inline-flex md:hidden text-gray-500 focus:outline-none hover:bg-transparent hover:text-gray-900" @click="isMenuOpen = true">
					<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
						<path d="M3.5 14H24.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M3.5 7H24.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M3.5 21H24.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
				</button>
			</nav>
		</div>
		<div v-if="isMenuOpen" class="absolute top-0 left-0 w-full z-50" role="navigation">
			<div class="pt-4 bg-white border-t border-transparent shadow-sm">
				<div class="flex items-center justify-between mb-4 px-6">
					<div>
						<a href="/" aria-label="Home page" title="Home page" class="inline-flex items-center">
							<headerLogo />
						</a>
					</div>
					<div>
						<button aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded text-gray-500 hover:bg-transparent hover:text-gray-900 focus:outline-none focus:shadow-outline" @click="isMenuOpen = false">
							<svg class="w-5" viewBox="0 0 24 24" aria-hidden="true">
								<path fill="currentColor" d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"></path>
							</svg>
						</button>
					</div>
				</div>
				<nav class="grid grid-flow-row gap-3" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
					<NuxtLink to="/features" class="px-6" aria-label="Features page">Features</NuxtLink>
					<NuxtLink to="/pricing" class="px-6" aria-label="Pricing page">Pricing &amp; <abbr title="Frequently asked questions">FAQ</abbr></NuxtLink>
					<NuxtLink to="/support" class="px-6" aria-label="Support page">Support</NuxtLink>
					<NuxtLink to="/my-account" class="px-6" aria-label="My Account">My Account</NuxtLink>
					<NuxtLink to="/login" class="inline-flex items-center justify-center h-12 px-4 font-bold text-white bg-cc-main hover:bg-cc-main hover:text-white transition text-sm border-2 border-transparent rounded-none focus:outline-none sm:inline-flex mt-2" aria-label="Buy Pro version">
						Buy Pro
						<svg width="11" height="10" fill="none" class="flex-none ml-1.5 text-white group-hover:text-teal-600" aria-hidden="true">
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
	created() {
		if (process.client) {
			this.scrollCheck();
			window.addEventListener("scroll", this.scrollCheck);
		}
	},
	methods: {
		scrollCheck(e) {
			let scrollTop = document.getElementsByTagName("html")[0].scrollTop;
			const header = document.getElementsByTagName("header")[0];

			if (scrollTop > 300) header.classList.add("scrolled");
			else header.classList.remove("scrolled");
		}
	},
	data() {
		return {
			isMenuOpen: false
		};
	}
};
</script>

<style lang="postcss">
header {
	@apply flex-none z-40 text-sm leading-6 font-medium bg-white ring-1 ring-gray-100 ring-opacity-5 shadow-sm py-4 lg:py-4 fixed top-0 right-0 left-0 transition-all;

	&.scrolled {
		.button {
			@apply bg-red-900;
		}
	}
}

nav {
	& > a {
		@apply text-gray-700
			hover:text-cc-main
			transition;

		&.nuxt-link-exact-active {
			@apply text-cc-main;
		}

		&.button {
			@apply items-center justify-center h-9 px-4 font-bold text-white bg-dark-900 hover:bg-cc-main hover:text-white transition text-xs border border-transparent rounded-full focus:outline-none;
		}
	}
}
</style>
