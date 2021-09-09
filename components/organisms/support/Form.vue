<template>
	<div class="pb-16 border-b border-dark-100 bg-dark-50 md:pb-24">
		<div class="relative">
			<div class="relative z-10 px-0 mx-auto max-w-7xl md:px-8">
				<div class="w-full mx-auto space-y-4 lg:max-w-3xl">
					<div class="flex flex-col overflow-hidden ">
						<div class="flex flex-col justify-between flex-1 px-6 pt-16 space-y-8 md:px-0">
							<form method="post" action="https://formsubmit.co/f895792a5da22345f54b88f52312e9de">
								<input type="hidden" name="_next" value="/thank-you" />
								<input type="hidden" name="_honey" style="display: none" />
								<div>
									<label for="purpose" class="block font-medium text-dark-700">Purpose</label>
									<span class="font-mono text-dark-500 text-[14px] flex mb-3">Select the topic where we can find fast answers for you.</span>
									<div class="mt-1.5">
										<select name="purpose" id="purpose" class="block w-full px-4 py-3 transition bg-white border-2 rounded-sm border-dark-200 text-dark-700 focus:outline-none focus:ring-0 focus:border-dark-400 focus:shadow-none ring-transparent">
											<option value="">Please select one...</option>
											<option value="">Presale</option>
											<option value="">Bug Report</option>
											<option value="">Sale</option>
											<option value="">Payment/Licensing</option>
											<option value="">Feature</option>
											<option value="">Feedback</option>
										</select>
									</div>
								</div>
								<div class="mt-10">
									<label for="name" class="block font-medium text-dark-700">Full Name</label>
									<span class="font-mono text-dark-500 text-[14px] flex mb-3">Please let us know how we should call you.</span>
									<div class="mt-1.5">
										<input id="name" type="text" name="name" placeholder="Full name" required autocomplete="name" value="" class="block w-full px-4 py-3 transition bg-white border-2 rounded-sm border-dark-200 text-dark-700 focus:outline-none focus:ring-0 focus:border-dark-400 focus:shadow-none ring-transparent" />
									</div>
								</div>
								<div class="mt-10">
									<label for="email" class="block font-medium text-dark-700">Email Address</label>
									<span class="font-mono text-dark-500 text-[14px] flex mb-3">Where should we sent your reply?</span>
									<div class="mt-1.5">
										<input id="email" type="email" name="email" placeholder="Email address" required autocomplete="email" value="" class="block w-full px-4 py-3 transition bg-white border-2 rounded-sm border-dark-200 text-dark-700 focus:outline-none focus:ring-0 focus:border-dark-400 focus:shadow-none ring-transparent" />
									</div>
								</div>
								<div class="mt-10">
									<label for="body" class="block font-medium text-dark-700">Question</label>
									<span class="font-mono text-dark-500 text-[14px] flex mb-3">Please describe your question, feedback or support request.</span>
									<div class="mt-1.5">
										<textarea id="body" name="body" cols="30" rows="7" placeholder="How can we help you?" required class="block w-full px-4 py-3 transition bg-white border-2 rounded-sm border-dark-200 focus:outline-none text-dark-700 focus:ring-0 focus:border-dark-400 focus:shadow-none ring-transparent"></textarea>
									</div>
								</div>
								<button type="submit" class="flex items-center justify-center px-6 py-2 mt-6 text-base font-semibold text-white transition bg-red-500 border border-transparent rounded-sm hover:bg-dark-800">Submit support request</button>
							</form>
							<div class="font-medium leading-relaxed text-dark-500">
								<div>Our average response rate is 6 hours.</div>
								<div>Expect a reply between 4:00am - 3:00pm Central Time Monday through Friday.</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
