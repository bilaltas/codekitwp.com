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
	head() {
		return {
			title: "My Account",
			script: [
				{
					type: "module",
					src: "https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"
				}
			]
		};
	},
	mounted() {
		setTimeout(function() {
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
					public_key: "pk_48290c5d508d15800eecfc1dc7096",
					store_id: 3161
				};

				(function() {
					FS.Members.configure(params).open();
				})();
			};

			document.getElementsByTagName("head")[0].appendChild(userDashboardScript);
		}, 500);
	}
};
</script>

<style lang="postcss"></style>
