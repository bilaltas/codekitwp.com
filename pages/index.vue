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
					<span class="font-sans bg-red-main uppercase font-bold rounded-full text-white py-1 px-4 text-xs mb-3 inline-flex">Features</span>
					<h2 class="text-4xl text-black font-semibold tracking-tight">The most powerful integrated IDE</h2>
					<p class="text-black text-opacity-80 mt-5 leading-relaxed font-body text-base ">
						With the power of our integrated IDE, Custom Code will significantly boost your development efficiency. <br />
						The features also provide continuous development and urgent deployment of codes without effort. <br />
						It is actually just like your favorite code editor.
					</p>
				</div>
				<div class="feature-section text-left grid grid-cols-2 gap-20 my-28">
					<div class="align-center items-center flex">
						<div class="flex-1">
							<svg class="mb-5" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="55" height="55" rx="13" fill="#E01F3D" />
								<path
									d="M20.2499 20.2498C20.2499 19.6089 20.5045 18.9942 20.9577 18.541C21.411 18.0878 22.0256 17.8332 22.6666 17.8332C22.9871 17.8332 23.2944 17.7059 23.521 17.4793C23.7476 17.2527 23.8749 16.9453 23.8749 16.6248C23.8749 16.3044 23.7476 15.997 23.521 15.7704C23.2944 15.5438 22.9871 15.4165 22.6666 15.4165C21.3847 15.4165 20.1553 15.9257 19.2489 16.8322C18.3425 17.7386 17.8333 18.968 17.8333 20.2498V23.8748C17.8333 24.5158 17.5786 25.1305 17.1254 25.5837C16.6722 26.0369 16.0575 26.2915 15.4166 26.2915C15.0961 26.2915 14.7888 26.4188 14.5622 26.6454C14.3356 26.872 14.2083 27.1794 14.2083 27.4998C14.2083 27.8203 14.3356 28.1277 14.5622 28.3543C14.7888 28.5809 15.0961 28.7082 15.4166 28.7082C16.0575 28.7082 16.6722 28.9628 17.1254 29.416C17.5786 29.8692 17.8333 30.4839 17.8333 31.1248V34.7498C17.8333 36.0317 18.3425 37.2611 19.2489 38.1675C20.1553 39.0739 21.3847 39.5832 22.6666 39.5832C22.9871 39.5832 23.2944 39.4559 23.521 39.2293C23.7476 39.0027 23.8749 38.6953 23.8749 38.3748C23.8749 38.0544 23.7476 37.747 23.521 37.5204C23.2944 37.2938 22.9871 37.1665 22.6666 37.1665C22.0256 37.1665 21.411 36.9119 20.9577 36.4587C20.5045 36.0055 20.2499 35.3908 20.2499 34.7498V31.1248C20.246 30.4367 20.0953 29.7574 19.8077 29.1322C19.5201 28.5071 19.1024 27.9505 18.5824 27.4998C19.1024 27.0491 19.5201 26.4926 19.8077 25.8674C20.0953 25.2423 20.246 24.5629 20.2499 23.8748V20.2498ZM39.5833 26.2915C38.9423 26.2915 38.3276 26.0369 37.8744 25.5837C37.4212 25.1305 37.1666 24.5158 37.1666 23.8748V20.2498C37.1666 18.968 36.6574 17.7386 35.7509 16.8322C34.8445 15.9257 33.6151 15.4165 32.3333 15.4165C32.0128 15.4165 31.7054 15.5438 31.4788 15.7704C31.2522 15.997 31.1249 16.3044 31.1249 16.6248C31.1249 16.9453 31.2522 17.2527 31.4788 17.4793C31.7054 17.7059 32.0128 17.8332 32.3333 17.8332C32.9742 17.8332 33.5889 18.0878 34.0421 18.541C34.4953 18.9942 34.7499 19.6089 34.7499 20.2498V23.8748C34.7538 24.5629 34.9046 25.2423 35.1921 25.8674C35.4797 26.4926 35.8974 27.0491 36.4174 27.4998C35.8974 27.9505 35.4797 28.5071 35.1921 29.1322C34.9046 29.7574 34.7538 30.4367 34.7499 31.1248V34.7498C34.7499 35.3908 34.4953 36.0055 34.0421 36.4587C33.5889 36.9119 32.9742 37.1665 32.3333 37.1665C32.0128 37.1665 31.7054 37.2938 31.4788 37.5204C31.2522 37.747 31.1249 38.0544 31.1249 38.3748C31.1249 38.6953 31.2522 39.0027 31.4788 39.2293C31.7054 39.4559 32.0128 39.5832 32.3333 39.5832C33.6151 39.5832 34.8445 39.0739 35.7509 38.1675C36.6574 37.2611 37.1666 36.0317 37.1666 34.7498V31.1248C37.1666 30.4839 37.4212 29.8692 37.8744 29.416C38.3276 28.9628 38.9423 28.7082 39.5833 28.7082C39.9037 28.7082 40.2111 28.5809 40.4377 28.3543C40.6643 28.1277 40.7916 27.8203 40.7916 27.4998C40.7916 27.1794 40.6643 26.872 40.4377 26.6454C40.2111 26.4188 39.9037 26.2915 39.5833 26.2915Z"
									fill="white"
								/>
							</svg>

							<h3 class="text-4xl text-black font-semibold tracking-tight leading-tight flex-1">
								Directly integrate <br />
								any type of code
							</h3>
							<p class="text-black text-opacity-70 mt-5 leading-relaxed font-body text-base flex-1">Our code editor integrates syntax highlighting, autocompletion with advanced navigation of your codes. An ideal editor for node.js, Python and Ruby development. We provide more templates such as Webpack (and Gulp) templates, EmberJS templates to meet your development needs.</p>
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
					<div class="align-center items-center flex">
						<div class="flex-1">
							<svg class="mb-5" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
								<rect width="55" height="55" rx="13" fill="#E01F3D" />
								<path
									d="M23.5125 25.0832C23.7389 25.3083 24.0452 25.4346 24.3644 25.4346C24.6836 25.4346 24.9899 25.3083 25.2163 25.0832C25.4413 24.8568 25.5676 24.5506 25.5676 24.2314C25.5676 23.9121 25.4413 23.6059 25.2163 23.3795L17.64 15.767C17.4125 15.5394 17.1039 15.4116 16.7821 15.4116C16.4603 15.4116 16.1517 15.5394 15.9242 15.767C15.6966 15.9945 15.5688 16.3031 15.5688 16.6249C15.5688 16.9467 15.6966 17.2553 15.9242 17.4828L23.5125 25.0832ZM38.375 29.9166C38.0545 29.9166 37.7472 30.0439 37.5206 30.2705C37.294 30.4971 37.1667 30.8044 37.1667 31.1249V35.4628L31.6567 29.9166C31.4259 29.6858 31.113 29.5562 30.7867 29.5562C30.4604 29.5562 30.1474 29.6858 29.9167 29.9166C29.6859 30.1473 29.5563 30.4603 29.5563 30.7866C29.5563 31.1129 29.6859 31.4258 29.9167 31.6566L35.4629 37.1666H31.125C30.8045 37.1666 30.4972 37.2939 30.2706 37.5205C30.044 37.7471 29.9167 38.0544 29.9167 38.3749C29.9167 38.6954 30.044 39.0027 30.2706 39.2293C30.4972 39.4559 30.8045 39.5832 31.125 39.5832H38.375C38.5329 39.5813 38.6889 39.5485 38.8342 39.4866C39.1294 39.3639 39.3641 39.1293 39.4867 38.8341C39.5486 38.6888 39.5814 38.5328 39.5833 38.3749V31.1249C39.5833 30.8044 39.456 30.4971 39.2294 30.2705C39.0028 30.0439 38.6955 29.9166 38.375 29.9166ZM39.4867 16.1657C39.3641 15.8705 39.1294 15.6358 38.8342 15.5132C38.6889 15.4513 38.5329 15.4185 38.375 15.4166H31.125C30.8045 15.4166 30.4972 15.5439 30.2706 15.7705C30.044 15.9971 29.9167 16.3044 29.9167 16.6249C29.9167 16.9454 30.044 17.2527 30.2706 17.4793C30.4972 17.7059 30.8045 17.8332 31.125 17.8332H35.4629L15.7671 37.517C15.6538 37.6293 15.5639 37.763 15.5026 37.9102C15.4413 38.0574 15.4097 38.2154 15.4097 38.3749C15.4097 38.5344 15.4413 38.6923 15.5026 38.8396C15.5639 38.9868 15.6538 39.1205 15.7671 39.2328C15.8794 39.3461 16.0131 39.436 16.1603 39.4973C16.3076 39.5587 16.4655 39.5902 16.625 39.5902C16.7845 39.5902 16.9425 39.5587 17.0897 39.4973C17.237 39.436 17.3706 39.3461 17.4829 39.2328L37.1667 19.537V23.8749C37.1667 24.1954 37.294 24.5027 37.5206 24.7293C37.7472 24.9559 38.0545 25.0832 38.375 25.0832C38.6955 25.0832 39.0028 24.9559 39.2294 24.7293C39.456 24.5027 39.5833 24.1954 39.5833 23.8749V16.6249C39.5814 16.467 39.5486 16.311 39.4867 16.1657V16.1657Z"
									fill="white"
								/>
							</svg>

							<h3 class="text-4xl text-black font-semibold tracking-tight leading-tight">
								Place your code <br />
								exactly the place you want
							</h3>
							<p class="text-black text-opacity-80 mt-5 leading-relaxed font-body text-base pr-20 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In qua si nihil est praeter rationem, sit in una virtute finis bonorum; Atqui pugnantibus et contrariis studiis consiliisque semper utens nihil quieti videre, nihil tranquilli potest.</p>
						</div>
					</div>
				</div>
				<div class="feature-section text-left grid grid-cols-2 gap-20 my-28">
					<div>
						<svg class="mb-5" width="55" height="55" viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg">
							<rect width="55" height="55" rx="13" fill="#E01F3D" />
							<path
								d="M38.6666 23.9198C38.6527 23.7974 38.6259 23.6767 38.5866 23.5598V23.4398C38.5225 23.3027 38.437 23.1767 38.3333 23.0665V23.0665L30.3333 15.0665C30.223 14.9628 30.097 14.8773 29.9599 14.8132C29.9201 14.8075 29.8797 14.8075 29.8399 14.8132C29.7045 14.7355 29.5549 14.6856 29.3999 14.6665H21.3333C20.2724 14.6665 19.255 15.0879 18.5048 15.8381C17.7547 16.5882 17.3333 17.6056 17.3333 18.6665V37.3332C17.3333 38.394 17.7547 39.4115 18.5048 40.1616C19.255 40.9117 20.2724 41.3332 21.3333 41.3332H34.6666C35.7275 41.3332 36.7449 40.9117 37.495 40.1616C38.2452 39.4115 38.6666 38.394 38.6666 37.3332V23.9998C38.6666 23.9998 38.6666 23.9998 38.6666 23.9198ZM30.6666 19.2132L34.1199 22.6665H31.9999C31.6463 22.6665 31.3072 22.526 31.0571 22.276C30.8071 22.0259 30.6666 21.6868 30.6666 21.3332V19.2132ZM35.9999 37.3332C35.9999 37.6868 35.8594 38.0259 35.6094 38.276C35.3593 38.526 35.0202 38.6665 34.6666 38.6665H21.3333C20.9796 38.6665 20.6405 38.526 20.3904 38.276C20.1404 38.0259 19.9999 37.6868 19.9999 37.3332V18.6665C19.9999 18.3129 20.1404 17.9737 20.3904 17.7237C20.6405 17.4736 20.9796 17.3332 21.3333 17.3332H27.9999V21.3332C27.9999 22.394 28.4213 23.4115 29.1715 24.1616C29.9216 24.9117 30.9391 25.3332 31.9999 25.3332H35.9999V37.3332ZM30.6666 30.6665H29.3333V29.3332C29.3333 28.9795 29.1928 28.6404 28.9427 28.3904C28.6927 28.1403 28.3535 27.9998 27.9999 27.9998C27.6463 27.9998 27.3072 28.1403 27.0571 28.3904C26.8071 28.6404 26.6666 28.9795 26.6666 29.3332V30.6665H25.3333C24.9796 30.6665 24.6405 30.807 24.3904 31.057C24.1404 31.3071 23.9999 31.6462 23.9999 31.9998C23.9999 32.3535 24.1404 32.6926 24.3904 32.9426C24.6405 33.1927 24.9796 33.3332 25.3333 33.3332H26.6666V34.6665C26.6666 35.0201 26.8071 35.3593 27.0571 35.6093C27.3072 35.8594 27.6463 35.9998 27.9999 35.9998C28.3535 35.9998 28.6927 35.8594 28.9427 35.6093C29.1928 35.3593 29.3333 35.0201 29.3333 34.6665V33.3332H30.6666C31.0202 33.3332 31.3593 33.1927 31.6094 32.9426C31.8594 32.6926 31.9999 32.3535 31.9999 31.9998C31.9999 31.6462 31.8594 31.3071 31.6094 31.057C31.3593 30.807 31.0202 30.6665 30.6666 30.6665Z"
								fill="white"
							/>
						</svg>

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

<style>
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
	background: #f8fafd;
	background-size: contain;
	background-position: center center;
}
</style>
