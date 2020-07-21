const config = {
  development: {
    DB_FILE: "./resource/db.sqlite3",
  },
  production: {
    DB_FILE: "./resource/db.sqlite3",
  },
};

module.exports = config[process.env.NODE_ENV || "development"];
