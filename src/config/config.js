const config = {
  development: {
    DB_FILE: "./src/resource/db.sqlite3",
  },
  production: {
    DB_FILE: "./src/resource/db.sqlite3",
  },
};

module.exports = config[process.env.NODE_ENV || "development"];
