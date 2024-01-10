import knex from 'knex'
import knexfile from './knexfile'

/**
 * Global is used here to ensure the connection
 * is cached across hot-reloads in development
 *
 * see https://github.com/vercel/next.js/discussions/12229#discussioncomment-83372
 */
let cached = global.pg
if (!cached) cached = global.pg = {}

export function getKnex() {
  if (!cached.instance) cached.instance = knex(knexfile)
  return cached.instance
}
