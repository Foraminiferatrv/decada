import * as path from 'path'
import 'dotenv/config'
import { Pool } from 'pg'
import { promises as fs } from 'fs'
import { Kysely, Migrator, PostgresDialect, FileMigrationProvider } from 'kysely'
import { DB } from '@/schemas/db.schema'

const dev = process.env.NODE_ENV !== 'production'

const dialect = new PostgresDialect({
  pool: new Pool({
    database: process.env.DB_ID,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as number | undefined,
    max: 10,
  }),
})

async function migrateToLatest() {
  const db = new Kysely<DB>({
    dialect,
  })

  const migrator = new Migrator({
    db,
    provider: new FileMigrationProvider({
      fs,
      path,
      // This needs to be an absolute path.
      migrationFolder: path.join(__dirname, './migrations'),
    }),
  })

  const { error, results } = await migrator.migrateToLatest()

  results?.forEach((it) => {
    if (it.status === 'Success') {
      console.log(`migration "${it.migrationName}" was executed successfully`)
    } else if (it.status === 'Error') {
      console.error(`failed to execute migration "${it.migrationName}"`)
    }
  })

  if (error) {
    console.error('failed to migrate')
    console.error(error)
    process.exit(1)
  }

  await db.destroy()
}

migrateToLatest()
