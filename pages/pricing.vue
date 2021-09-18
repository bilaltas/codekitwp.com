<template>
	<main id="pricing">
		<OrganismsPricingHero />
		<div class="relative pb-36">
			<div class="container">
				<div class="grid flex-col items-center grid-cols-1 gap-4 text-sm lg:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:space-y-0">
					<div class="border-2 border-dark-200 rounded-sm shadow-sm flex flex-col px-12 pt-12 lg:pt-14 lg:pb-[5.25rem] lg:px-8">
						<h2 class="mb-2 font-semibold tracking-wide text-center uppercase text-dark-800">Single Site</h2>
						<dl class="flex flex-col items-center mb-auto text-dark-800">
							<div class="mb-6">
								<dt class="sr-only">Price</dt>
								<dd class="text-base font-medium text-dark-400">
									<span class="flex items-center justify-center mt-3">
										<span class="mx-3 text-[50px] font-bold tracking-tight text-dark-800">$39</span>
										<span class="text-dark-800">USD</span>
									</span>
									<span class="block mt-4 text-sm font-normal text-center">(per year)</span>
								</dd>
							</div>
							<div class="space-y-4 text-[17px]">
								<dt class="sr-only">Features</dt>
								<dd class="flex items-center font-bold">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									All Pro Features +
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									License for 1 Website
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									Support for 1 Website
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									Updates for 1 Website
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									Priority Support
								</dd>
							</div>
						</dl>
						<a href="https://checkout.freemius.com/mode/dialog/plugin/7183/plan/12313/licenses/1/" class="block p-3 mx-auto mt-8 text-base font-semibold text-center text-white transition-all rounded-sm bg-dark-400 sm:mt-10 lg:mt-12 w-60 hover:bg-dark-800 focus:outline-none" @click.prevent="openPopup('1')">Get this package</a>
						<div class="lg:hidden h-0.5 mx-3 bg-gradient-to-r from-transparent via-dark-50 to-transparent opacity-30 mt-12"></div>
					</div>
					<div class="border-2 border-red-500 rounded-sm shadow-sm flex flex-col px-12 pt-12 lg:pt-14 lg:pb-[5.25rem] lg:px-8">
						<h2 class="mb-2 font-semibold tracking-wide text-center text-red-500 uppercase">Unlimited Websites</h2>
						<dl class="flex flex-col items-center mb-auto text-dark-800">
							<div class="mb-6">
								<dt class="sr-only">Price</dt>
								<dd class="text-base font-medium text-dark-400">
									<span class="flex items-center justify-center mt-3 ">
										<span class="mx-3 text-[50px] font-bold tracking-tight text-dark-800">$89</span>
										<span class="text-dark-800">USD</span>
									</span>
									<span class="block mt-4 text-sm font-normal text-center">(per year)</span>
								</dd>
							</div>
							<div class="space-y-4 text-[17px]">
								<dt class="sr-only">Features</dt>
								<dd class="flex items-center font-bold">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									All Pro Features +
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									License for 1 Website
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									Support for 1 Website
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									Updates for 1 Website
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									Priority Support
								</dd>
							</div>
						</dl>
						<a href="https://checkout.freemius.com/mode/dialog/plugin/7183/plan/12313/licenses/unlimited/" class="block p-3 mx-auto mt-8 text-base font-semibold text-center text-white transition-all bg-red-500 rounded-sm sm:mt-10 lg:mt-12 w-60 hover:bg-dark-800 focus:outline-none" @click.prevent="openPopup('1')">Get this package</a>
						<div class="lg:hidden h-0.5 mx-3 bg-gradient-to-r from-transparent via-dark-50 to-transparent opacity-30 mt-12"></div>
					</div>
					<div class="border-2 border-dark-200 rounded-sm flex flex-col lg:order-1 px-12 pt-12 lg:pt-14 pb-[5.25rem] lg:px-8">
						<h2 class="mb-2 font-semibold tracking-wide text-center uppercase text-dark-800">Up to 3 Sites</h2>
						<dl class="flex flex-col items-center mb-auto text-dark-800">
							<div class="mb-6">
								<dt class="sr-only">Price</dt>
								<dd class="text-base font-medium text-dark-400">
									<span class="flex items-center justify-center mt-3">
										<span class="mx-3 text-[50px] font-bold tracking-tight text-dark-800">$59</span>
										<span class="text-dark-800">USD</span>
									</span>
									<span class="block mt-4 text-sm font-normal text-center">(per year)</span>
								</dd>
							</div>
							<div class="space-y-4 text-[17px]">
								<dt class="sr-only">Features</dt>
								<dd class="flex items-center font-bold">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									All Pro Features +
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									License for 3 Websites
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									Support for 3 Websites
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									Updates for 3 Websites
								</dd>
								<dd class="flex items-center">
									<svg width="12" height="8" fill="none" class="mr-3 text-teal-400">
										<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
									</svg>
									Priority Support
								</dd>
							</div>
						</dl>
						<a href="https://checkout.freemius.com/mode/dialog/plugin/7183/plan/12313/licenses/3/" class="block p-3 mx-auto mt-8 text-base font-semibold text-center text-white transition-all rounded-sm bg-dark-400 sm:mt-10 lg:mt-12 w-60 hover:bg-dark-800 focus:outline-none" @click.prevent="openPopup('3')">Get this package</a>
					</div>
				</div>
			</div>
		</div>
		<OrganismsPricingTestimonial />
		<OrganismsFAQ />
		<OrganismsCTA />
	</main>
</template>

<script>
export default {
	data() {
		return {
			handler: null
		};
	},
	head() {
		return {
			title: "Pricing",
			meta: [
				{
					hid: "description",
					name: "description",
					content: "Super simple license options based on the websites you will use, not the features. Grab a license today and keep all the pro features and amazing support for a year."
				},
				{
					hid: "twitter:description",
					name: "twitter:description",
					content: "Super simple license options based on the websites you will use, not the features. Grab a license today and keep all the pro features and amazing support for a year."
				},
				{
					hid: "og:description",
					property: "og:description",
					content: "Super simple license options based on the websites you will use, not the features. Grab a license today and keep all the pro features and amazing support for a year."
				}
			],
			script: [
				{
					type: "module",
					src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
				}
			]
		};
	},
	mounted() {
		setTimeout(() => {
			const fsPopupScript = document.createElement("script");
			const date = new Date();
			const cacheKiller = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours();

			fsPopupScript.type = "text/javascript";
			fsPopupScript.src = "//checkout.freemius.com/checkout.min.js?ck=" + cacheKiller;
			fsPopupScript.onload = () => {
				(() => {
					// eslint-disable-next-line
					this.handler = FS.Checkout.configure({
						plugin_id: "7183",
						plan_id: "12313",
						public_key: "pk_4c4440eed53a6dd7637b96b2b82c0",
						image: "https://ps.w.org/custom-codes/assets/icon.svg?rev=2446491"
					});
				})();
			};

			document.getElementsByTagName("head")[0].appendChild(fsPopupScript);
		}, 500);
	},
	methods: {
		openPopup(licenseType) {
			this.handler.open({
				name: "CodeKit",
				licenses: licenseType,
				// You can consume the response for after purchase logic.
				purchaseCompleted(response) {
					// The logic here will be executed immediately after the purchase confirmation.                     // alert(response.user.email);
				},
				success(response) {
					// The logic here will be executed after the customer closes the checkout, after a successful purchase.             // alert(response.user.email);
				}
			});
		}
	}
};
</script>
