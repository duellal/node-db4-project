exports.seed = function(knex) {
   return knex('recipes').insert([
    {recipe_name: `Chocolate Chip Cookies`},
    {recipe_name: `Baked Mac N Cheese`},
    {recipe_name: `Banana Pudding`}
  ]);
};
