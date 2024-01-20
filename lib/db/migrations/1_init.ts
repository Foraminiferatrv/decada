import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  //----Auth----
  // User
  await db.schema
    .createTable('User')
    .addColumn('id', 'uuid', (col) =>
      col
        .primaryKey()
        .defaultTo(sql`gen_random_uuid()`)
        .notNull(),
    )
    .addColumn('name', 'text')
    .addColumn('password', 'text', (col) => col.notNull())
    .addColumn('email', 'text', (col) => col.unique().notNull())
    .addColumn('emailVerified', 'timestamptz')
    .addColumn('image', 'text')
    .execute()

  //Account
  await db.schema
    .createTable('Account')
    .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('userId', 'uuid', (col) => col.references('User.id').onDelete('cascade').notNull())
    .addColumn('type', 'text', (col) => col.notNull())
    .addColumn('provider', 'text', (col) => col.notNull())
    .addColumn('providerAccountId', 'text', (col) => col.notNull())
    .addColumn('refresh_token', 'text')
    .addColumn('access_token', 'text')
    .addColumn('expires_at', 'bigint')
    .addColumn('token_type', 'text')
    .addColumn('scope', 'text')
    .addColumn('id_token', 'text')
    .addColumn('session_state', 'text')
    .execute()

  //Session
  await db.schema
    .createTable('Session')
    .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
    .addColumn('userId', 'uuid', (col) => col.references('User.id').onDelete('cascade').notNull())
    .addColumn('sessionToken', 'text', (col) => col.notNull().unique())
    .addColumn('expires', 'timestamptz', (col) => col.notNull())
    .execute()

  //VerificationToken
  await db.schema
    .createTable('VerificationToken')
    .addColumn('identifier', 'text', (col) => col.notNull())
    .addColumn('token', 'text', (col) => col.notNull().unique())
    .addColumn('expires', 'timestamptz', (col) => col.notNull())
    .execute()

  await db.schema.createIndex('Account_userId_index').on('Account').column('userId').execute()

  await db.schema.createIndex('Session_userId_index').on('Session').column('userId').execute()

  // Plans
  await db.schema
    .createTable('Plan')
    .addColumn('id', 'uuid', (col) =>
      col
        .primaryKey()
        .unique()
        .defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn('plan_name', 'varchar', (col) => col.notNull())
    .addColumn('is_complete', 'boolean', (col) => col.notNull().defaultTo(false))

    .addColumn('user_id', 'uuid', (col) =>
      col.references('User.id').onDelete('cascade').onUpdate('cascade').notNull(),
    )

    .addColumn('first_name', 'varchar', (col) => col.notNull())
    .addColumn('last_name', 'varchar')
    .addColumn('gender', 'varchar(50)', (col) => col.notNull())

    .addColumn('created_at', 'timestamptz', (col) => col.notNull())
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull())

    .execute()

  // Goals
  await db.schema
    .createTable('Goal')
    .addColumn('id', 'uuid', (col) =>
      col
        .primaryKey()
        .unique()
        .defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn('goal_name', 'varchar', (col) => col.notNull())
    .addColumn('is_complete', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('is_favorite', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('priority', 'integer')
    .addColumn('due_time', 'integer')

    .addColumn('plan_id', 'uuid', (col) =>
      col.references('Plan.id').onDelete('cascade').onUpdate('cascade').notNull(),
    )

    .addColumn('created_at', 'timestamptz', (col) => col.notNull())
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull())

    .execute()

  // Condition
  await db.schema
    .createTable('Condition')
    .addColumn('id', 'uuid', (col) =>
      col
        .primaryKey()
        .unique()
        .defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn('condition_name', 'varchar', (col) => col.notNull())
    .addColumn('is_complete', 'boolean', (col) => col.notNull().defaultTo(false))
    .addColumn('index', 'integer', (col) => col.notNull())

    .addColumn('goal_id', 'uuid', (col) =>
      col.references('Goal.id').onDelete('cascade').onUpdate('cascade').notNull(),
    )

    .addColumn('created_at', 'timestamptz', (col) => col.notNull())
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull())

    .execute()

  // Obstacle
  await db.schema
    .createTable('Obstacle')
    .addColumn('id', 'uuid', (col) =>
      col
        .primaryKey()
        .unique()
        .defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn('obstacle_name', 'varchar', (col) => col.notNull())
    .addColumn('index', 'integer', (col) => col.notNull())
    .addColumn('is_complete', 'boolean', (col) => col.notNull().defaultTo(false))

    .addColumn('goal_id', 'uuid', (col) =>
      col.references('Goal.id').onDelete('cascade').onUpdate('cascade').notNull(),
    )

    .addColumn('created_at', 'timestamptz', (col) => col.notNull())
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull())

    .execute()

  // Solution
  await db.schema
    .createTable('Solution')
    .addColumn('id', 'uuid', (col) =>
      col
        .primaryKey()
        .unique()
        .defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn('solution_name', 'varchar', (col) => col.notNull())
    .addColumn('index', 'integer', (col) => col.notNull())
    .addColumn('is_complete', 'boolean', (col) => col.notNull().defaultTo(false))

    .addColumn('goal_id', 'uuid', (col) =>
      col.references('Goal.id').onDelete('cascade').onUpdate('cascade').notNull(),
    )

    .addColumn('created_at', 'timestamptz', (col) => col.notNull())
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull())

    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('Account').ifExists().execute()
  await db.schema.dropTable('Session').ifExists().execute()
  await db.schema.dropTable('User').ifExists().execute()
  await db.schema.dropTable('VerificationToken').ifExists().execute()

  await db.schema.dropTable('plan').execute()
  await db.schema.dropTable('goal').execute()
  await db.schema.dropTable('condition').execute()
  await db.schema.dropTable('obstacle').execute()
  await db.schema.dropTable('solution').execute()
}
