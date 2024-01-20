import { DB as Database} from '@/schemas/db.schema'
import { Pool } from 'pg'
import { Kysely, PostgresDialect } from 'kysely'

import { loadEnvConfig } from '@next/env'
import { KyselyAuth } from '@auth/kysely-adapter'

declare global {
  var kysely: Kysely<Database> | undefined
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
  new KyselyAuth<Database, Database>({
    dialect,
  })

if (process.env.NODE_ENV !== 'production') globalThis.kysely = db
