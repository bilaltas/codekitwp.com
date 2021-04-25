<template>
	<div>
		<Header />
		<div class="hero relative">
			<div class="container mx-auto text-center pt-24 pb-20">
				<h1 class="text-white tracking-tight leading-tight text-heading font-bold">
					Support
				</h1>
				<p class="text-lg text-white text-opacity-60 leading-relaxed mt-3 mb-6">
					Finally, a simple, intuitive interface and easy workflow <br />
					for WordPress custom codes.
				</p>
			</div>
		</div>
		<div class="mt-8 sm:mt-12 lg:-mt-12">
			<div class="relative">
				<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="max-w-md mx-auto space-y-4 lg:max-w-3xl">
						<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
							<div class="flex-1 flex flex-col justify-between px-6 py-8 bg-white space-y-6 sm:p-8">
								<p class="flex items-center text-gray-600 text-center justify-center font-medium">
									<svg class="mr-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10 1.875C5.51992 1.875 1.875 5.51992 1.875 10C1.875 14.4801 5.51992 18.125 10 18.125C14.4801 18.125 18.125 14.4801 18.125 10C18.125 5.51992 14.4801 1.875 10 1.875ZM14.2285 7.27695L8.97852 13.527C8.92093 13.5955 8.84927 13.651 8.76839 13.6894C8.68752 13.7279 8.59932 13.7486 8.50977 13.75H8.49922C8.41162 13.75 8.325 13.7315 8.24499 13.6959C8.16497 13.6602 8.09335 13.6081 8.03477 13.543L5.78477 11.043C5.72762 10.9824 5.68317 10.9109 5.65403 10.8329C5.62488 10.7549 5.61163 10.6718 5.61504 10.5886C5.61846 10.5054 5.63848 10.4237 5.67392 10.3483C5.70936 10.2729 5.75952 10.2054 5.82143 10.1496C5.88335 10.0939 5.95578 10.0511 6.03447 10.0238C6.11315 9.99648 6.19651 9.98516 6.27963 9.99051C6.36276 9.99585 6.44398 10.0178 6.51851 10.0549C6.59305 10.0921 6.6594 10.1438 6.71367 10.207L8.48281 12.1727L13.2715 6.47305C13.3789 6.34886 13.5309 6.27193 13.6945 6.25889C13.8582 6.24584 14.0205 6.29774 14.1462 6.40335C14.2719 6.50896 14.351 6.6598 14.3664 6.82327C14.3818 6.98675 14.3323 7.14971 14.2285 7.27695V7.27695Z" fill="#48BB35" />
									</svg>

									Your request is arrived. We'll be get in touch with you in 24 hours.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<FAQ />

		<Footer />
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
	}
};
</script>

<style></style>
