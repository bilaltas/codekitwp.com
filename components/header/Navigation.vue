<template>
	<nav class="main-nav">
		<ul class="flex items-center hidden space-x-10 lg:flex">
			<li class="menu-item"><a href="/" aria-label="Our product" title="Our product">Features</a></li>
			<li class="menu-item"><a href="/" aria-label="Our product" title="Our product">Pricing</a></li>
			<li class="menu-item"><a href="/" aria-label="Product pricing" title="Product pricing">Testimonials</a></li>
			<li class="menu-item"><a href="/" aria-label="About us" title="About us">Support</a></li>
		</ul>
	</nav>
</template>

<script>
export default {};
</script>

<style>
.menu-item a {
	@apply text-black
  text-nav
  font-medium
  hover:text-opacity-70
  transition;
}
</style>
