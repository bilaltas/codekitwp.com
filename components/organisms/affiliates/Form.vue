<template>
	<div class="container relative z-50 px-4 py-10 mx-auto mb-16 sm:py-14 sm:px-6 lg:px-8">
		<div id="contact-form" class="relative overflow-hidden bg-white border rounded-sm shadow-lg border-dark-200">
			<div class="grid grid-cols-1 ">
				<div class="relative px-6 py-8 overflow-hidden bg-white border-b border-gray-200 sm:px-10 xl:px-12 xl:py-10">
					<h3 class="text-xl font-semibold text-dark-800">Affiliate Application Form</h3>
					<p class="max-w-3xl mt-2 text-base text-dark-500">Fill out the form to complete your CodeKit affiliate application.</p>
				</div>

				<div class="px-6 py-10 bg-dark-50 sm:px-10 lg:col-span-2 xl:p-12">
					<div>
						<form method="post" action="https://formsubmit.co/f895792a5da22345f54b88f52312e9de">
							<input type="hidden" name="_next" value="/thank-you" />
							<input type="hidden" name="_honey" style="display: none" />
							<div>
								<label for="name" class="block font-medium text-dark-700">Name</label>
								<div class="mt-1.5">
									<input id="name" type="text" name="name" placeholder="Enter your name" autocomplete="name" value="" required class="block w-full px-4 py-3 transition bg-white border-2 rounded-sm border-dark-200 text-dark-700 focus:outline-none focus:ring-0 focus:border-dark-400 focus:shadow-none ring-transparent" />
								</div>
							</div>
							<div class="mt-6">
								<label for="email" class="block font-medium text-dark-700">Email</label>
								<div class="mt-1.5">
									<input id="email" type="email" name="email" placeholder="Enter your email" autocomplete="email" value="" required class="block w-full px-4 py-3 transition bg-white border-2 rounded-sm border-dark-200 text-dark-700 focus:outline-none focus:ring-0 focus:border-dark-400 focus:shadow-none ring-transparent" />
								</div>
							</div>
							<div class="mt-6">
								<label for="body" class="block font-medium text-dark-700">About you</label>
								<div class="mt-1.5">
									<textarea id="body" name="body" cols="30" rows="7" placeholder="Please let us know who you are, how you might promote the CodeKit and as much as information about how you will be using your affiliate link..." required class="block w-full px-4 py-3 transition bg-white border-2 rounded-sm border-dark-200 text-dark-700 focus:outline-none focus:ring-0 focus:border-dark-400 focus:shadow-none ring-transparent"></textarea>
								</div>
							</div>
							<button type="submit" class="flex items-center justify-center px-6 py-2 mt-6 text-base font-semibold text-white transition bg-red-500 border border-transparent rounded-sm hover:bg-dark-800">
								Join Now
								<svg id="ArrowRight" class="ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
									<path d="M4 12h16" />
									<path d="M13 5l7 7-7 7" />
								</svg>
							</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
