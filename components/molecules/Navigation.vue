<template>
	<nav class="main">
		<NuxtLink to="/features" aria-label="Features"><span>Features</span></NuxtLink>
		<NuxtLink to="/solutions" aria-label="Solutions"><span>Solutions</span></NuxtLink>
		<NuxtLink to="/pricing" aria-label="Pricing"><span>Pricing</span></NuxtLink>
		<NuxtLink to="/pricing#faq" aria-label="Frequently Asked Questions"><span>FAQs</span></NuxtLink>
		<NuxtLink to="/support" aria-label="Support"><span>Support</span></NuxtLink>

		<div class="ml-2 space-x-1 font-semibold nav-actions">
			<NuxtLink to="/account" class="btn signin" aria-label="My Account">My Account</NuxtLink>
			<NuxtLink to="/pricing" class="btn register" aria-label="Buy Now">Buy Now</NuxtLink>
		</div>
	</nav>
</template>

<style lang="scss" scoped>
nav.main {
	@apply items-center hidden ml-auto font-medium space-x-7 tracking-wpx lg:flex;

	a:not(.btn) {
		@apply transition-all relative text-dark-800 text-[15px];

		&:before {
			content: "";
			width: 0px;
			visibility: hidden;
			opacity: 0;
			height: 4px;
			position: absolute;
			bottom: 1px;
			@apply bg-red-500 transition-all;
		}

		&:hover,
		&.nuxt-link-active {
			&:before {
				width: 100%;
				visibility: visible;
				opacity: 1;
			}
		}

		span {
			@apply relative;
		}
	}
	.btn {
		@apply h-10 px-5 text-[15px];

		&.signin {
			@apply border-2 rounded-sm border-dark-800 text-dark-800 inline-flex items-center hover:border-red-500 hover:text-red-500 transition-all;
		}

		&.register {
			@apply border-2 rounded-sm border-dark-800 bg-dark-800 hover:bg-red-500 hover:border-red-500 text-white inline-flex items-center transition-all;
		}
	}
}
</style>
