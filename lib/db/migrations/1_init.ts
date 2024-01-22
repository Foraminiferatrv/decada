import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  //----Auth----
  // User
  await db.schema
    .createTable('user')
    .addColumn('id', 'text', (col) =>
      col
        .primaryKey()
        // .defaultTo(sql`gen_random_uuid()`)
        .notNull(),
    )
    .addColumn('username', 'text', (col) => col.unique().notNull())
    // .addColumn('password', 'text')
    .addColumn('email', 'text', (col) => col.unique().notNull())
    .addColumn('email_verified', 'timestamptz')
    .addColumn('image', 'text')
    .addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .execute()

  // //Account
  // await db.schema
  //   .createTable('account')
  //   .addColumn('id', 'uuid', (col) => col.primaryKey().defaultTo(sql`gen_random_uuid()`))
  //   .addColumn('userId', 'uuid', (col) => col.references('user.id').onDelete('cascade').notNull())
  //   .addColumn('type', 'text', (col) => col.notNull())
  //   .addColumn('provider', 'text', (col) => col.notNull())
  //   .addColumn('providerAccountId', 'text', (col) => col.notNull())
  //   .addColumn('refresh_token', 'text')
  //   .addColumn('access_token', 'text')
  //   .addColumn('expires_at', 'bigint')
  //   .addColumn('token_type', 'text')
  //   .addColumn('scope', 'text')
  //   .addColumn('id_token', 'text')
  //   .addColumn('session_state', 'text')
  //   .execute()

  //Session
  await db.schema
    .createTable('session')
    .addColumn('id', 'text', (col) => col.primaryKey().notNull())
    .addColumn('user_id', 'text', (col) => col.references('user.id').onDelete('cascade').notNull())
    // .addColumn('sessionToken', 'text', (col) => col.notNull().unique())
    .addColumn('active_expires', 'int8', (col) => col.notNull())
    .addColumn('idle_expires', 'int8', (col) => col.notNull())
    .addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .execute()

  //Key
  await db.schema
    .createTable('key')
    .addColumn('id', 'text', (col) => col.primaryKey())
    .addColumn('user_id', 'text', (col) => col.references('user.id').onDelete('cascade').notNull())
    .addColumn('hashed_password', 'text')
    .addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .execute()

  //VerificationToken
  await db.schema
    .createTable('verification_token')
    .addColumn('identifier', 'text', (col) => col.notNull())
    .addColumn('token', 'text', (col) => col.notNull().unique())
    .addColumn('expires', 'timestamptz', (col) => col.notNull())
    .addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .execute()

  // await db.schema.createIndex('Account_userId_index').on('Account').column('userId').execute()

  // await db.schema.createIndex('Session_userId_index').on('Session').column('userId').execute()

  // Plans
  await db.schema
    .createTable('plan')
    .addColumn('id', 'uuid', (col) =>
      col
        .primaryKey()
        .unique()
        .defaultTo(sql`gen_random_uuid()`),
    )
    .addColumn('plan_name', 'varchar', (col) => col.notNull())
    .addColumn('is_complete', 'boolean', (col) => col.notNull().defaultTo(false))

    .addColumn('user_id', 'text', (col) =>
      col.references('user.id').onDelete('cascade').onUpdate('cascade').notNull(),
    )

    .addColumn('first_name', 'varchar', (col) => col.notNull())
    .addColumn('last_name', 'varchar')
    .addColumn('gender', 'varchar(50)', (col) => col.notNull())

    .addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))

    .execute()

  // Goals
  await db.schema
    .createTable('goal')
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
      col.references('plan.id').onDelete('cascade').onUpdate('cascade').notNull(),
    )

    .addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))

    .execute()

  // Condition
  await db.schema
    .createTable('condition')
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
      col.references('goal.id').onDelete('cascade').onUpdate('cascade').notNull(),
    )

    .addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))

    .execute()

  // Obstacle
  await db.schema
    .createTable('obstacle')
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
      col.references('goal.id').onDelete('cascade').onUpdate('cascade').notNull(),
    )

    .addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))

    .execute()

  // Solution
  await db.schema
    .createTable('solution')
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
      col.references('goal.id').onDelete('cascade').onUpdate('cascade').notNull(),
    )

    .addColumn('created_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))
    .addColumn('updated_at', 'timestamptz', (col) => col.notNull().defaultTo(sql`NOW()`))

    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('account').ifExists().execute()
  await db.schema.dropTable('session').ifExists().execute()
  await db.schema.dropTable('user').ifExists().execute()
  await db.schema.dropTable('verificationToken').ifExists().execute()

  await db.schema.dropTable('plan').execute()
  await db.schema.dropTable('goal').execute()
  await db.schema.dropTable('condition').execute()
  await db.schema.dropTable('obstacle').execute()
  await db.schema.dropTable('solution').execute()
}
