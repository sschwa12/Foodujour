exports.up = function(knex, Promise) {
  return knex.schema.createTable('meals', function (meal) {
    meal.increments('id').primary();
    meal.string('user_id', 255);
    meal.integer('date');
    meal.string('name', 255);
    meal.string('location', 255);
    meal.integer('rating');
    meal.string('notes', 255);
    meal.string('image', 255);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('meals');
};

