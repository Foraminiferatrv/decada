require('ts-node/register')

import { loadEnvConfig } from '@next/env'

const dev = process.env.NODE_ENV !== 'production'
const { DB_ID, DB_USER, DB_PORT, DB_PASSWORD, DB_HOST } = loadEnvConfig('../', dev).combinedEnv

// module.exports = {
const config = {
  client: 'pg',
  connection: {
    database: DB_ID,
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT as number | undefined,
    // ssl: { rejectUnauthorized: false },
  },
  pool: {
    min: 0,
    max: 7,
  },
  migrations: {
    directory: 'migrations',
    tableName: 'knex_migrations',
  },
  dev: {
    client: 'pg',
    connection: {
      database: process.env.DB_ID,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      // ssl: { rejectUnauthorized: false },
    },
    pool: {
      min: 0,
      max: 7,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  staging: {
    client: 'pg',
    connection: {
      database: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 0,
      max: 7,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },

  production: {
    client: 'pg',
    connection: {
      database: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    pool: {
      min: 0,
      max: 7,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
}

export default config
