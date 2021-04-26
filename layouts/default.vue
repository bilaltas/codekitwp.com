<template>
	<div id="page">
		<Header2 />
		<Nuxt />
		<Footer />
	</div>
</template>

<style lang="postcss">
html {
	font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
	font-size: 16px;
	word-spacing: 1px;
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
	font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}

h1,
h2,
h3,
h4,
h5,
h6 {
	font-family: "Eina01";
}

*,
*::before,
*::after {
	box-sizing: border-box;
	margin: 0;
}

.hero,
.cta {
	box-shadow: rgb(0 20 56 / 6%) 0px 1px 0px 0px;
	background: rgb(248, 250, 252);
	background: #121519;
}

.container {
	@apply px-6 lg:px-16;
}

br {
	@apply hidden lg:flex;
}

abbr[title] {
	@apply no-underline;
}
</style>
