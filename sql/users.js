module.exports = function (db) {
  const createTable = () => {
    db.serialize(() => {
      db.run(`CREATE TABLE IF NOT EXISTS Users( 
                  serverID       TEXT NOT NULL, 
                  isActive       BOOLEAN,
                  nickname       TEXT,
                  firstName      TEXT,
                  lastName       TEXT,
                  avatarUrl      TEXT,
                  personalSign   TEXT,
                  gender         INT,
                  birthday       INT,
                  area           TEXT,
                  selectedAreaCodes   TEXT,
                  phone    TEXT,
                  preferLanguage   INT,
                  lastLoginDate   INT,
                  canUpdateUserId   BOOLEAN,
                  updateTime  TEXT)`);
    });
  };
  createTable();

  const insert = function (data) {
    db.serialize(() => {
      db.run("BEGIN");
      let stmt = db.prepare(
        `insert into Users values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
      );

      for (let i = 0; i < 10000; i++) {
        stmt.run(`'as_${Math.random()}'${data}`);
      }
      stmt.finalize();
      db.run(`COMMIT;`);
    });
  };

  const select = () => {
    return new Promise((resolve, reject) => {
      //
      db.serialize(() => {
        db.all(
          `select * from Users order by serverID desc limit 10`,
          (err, res) => {
            if (err !== null) {
              reject(err);
            }
            resolve(res);
          }
        );
      });
    });
  };
  return {
    insert,
    select,
  };
};
