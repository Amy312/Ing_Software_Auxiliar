require("dotenv").config();
const pgConfig = {
  development: {
    client: "pg",
    connection: {
      //TODO: jalar desde local ENV postgres://amyroot:nW6y8S51OZjlrkUdxERIgABjoJWVuDBU@dpg-cjeft00cfp5c73dm12d0-a.oregon-postgres.render.com/auxiliar
      host: "dpg-cjefsv6e546c739qq6ng-a.oregon-postgres.render.com",
      user: "paul",
      password: "5JbepXDGfTd4vQQrToACmmzYIoIA5Fh3",
      database: "auxiliatron_csle",
      ssl: { rejectUnauthorized: true },
    },
    migrations: {
      directory: '../db/migrations'
    },
  },
};

module.exports = pgConfig;
