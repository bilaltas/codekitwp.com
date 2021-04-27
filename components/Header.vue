<template>
	<header class="main-header flex-none relative z-50 text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-3">
		<div class="container mx-auto flex items-center flex-wrap sm:flex-nowrap ">
			<a href="/" class="flex-none">
				<headerLogo />
			</a>
			<div class="hidden lg:block text-sm text-gray-500 font-medium xl:border-l xl:border-gray-100 xl:border-opacity-40 ml-6 xl:ml-6 xl:pl-6 xl:py-0.5">
				<a href="/features" class="hover:text-cc-main text-gray-600 transition">
					<span class="hidden sm:inline">Features</span>
				</a>
				<a href="/pricing" class="hover:text-cc-main text-gray-600 transition mx-6 ">Pricing &amp; <abbr title="frequently asked questions">FAQ</abbr></a>
				<a href="/support" class="hover:text-cc-main text-gray-600 transition">Support</a>
			</div>
			<div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
				<a href="/pricing" class="inline-flex items-center justify-center h-10 px-4 font-semibold border text-gray-600 border-gray-100 border-opacity-50 hover:border-opacity-100 hover:text-gray-800 hover:shadow-sm transition text-nav rounded-full focus:shadow-outline focus:outline-none mx-3">My Account</a>
				<a href="/login" class="inline-flex items-center justify-center h-10 px-4 font-bold text-white bg-cc-dark hover:bg-cc-main hover:text-white transition text-nav border-2 border-transparent rounded-full focus:shadow-outline focus:outline-none" aria-label="Sign up" title="Sign up">
					Buy Pro
					<svg width="11" height="10" fill="none" class="flex-none ml-1.5 text-white group-hover:text-teal-600">
						<path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
					</svg>
				</a>
			</div>
		</div>
		<div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
			<div class="p-5 bg-white border rounded shadow-sm">
				<div class="flex items-center justify-between mb-4">
					<div>
						<a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
							<svg class="w-8 text-deep-purple-accent-400" viewBox="0 0 24 24" stroke-linejoin="round" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" stroke="currentColor" fill="none">
								<rect x="3" y="1" width="7" height="12"></rect>
								<rect x="3" y="17" width="7" height="6"></rect>
								<rect x="14" y="1" width="7" height="6"></rect>
								<rect x="14" y="11" width="7" height="12"></rect>
							</svg>
							<span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">Company</span>
						</a>
					</div>
					<div>
						<button aria-label="Close Menu" title="Close Menu" class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
							<svg class="w-5 text-gray-600" viewBox="0 0 24 24">
								<path fill="currentColor" d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"></path>
							</svg>
						</button>
					</div>
				</div>
				<nav>
					<ul class="space-y-4">
						<li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Product</a></li>
						<li><a href="/" aria-label="Our product" title="Our product" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Features</a></li>
						<li><a href="/" aria-label="Product pricing" title="Product pricing" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Pricing</a></li>
						<li><a href="/" aria-label="Sign in" title="Sign in" class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400">Sign in</a></li>
						<li>
							<a href="/" class="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none" aria-label="Sign up" title="Sign up">
								Sign up
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>
