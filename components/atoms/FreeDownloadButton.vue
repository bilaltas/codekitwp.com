<template>
	<a href="https://wordpress.org/plugins/custom-codes/" aria-label="Download free version" target="_blank" class="inline-flex items-center px-3 py-1 mt-3 mr-1 text-[16.5px] font-medium text-white text-opacity-50 transition background-transparent hover:text-opacity-100">
		{{ text }}
		<AtomsDownloadIcon />
	</a>
</template>

<script>
export default {
	name: "FreeDownloadButton",
	props: {
		text: {
			type: String,
			default: "Or Download Free Version"
		}
	}
};
</script>
