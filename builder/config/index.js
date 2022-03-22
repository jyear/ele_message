const path = require("path");

const configs = {
	DEV: {
		URI: "http://127.0.0.1:9000",
		env: "DEV",
	},
	TEST: {
		URI: "resources/index.html",
		env: "TEST",
	},
};

module.exports = configs;
