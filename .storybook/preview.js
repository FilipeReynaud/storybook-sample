export const parameters = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	backgrounds: {
		default: "lightYellow",
		values: [
			{
				name: "lightYellow",
				value: "#FAEFE3",
			},
			{
				name: "white",
				value: "white",
			},
		],
	},
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
};
