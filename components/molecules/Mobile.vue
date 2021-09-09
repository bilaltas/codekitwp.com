<template>
	<div class="block ml-auto mobile-trigger md:hidden">
		<button type="button" aria-label="Close Menu" title="Close Menu" @click="isMenuOpen = true">
			<span class="sr-only">Mobile Navigation Trigger</span>
			<svg width="26" height="17" viewBox="0 0 26 17" fill="none" xmlns="http://www.w3.org/2000/svg">
				<line y1="1.75" x2="26" y2="1.75" stroke="black" stroke-width="2.5" />
				<line y1="8.75" x2="26" y2="8.75" stroke="black" stroke-width="2.5" />
				<line y1="15.75" x2="19" y2="15.75" stroke="black" stroke-width="2.5" />
			</svg>
		</button>
	</div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped></style>
