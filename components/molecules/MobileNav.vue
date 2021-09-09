<template>
	<div class="fixed top-0 bottom-0 left-0 right-0 w-full">
		<div class="min-h-full pt-4 bg-white border-t shadow-sm">
			<div class="flex items-center justify-between px-6 mb-4">
				<div>
					<Logo />
				</div>
				<div>
					<button aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-dark-200 focus:bg-dark-200 focus:outline-none focus:shadow-outline" @click="isMenuOpen = false">
						<svg class="w-5 text-dark-600" viewBox="0 0 24 24">
							<path fill="currentColor" d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"></path>
						</svg>
					</button>
				</div>
			</div>
			<nav class="grid grid-flow-row gap-3">
				<NuxtLink to="/features/" class="px-6">Features</NuxtLink>
				<NuxtLink to="/pricing/" class="px-6">Pricing &amp; <abbr title="Frequently asked questions">FAQ</abbr></NuxtLink>
				<NuxtLink to="/support/" class="px-6">Support</NuxtLink>
				<NuxtLink to="/my-account/" class="px-6">My Account</NuxtLink>
				<NuxtLink to="/pricing/" class="inline-flex items-center justify-center h-12 px-4 mt-2 text-sm font-bold text-white transition bg-red-500 border-2 border-transparent rounded-none hover:text-white focus:outline-none sm:inline-flex">
					Buy Pro
					<svg width="11" height="10" fill="none" class="flex-none ml-1.5 text-white group-hover:text-teal-600">
						<path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
					</svg>
				</NuxtLink>
			</nav>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			isMenuOpen: true
		};
	},
	beforeMount() {
		this.scrollCheck();
		window.addEventListener("scroll", this.scrollCheck);
	},
	methods: {
		scrollCheck(e) {
			const scrollTop = document.getElementsByTagName("html")[0].scrollTop;
			const header = document.getElementsByTagName("header")[0];

			if (scrollTop > 300) header.classList.add("scrolled");
			else header.classList.remove("scrolled");
		}
	}
};
</script>

<style lang="sass" scoped></style>
