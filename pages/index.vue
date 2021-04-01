<template>
	<div>
		<div class="bg-white border-b border-black border-opacity-5">
			<div class="container mx-auto py-5 items-center flex justify-between relative">
				<a href="/" aria-label="CodeKit for WordPress" title="Company" class="inline-flex items-center">
					<headerLogo />
				</a>
				<headerNavigation />
				<headerCTA />
				<headerMobile />
			</div>
		</div>

		<div class="hero relative overflow-hidden py-10">
			<div class="container mx-auto py-28 grid grid-cols-2 gap-4">
				<div class="w-full">
					<h1 class="text-black text-6xl tracking-tight leading-tight heading">
						Better way to add <br />
						custom codes to <br />
						to your website
					</h1>
					<p class="text-black text-lg leading-relaxed mt-5 text-opacity-80 mb-6">
						CodeKit is the ultimate solution for you who wants <br />
						to add custom codes, customize your website.
					</p>
					<button class="button-buy text-white font-bold uppercase text-sm px-7 py-3.5 rounded shadow hover:shadow-lg mr-1 mb-1 inline-flex items-center" type="button">
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
						Download Free Version
					</button>
				</div>
				<div>
					<img class="screen" src="~static/ccsc.png" alt="" />
				</div>
			</div>
		</div>

		<div class="features py-32">
			<div class="container mx-auto">
				<div class="feature-section justify-center text-center">
					<span class="font-mono bg-red-accent-400 rounded-full text-white py-2 px-3 text-xs mb-3 inline-flex">Features</span>
					<h2 class="text-4xl text-black font-semibold tracking-tight">The most powerful integrated IDE</h2>
					<p class="text-black text-opacity-80 mt-5 leading-relaxed font-body text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest.</p>
				</div>
				<div class="feature-section text-left grid grid-cols-2 gap-20 my-28">
					<div class="align-center items-center flex">
						<div class="flex-1">
							<h3 class="text-4xl text-black font-semibold tracking-tight leading-tight flex-1">
								Directly integrate <br />
								any type of code
							</h3>
							<p class="text-black text-opacity-70 mt-5 leading-relaxed font-body text-base flex-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest.</p>
							<a class="border-b-2 text-red-700 border-red-700 font-serif font-bold pb-0.5 inline-flex mt-5 items-center" href="#"
								>Download Now
								<svg class="ml-1" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" id="ArrowRight">
									<path d="M4 12h16" />
									<path d="M13 5l7 7-7 7" /></svg
							></a>
						</div>
					</div>
					<div>
						<img src="~static/feature-1.png" alt="" />
					</div>
				</div>
				<div class="feature-section text-left grid grid-cols-2 gap-20 my-28">
					<div>
						<img src="~static/feature-2.png" alt="" />
					</div>
					<div>
						<h3 class="text-4xl text-black font-semibold tracking-tight leading-tight">
							Place your code <br />
							exactly the place you want
						</h3>
						<p class="text-black text-opacity-80 mt-5 leading-relaxed font-body text-base pr-20 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest.</p>
					</div>
				</div>
				<div class="feature-section text-left grid grid-cols-2 gap-20 my-28">
					<div>
						<h3 class="text-4xl text-black font-semibold tracking-tight leading-tight">
							Include your favorite<br />
							tools & frameworks
						</h3>
						<p class="text-black text-opacity-70 mt-5 leading-relaxed font-body text-base ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest.</p>
					</div>
					<div>
						<img src="~static/feature-3.png" alt="" />
					</div>
				</div>
			</div>
		</div>
		<div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
			<div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
				<div>
					<p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
						Our Pricing
					</p>
				</div>
				<h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
					<span class="relative inline-block">
						<svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
							<defs>
								<pattern id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69" x="0" y="0" width=".135" height=".30">
									<circle cx="1" cy="1" r=".7"></circle>
								</pattern>
							</defs>
							<rect fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)" width="52" height="24"></rect>
						</svg>
						<span class="relative">Transparent</span>
					</span>
					pricing. Pay as you grow.
				</h2>
				<p class="text-base text-gray-700 md:text-lg">
					Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque rem aperiam, eaque ipsa quae.
				</p>
			</div>
			<div class="grid max-w-md gap-10 row-gap-5 lg:max-w-screen-lg sm:row-gap-10 lg:grid-cols-3 xl:max-w-screen-lg sm:mx-auto">
				<div class="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
					<div class="text-center">
						<div class="text-lg font-semibold">Start</div>
						<div class="flex items-center justify-center mt-2">
							<div class="mr-1 text-5xl font-bold">Free</div>
						</div>
						<div class="mt-2 space-y-3">
							<div class="text-gray-700">10 deploys per day</div>
							<div class="text-gray-700">10 GB of storage</div>
							<div class="text-gray-700">20 domains</div>
						</div>
					</div>
					<div>
						<a href="/" class="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
							Start for free
						</a>
						<p class="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
							Sed ut unde omnis iste natus accusantium doloremque.
						</p>
					</div>
				</div>
				<div class="relative flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow border-deep-purple-accent-400">
					<div class="absolute inset-x-0 top-0 flex justify-center -mt-3">
						<div class="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase rounded bg-deep-purple-accent-400">
							Most Popular
						</div>
					</div>
					<div class="text-center">
						<div class="text-lg font-semibold">Pro</div>
						<div class="flex items-center justify-center mt-2">
							<div class="mr-1 text-5xl font-bold">$38</div>
							<div class="text-gray-700">/ mo</div>
						</div>
						<div class="mt-2 space-y-3">
							<div class="text-gray-700">200 deploys per day</div>
							<div class="text-gray-700">80 GB of storage</div>
							<div class="text-gray-700">Global CDN</div>
						</div>
					</div>
					<div>
						<a href="/" class="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
							Buy Pro
						</a>
						<p class="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
							Sed ut unde omnis iste natus accusantium doloremque.
						</p>
					</div>
				</div>
				<div class="flex flex-col justify-between p-8 transition-shadow duration-300 bg-white border rounded shadow-sm sm:items-center hover:shadow">
					<div class="text-center">
						<div class="text-lg font-semibold">Business</div>
						<div class="flex items-center justify-center mt-2">
							<div class="mr-1 text-5xl font-bold">$78</div>
							<div class="text-gray-700">/ mo</div>
						</div>
						<div class="mt-2 space-y-3">
							<div class="text-gray-700">500 GB of storage</div>
							<div class="text-gray-700">Unlimited domains</div>
							<div class="text-gray-700">24/7 Support</div>
						</div>
					</div>
					<div>
						<a href="/" class="inline-flex items-center justify-center w-full h-12 px-6 mt-6 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none">
							Buy Business
						</a>
						<p class="max-w-xs mt-6 text-xs text-gray-600 sm:text-sm sm:text-center sm:max-w-sm sm:mx-auto">
							Sed ut unde omnis iste natus accusantium doloremque.
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	components: true
};
</script>

<style lang="scss">
.heading {
	font-size: 54px;
	line-height: 1.15;
	letter-spacing: -0.015em;
	color: #000000;
	font-weight: 700;
}
.screen {
	position: absolute;
	/* right: -100px; */
	top: 80px;
	bottom: auto;
	/* left: 0; */
	margin-left: 70px;
	width: 1000px;
}
.button-buy {
	background: #e01f3d;
}
.hero {
	//background: url("~static/hero-bg.png"), #f8fafd;
	background: #f8fafd;
	background-size: contain;
	background-position: center center;
}
</style>
