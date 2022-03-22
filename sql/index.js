const { app } = require("electron");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");
const config = require("../electron/config");

var db = new sqlite3.Database(
	path.join(app.getPath("appData"), `./wetalk/database-${config.env}.db`)
);

const users = require("./users")(db);

module.exports = {
	users,
};
