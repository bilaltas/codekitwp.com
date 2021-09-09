<template>
	<div v-if="promoActive" class="flex ph-bar">Hello Hunters! Grab your license with the <span class="code">MEOW20OFF</span> code and get %20 OFF on all packages. All we want in return to your valuable feedbacks! :)</div>
</template>

<script>
export default {
	data() {
		return {
			promoActive: false
		};
	},
	mounted() {
		const params = new URLSearchParams(window.location.search);
		console.log("Test params" + params);
		if (params.has("phpromo")) {
			this.promoActive = true;
		}
	}
};
</script>

<style lang="scss" scoped>
.ph-bar {
	background-color: #da552f;
	color: #fff;
	@apply px-5 font-semibold h-12 items-center text-[15px] text-center justify-center;
}
.code {
	@apply inline-flex px-4 h-8 rounded-sm bg-black bg-opacity-20 text-center items-center mx-2;
}
</style>
