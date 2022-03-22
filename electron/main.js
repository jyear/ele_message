const { app, ipcMain } = require("electron");
const { createWindow } = require("./util");

const config = require("./config");
const sql = require("../sql/index");

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
	const { table, fun, data } = arg;
	const res = await sql[table][fun](data);
	return res;
});
