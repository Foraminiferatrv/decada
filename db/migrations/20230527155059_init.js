/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('user_id').unique().primary().notNullable()
    table.string('email').unique().notNullable()
    table.string('password').notNullable()
    table.string('username').notNullable()
    table.string('image').defaultTo('')
    table.timestamps(true, true)
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function down(knex) {
  return knex.schema.dropTable('users')
}
