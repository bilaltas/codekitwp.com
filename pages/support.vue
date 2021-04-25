<template>
	<div>
		<Header />
		<div class="hero relative">
			<div class="container mx-auto text-center pt-24 pb-36">
				<h1 class="text-white tracking-tight leading-tight text-heading font-bold">
					Support
				</h1>
				<p class="text-lg text-white text-opacity-60 leading-relaxed mt-3 mb-6">
					Finally, a simple, intuitive interface and easy workflow <br />
					for WordPress custom codes.
				</p>
			</div>
		</div>
		<div class="mt-8 sm:mt-12 lg:-mt-28">
			<div class="relative">
				<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="max-w-md mx-auto space-y-4 lg:max-w-3xl">
						<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
							<div class="flex-1 flex flex-col justify-between px-6 py-8 bg-white space-y-6 sm:p-10">
								<form method="POST" action="https://feedr.dk/contact">
									<input type="hidden" name="_token" value="zVxFKx65Ib7Te07ZnLVEcBf7RWloVUP53a9hiNZy" />
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
