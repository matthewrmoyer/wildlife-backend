exports.up = function(knex, Promise) {
  return knex.schema.createTable('post', table => {
    table.increments()
    table.string("user_email").defaultTo('Anonymous').notNullable()
    table.string("user_name").defaultTo('Anonymous').notNullable()
    table.decimal("latitude")
    table.decimal("longitude")
    table.string("specie").defaultTo('Unknown').notNullable()
    table.text("description")
    table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
    table.text("image_url")
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('post')
}