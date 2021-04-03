<template>
	<div>
		<div class="bg-white">
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

		<div class="testimonials py-32 bg-black">
			<div class="container mx-auto">
				<div class="section-title text-center mb-10">
					<span class="font-sans bg-red-main uppercase font-bold rounded-full text-white py-1 px-3 text-xs mb-4 inline-flex">Testimonials</span>
					<h3 class="text-heading text-white font-semibold tracking-tight leading-tight">
						Trusted by 3000+ WordPress Users
					</h3>
					<p class="text-white text-opacity-60 mt-3 leading-relaxed font-body text-base ">
						With the power of our integrated IDE, Custom Code will significantly boost your development efficiency. <br />
						The features also provide continuous development and urgent deployment of codes without effort. <br />
						It is actually just like your favorite code editor.
					</p>
				</div>
				<div class="grid grid-cols-2 gap-5">
					<div class="mt-8">
						<div class="testimonial bg-white bg-opacity-5 border border-white border-opacity-5 text-white py-10 px-6 rounded flex my-4">
							<div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
								<img src="https://secure.gravatar.com/avatar/abbe76cde539f82ee7741908f5d74ac5?s=100&d=retro&r=g" alt="profile image" class="w-full h-full object-cover" />
							</div>
							<div>
								<p class="text-white text-opacity-80">"Version 2.0 made this plugin worth paying for, but it’s free! Just wow, it’s the best plugin for custom code on the market, now. How cool is that!"</p>
								<div class="text-white text-opacity-70 font-bold uppercase mt-6 font-serif">- Martin Braun</div>
								<div class="text-white text-opacity-40 font-serif font-semibold mt-2 text-xs">on WP.ORG</div>
							</div>
						</div>
						<div class="testimonial bg-white bg-opacity-5 border border-white border-opacity-5 text-white py-10 px-6 rounded flex my-4">
							<div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
								<img src="https://secure.gravatar.com/avatar/a2a3aab2a26bcb67840bb61a51899b18?s=100&d=retro&r=g" alt="profile image" class="w-full h-full object-cover" />
							</div>
							<div>
								<p class="text-white text-opacity-80">"I have tried many plugins for adding custom code, and this is the best by far. Add all of your custom CSS/SASS and JavaScript/jQuery in one place. Robust code editor with error notification, line numbers, good use of colors, separate tabs to keep media queries organized. SASS is compiled automatically. It’s like having an enhanced version of Sublime Text built directly into WordPress! Thank you for creating this plugin!!!"</p>
								<div class="text-white text-opacity-70 font-bold uppercase mt-6 font-serif">- kblatt0830</div>
								<div class="text-white text-opacity-40 font-serif font-semibold mt-2 text-xs">on WP.ORG</div>
							</div>
						</div>
					</div>

					<div class="mt-8">
						<div class="testimonial bg-white bg-opacity-5 border border-white border-opacity-5 text-white py-10 px-6 rounded flex my-4">
							<div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
								<img src="https://secure.gravatar.com/avatar/d21881fe5677ae44b4ef0a2bac9307f7?s=100&d=retro&r=g" alt="profile image" class="w-full h-full object-cover" />
							</div>
							<div>
								<p class="text-white text-opacity-80">"This plugin is a must have, it is the best code editor, lets you manage CSS SCSS, JS, PHP…, and presets tabs to manage you responsive code. (with correct sizes, and customisable sizes too) Time saving, clean editor, looks like simple text inside your WP admin. Perfect to me. Simple and Yet most advanced plugin, indeed ! AND support is ultra fax and very friendly. Thank you Atakan & great job once again."</p>
								<div class="text-white text-opacity-70 font-bold uppercase mt-6 font-serif">- robin2014</div>
								<div class="text-white text-opacity-40 font-serif font-semibold mt-2 text-xs">on WP.ORG</div>
							</div>
						</div>
						<div class="testimonial bg-white bg-opacity-5 border border-white border-opacity-5 text-white py-10 px-6 rounded flex my-4">
							<div class="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
								<img src="https://secure.gravatar.com/avatar/742911513f6a1f25b035327c997058d9?s=100&d=retro&r=g" alt="profile image" class="w-full h-full object-cover" />
							</div>
							<div>
								<p class="text-white text-opacity-80">"The editor is perfect! emmet expansions, breakpoints as tabs, editable breakpoints, keyboard shortcuts, SASS!, javascript as well. Very impressive and better than most other “pro” plugins. So well done. "</p>
								<div class="text-white text-opacity-70 font-bold uppercase mt-6 font-serif">- @cunnningstunts</div>
								<div class="text-white text-opacity-40 font-serif font-semibold mt-2 text-xs">on WP.ORG</div>
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
	font-size: 60px;
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
	background: linear-gradient(180deg, rgba(248, 250, 253, 0) 0%, #f8fafd 100%);

	background-size: contain;
	background-repeat: no-repeat;
	background-position: top center;
}

.testimonial {
	box-sizing: border-box;
	box-shadow: 0px 4px 4px rgba(52, 77, 151, 0.05);
	border-radius: 3px;
}
</style>
