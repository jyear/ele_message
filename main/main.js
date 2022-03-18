const { app, ipcMain } = require("electron");
const { createWindow } = require("./util");
const path = require("path");
const resources = path.resolve(__dirname, "../resources");
const sql = require("../sql/index");

// sql.users.insert();
app.on("ready", () => {
  const win = createWindow();
  win.loadFile(path.resolve(resources, "./index.html"));
  win.webContents.openDevTools();
});

ipcMain.handle("sql", async (event, arg) => {
  const { table, fun, data } = arg;
  const res = await sql[table][fun](data);
  return res;
});
