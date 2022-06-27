require('dotenv').config();

module.exports = {
  development: {
    url: process.env.DEV_DATABASE_URL,
    dialect: process.env.DIALECT || 'postgres',
  },
  test: {
    dialect: 'sqlite',
    username: process.env.TESTDUN,
    password: process.env.TESTDPW,
    database: process.env.TESTDDB,
    host: process.env.TESTHOST,
    storage: "test.sqlite",
    logging: false,
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: process.env.DIALECT || 'postgres',
  },
};
