({
	baseUrl: "js",
	name: "main",
	out: "build/main.js",
	optimize: "none",
	useStrict: true,
	namespace: 'george',

	paths: {
		'requireLib': '../node_modules/requirejs/require'
	},

	include: 'requireLib'
})