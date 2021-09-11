<template>
	<section id="comparison" class="relative overflow-hidden text-left bg-dark-50 py-14 sm:py-24 md:pt-24 md:pb-40">
		<div class="container mx-auto">
			<div class="text-center section-title mb-14">
				<AtomsSectionSub>Comparison</AtomsSectionSub>
				<AtomsSectionTitle>Compare Features</AtomsSectionTitle>
			</div>
			<div class="overflow-x-auto table-wrapper">
				<table class="w-full h-px bg-white border rounded-sm table-fixed border-dark-100 comparison-table">
					<caption class="sr-only">
						Pricing plan comparison
					</caption>
					<thead class="bg-white border-b rounded-sm shadow-sm border-dark-100">
						<tr>
							<th class="w-1/2 px-6 py-4 text-lg font-medium text-left text-dark-800" scope="col">
								<span class="sr-only">Feature by</span>
								<span>Plans</span>
							</th>
							<th class="w-1/3 px-6 py-4 text-lg font-medium leading-6 text-left text-dark-800" scope="col">Free</th>
							<th class="w-1/3 px-6 py-4 text-lg font-medium leading-6 text-left text-dark-800" scope="col">Pro</th>
						</tr>
					</thead>
					<tbody class="divide-y divide-dark-100">
						<tr>
							<th class="px-6 py-8 text-lg font-medium text-left align-top text-dark-800" scope="row">Pricing</th>
							<td class="h-full px-6 py-8 align-top">
								<div class="relative table h-full">
									<p>
										<span class="text-4xl font-bold text-dark-800">Free</span>
									</p>
									<p class="mt-4 mb-16 text-[16px] leading-relaxed text-dark-500">Add custom SASS, CSS, JS, PHP and HTML codes to your WordPress websites.</p>
									<a href="https://wordpress.org/plugins/custom-codes/" target="_blank" class="absolute bottom-0 w-full py-2 text-base font-semibold text-center text-white transition-all border border-transparent rounded-sm bg-dark-400 hover:bg-dark-600">Download Free</a>
								</div>
							</td>
							<td class="h-full px-6 py-8 align-top">
								<div class="relative table h-full">
									<p>
										<span class="text-4xl font-bold text-dark-800">$39</span>

										<span class="text-base font-medium text-dark-500">/year</span>
									</p>
									<p class="mt-4 mb-16 text-[16px] leading-relaxed text-dark-500">Extra Languages, Editor Enhancements, Advanced Code Release Locations, Includes GUI, and much more.</p>
									<nuxt-link to="/pricing/" class="absolute bottom-0 flex-grow w-full py-2 text-base font-semibold text-center text-white transition-all bg-red-500 border border-transparent rounded-sm hover:bg-red-700">Buy Pro Now</nuxt-link>
								</div>
							</td>
						</tr>
						<tr>
							<th class="py-3 pl-6 text-lg font-medium text-left bg-white border rounded-sm shadow-sm border-dark-100 text-dark-800" colspan="3" scope="colgroup">Supported Languages</th>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">CSS</th>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">SCSS</th>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">JavaScript</th>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">HTML</th>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">PHP</th>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">LESS</th>
							<td class="px-6 py-5">
								<AtomsMinusIcon />
								<span class="sr-only">Not included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">Stylus</th>
							<td class="px-6 py-5">
								<AtomsMinusIcon />
								<span class="sr-only">Not included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">CoffeeScript</th>
							<td class="px-6 py-5">
								<AtomsMinusIcon />
								<span class="sr-only">Not included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">PUG</th>
							<td class="px-6 py-5">
								<AtomsMinusIcon />
								<span class="sr-only">Not included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>

						<tr>
							<th class="py-3 pl-6 text-lg font-medium text-left bg-white text-dark-800" colspan="3" scope="colgroup">Editor Features</th>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">Save with Cmd/Ctrl + S</th>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">Emmet Abbreviations</th>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">Various Device Media Query Editors</th>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">
								Basic Code Release Locations <br />
								<i class="text-xs">Frontend, Backend, Login Screen, Everywhere, Nowhere</i>
							</th>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">
								Advanced Code Release Locations <br />
								<i class="text-xs">Page, Posts, Post Type, Categories / Terms, Archives / Taxonomies, Templates</i>
							</th>
							<td class="px-6 py-5">
								<AtomsMinusIcon />
								<span class="sr-only">Not included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">Code Folding</th>
							<td class="px-6 py-5">
								<AtomsMinusIcon />
								<span class="sr-only">Not included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">Code Hints</th>
							<td class="px-6 py-5">
								<AtomsMinusIcon />
								<span class="sr-only">Not included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">Code Includes</th>
							<td class="px-6 py-5">
								<AtomsMinusIcon />
								<span class="sr-only">Not included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">Code Groups/Categories</th>
							<td class="px-6 py-5">
								<AtomsMinusIcon />
								<span class="sr-only">Not included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>

						<tr>
							<th class="py-3 pl-6 text-lg font-medium text-left bg-white text-dark-800" colspan="3" scope="colgroup">Support</th>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">Email & Support Forum</th>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-5 text-base font-medium text-left text-dark-500" scope="row">Priority Email</th>
							<td class="px-6 py-5">
								<AtomsMinusIcon />
								<span class="sr-only">Not included in Free</span>
							</td>
							<td class="px-6 py-5">
								<AtomsCheckIcon />
								<span class="sr-only">Included in PRO</span>
							</td>
						</tr>
						<tr>
							<th class="px-6 py-8 text-base font-medium text-left align-top text-dark-800" scope="row">
								<span class="sr-only">Choice</span>
							</th>
							<td class="h-full px-6 py-8 align-top">
								<a href="https://wordpress.org/plugins/custom-codes/" target="_blank" class="block w-full py-2 text-base font-semibold text-center text-white transition-all border border-transparent rounded-sm bg-dark-400 hover:bg-dark-600">Download Free</a>
							</td>
							<td class="h-full px-6 py-8 align-top">
								<nuxt-link to="/pricing/" class="block w-full py-2 text-base font-semibold text-center text-white transition-all bg-red-500 border border-transparent rounded-sm hover:bg-red-700">Buy Pro Now</nuxt-link>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	</section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.comparison-table {
	box-shadow: -30px 30px 0px #efefef;
}

.table-wrapper table {
	min-width: 700px;
	border-collapse: collapse;
	-webkit-overflow-scrolling: touch;
}
</style>
