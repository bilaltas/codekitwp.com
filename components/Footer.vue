<template>
	<footer class="flex-none relative z-50 text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-7">
		<div class="container mx-auto flex items-center flex-wrap sm:flex-nowrap ">
			<a href="/components" class="flex-none">
				<headerLogo />
			</a>
			<div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
				<a href="/pricing" class="hover:text-cc-main text-gray-600 transition lg:mx-6">Home</a>
				<a href="/features" class="hover:text-cc-main text-gray-600 transition">
					<span class="hidden sm:inline">Features</span>
				</a>
				<a href="/pricing" class="mx-6 hover:text-cc-main text-gray-600 transition">Pricing &amp; <abbr title="frequently asked questions">FAQ</abbr></a>
				<a href="/support" class="hover:text-cc-main text-gray-600 transition mr-6">
					<span class="hidden sm:inline">Support</span>
				</a>
				<a href="/pricing" class="hover:text-cc-main text-gray-600 transition">Contact</a>
			</div>
		</div>
		<div class="container mx-auto flex items-center flex-wrap sm:flex-nowrap mt-5 pt-3 border-t border-gray-900 border-opacity-5 ">
			<div class="w-full flex-none mt-1 lg:mt-4 sm:mt-0 sm:w-auto sm:mr-auto flex items-center text-xs">
				<span class="text-gray-500">@2021 Copyright.</span>
				<a href="/privacy-policy" class="hover:text-cc-main text-gray-600 transition mx-4">
					<span class="hidden sm:inline">Privacy Policy</span>
				</a>
				<a href="/terms-of-service" class="hover:text-cc-main text-gray-600 transition">
					<span class="hidden sm:inline">Terms of Service</span>
				</a>
			</div>
			<div class="w-full flex-none lg:mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center text-xs">
				<span class="text-gray-500 items-center">
					A product by PressX. Engineered with
					<svg class="inline-flex" width="10" height="10" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M3.5 6.125C3.41218 6.12489 3.32644 6.09835 3.25391 6.04885C2.17943 5.31945 1.71418 4.81934 1.45756 4.50666C0.910683 3.84016 0.648866 3.15588 0.656249 2.41486C0.664863 1.5657 1.34613 0.875 2.17492 0.875C2.77758 0.875 3.19498 1.21447 3.43807 1.49721C3.44577 1.50607 3.45528 1.51318 3.46597 1.51805C3.47665 1.52293 3.48826 1.52545 3.5 1.52545C3.51174 1.52545 3.52335 1.52293 3.53403 1.51805C3.54472 1.51318 3.55423 1.50607 3.56193 1.49721C3.80502 1.2142 4.22242 0.875 4.82508 0.875C5.65387 0.875 6.33514 1.5657 6.34375 2.415C6.35113 3.15615 6.08904 3.84043 5.54244 4.5068C5.28582 4.81947 4.82057 5.31959 3.74609 6.04898C3.67355 6.09844 3.5878 6.12493 3.5 6.125V6.125Z" fill="#DB4040" />
					</svg>
					in Istanbul, deployed worldwide.</span
				>
			</div>
		</div>
	</footer>
</template>

<script>
export default {};
</script>
