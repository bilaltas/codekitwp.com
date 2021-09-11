<template>
	<div class="antialiased max-layout">
		<OrganismsPH />
		<OrganismsHeader />
		<Nuxt />
		<OrganismsFooter />
	</div>
</template>

<script></script>

<style lang="scss">
body {
	font-family: Graphik, sans-serif;
	@apply bg-gray-100;
	scroll-padding-top: 65px;
}

.container {
	@apply mx-auto px-5 lg:px-0;
}

html {
	scroll-behavior: smooth;
	scroll-padding-top: 65px;
}

.max-layout {
	width: 100%;
	margin: 0 auto;
	background: #fff;
}
</style>
