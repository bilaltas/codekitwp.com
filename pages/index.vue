<template>
	<div>
		<homeHero />

		<div class="features py-24">
			<div class="container mx-auto">
				<homeFeature-1 />
				<homeFeature-2 />
				<homeFeature-3 />
				<homeFeature-4 />
			</div>
		</div>

		<homeTestimonials />

		<div class="cta py-20 bg-cc-main text-white text-center items-center">
			<div class="container mx-auto">
				<h3 class="text-heading font-normal tracking-tight leading-tight">
					Get started with the <br />
					<span class="font-semibold">#1 Code Editor for WordPress</span>
				</h3>
				<div class="group mt-6">
					<button class="text-white bg-cc-main font-bold uppercase text-sm px-6 py-3 rounded-full mr-1 mb-1 inline-flex items-center" type="button">
						Explore Pro Version
						<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" id="ArrowRight">
							<path d="M4 12h16" />
							<path d="M13 5l7 7-7 7" />
						</svg>
					</button>
					<br />
					<button class="text-white text-opacity-40 background-transparent font-bold uppercase px-3 py-1 text-xs mr-1 mt-3 transition hover:text-opacity-100 inline-flex items-center" type="button">
						Or Try Free Version
						<svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="Download">
							<path d="M12 15V3m0 12l-4-4m4 4l4-4" />
							<path d="M2 17l.621 2.485A2 2 0 004.561 21H19.439a2 2 0 001.94-1.515L22 17" />
						</svg>
					</button>
				</div>
			</div>
		</div>
		<footer class="flex-none relative z-50 text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-7">
			<div class="container mx-auto flex items-center flex-wrap sm:flex-nowrap ">
				<a href="/components" class="flex-none">
					<headerLogo />
				</a>
				<div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
					<a href="/pricing" class="hover:text-gray-900 text-gray-600 mx-6">Home</a>
					<a href="/features" class="hover:text-gray-900 text-gray-600">
						<span class="hidden sm:inline">Features</span>
					</a>
					<a href="/pricing" class="mx-6 hover:text-gray-900 text-gray-600">Pricing &amp; <abbr title="frequently asked questions">FAQ</abbr></a>
					<a href="/support" class="hover:text-gray-900 text-gray-600 mr-6">
						<span class="hidden sm:inline">Support</span>
					</a>
					<a href="/pricing" class="hover:text-gray-900 text-gray-600">Contact</a>
				</div>
			</div>
			<div class="container mx-auto flex items-center flex-wrap sm:flex-nowrap mt-5 pt-3 border-t border-gray-900 border-opacity-5 ">
				<div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:mr-auto flex items-center text-xs">
					<a href="/pricing" class="hover:text-gray-700 text-gray-500">@2021 Copyright.</a>
					<a href="/features" class="hover:text-gray-700 text-gray-500 mx-4">
						<span class="hidden sm:inline">Privacy Policy</span>
					</a>
					<a href="/features" class="hover:text-gray-700 text-gray-500">
						<span class="hidden sm:inline">Terms of Service</span>
					</a>
				</div>
				<div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center text-xs">
					<a href="/pricing" class="hover:text-gray-900 text-gray-500 items-center">
						A product by PressX. Engineered with
						<svg class="inline-flex" width="10" height="10" viewBox="0 0 7 7" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M3.5 6.125C3.41218 6.12489 3.32644 6.09835 3.25391 6.04885C2.17943 5.31945 1.71418 4.81934 1.45756 4.50666C0.910683 3.84016 0.648866 3.15588 0.656249 2.41486C0.664863 1.5657 1.34613 0.875 2.17492 0.875C2.77758 0.875 3.19498 1.21447 3.43807 1.49721C3.44577 1.50607 3.45528 1.51318 3.46597 1.51805C3.47665 1.52293 3.48826 1.52545 3.5 1.52545C3.51174 1.52545 3.52335 1.52293 3.53403 1.51805C3.54472 1.51318 3.55423 1.50607 3.56193 1.49721C3.80502 1.2142 4.22242 0.875 4.82508 0.875C5.65387 0.875 6.33514 1.5657 6.34375 2.415C6.35113 3.15615 6.08904 3.84043 5.54244 4.5068C5.28582 4.81947 4.82057 5.31959 3.74609 6.04898C3.67355 6.09844 3.5878 6.12493 3.5 6.125V6.125Z" fill="#DB4040" />
						</svg>
						in Istanbul, deployed worldwide.</a
					>
				</div>
			</div>
		</footer>
	</div>
</template>

<script>
export default {
	head: {
		title: "The Code Editor for WordPress | Custom Codes",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "my website description"
			}
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},
	components: true
};
</script>

<style></style>
