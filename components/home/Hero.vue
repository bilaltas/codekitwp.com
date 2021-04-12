<template>
	<div class="hero relative overflow-hidden">
		<div>
			<div class="container mx-auto py-4 items-center flex justify-end relative">
				<a class="mr-10 inline-flex items-center" href="/" aria-label="CodeKit for WordPress" title="Company">
					<headerLogo />
				</a>
				<headerNavigation />
				<headerCTA />
				<headerMobile />
			</div>
		</div>
		<div class="container mx-auto py-40 grid grid-cols-2 gap-4">
			<div class="w-full py-16">
				<h1 class="text-black text-5xl tracking-tight leading-tight heading">
					Complete <br />Code Editor<br />
					for WordPress.
				</h1>
				<p class="text-black text-lg leading-relaxed mt-5 text-opacity-60 mb-6">
					Finally, a simple, intuitive interface and easy workflow <br />
					for WordPress custom codes.
				</p>
				<button class="bg-red-main text-white font-bold uppercase text-sm px-7 py-3.5 rounded shadow hover:shadow-lg mr-1 mb-1 inline-flex items-center" type="button">
					Buy Pro Now
					<svg class="ml-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" id="ArrowRight">
						<path d="M4 12h16" />
						<path d="M13 5l7 7-7 7" />
					</svg>
				</button>
				<button class="text-black text-opacity-60 background-transparent font-bold uppercase px-3 py-1 text-sm mr-1 mb-1 transition hover:text-opacity-100 inline-flex items-center" type="button">
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
