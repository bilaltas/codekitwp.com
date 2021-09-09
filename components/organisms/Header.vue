<template>
	<headroom :upTolerance="150">
		<header class="main">
			<div class="brand">
				<AtomsLogo />
			</div>
			<MoleculesNavigation />

			<div class="block ml-auto mobile-trigger lg:hidden">
				<button type="button" aria-label="Close Menu" title="Close Menu" @click="isMenuOpen = true">
					<span class="sr-only">Mobile Navigation Trigger</span>
					<svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
						<line y1="1.75" x2="26" y2="1.75" stroke="black" stroke-width="2.5" />
						<line y1="8.75" x2="26" y2="8.75" stroke="black" stroke-width="2.5" />
						<line y1="15.75" x2="19" y2="15.75" stroke="black" stroke-width="2.5" />
					</svg>
				</button>
			</div>

			<div v-if="isMenuOpen" class="fixed top-0 bottom-0 left-0 right-0 min-h-screen overlay bg-dark-900 bg-opacity-80" @click="isMenuOpen = false"></div>

			<div class="fixed top-0 bottom-0 right-0 left-auto w-7/12 min-h-screen md:w-1/4 left-menu" :class="{ active: isMenuOpen }">
				<div class="min-h-screen pt-10 bg-white shadow-xl">
					<div class="absolute right-5 top-5">
						<button type="button" aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-dark-200 focus:bg-dark-200 focus:outline-none focus:shadow-outline" @click="isMenuOpen = false">
							<svg class="w-5 text-dark-600" viewBox="0 0 24 24">
								<path fill="currentColor" d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"></path>
							</svg>
						</button>
					</div>
					<nav class="grid grid-flow-row gap-4 mobile">
						<NuxtLink to="/features" aria-label="Features"><span>Features</span></NuxtLink>
						<NuxtLink to="/solutions" aria-label="Solutions"><span>Solutions</span></NuxtLink>
						<NuxtLink to="/pricing" aria-label="Pricing"><span>Pricing</span></NuxtLink>
						<NuxtLink to="/pricing#faq" aria-label="Frequently Asked Questions"><span>FAQs</span></NuxtLink>
						<NuxtLink to="/support" aria-label="Support"><span>Support</span></NuxtLink>
						<NuxtLink to="/account" aria-label="My Account"><span>My Account</span></NuxtLink>

						<div class="flex justify-between px-2 mt-4 font-semibold nav-actions">
							<NuxtLink to="/pricing" class="flex-1 btn register" aria-label="Buy Now">Buy CodeKit Pro</NuxtLink>
						</div>
					</nav>
				</div>
			</div>
		</header>
	</headroom>
</template>

<script>
import { headroom } from "vue-headroom";

export default {
	components: {
		headroom
	},
	data() {
		return {
			isMenuOpen: false
		};
	}
};
</script>

<style lang="scss">
header.main {
	@apply flex items-center content-between h-[65px] px-5 md:px-5 bg-white z-50;
}
.headroom--not-top.headroom--pinned {
	@apply shadow-lg;
}

.left-menu {
	@apply block translate-x-full lg:hidden transition-all duration-300 transform-gpu;

	&.active {
		@apply translate-x-0 transform-gpu;
	}
}

nav.mobile {
	@apply items-center ml-auto font-medium tracking-wpx;

	a:not(.btn) {
		@apply transition-all relative text-dark-800 text-[16px] px-6;

		span {
			@apply relative;
		}
	}
	.btn {
		@apply h-12 px-5 text-[16px] rounded-sm content-center justify-center;
		&.signin {
			@apply border-2 border-l-0 border-r-0 border-dark-800 text-dark-800 inline-flex items-center hover:border-red-500 hover:text-red-500 transition-all;
		}
		&.register {
			@apply border-2 border-red-500 bg-red-500 hover:bg-red-600 hover:border-red-600 text-white inline-flex items-center transition-all;
		}
	}
}
</style>
