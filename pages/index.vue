<template>
	<div>
		<div class="bg-white border-b border-black border-opacity-5">
			<div class="container mx-auto py-4 items-center flex justify-between relative">
				<a href="/" aria-label="CodeKit for WordPress" title="Company" class="inline-flex items-center">
					<headerLogo />
				</a>
				<headerNavigation />
				<headerCTA />
				<headerMobile />
			</div>
		</div>

		<homeHero />

		<div class="features py-32">
			<div class="container mx-auto">
				<homeFeature-1 />
				<homeFeature-2 />
				<homeFeature-3 />
				<homeFeature-4 />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: true
};
</script>

<style>
.heading {
	font-size: 66px;
	line-height: 1.2;
	letter-spacing: -0.015em;
	color: #000000;
	font-weight: 700;
}
.screen {
	position: absolute;
	/* right: -100px; */
	top: 100px;
	bottom: auto;
	/* left: 0; */
	margin-left: 80px;
	width: 1000px;
}
.button-buy {
	background: #e01f3d;
}
.hero {
	background: #f8fafd;
	background: url("~static/hero-bg.png"), #f8fafd;
	background-size: contain;
	background-position: center center;
}
</style>
