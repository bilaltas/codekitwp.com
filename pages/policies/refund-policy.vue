<template>
	<main id="refund-policy">
		<div class="content policy-page">
			<div class="container pt-6 pb-24 mx-auto md:pt-20">
				<h1>Refund Policy for PressX Products</h1>
				<p>We stand behind our plugin’s quality and your satisfaction with it is important to us. If you experience problems with the plugin, we will be happy to provide a full refund within 7 days of the original upgrade date.</p>

				<p>Refunds will be offered at our sole discretion and must meet all of the following conditions fully:</p>
				<ul>
					<li>You are within the first 7 days of the purchase of the plugin.</li>
					<li>Your issue(s) derives from not being able to install the plugin properly or get the plugin to perform its basic functions.</li>
					<li>You have attempted to resolve your issue(s) with our support team by opening a support ticket through the "Contact Us" in the plugin’s admin settings.</li>
					<li>No refunds will be granted after the first 7 days of the original purchase whatsoever.</li>
					<li>Refunds will not be granted for missing feature(s). If you are not sure we support a specific feature, please contact us first.</li>
					<li>Issues caused by conflicts with 3rd party plugins, themes or other software will not provide grounds for a refund.</li>
					<li>Refunds will not be granted if you simply decide not to use the plugin.</li>
					<li>By upgrading, you agree to this refund policy and relinquish any rights to subject it to any questions, judgment or legal actions.</li>
				</ul>

				<p>To submit a refund request, please open a <a class="font-medium text-red-600 underline" href="/support">refund support ticket.</a></p>
			</div>
		</div>
		<globalCTA />
		<globalFooter />
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: "Refound Policy"
		};
	}
};
</script>

<style lang="scss">
.policy-page p {
	@apply text-dark-600 leading-[1.7] my-3 text-[18px];
}

.policy-page h1 {
	@apply text-4xl font-bold tracking-tight mt-5 mb-4 text-dark-800;
}
.policy-page h2 {
	@apply text-3xl font-bold tracking-tight mt-10 text-dark-800;
}

.policy-page ul {
	@apply list-disc pl-5;
}

.policy-page ul li {
	@apply text-dark-600 leading-[1.7] my-1 text-[18px];
}
</style>
