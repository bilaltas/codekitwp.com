const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
	theme: {
		fontFamily: {
			sans: '"Inter", BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
			mono: '"SF Mono","Roboto Mono",Menlo,monospace',
			body: '"Inter", BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"'
		},
		fontSize: {
			xs: ".75rem",
			nav: ".825rem",
			sm: ".835rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			section: "2.35rem",
			"4xl": "2.675rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem"
		},
		extend: {
			colors: {
				gray: {
					0: "#c5ccdb",
					100: "#b1b8c7",
					200: "#9da4b3",
					300: "#89909f",
					400: "#757c8b",
					500: "#616877",
					600: "#4d5463",
					700: "#39404f",
					800: "#252c3b",
					900: "#111827"
				},
				cc: {
					title: "#03060b",
					text: "#445b78",
					nav: "#2d4665",
					sub: "#92a0b3",
					dark: "#121519",
					main: "#d13334"
				},
				red: {
					100: "#ffd0d0",
					200: "#ffbcbc",
					300: "#ffa8a8",
					400: "#ff9494",
					500: "#ff8080",
					600: "#ff6c6c",
					700: "#eb5858",
					800: "#d74444",
					900: "#d13334",
					1000: "#af1c1c"
				},
				dark: {
					50: "#ffffff",
					60: "#fafdff",
					70: "#e6e9ec",
					80: "#d2d5d8",
					90: "#bec1c4",
					100: "#aaadb0",
					200: "#96999c",
					300: "#828588",
					400: "#6e7174",
					500: "#5a5d60",
					600: "#46494c",
					700: "#323538",
					800: "#1e2124",
					900: "#0a0d10",
					1000: "#000000"
				}
			}
		}
	},
	plugins: [
		function({ addComponents }) {
			addComponents({
				".container": {
					maxWidth: "1140px",
					"@screen sm": {
						maxWidth: "600px"
					},
					"@screen md": {
						maxWidth: "720px"
					},
					"@screen lg": {
						maxWidth: "1140px"
					},
					"@screen xl": {
						maxWidth: "1140px"
					}
				}
			});
		}
	]
};
