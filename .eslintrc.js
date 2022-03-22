module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		sourceType: "module",
	},
	extends: ["plugin:react/recommended", "eslint:recommended"],
	globals: {
		$: true,
		process: true,
		__dirname: true,
	},
	settings: {
		react: {
			version: "17.0.2",
		},
	},
	plugins: ["react"],
	rules: {
		indent: ["error", 2], // 缩进宽度4个空格
		"comma-dangle": "off", // 允许行末逗号
		"no-constant-condition": "off", // 允许常量作为表达式条件
		"no-delete-var": "off", // 允许使用delete
		"no-extend-native": "off", // 允许扩展原生对象
		"no-floating-decimal": "off", //  允许省去小数点前的0
		"no-multi-str": "off", // 允许多行字符串
		semi: "off", // 允许使用分号
		"max-len": [
			"warn",
			{
				code: 180,
				ignoreComments: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreUrls: true,
			},
		],
		// 要求使用 let 或 const 而不是 var
		"no-var": ["error"],
	},
};
