exports.seed = function(knex) {
  return knex('post').del()
    .then(function() {
      return knex('post').insert([{
        user_email: 'test@gmail.com',
        user_name: 'Joe',
        latitude: '40.411',
        longitude: '105.61',
        specie: 'Moose',
        description: 'I saw a moose at the beginning of the trailhead. There was also a baby moose here!',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Moose_superior.jpg/1200px-Moose_superior.jpg'
      }, {
        user_email: 'test2@gmail.com',
        user_name: 'Steve',
        latitude: '39.661',
        longitude: '105.68',
        specie: 'Elk',
        description: 'I saw a herd of elk in the meadow here.',
        image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Rocky_Mountain_Bull_Elk.jpg/220px-Rocky_Mountain_Bull_Elk.jpg'
      }
      ])
    })
}



    // table.increments()
    // table.string("user_email").defaultTo('Anonymous').notNullable()
    // table.string("user_name").defaultTo('Anonymous').notNullable()
    // table.decimal("latitude")
    // table.decimal("longitude")
    // table.string("specie").defaultTo('Unknown').notNullable()
    // table.text("description")
    // table.dateTime("created_at").notNullable().defaultTo(knex.fn.now())
    // table.text("image_url")