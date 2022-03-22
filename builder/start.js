const spawn = require("child_process").spawn;
const path = require("path");
const os = require("os");

process.env.RUN_ENV = "DEV";
require("./genConfig");
// 开发环境以子线程启动两个命令

let webpackBinPath = path.resolve(
	process.cwd(),
	"./node_modules/.bin/webpack-dev-server"
);
let electronBinPath = path.resolve(
	process.cwd(),
	"./node_modules/.bin/electron"
);
if (os.type() == "Windows_NT") {
	webpackBinPath = path.resolve(
		process.cwd(),
		"./node_modules/.bin/webpack-dev-server.cmd"
	);
	electronBinPath = path.resolve(
		process.cwd(),
		"./node_modules/.bin/electron.cmd"
	);
}

const webpackConfig = `--config builder/webpack.base.js`;
const webpackRun = spawn(webpackBinPath, webpackConfig.split(" "));
webpackRun.stdout.on("data", (data) => {
	console.log(`${data}`);
});
webpackRun.stderr.on("data", (data) => {
	console.log(`${data}`);
});
webpackRun.on("close", (code) => {
	console.log(`child process exited with code ${code}`);
});

const electronRun = spawn(electronBinPath, ["."]);
electronRun.stdout.on("data", (data) => {
	console.log(`${data}`);
});
electronRun.stderr.on("data", (data) => {
	console.log(`${data}`);
});
electronRun.on("close", (code) => {
	console.log(`child process exited with code ${code}`);
});
