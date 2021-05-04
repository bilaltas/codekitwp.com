<template>
	<main>
		<div class="account">
			<div class="">
				<div id="dashboard">
					<div id="fs_dashboard_anchor"></div>
				</div>
			</div>
		</div>

		<FAQ />
	</main>
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
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		script: [
			{
				type: "module",
				src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
			}
		]
	},
	mounted() {
		var userDashboardScript = document.createElement("script"),
			date = new Date(),
			cacheKiller = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours();

		userDashboardScript.type = "text/javascript";
		userDashboardScript.src = "//users.freemius.com/dashboard.js?ck=" + cacheKiller;
		userDashboardScript.onload = function() {
			var css = {
				position: "relative",
				top: "auto",
				bottom: "auto",
				left: "auto",
				right: "auto",
				height: "900px",
				zIndex: "2"
			};

			var params = {
				css: css,
				public_key: "pk_136be7f070a3134ee0e91b07d11b8",
				store_id: 1135
			};

			(function() {
				FS.Members.configure(params).open();
			})();
		};

		document.getElementsByTagName("head")[0].appendChild(userDashboardScript);
	}
};
</script>

<style lang="postcss"></style>
