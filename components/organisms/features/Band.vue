<template>
	<div class="sticky z-10 overflow-scroll font-medium leading-6 bg-white shadow-md sm:overflow-auto feature-band ring-1 ring-dark-100 ring-opacity-5">
		<div class="container mx-auto">
			<div class="flex justify-between md:justify-evenly">
				<a :class="{ active: activeSection == 'core' }" href="#core">Core Features</a>
				<a :class="{ active: activeSection == 'pro' }" href="#pro">Pro Features</a>
				<a :class="{ active: activeSection == 'comparison' }" href="#comparison">Comparison</a>
				<a :class="{ active: activeSection == 'testimonials' }" href="#testimonials">Testimonials</a>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			observer: null,
			activeSection: ""
		};
	},
	head() {
		return {
			title: "Features"
		};
	},
	mounted() {
		this.observer = new IntersectionObserver(this.onElementObserved, { threshold: 0.2 });
		document.querySelectorAll("section").forEach(section => {
			this.observer.observe(section);
		});
	},
	beforeDestroy() {
		this.observer.disconnect();
	},
	methods: {
		onElementObserved(entries, observer) {
			entries.forEach(({ target, isIntersecting }) => {
				if (isIntersecting) this.activeSection = target.id;
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.feature-band {
	top: 0;
	.container {
		min-width: 550px;
	}
	a {
		@apply py-4 border-b-2 border-transparent font-medium text-dark-600 text-[15.5px] hover:text-red-500;
	}
	a.active {
		@apply border-b-2 transition-all text-dark-800 duration-300 border-red-500;
	}
}
</style>
