<template>
	<main>
		<div class="hero">
			<div class="container mx-auto text-center py-14 lg:py-24 relative">
				<h1 class="text-white tracking-tight leading-tight text-5xl font-bold">
					Simple pricing, for everyone.
				</h1>
				<p class="text-lg text-white text-opacity-70 leading-relaxed mt-4 mb-4">
					Super simple license options based on the websites <br />
					you will use, not the features.
				</p>
				<div class="relative mt-24 px-4 sm:px-6 lg:px-0 pb-10">
					<div class="text-center -mt-3">
						<div class="flex flex-col items-center lg:inline-grid lg:items-stretch space-y-12 lg:space-y-0 text-sm lg:-mb-5 gap-8" style="grid-template-columns: 1fr auto 1fr">
							<div class="lg:order-1 relative z-20 w-full lg:w-auto lg:max-w-none">
								<div class="relative rounded-xl p-px shadow-md">
									<div class="rounded-xl bg-cc-main pt-14 lg:pt-14 lg:pb-14">
										<div class="lg:px-12 xl:px-12">
											<h2 class="text-white font-semibold uppercase tracking-wide text-center mb-2">
												Unlimited Websites <span class="absolute -top-3 left-0 right-0"><span class="inline-flex bg-white text-gray-900 uppercase text-[0.688rem] leading-4 tracking-widest py-1 px-2 border-t border-b border-transparent rounded-lg">Best Value</span></span>
											</h2>
											<dl class="text-white flex flex-col items-center">
												<div class="mb-6">
													<dt class="sr-only">Price</dt>
													<dd class="text-base font-medium text-white">
														<span class="flex items-center justify-center">
															<del>$399</del>
															<ins class="text-5xl tracking-tight text-teal-400 font-extrabold no-underline mx-3">$89</ins>
															<span class="text-white">USD</span>
														</span>
														<span class="block text-sm font-normal text-center mt-1">(per year)</span>
													</dd>
												</div>
												<div class="space-y-4">
													<dt class="sr-only">Features</dt>
													<dd class="flex items-center font-bold">
														<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
															<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
														</svg>
														All Pro Features +
													</dd>
													<dd class="flex items-center">
														<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
															<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
														</svg>
														License for Unlimited Sites
													</dd>
													<dd class="flex items-center">
														<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
															<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
														</svg>
														Support for Unlimited Sites
													</dd>
													<dd class="flex items-center">
														<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
															<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
														</svg>
														Updates for Unlimited Sites
													</dd>
													<dd class="flex items-center">
														<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
															<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
														</svg>
														Priority+ Support
													</dd>
												</div>
											</dl>
											<a @click.prevent="openPopup('unlimited')" href="https://checkout.freemius.com/mode/dialog/plugin/7183/plan/12313/licenses/unlimited/" class="mt-8 sm:mt-10 lg:mt-12 block mx-auto text-center w-60 bg-white text-cc-main hover:bg-opacity-80 rounded-lg font-semibold p-3 mb-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Get this package</a>
										</div>

										<div class="lg:hidden h-0.5 mx-3 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-30 mt-8"></div>
									</div>
								</div>
							</div>
							<div class="border border-white border-opacity-10 rounded-xl flex flex-col px-12 pt-12 lg:pt-14 lg:pb-[5.25rem] lg:px-8">
								<h2 class="text-white font-semibold uppercase tracking-wide text-center mb-2">Single Site</h2>
								<dl class="text-white flex flex-col items-center mb-auto">
									<div class="mb-6">
										<dt class="sr-only">Price</dt>
										<dd class="text-base font-medium text-gray-400">
											<span class="flex items-center justify-center">
												<span class="text-5xl tracking-tight text-white font-extrabold mx-3">$39</span>
												<span class="text-white">USD</span>
											</span>
											<span class="block text-sm font-normal text-center mt-1">(per year)</span>
										</dd>
									</div>
									<div class="space-y-4">
										<dt class="sr-only">Features</dt>
										<dd class="flex items-center font-bold">
											<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
												<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
											</svg>
											All Pro Features +
										</dd>
										<dd class="flex items-center">
											<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
												<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
											</svg>
											License for 1 Website
										</dd>
										<dd class="flex items-center">
											<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
												<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
											</svg>
											Support for 1 Website
										</dd>
										<dd class="flex items-center">
											<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
												<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
											</svg>
											Updates for 1 Website
										</dd>
										<dd class="flex items-center">
											<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
												<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
											</svg>
											Priority Support
										</dd>
									</div>
								</dl>
								<a @click.prevent="openPopup('1')" href="https://checkout.freemius.com/mode/dialog/plugin/7183/plan/12313/licenses/1/" class="mt-8 sm:mt-10 lg:mt-12 block mx-auto text-center w-60 bg-gray-700 text-gray-100 hover:bg-gray-600 hover:text-white rounded-lg font-semibold p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Get this package</a>
								<div class="lg:hidden h-0.5 mx-3 bg-gradient-to-r from-transparent via-gray-50 to-transparent opacity-30 mt-12"></div>
							</div>
							<div class="border border-white border-opacity-10 flex flex-col rounded-xl lg:order-1 px-12 pt-12 lg:pt-14 pb-[5.25rem] lg:px-8">
								<h2 class="text-white font-semibold uppercase tracking-wide text-center mb-2">Up to 3 Sites</h2>
								<dl class="text-white flex flex-col items-center mb-auto">
									<div class="mb-6">
										<dt class="sr-only">Price</dt>
										<dd class="text-base font-medium text-gray-400">
											<span class="flex items-center justify-center">
												<span class="text-5xl tracking-tight text-white font-extrabold mx-3">$59</span>
												<span class="text-white">USD</span>
											</span>
											<span class="block text-sm font-normal text-center mt-1">(per year)</span>
										</dd>
									</div>
									<div class="space-y-4">
										<dt class="sr-only">Features</dt>
										<dd class="flex items-center font-bold">
											<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
												<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
											</svg>
											All Pro Features +
										</dd>
										<dd class="flex items-center">
											<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
												<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
											</svg>
											License for 3 Websites
										</dd>
										<dd class="flex items-center">
											<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
												<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
											</svg>
											Support for 3 Websites
										</dd>
										<dd class="flex items-center">
											<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
												<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
											</svg>
											Updates for 3 Websites
										</dd>
										<dd class="flex items-center">
											<svg width="12" height="8" fill="none" class="text-teal-400 mr-3">
												<path d="M1.5 4.5l2.236 2.236a1 1 0 001.467-.056L10.5.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path>
											</svg>
											Priority Support
										</dd>
									</div>
								</dl>
								<a @click.prevent="openPopup('3')" href="https://checkout.freemius.com/mode/dialog/plugin/7183/plan/12313/licenses/3/" class="mt-8 sm:mt-10 lg:mt-12 block mx-auto text-center w-60 bg-gray-700 text-gray-100 hover:bg-gray-600 hover:text-white rounded-lg font-semibold p-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900">Get this package</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<section class="relative bg-gray-50 -mt-10 py-16 sm:py-20 md:pt-32 md:pb-28 text-center">
			<h2 class="sr-only">Testimonials</h2>
			<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-5 relative">
				<div class="absolute left-0 right-0 bottom-0 flex justify-center pb-7">
					<div class="pb-8">
						<img src="~static/avatar-2.png" alt="" class="w-12 h-12 rounded-full" />
					</div>
				</div>
				<figure class="relative">
					<blockquote class="quotes text-lg sm:text-2xl sm:leading-10 tracking-tight text-gray-600 mb-32">
						<p>"I have tried many plugins for adding custom code, and <span class="text-gray-900 font-medium">this is the best by far.</span> Add all of your custom CSS/SASS and JavaScript/jQuery in one place. Robust code editor with error notification, line numbers, good use of colors, separate tabs to keep media queries organized. SASS is compiled automatically. It’s like <span class="text-gray-900 font-medium">having an enhanced version of Sublime Text built directly into WordPress!</span>"</p>
					</blockquote>
					<figcaption>
						<div class="text-gray-900 font-medium">KBLATT0830</div>
						<div class="text-sm text-gray-600">On WordPress.org</div>
					</figcaption>
				</figure>
			</div>
		</section>

		<section id="faq" class="px-0 sm:px-6 lg:px-8 py-16 lg:py-24 xl:py-24">
			<div class="container mx-auto">
				<h2 class="text-3xl xl:text-section text-gray-900 font-semibold tracking-tight leading-tight text-center mb-8 lg:mb-14">Frequently asked questions</h2>
				<div id="team-pricing" class="text-sm flex -mx-2 -mt-4">
					<div class="flex-none px-2 w-full lg:w-1/3">
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Do you offer support if I need help?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>Yes! Top-notch customer support is key for a quality product, so we'll do our very best to resolve any issues you encounter via our support page. In fact, our average support response rate is under 4 hours!</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">I have other pre-sale questions, can you help?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>Yes! You can ask us any question through our <NuxtLink to="/support/" class="text-red-900 underline">support page.</NuxtLink></p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Do I get updates for the premium plugin?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>Yes! Automatic updates to our premium plugin are available free of charge as long as you stay our paying customer. If you cancel your subscription, you'll still be able to use our plugin without updates or support.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I transfer the license key from one domain to another?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>Yes. Just deactivate the license from the previous domain and activate them on the new one, either via your WordPress dashboard or your Ocean account, section Websites. For the Business and Agency plans, you can use the same license key for all your sites.</p>
							</div>
						</div>
					</div>
					<div class="flex-none px-2 w-1/3 hidden lg:block">
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">How can I see all Pro features and grab my license?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>You can simply check our <NuxtLink to="/features/" class="text-red-900 underline">features page</NuxtLink> for all the Pro features and a comparison table. If you decided to grab a license, you can either proceed on this particular page or inside the plugin under CodeKit > Upgrade.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Is there a setup fee?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>No. There are no setup fees on any of our plans.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I cancel my account at any time?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>Yes, if you ever decide that CodeKit isn't the best plugin for your business, simply cancel your account from your Account panel. You'll still be able to use the plugin without updates or support.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What's the time span for your contracts?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>All plans are year-to-year.</p>
							</div>
						</div>
					</div>
					<div class="flex-none px-2 w-1/3 hidden lg:block">
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I try the Pro version before buying?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>No, but there is a 7-days money back guarantee, so if you are not satisfied with your purchase, you will be refunded in full.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I change my plan later on?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>Absolutely! You can upgrade or downgrade your plan at any time.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What payment methods are accepted?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>We accept PayPal and all major credit cards including Visa, Mastercard and American Express. All payments processed by Freemius under a secure connection.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Do you offer refunds?</h3>
							<div class="prose prose-sm leading-5 text-gray-600">
								<p>Yes we do! We stand behind the quality of our product and will refund 100% of your money if you experience an issue that makes the plugin unusable and we are unable to resolve it.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
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
			title: "Pricing & FAQ",
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
			var fsPopupScript = document.createElement("script"),
				date = new Date(),
				cacheKiller = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours();

			fsPopupScript.type = "text/javascript";
			fsPopupScript.src = "//checkout.freemius.com/checkout.min.js?ck=" + cacheKiller;
			fsPopupScript.onload = () => {
				(() => {
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
			console.log("licenseType", licenseType);
			this.handler.open({
				name: "CodeKit",
				licenses: licenseType,
				// You can consume the response for after purchase logic.
				purchaseCompleted: function(response) {
					// The logic here will be executed immediately after the purchase confirmation.                     // alert(response.user.email);
				},
				success: function(response) {
					// The logic here will be executed after the customer closes the checkout, after a successful purchase.             // alert(response.user.email);
				}
			});
		}
	}
};
</script>

<style></style>
