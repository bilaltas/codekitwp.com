<template>
	<section id="testimonials" class="testimonials py-14 lg:py-24">
		<div class="container mx-auto">
			<div class="section-title text-center mb-10">
				<span class="font-mono uppercase rounded-full text-gray-200 py-1 px-4 text-xs inline-flex font-semibold tracking-wider">Testimonials</span>
				<h3 class="text-3xl xl:text-section text-gray-900 font-semibold tracking-tight leading-tight">
					Trusted by 3000+ WordPress Users
				</h3>
				<p class="text-gray-500 mt-3 leading-relaxed font-body text-base ">
					Since our first release, we’ve listened our users and improved our plugin continuously which brought us <br />
					more than 3000+ users who think CodeKit is awesome and uncomparable to other plugins.
				</p>
			</div>
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-5">
				<div class="lg:mt-4">
					<div class="testimonial bg-white p-6 text-base rounded flex my-4">
						<div class="w-14 h-14 md:w-16 md:h-16 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
							<img data-src="~static/avatar-1.png" alt="profile image" class="w-full h-full object-cover" v-lazy-load />
						</div>
						<div>
							<p class="text-gray-500 leading-relaxed">"Version 2.0 made <span class="text-gray-900 font-medium">this plugin worth paying for</span>, but it’s free! Just wow, it’s the best plugin for custom code on the market, now. How cool is that!"</p>
							<div class="text-gray-400 font-bold uppercase mt-6 font-serif text-xs">- Martin Braun</div>
							<div class="text-gray-400  font-serif font-semibold mt-1 text-xs">on WP.ORG</div>
						</div>
					</div>
					<div class="testimonial bg-white p-6 text-base rounded flex my-4">
						<div class="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
							<img data-src="~static/avatar-2.png" alt="profile image" class="w-full h-full object-cover" v-lazy-load />
						</div>
						<div>
							<p class="text-gray-500 leading-relaxed">"I have tried many plugins for adding custom code, and <span class="text-gray-900 font-medium">this is the best by far.</span> Add all of your custom CSS/SASS and JavaScript/jQuery in one place. Robust code editor with error notification, line numbers, good use of colors, separate tabs to keep media queries organized. SASS is compiled automatically. It’s like <span class="text-gray-900 font-medium">having an enhanced version of Sublime Text built directly into WordPress!</span>"</p>
							<div class="text-gray-400 font-bold uppercase mt-6 font-serif text-xs">- kblatt0830</div>
							<div class="text-gray-400  font-serif font-semibold mt-1 text-xs">on WP.ORG</div>
						</div>
					</div>
				</div>
				<div class="lg:mt-4">
					<div class="testimonial bg-white p-6 text-base rounded flex my-4">
						<div class="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
							<img data-src="~static/avatar-3.png" alt="profile image" class="w-full h-full object-cover" v-lazy-load />
						</div>
						<div>
							<p class="text-gray-500 leading-relaxed">This plugin is a must have, it is the best code editor, lets you manage CSS SCSS, JS, PHP…, and presets tabs to manage you responsive code. Time saving, clean editor, looks like simple text inside your WP admin. <span class="text-gray-900 font-medium">Simple and yet most advanced plugin</span>, indeed! And support is ultra fax and very friendly."</p>
							<div class="text-gray-400 font-bold uppercase mt-6 font-serif text-xs">- robin2014</div>
							<div class="text-gray-400  font-serif font-semibold mt-1 text-xs">on WP.ORG</div>
						</div>
					</div>

					<div class="testimonial bg-white p-6 text-base rounded flex my-4">
						<div class="w-10 h-10 md:w-16 md:h-16 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
							<img data-src="~static/avatar-4.png" alt="profile image" class="w-full h-full object-cover" v-lazy-load />
						</div>
						<div>
							<p class="text-gray-500 leading-relaxed">"The editor is perfect! Emmet expansions, breakpoints as tabs, editable breakpoints, keyboard shortcuts, SASS! Javascript as well. <span class="text-gray-900 font-medium">Very impressive and better than most other “pro” plugins.</span> So well done. "</p>
							<div class="text-gray-400 font-bold uppercase mt-6 font-serif text-xs">- @cunnningstunts</div>
							<div class="text-gray-400  font-serif font-semibold mt-1 text-xs">on WP.ORG</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="postcss">
.testimonials {
	background: #f8fafc;
}
</style>
