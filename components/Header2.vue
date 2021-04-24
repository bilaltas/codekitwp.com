<template>
	<header class="flex-none relative z-50 text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-4">
		<div class="container mx-auto flex items-center flex-wrap sm:flex-nowrap ">
			<a href="/" class="flex-none">
				<headerLogo />
			</a>
			<p class="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-100 xl:border-opacity-40 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5">
				<span class="hidden xl:inline">Beautifully integrated development environment for WordPress</span>
				<span class="xl:hidden">by the creators of Tailwind CSS</span>
			</p>
			<div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
				<a href="/features" class="hover:text-gray-900 text-gray-600">
					<span class="hidden sm:inline">Features</span>
				</a>
				<a href="/pricing" class="mx-6 hover:text-gray-900 text-gray-600">Pricing &amp; <abbr title="frequently asked questions">FAQ</abbr></a>
				<a href="/support" class="hover:text-gray-900 text-gray-600 mr-6">
					<span class="hidden sm:inline">Support</span>
				</a>
				<a href="/login" class="inline-flex items-center justify-center h-9 px-4 font-bold text-white bg-gray-900 hover:bg-cc-main hover:text-white transition text-xs border-2 border-transparent rounded-full focus:shadow-outline focus:outline-none" aria-label="Sign up" title="Sign up">
					Buy Pro
					<svg width="11" height="10" fill="none" class="flex-none ml-1.5 text-white group-hover:text-teal-600">
						<path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
					</svg>
				</a>
			</div>
		</div>
	</header>
</template>

<script>
export default {};
</script>
