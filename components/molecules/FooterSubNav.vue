<template>
	<nav class="grid items-center w-full grid-flow-col gap-10 mt-1 text-sm md:gap-5 lg:mt-2 sm:mt-0 sm:w-auto sm:mr-auto" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement">
		<span class="text-dark-500">&copy;2021 Copyright.</span>
		<NuxtLink class="text-dark-500" to="/policies/privacy-policy/" aria-label="Privacy Policy">
			<span class="hidden sm:inline">Privacy Policy</span>
		</NuxtLink>
		<NuxtLink class="text-dark-500" to="/policies/tos/" aria-label="Terms of Service">
			<span class="hidden sm:inline">Terms of Service</span>
		</NuxtLink>
		<NuxtLink class="text-dark-500" to="/policies/refund-policy/" aria-label="Terms of Service">
			<span class="hidden sm:inline">Refund Policy</span>
		</NuxtLink>
	</nav>
</template>
