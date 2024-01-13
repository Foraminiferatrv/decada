import knex, { type Knex } from 'knex'
import knexfile from './knexfile'

/**
 * Global is used here to ensure the connection
 * is cached across hot-reloads in development
 *
 * see https://github.com/vercel/next.js/discussions/12229#discussioncomment-83372
 */
// let cached = global.pg
// if (!cached) cached = global.pg = {}

// export function getKnex<T>(): Knex {
//   if (!cached.instance) cached.instance = knex<T>(knexfile)
//   return cached.instance
// }

export function getKnex<T>(): Knex {
  const knexInstance = knex<any, T[]>(knexfile)
  return knexInstance
}
