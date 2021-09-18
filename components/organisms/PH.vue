<template>
	<div v-if="promoActive" class="ph-bar">Hello Hunters! Grab your license with the <span class="code">MEOW20OFF</span> code and get %20 OFF on all packages.</div>
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
	@apply px-5 font-semibold h-auto lg:h-[45px] items-center text-[15px] text-center justify-center md:block py-3 lg:py-0 lg:flex;
}
.code {
	@apply inline-flex px-4 h-8 rounded-sm bg-black bg-opacity-20 text-center items-center mx-2;
}
</style>
