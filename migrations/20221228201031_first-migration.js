/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
    await knex.schema
      .createTable(`recipes`, table => {
          table.increments(`recipe_id`)
          table.string(`recipe_name`)
              .notNullable()
              .unique()
      })
      .createTable(`ingredients`, table => {
          table.increments(`ingredient_id`)
          table.string(`ingredient`)
              .notNullable()
              .unique()
      })
      .createTable(`recipe_steps`, table => {
          table.increments(`step_id`)
          table.string(`recipe_id`)
              .unsigned()
              .notNullable()
              .references(`recipe_id`)
              .inTable(`recipes`)
              .onDelete(`RESTRICT`)
              .onUpdate(`RESTRICT`)
          table.string(`instruction`)
              .notNullable()
      })
      .createTable(`recipe_ingredients_per_step`, table => {
          table.increments(`rec_ing_per_step_id`)
          table.string(`recipe_id`)
              .unsigned()
              .notNullable()
              .references(`recipe_id`)
              .inTable(`recipes`)
              .onDelete(`RESTRICT`)
              .onUpdate(`RESTRICT`)
          table.string(`step_id`)
              .unsigned()
              .notNullable()
              .references(`step_id`)
              .inTable(`recipe_steps`)
              .onDelete(`RESTRICT`)
              .onUpdate(`RESTRICT`)
          table.string(`ingredient_id`)
              .unsigned()
              .notNullable()
              .references(`ingredient_id`)
              .inTable(`ingredients`)
              .onDelete(`RESTRICT`)
              .onUpdate(`RESTRICT`)
          table.integer(`quantity`)
              .notNullable()
      })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = async function(knex) {
    await knex.schema
    .dropTableIfExists('recipe_ingredients_per_step')
    .dropTableIfExists(`recipe_steps`)
    .dropTableIfExists(`ingredients`)
    .dropTableIfExists(`recipes`)
  };
  