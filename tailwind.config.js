module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			typography: {
				DEFAULT: {
					css: {
						color: "#FFF",
						a: {
							color: "#fff",
							textDecoration: 'underline',
							"&:hover": {
								color: "#fff",
							},
						},
						h1: {
							color: "#FFF",
						},
						h2: {
							color: "#FFF",
						},
						h3: {
							color: "#FFF",
						},
						h4: { color: "#FFF" },
						em: { color: "#FFF" },
						strong: { color: "#FFF" },
						blockquote: { color: "#FFF", backgroundColor: "#f7f7f7" },
						code: { backgroundColor: "#1A1E22", color: "#2eff7b" },
					},
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require("@tailwindcss/typography")],
};
