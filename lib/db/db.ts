import { DB } from '@/schemas/db.schema'
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

import { loadEnvConfig } from '@next/env'

declare global {
  var kysely: Kysely<DB> | undefined
}

const dev = process.env.NODE_ENV !== 'production'
const { DB_ID, DB_USER, DB_PORT, DB_PASSWORD, DB_HOST } = loadEnvConfig('../', dev).combinedEnv

const dialect = new PostgresDialect({
  pool: new Pool({
    database: DB_ID,
    user: DB_USER,
    password: DB_PASSWORD,
    host: DB_HOST,
    port: DB_PORT as number | undefined,
    max: 10,
  }),
})

export const db =
  globalThis.kysely ||
  new Kysely<DB>({
    dialect,
  })

if (process.env.NODE_ENV !== 'production') globalThis.kysely = db

// import knex, { type Knex } from 'knex'
// import knexfile from './knexfile'

// export const db = globalThis.knex || knex(knexfile)
// // if (!cached) cached = global.pg = {}

// // export function getKnex<T>(): Knex {
// //   if (!cached.instance) cached.instance = knex<T>(knexfile)
// //   return cached.instance
// // }

// if (process.env.NODE_ENV !== 'production') globalThis.knex = db
