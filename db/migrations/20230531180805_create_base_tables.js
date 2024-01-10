/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

exports.up = function (knex) {
  return knex.schema
    .createTable('plans', (table) => {
      table.uuid('plan_id').unique().primary().notNullable()
      table.string('plan_name').notNullable()
      table.boolean('is_complete').notNullable().defaultTo(false)

      table.uuid('user_id').unsigned()
      table.foreign('user_id').references('users.user_id').onDelete('CASCADE').onUpdate('CASCADE')

      table.timestamps(true, true)
    })

    .createTable('goals', (table) => {
      table.uuid('goal_id').unique().primary().notNullable()
      table.string('goal_name').notNullable()
      table.boolean('is_favorite').notNullable().defaultTo(false)
      table.boolean('is_complete').notNullable().defaultTo(false)
      table.integer('priority')
      table.integer('due_time').comment('Time for completion the task in hours (24h = 1day).')

      table.uuid('plan_id').unsigned()
      table.foreign('plan_id').references('plans.plan_id').onDelete('CASCADE').onUpdate('CASCADE')

      table.timestamps(true, true)
    })

    .createTable('conditions', (table) => {
      table.uuid('condition_id').unique().primary().notNullable()
      table.string('condition_name').notNullable()
      table.boolean('is_complete').notNullable().defaultTo(false)
      table.integer('index').notNullable()

      table.uuid('goal_id').unsigned()
      table.foreign('goal_id').references('goals.goal_id').onDelete('CASCADE').onUpdate('CASCADE')

      table.timestamps(true, true)
    })

    .createTable('obstacles', (table) => {
      table.uuid('obstacle_id').unique().primary().notNullable()
      table.string('obstacle_name').notNullable()
      table.integer('index').notNullable()
      table.boolean('is_complete').notNullable().defaultTo(false)

      table.uuid('goal_id').unsigned()
      table.foreign('goal_id').references('goals.goal_id').onDelete('CASCADE').onUpdate('CASCADE')

      table.timestamps(true, true)
    })

    .createTable('solutions', (table) => {
      table.uuid('solution_id').unique().primary().notNullable()
      table.string('solution_name').notNullable()
      table.integer('index').notNullable()
      table.boolean('is_complete').notNullable().defaultTo(false)

      table.uuid('goal_id').unsigned()
      table.foreign('goal_id').references('goals.goal_id').onDelete('CASCADE').onUpdate('CASCADE')

      table.timestamps(true, true)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTable('plans')
    .dropTable('goals')
    .dropTable('conditions')
    .dropTable('obstacles')
    .dropTable('solutions')
}
