<template>
	<nav class="main-nav">
		<ul class="flex items-center space-x-8 lg:flex">
			<li class="menu-item"><a href="/" aria-label="Pricing" title="Features">Features</a></li>
			<li class="menu-item"><a href="/" aria-label="Pricing" title="Pricing">Pricing</a></li>
			<li class="menu-item"><a href="/" aria-label="Use Cases" title="Use Cases">FAQs</a></li>
			<li class="menu-item"><a href="/" aria-label="Support" title="Support">Support</a></li>
		</ul>
	</nav>
</template>

<script>
export default {};
</script>

<style>
.menu-item a {
	@apply text-black
  text-sm
  font-medium
  text-cc-nav
  hover:text-cc-main
  transition;
}
</style>
