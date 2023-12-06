require("dotenv").config();
const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.db_host,
    port: 3306,
    user: process.env.db_user,
    password: process.env.db_psaaword,
    database: process.env.db_database,
  },
});

module.export = knex;
