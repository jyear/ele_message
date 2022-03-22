const path = require("path");
const fs = require("fs");
const configs = require("./config/index.js");
const configPath = path.join(__dirname, "../electron/config.js");

const useConfig = configs[process.env.RUN_ENV];
fs.writeFileSync(
	configPath,
	`const config=${JSON.stringify(useConfig, "", 2)};
module.exports=config;
`
);
