// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/pubquiz.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    useNullAsDefault: true,
    migrations: {
      directory: __dirname + '/data/migrations'
    },
    seeds: {
      directory: __dirname + '/data/seeds'
    }
  }
};
