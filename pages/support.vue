<template>
	<div>
		<Header />
		<div class="hero relative">
			<div class="container mx-auto text-center pt-24 pb-36">
				<h1 class="text-white tracking-tight leading-tight text-heading font-bold">
					Support
				</h1>
				<p class="text-lg text-white text-opacity-60 leading-relaxed mt-3 mb-6">
					Finally, a simple, intuitive interface and easy workflow <br />
					for WordPress custom codes.
				</p>
			</div>
		</div>
		<div class="mt-8 sm:mt-12 lg:-mt-28">
			<div class="relative">
				<div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="max-w-md mx-auto space-y-4 lg:max-w-3xl">
						<div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
							<div class="flex-1 flex flex-col justify-between px-6 py-8 bg-white space-y-6 sm:p-10">
								<form method="POST" action="https://feedr.dk/contact">
									<input type="hidden" name="_token" value="zVxFKx65Ib7Te07ZnLVEcBf7RWloVUP53a9hiNZy" />
									<div>
										<label for="name" class="block text-sm font-medium text-gray-700">Name</label>
										<div class="mt-1.5">
											<input type="text" id="name" name="name" placeholder="Enter your name" autocomplete="name" value="" class="ring-1 ring-gray-900 ring-opacity-10 py-3 px-3 shadow-sm block w-full sm:text-sm rounded-md focus:outline-none focus:ring-opacity-30 transition bg-white" />
										</div>
									</div>
									<div class="mt-6">
										<label for="email" class="block text-sm font-medium text-gray-700">Email</label>
										<div class="mt-1.5">
											<input type="email" id="email" name="email" placeholder="Enter your email" autocomplete="email" value="" class="ring-1 ring-gray-900 ring-opacity-10 py-3 px-3 shadow-sm block w-full sm:text-sm rounded-md focus:outline-none focus:ring-opacity-30 transition bg-white" />
										</div>
									</div>
									<div class="mt-6">
										<label for="body" class="block text-sm font-medium text-gray-700">Question</label>
										<div class="mt-1.5">
											<textarea id="body" name="body" cols="30" rows="7" placeholder="How can we help you?" class="ring-1 ring-gray-900 ring-opacity-10 py-3 px-3 shadow-sm block w-full sm:text-sm rounded-md focus:outline-none focus:ring-opacity-30 transition bg-white"></textarea>
										</div>
									</div>
									<button type="submit" class="mt-6 flex items-center justify-center px-5 py-2 border border-transparent text-sm font-semibold rounded-md text-white bg-cc-main hover:bg-gray-900 transition">Send message</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<section id="faqs" class="px-4 sm:px-6 lg:px-8 py-16 lg:py-24 xl:py-32">
			<div class="container mx-auto">
				<h2 class="text-center text-3xl font-extrabold tracking-tight text-gray-900 mb-14 text-heading">Frequently asked questions</h2>
				<div id="team-pricing" class="text-sm flex -mx-2 -mt-4">
					<div class="flex-none px-2 w-full md:hidden">
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">How do I purchase a license for my entire team?</h3>
							<div class="prose prose-sm leading-5">
								<p>You can purchase a license that you can share with your entire team for $599 USD (+$107.82 tax) here:</p>
								<p><a href="/checkout/e2a8b5bf-59fd-4b1c-8c01-93521d05fa42">Buy a team license for $599 USD (+$107.82 tax)&nbsp;→</a></p>
								<p>Team licenses use a <strong>shared account</strong> (at least for now), so use an email address like "team@yourcompany.com" when creating an account, and share those credentials with your team.</p>
								<p>For more information on team licensing specifics, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "lifetime access" mean exactly?</h3>
							<div class="prose prose-sm leading-5">
								<p>Tailwind UI is a <strong>one-time purchase, with no recurring subscription</strong>. When you purchase a Tailwind UI package, you have access to all of the content in that package forever.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What JS framework does Tailwind UI use?</h3>
							<div class="prose prose-sm leading-5">
								<p>All of the examples in Tailwind UI are provided in three formats: React, Vue, and vanilla HTML.</p>
								<p>The React and Vue examples are fully functional out-of-the-box, and are powered by <a href="https://headlessui.dev">Headless UI</a> — a library of unstyled components we designed to integrate perfectly with Tailwind CSS.</p>
								<p>The vanilla HTML examples <strong>do not include any JavaScript</strong> and are designed for people who prefer to write any necessary JavaScript themselves.</p>
								<p>Most of the components do not rely on JS at all, but for the ones that do (dropdowns, modals, etc.) we've provided some simple comments in the HTML to explain things like what classes you need use for different states (like a toggle switch being on or off), or what classes we recommend for transitioning elements on to or off of the screen (like a modal opening).</p>
								<p>To get a better idea of how this looks in practice, <a href="/documentation#integrating-with-javascript-frameworks">check out our documentation</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What version of Tailwind CSS is used?</h3>
							<div class="prose prose-sm leading-5">
								<p>The components in Tailwind UI are authored using Tailwind CSS v2.0.</p>
								<p>Learn more about this in our <a href="/documentation">getting started documentation</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "free updates" include?</h3>
							<div class="prose prose-sm leading-5">
								<p>We regularly add new Marketing and Application UI components whenever we have new ideas and all new components added to those categories will be always be totally free for existing customers.</p>
								<p>To see what our previous updates have looked like, <a href="/changelog">check out our changelog</a>.</p>
								<p>We do plan to work on new component kits in the future that will be sold separately (email templates and e-commerce are ideas we've tossed around), but any components we design and build that belong in an existing kit will always be added as a free update.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What browsers does Tailwind UI support?</h3>
							<div class="prose prose-sm leading-5">
								<p>The components in Tailwind UI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge.</p>
								<p>We don't support Internet Explorer 11.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Does Tailwind UI include Figma, Sketch, or Adobe XD files?</h3>
							<div class="prose prose-sm leading-5">
								<p>Tailwind UI includes an expertly crafted complete Figma kit that takes advantage of modern Figma features like Variants and Auto Layout.</p>
								<p>If you'd like a sample of what's included, <a href="https://www.figma.com/community/file/958381589801778722/">download a free preview</a> from the Figma community.</p>
								<p>We don't include assets for other design tools like Sketch or Adobe XD.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "community access" mean?</h3>
							<div class="prose prose-sm leading-5"><p>Any purchase of Tailwind UI includes access to our private Discord server where you can suggest new component ideas, ask your peers for help with any problems you run into, and talk with other users about building things with Tailwind UI.</p></div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "unlimited projects" mean?</h3>
							<div class="prose prose-sm leading-5">
								<p>Unlike most other templates/themes, you don't have to buy a new Tailwind UI license every time you want to use it on a new project.</p>
								<p>As long as what you're building will be owned by the Tailwind UI license holder, you can build as many sites as you want without ever having to buy an additional license.</p>
								<p>For more information and examples, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I use Tailwind UI for client projects?</h3>
							<div class="prose prose-sm leading-5">
								<p>Yes! You can use Tailwind UI for basically anything — the only thing we disallow is using it to create derivative competing products.</p>
								<p>For more information and examples, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I use Tailwind UI for my own commercial projects?</h3>
							<div class="prose prose-sm leading-5">
								<p>Absolutely! Your license gives you permission to build as many of your own projects as you like, whether those are simple public websites or SaaS applications that end users need to pay to access.</p>
								<p>For more information and examples, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I use Tailwind UI in open source projects?</h3>
							<div class="prose prose-sm leading-5">
								<p>Yep! As long as what you're building is some sort of actual website and not a derivative component library, theme builder, or other product where the primary purpose is clearly to repackage and redistribute our components, it's totally okay for that project to be open source.</p>
								<p>For more information and examples of what is and isn't okay, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I sell templates/themes I build with Tailwind UI?</h3>
							<div class="prose prose-sm leading-5">
								<p>No, you cannot use Tailwind UI to create derivative products like themes, UI kits, page builders, or anything else where you would be repackaging and redistributing our components for someone else to use to build their own sites.</p>
								<p>For more information and examples of what is and isn't okay, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What is your refund policy?</h3>
							<div class="prose prose-sm leading-5">
								<p>If you're unhappy with your purchase for any reason, email us at <a href="mailto:support@tailwindui.com">support@tailwindui.com</a> within 90 days and we'll refund you in full, no questions asked.</p>
							</div>
						</div>
					</div>
					<div class="flex-none px-2 w-1/2 hidden md:block lg:hidden">
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "lifetime access" mean exactly?</h3>
							<div class="prose prose-sm leading-5">
								<p>Tailwind UI is a <strong>one-time purchase, with no recurring subscription</strong>. When you purchase a Tailwind UI package, you have access to all of the content in that package forever.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What JS framework does Tailwind UI use?</h3>
							<div class="prose prose-sm leading-5">
								<p>All of the examples in Tailwind UI are provided in three formats: React, Vue, and vanilla HTML.</p>
								<p>The React and Vue examples are fully functional out-of-the-box, and are powered by <a href="https://headlessui.dev">Headless UI</a> — a library of unstyled components we designed to integrate perfectly with Tailwind CSS.</p>
								<p>The vanilla HTML examples <strong>do not include any JavaScript</strong> and are designed for people who prefer to write any necessary JavaScript themselves.</p>
								<p>Most of the components do not rely on JS at all, but for the ones that do (dropdowns, modals, etc.) we've provided some simple comments in the HTML to explain things like what classes you need use for different states (like a toggle switch being on or off), or what classes we recommend for transitioning elements on to or off of the screen (like a modal opening).</p>
								<p>To get a better idea of how this looks in practice, <a href="/documentation#integrating-with-javascript-frameworks">check out our documentation</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What version of Tailwind CSS is used?</h3>
							<div class="prose prose-sm leading-5">
								<p>The components in Tailwind UI are authored using Tailwind CSS v2.0.</p>
								<p>Learn more about this in our <a href="/documentation">getting started documentation</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "free updates" include?</h3>
							<div class="prose prose-sm leading-5">
								<p>We regularly add new Marketing and Application UI components whenever we have new ideas and all new components added to those categories will be always be totally free for existing customers.</p>
								<p>To see what our previous updates have looked like, <a href="/changelog">check out our changelog</a>.</p>
								<p>We do plan to work on new component kits in the future that will be sold separately (email templates and e-commerce are ideas we've tossed around), but any components we design and build that belong in an existing kit will always be added as a free update.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What browsers does Tailwind UI support?</h3>
							<div class="prose prose-sm leading-5">
								<p>The components in Tailwind UI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge.</p>
								<p>We don't support Internet Explorer 11.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Does Tailwind UI include Figma, Sketch, or Adobe XD files?</h3>
							<div class="prose prose-sm leading-5">
								<p>Tailwind UI includes an expertly crafted complete Figma kit that takes advantage of modern Figma features like Variants and Auto Layout.</p>
								<p>If you'd like a sample of what's included, <a href="https://www.figma.com/community/file/958381589801778722/">download a free preview</a> from the Figma community.</p>
								<p>We don't include assets for other design tools like Sketch or Adobe XD.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "community access" mean?</h3>
							<div class="prose prose-sm leading-5"><p>Any purchase of Tailwind UI includes access to our private Discord server where you can suggest new component ideas, ask your peers for help with any problems you run into, and talk with other users about building things with Tailwind UI.</p></div>
						</div>
					</div>
					<div class="flex-none px-2 w-1/2 hidden md:block lg:hidden">
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">How do I purchase a license for my entire team?</h3>
							<div class="prose prose-sm leading-5">
								<p>You can purchase a license that you can share with your entire team for $599 USD (+$107.82 tax) here:</p>
								<p><a href="/checkout/e2a8b5bf-59fd-4b1c-8c01-93521d05fa42">Buy a team license for $599 USD (+$107.82 tax)&nbsp;→</a></p>
								<p>Team licenses use a <strong>shared account</strong> (at least for now), so use an email address like "team@yourcompany.com" when creating an account, and share those credentials with your team.</p>
								<p>For more information on team licensing specifics, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "unlimited projects" mean?</h3>
							<div class="prose prose-sm leading-5">
								<p>Unlike most other templates/themes, you don't have to buy a new Tailwind UI license every time you want to use it on a new project.</p>
								<p>As long as what you're building will be owned by the Tailwind UI license holder, you can build as many sites as you want without ever having to buy an additional license.</p>
								<p>For more information and examples, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I use Tailwind UI for client projects?</h3>
							<div class="prose prose-sm leading-5">
								<p>Yes! You can use Tailwind UI for basically anything — the only thing we disallow is using it to create derivative competing products.</p>
								<p>For more information and examples, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I use Tailwind UI for my own commercial projects?</h3>
							<div class="prose prose-sm leading-5">
								<p>Absolutely! Your license gives you permission to build as many of your own projects as you like, whether those are simple public websites or SaaS applications that end users need to pay to access.</p>
								<p>For more information and examples, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I use Tailwind UI in open source projects?</h3>
							<div class="prose prose-sm leading-5">
								<p>Yep! As long as what you're building is some sort of actual website and not a derivative component library, theme builder, or other product where the primary purpose is clearly to repackage and redistribute our components, it's totally okay for that project to be open source.</p>
								<p>For more information and examples of what is and isn't okay, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I sell templates/themes I build with Tailwind UI?</h3>
							<div class="prose prose-sm leading-5">
								<p>No, you cannot use Tailwind UI to create derivative products like themes, UI kits, page builders, or anything else where you would be repackaging and redistributing our components for someone else to use to build their own sites.</p>
								<p>For more information and examples of what is and isn't okay, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What is your refund policy?</h3>
							<div class="prose prose-sm leading-5">
								<p>If you're unhappy with your purchase for any reason, email us at <a href="mailto:support@tailwindui.com">support@tailwindui.com</a> within 90 days and we'll refund you in full, no questions asked.</p>
							</div>
						</div>
					</div>
					<div class="flex-none px-2 w-1/3 hidden lg:block">
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "lifetime access" mean exactly?</h3>
							<div class="prose prose-sm leading-5">
								<p>Tailwind UI is a <strong>one-time purchase, with no recurring subscription</strong>. When you purchase a Tailwind UI package, you have access to all of the content in that package forever.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What JS framework does Tailwind UI use?</h3>
							<div class="prose prose-sm leading-5">
								<p>All of the examples in Tailwind UI are provided in three formats: React, Vue, and vanilla HTML.</p>
								<p>The React and Vue examples are fully functional out-of-the-box, and are powered by <a href="https://headlessui.dev">Headless UI</a> — a library of unstyled components we designed to integrate perfectly with Tailwind CSS.</p>
								<p>The vanilla HTML examples <strong>do not include any JavaScript</strong> and are designed for people who prefer to write any necessary JavaScript themselves.</p>
								<p>Most of the components do not rely on JS at all, but for the ones that do (dropdowns, modals, etc.) we've provided some simple comments in the HTML to explain things like what classes you need use for different states (like a toggle switch being on or off), or what classes we recommend for transitioning elements on to or off of the screen (like a modal opening).</p>
								<p>To get a better idea of how this looks in practice, <a href="/documentation#integrating-with-javascript-frameworks">check out our documentation</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What version of Tailwind CSS is used?</h3>
							<div class="prose prose-sm leading-5">
								<p>The components in Tailwind UI are authored using Tailwind CSS v2.0.</p>
								<p>Learn more about this in our <a href="/documentation">getting started documentation</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "free updates" include?</h3>
							<div class="prose prose-sm leading-5">
								<p>We regularly add new Marketing and Application UI components whenever we have new ideas and all new components added to those categories will be always be totally free for existing customers.</p>
								<p>To see what our previous updates have looked like, <a href="/changelog">check out our changelog</a>.</p>
								<p>We do plan to work on new component kits in the future that will be sold separately (email templates and e-commerce are ideas we've tossed around), but any components we design and build that belong in an existing kit will always be added as a free update.</p>
							</div>
						</div>
					</div>
					<div class="flex-none px-2 w-1/3 hidden lg:block">
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What browsers does Tailwind UI support?</h3>
							<div class="prose prose-sm leading-5">
								<p>The components in Tailwind UI are designed to work in the latest, stable releases of all major browsers, including Chrome, Firefox, Safari, and Edge.</p>
								<p>We don't support Internet Explorer 11.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Does Tailwind UI include Figma, Sketch, or Adobe XD files?</h3>
							<div class="prose prose-sm leading-5">
								<p>Tailwind UI includes an expertly crafted complete Figma kit that takes advantage of modern Figma features like Variants and Auto Layout.</p>
								<p>If you'd like a sample of what's included, <a href="https://www.figma.com/community/file/958381589801778722/">download a free preview</a> from the Figma community.</p>
								<p>We don't include assets for other design tools like Sketch or Adobe XD.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "community access" mean?</h3>
							<div class="prose prose-sm leading-5"><p>Any purchase of Tailwind UI includes access to our private Discord server where you can suggest new component ideas, ask your peers for help with any problems you run into, and talk with other users about building things with Tailwind UI.</p></div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What does "unlimited projects" mean?</h3>
							<div class="prose prose-sm leading-5">
								<p>Unlike most other templates/themes, you don't have to buy a new Tailwind UI license every time you want to use it on a new project.</p>
								<p>As long as what you're building will be owned by the Tailwind UI license holder, you can build as many sites as you want without ever having to buy an additional license.</p>
								<p>For more information and examples, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I use Tailwind UI for client projects?</h3>
							<div class="prose prose-sm leading-5">
								<p>Yes! You can use Tailwind UI for basically anything — the only thing we disallow is using it to create derivative competing products.</p>
								<p>For more information and examples, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
					</div>
					<div class="flex-none px-2 w-1/3 hidden lg:block">
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">How do I purchase a license for my entire team?</h3>
							<div class="prose prose-sm leading-5">
								<p>You can purchase a license that you can share with your entire team for $599 USD (+$107.82 tax) here:</p>
								<p><a href="/checkout/e2a8b5bf-59fd-4b1c-8c01-93521d05fa42">Buy a team license for $599 USD (+$107.82 tax)&nbsp;→</a></p>
								<p>Team licenses use a <strong>shared account</strong> (at least for now), so use an email address like "team@yourcompany.com" when creating an account, and share those credentials with your team.</p>
								<p>For more information on team licensing specifics, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I use Tailwind UI for my own commercial projects?</h3>
							<div class="prose prose-sm leading-5">
								<p>Absolutely! Your license gives you permission to build as many of your own projects as you like, whether those are simple public websites or SaaS applications that end users need to pay to access.</p>
								<p>For more information and examples, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I use Tailwind UI in open source projects?</h3>
							<div class="prose prose-sm leading-5">
								<p>Yep! As long as what you're building is some sort of actual website and not a derivative component library, theme builder, or other product where the primary purpose is clearly to repackage and redistribute our components, it's totally okay for that project to be open source.</p>
								<p>For more information and examples of what is and isn't okay, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">Can I sell templates/themes I build with Tailwind UI?</h3>
							<div class="prose prose-sm leading-5">
								<p>No, you cannot use Tailwind UI to create derivative products like themes, UI kits, page builders, or anything else where you would be repackaging and redistributing our components for someone else to use to build their own sites.</p>
								<p>For more information and examples of what is and isn't okay, <a href="/license">read through our license</a>.</p>
							</div>
						</div>
						<div class="bg-gray-50 p-6 rounded-md mt-4">
							<h3 class="font-semibold text-gray-900 mb-2">What is your refund policy?</h3>
							<div class="prose prose-sm leading-5">
								<p>If you're unhappy with your purchase for any reason, email us at <a href="mailto:support@tailwindui.com">support@tailwindui.com</a> within 90 days and we'll refund you in full, no questions asked.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<Footer />
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

<style></style>
