<template>
	<a :href="href" class="button"><slot>BUTTON</slot></a>
</template>

<script>
export default {
	props: {
		href: {
			default: "#"
		}
	}
};
</script>

<style lang="postcss">
.button {
	@apply text-white
	bg-cc-main
	font-bold
	text-sm
	px-6
	py-3
	rounded-full
	mr-1
	mb-1
	inline-flex
	items-center
	hover:bg-white
	hover:text-cc-main;
}
</style>
