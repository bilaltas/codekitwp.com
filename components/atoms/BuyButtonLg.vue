<template>
	<NuxtLink to="/pricing" class="inline-flex items-center h-12 px-12 text-xl font-bold text-white transition-all bg-red-500 rounded-sm hover:bg-dark-800">
		<slot></slot>
	</NuxtLink>
</template>

<script>
export default {
	name: "BuyButtonLg"
};
</script>
