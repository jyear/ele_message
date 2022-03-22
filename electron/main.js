const { app, ipcMain } = require("electron");
const { createWindow } = require("./util");

const config = require("./config");
const runSql = require("../sql/index");

app.on("ready", () => {
	const win = createWindow(config);
	if (config.env === "DEV") {
		win.loadURL(config.URI);
	} else {
		win.loadFile(config.URI);
	}
	if (config.env !== "PROD") {
		win.webContents.openDevTools();
	}
});
ipcMain.handle("sql", async (event, arg) => {
	//const runSql = await sql();
	const { table, fun, data } = arg;
	const res = await runSql[table][fun](data);

	return res;
});
