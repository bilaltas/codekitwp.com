<template>
	<main id="account">
    <h1 style="display: none;">My Account</h1>
		<div id="dashboard">
			<div id="fs_dashboard_anchor"></div>
		</div>
		<OrganismsFAQ />
		<OrganismsCTA />
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
		setTimeout(() => {
			const userDashboardScript = document.createElement("script");
			const date = new Date();
			const cacheKiller = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours();

			userDashboardScript.type = "text/javascript";
			userDashboardScript.src = "//users.freemius.com/dashboard.js?ck=" + cacheKiller;
			userDashboardScript.onload = () => {
				const css = {
					position: "relative",
					top: "auto",
					bottom: "auto",
					left: "auto",
					right: "auto",
					height: "700px",
					zIndex: "2"
				};

				const params = {
					css,
					public_key: "pk_48290c5d508d15800eecfc1dc7096",
					store_id: 3161
				};

				(() => {
					FS.Members.configure(params).open(); // eslint-disable-line
				})();
			};

			document.getElementsByTagName("head")[0].appendChild(userDashboardScript);
		}, 500);
	}
};
</script>
