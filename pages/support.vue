<template>
	<main>
		<div class="hero relative">
			<div class="container mx-auto text-center pt-14 pb-14 lg:pt-24 lg:pb-36 relative">
				<h1 class="text-white tracking-tight leading-tight text-5xl font-bold">
					Support
				</h1>
				<p class="text-lg text-white text-opacity-70 leading-relaxed mt-3 mb-6">
					Any questions or trouble? Fill the form below and we will <br />
					get back to you lightning fast.
				</p>
			</div>
		</div>
		<div class="-mt-10 lg:-mt-28">
			<div class="relative">
				<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="max-w-md mx-auto space-y-4 lg:max-w-3xl">
						<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
							<div class="flex-1 flex flex-col justify-between px-6 py-8 bg-white space-y-6 sm:p-10">
								<form method="POST" action="https://formsubmit.co/f895792a5da22345f54b88f52312e9de">
									<input type="hidden" name="_next" value="/thank-you" />
									<input type="text" name="_honey" style="display:none" />
									<div>
										<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
										<div class="mt-1.5">
											<input type="text" id="name" name="name" placeholder="Enter your name" required autocomplete="name" value="" class="ring-1 ring-gray-900 ring-opacity-10 py-3 px-3 shadow-sm block w-full sm:text-sm rounded-md focus:outline-none focus:ring-opacity-30 transition bg-white" />
										</div>
									</div>
									<div class="mt-6">
										<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
										<div class="mt-1.5">
											<input type="email" id="email" name="email" placeholder="Enter your email" required autocomplete="email" value="" class="ring-1 ring-gray-900 ring-opacity-10 py-3 px-3 shadow-sm block w-full sm:text-sm rounded-md focus:outline-none focus:ring-opacity-30 transition bg-white" />
										</div>
									</div>
									<div class="mt-6">
										<label for="body" class="block text-sm font-medium text-gray-700">Question</label>
										<div class="mt-1.5">
											<textarea id="body" name="body" cols="30" rows="7" placeholder="How can we help you?" required class="ring-1 ring-gray-900 ring-opacity-10 py-3 px-3 shadow-sm block w-full sm:text-sm rounded-md focus:outline-none focus:ring-opacity-30 transition bg-white"></textarea>
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
			title: "Support"
		};
	}
};
</script>

<style lang="postcss"></style>
