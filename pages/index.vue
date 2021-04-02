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

		<div class="testimonials py-32">
			<div class="container mx-auto">
				<div class="section-title text-center mb-10">
					<span class="font-sans bg-red-main uppercase font-bold rounded-full text-white py-1 px-3 text-xs mb-4 inline-flex">Testimonials</span>
					<h3 class="text-heading text-black font-semibold tracking-tight leading-tight">
						Trusted by 3000+ WordPress Users
					</h3>
					<p class="text-black text-opacity-60 mt-3 leading-relaxed font-body text-base ">
						With the power of our integrated IDE, Custom Code will significantly boost your development efficiency. <br />
						The features also provide continuous development and urgent deployment of codes without effort. <br />
						It is actually just like your favorite code editor.
					</p>
				</div>
				<div class="md:flex md:flex-wrap md:-mx-4 my-6">
					<div class="md:w-1/2 md:px-4 mt-8">
						<div class="testimonial bg-white p-6 rounded flex">
							<div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
								<img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover" />
							</div>
							<div>
								<p class="text-gray-600">"It really saves me time and effort. FWR Bootstrap Blocks is exactly what our business has been lacking. FWR Bootstrap Blocks was worth a fortune to my company. FWR Bootstrap Blocks has really helped our business. I'm good to go."</p>
								<div class="text-gray-900 font-bold uppercase mt-6 font-serif">- Jesse D.</div>
								<div class="text-gray-600 font-serif">Apple</div>
							</div>
						</div>
					</div>

					<div class="md:w-1/2 md:px-4 mt-8">
						<div class="testimonial bg-white p-6 rounded flex">
							<div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
								<img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover" />
							</div>
							<div>
								<p class="text-gray-600">"It really saves me time and effort. FWR Bootstrap Blocks is exactly what our business has been lacking. FWR Bootstrap Blocks was worth a fortune to my company. FWR Bootstrap Blocks has really helped our business. I'm good to go."</p>
								<div class="text-gray-900 font-bold uppercase mt-6 font-serif">- Jesse D.</div>
								<div class="text-gray-600 font-serif">Apple</div>
							</div>
						</div>
					</div>

					<div class="md:w-1/2 md:px-4 mt-8">
						<div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
							<div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
								<img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover" />
							</div>
							<div>
								<p class="text-gray-600">"FWR Bootstrap Blocks is exactly what our business has been lacking. FWR Bootstrap Blocks is both attractive and highly adaptable. Man, this thing is getting better and better as I learn more about it."</p>
								<div class="text-gray-900 font-bold uppercase mt-6">- Candace H.</div>
								<div class="text-gray-600">Google</div>
							</div>
						</div>
					</div>

					<div class="md:w-1/2 md:px-4 mt-8">
						<div class="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
							<div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
								<img src="//via.placeholder.com/100/eee" alt="profile image" class="w-full h-full object-cover" />
							</div>
							<div>
								<p class="text-gray-600">"This is simply unbelievable! I use FWR Bootstrap Blocks often. You've saved our business! No matter where you go, FWR Bootstrap Blocks is the coolest, most happening thing around!"</p>
								<div class="text-gray-900 font-bold uppercase mt-6">- Joe H.</div>
								<div class="text-gray-600">Facebook</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	head: {
		title: "The Code Editor for WordPress | Custom Codes",
		meta: [
			{ charset: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{
				hid: "description",
				name: "description",
				content: "my website description"
			}
		],
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},
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
	background-repeat: no-repeat;
	background-position: top center;
}

.testimonials {
	background: #f8fafd;
}

.testimonial {
	border: 1px solid #e9ecf4;
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(52, 77, 151, 0.05);
	border-radius: 3px;
}
</style>
