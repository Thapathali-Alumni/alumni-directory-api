const config = {
  development: {
    DB_FILE: "./src/resource/db.sqlite3",
    jwtSecret: "Apple ball cat"
  },
  production: {
    DB_FILE: "./src/resource/db.sqlite3",
    jwtSecret: "Apple ball cat"
  }
};

module.exports = config[process.env.NODE_ENV || "development"];