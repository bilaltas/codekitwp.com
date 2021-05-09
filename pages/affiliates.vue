<template>
	<main>
		<div class="hero relative">
			<div class="container mx-auto text-center pt-14 pb-14 lg:pt-24 lg:pb-24 relative">
				<h1 class="text-white tracking-tight leading-tight text-5xl font-bold">
					Join Our Affiliate Program
				</h1>
				<p class="text-lg text-white text-opacity-70 leading-relaxed mt-3 mb-6">
					Love PressX products? Spread the word around and <span class="text-red-700 font-semibold">receive 30% per sale</span> by promoting it! <br />
					The affiliate program is strictly opened for trustworthy affiliates that will actively promote PressX products.
				</p>
				<button class="text-white bg-cc-main font-bold uppercase text-sm px-6 py-3 rounded-full inline-flex items-center" @click.prevent="isModalOpen = true">
					Join Now
					<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" id="ArrowRight">
						<path d="M4 12h16" />
						<path d="M13 5l7 7-7 7" />
					</svg>
				</button>
			</div>
		</div>
		<div v-if="isModalOpen" class="modal absolute top-0 bottom-0 right-0 left-0 z-50">
			<div class="popup-overlay fixed top-0 bottom-0 right-0 left-0 bg-black bg-opacity-80 z-50" @click="isModalOpen = false"></div>
			<div class="container mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 relative z-50">
				<div class="relative bg-white shadow-xl rounded overflow-hidden" id="contact-form">
					<div class="grid grid-cols-1 lg:grid-cols-3">
						<div class="relative overflow-hidden py-10 px-6 bg-cc-main sm:px-10 xl:p-12">
							<div class="absolute inset-0 pointer-events-none sm:hidden" aria-hidden="true">
								<svg class="absolute inset-0 w-full h-full" width="343" height="388" viewBox="0 0 343 388" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
									<path d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z" fill="url(#linear1)" fill-opacity=".1"></path>
									<defs>
										<linearGradient id="linear1" x1="254.553" y1="107.554" x2="961.66" y2="814.66" gradientUnits="userSpaceOnUse">
											<stop stop-color="#fff"></stop>
											<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden" aria-hidden="true">
								<svg class="absolute inset-0 w-full h-full" width="359" height="339" viewBox="0 0 359 339" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
									<path d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z" fill="url(#linear2)" fill-opacity=".1"></path>
									<defs>
										<linearGradient id="linear2" x1="192.553" y1="28.553" x2="899.66" y2="735.66" gradientUnits="userSpaceOnUse">
											<stop stop-color="#fff"></stop>
											<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<div class="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block" aria-hidden="true">
								<svg class="absolute inset-0 w-full h-full" width="160" height="678" viewBox="0 0 160 678" fill="none" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
									<path d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z" fill="url(#linear3)" fill-opacity=".1"></path>
									<defs>
										<linearGradient id="linear3" x1="192.553" y1="325.553" x2="899.66" y2="1032.66" gradientUnits="userSpaceOnUse">
											<stop stop-color="#fff"></stop>
											<stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
										</linearGradient>
									</defs>
								</svg>
							</div>
							<h3 class="text-lg font-medium text-white">Affiliate Application Form</h3>
							<p class="mt-6 text-base text-indigo-50 max-w-3xl">
								Fill out the form to create your Datapane Cloud instance and schedule your onboarding call. Server creation can take up to one working day, but we will be in touch immediately. <br /><br />
								Cancel anytime before 30 days and we'll refund you in full.
								<br /><br />Questions? <a class="font-semibold hover:text-white" href="https://meetings.hubspot.com/datapane/30-minute-demo?utm_source=pricing">Book a 1-1 demo</a>.
							</p>
						</div>

						<div class="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
							<button aria-label="Close Menu" title="Close Menu" class="absolute top-4 right-4 p-2 -mt-2 -mr-2 transition duration-200 rounded-full border border-transparent text-gray-400 hover:text-gray-900 hover:bg-opacity-30 bg-gray-100 bg-opacity-20" @click="isModalOpen = false">
								<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" display="block" id="Cross"><path d="M20 20L4 4m16 0L4 20" /></svg>
							</button>
							<div>
								<form method="POST" action="https://formsubmit.co/f895792a5da22345f54b88f52312e9de">
									<input type="hidden" name="_next" value="/thank-you" />
									<input type="text" name="_honey" style="display:none" />
									<div>
										<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
										<div class="mt-1.5">
											<input type="text" id="name" name="name" placeholder="Enter your name" autocomplete="name" value="" class="ring-1 ring-gray-900 ring-opacity-10 py-3 px-3 shadow-sm block w-full sm:text-sm rounded-md focus:outline-none focus:ring-opacity-30 transition bg-white" />
										</div>
									</div>
									<div class="mt-6">
										<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
										<div class="mt-1.5">
											<input type="email" id="email" name="email" placeholder="Enter your email" autocomplete="email" value="" class="ring-1 ring-gray-900 ring-opacity-10 py-3 px-3 shadow-sm block w-full sm:text-sm rounded-md focus:outline-none focus:ring-opacity-30 transition bg-white" />
										</div>
									</div>
									<div class="mt-6">
										<label for="body" class="block text-sm font-medium text-gray-700">Question</label>
										<div class="mt-1.5">
											<textarea id="body" name="body" cols="30" rows="7" placeholder="How can we help you?" class="ring-1 ring-gray-900 ring-opacity-10 py-3 px-3 shadow-sm block w-full sm:text-sm rounded-md focus:outline-none focus:ring-opacity-30 transition bg-white"></textarea>
										</div>
									</div>
									<button type="submit" class="mt-6 flex items-center justify-center px-5 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-cc-main hover:bg-gray-900 transition">Send message</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<FAQ />
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: "Affiliates"
		};
	},
	data() {
		return {
			isModalOpen: false
		};
	}
};
</script>

<style lang="postcss"></style>
