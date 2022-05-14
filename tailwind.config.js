module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
	theme: {
		extend: {},
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "992px",
			// => @media (min-width: 992px) { ... }

			xl: "1024px",
			// => @media (min-width: 1024px) { ... }

			"2xl": "1280px",
			// => @media (min-width: 1280px) { ... }

			"3xl": "1536px",
			// => @media (min-width: 1536px) { ... }
		},
	},

	plugins: [],
};
