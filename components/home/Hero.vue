<template>
	<div class="hero relative overflow-hidden">
		<header class="flex-none relative z-50 text-sm leading-6 font-medium bg-white ring-1 ring-gray-900 ring-opacity-5 shadow-sm py-4">
			<div class="container mx-auto flex items-center flex-wrap sm:flex-nowrap ">
				<a href="/components" class="flex-none">
					<headerLogo />
				</a>
				<p class="hidden lg:block text-sm text-gray-500 font-normal xl:border-l xl:border-gray-100 xl:border-opacity-40 ml-3 xl:ml-4 xl:pl-4 xl:py-0.5">
					<span class="hidden xl:inline">Beautifully integrated development environment for WordPress</span>
					<span class="xl:hidden">by the creators of Tailwind CSS</span>
				</p>
				<div class="w-full flex-none mt-4 sm:mt-0 sm:w-auto sm:ml-auto flex items-center">
					<a href="/features" class="hover:text-gray-900 text-gray-600">
						<span class="hidden sm:inline">Features</span>
					</a>
					<a href="/pricing" class="mx-6 hover:text-gray-900 text-gray-600">Pricing &amp; <abbr title="frequently asked questions">FAQ</abbr></a>
					<a href="/support" class="hover:text-gray-900 text-gray-600 mr-6">
						<span class="hidden sm:inline">Support</span>
					</a>
					<a href="/login" class="inline-flex items-center justify-center h-9 px-4 font-bold text-white bg-gray-900 hover:bg-cc-main hover:text-white transition text-xs border-2 border-transparent rounded-full focus:shadow-outline focus:outline-none" aria-label="Sign up" title="Sign up">
						Buy Pro
						<svg width="11" height="10" fill="none" class="flex-none ml-1.5 text-white group-hover:text-teal-600">
							<path d="M5.593 9.638L10.232 5 5.593.36l-.895.89 3.107 3.103H0v1.292h7.805L4.698 8.754l.895.884z" fill="currentColor"></path>
						</svg>
					</a>
				</div>
			</div>
		</header>
		<div class="container mx-auto py-40 grid grid-cols-2 gap-4">
			<div class="w-full">
				<h1 class="text-white text-5xl tracking-tight leading-tight heading">
					Complete <br />code editor<br />
					for WordPress.
				</h1>
				<p class="text-lg text-white text-opacity-60 leading-relaxed mt-3 mb-6">
					Finally, a simple, intuitive interface and easy workflow <br />
					for WordPress custom codes.
				</p>
				<button class="text-white bg-cc-main font-bold uppercase text-sm px-6 py-3 rounded-full mr-1 mb-1 inline-flex items-center" type="button">
					Buy Pro Now
					<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" id="ArrowRight">
						<path d="M4 12h16" />
						<path d="M13 5l7 7-7 7" />
					</svg>
				</button>
				<button class="text-gray-500 background-transparent font-bold uppercase px-3 py-1 text-sm mr-1 mb-1 transition hover:text-opacity-100 inline-flex items-center" type="button">
					<svg class="mr-2" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" id="Download">
						<path d="M12 15V3m0 12l-4-4m4 4l4-4" />
						<path d="M2 17l.621 2.485A2 2 0 004.561 21H19.439a2 2 0 001.94-1.515L22 17" />
					</svg>
					Try Free Version
				</button>
			</div>
			<div>
				<img class="screen" src="~static/ccsc.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
.heading {
	font-size: 64px;
	line-height: 1.17;
	letter-spacing: -0.025em;
	font-weight: 700;
}
.hero,
.cta {
	box-shadow: rgb(0 20 56 / 6%) 0px 1px 0px 0px;
	background: rgb(248, 250, 252);
	background: #080a0c;
}
.screen {
	position: absolute;
	bottom: -30px;
	margin-left: 0px;
	width: 1000px;
}
</style>
