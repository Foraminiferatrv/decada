import knex, { type Knex } from 'knex'
import knexfile from './knexfile'

declare global {
  var knex: Knex | undefined
}

export const db = globalThis.knex || knex(knexfile)
// if (!cached) cached = global.pg = {}

// export function getKnex<T>(): Knex {
//   if (!cached.instance) cached.instance = knex<T>(knexfile)
//   return cached.instance
// }

export function getKnex<T>(): Knex {
  const knexInstance = knex<any, T[]>(knexfile)
  return knexInstance
}

if (process.env.NODE_ENV !== 'production') globalThis.knex = db
