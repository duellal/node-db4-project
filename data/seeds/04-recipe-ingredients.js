exports.seed = function(knex) {
   return knex('recipe_ingredients_per_step').insert([
    {ingredient_id: 1, step_id: 3, quantity: `1 cup`},
    {ingredient_id: 2, step_id: 3, quantity: `1 cup`},
    {ingredient_id: 3, step_id: 3, quantity: `1 cup` },
    {ingredient_id: 4, step_id: 4, quantity: `2` },
    {ingredient_id: 5, step_id: 4, quantity: `2 tsp` },
    {ingredient_id: 6, step_id: 2, quantity: `3 cups` },
    {ingredient_id: 7, step_id: 2, quantity: `1 tsp` },
    {ingredient_id: 8, step_id: 2, quantity: `1/2 tsp` },
    {ingredient_id: 9, step_id: 2, quantity: `1 tsp` },
    {ingredient_id: 10, step_id: 5, quantity: `2 cups` },

    {ingredient_id: 1, step_id: 14, quantity: `1/2 cup` },
    {ingredient_id: 6, step_id: 13, quantity: `1/2 cup` },
    {ingredient_id: 9, step_id: 10, quantity: `1/2 tsp` },
    {ingredient_id: 11, step_id: 11, quantity: `1 lb dried` },
    {ingredient_id: 12, step_id: 13, quantity: `1 1/2 cups` },
    {ingredient_id: 13, step_id: 13, quantity: `2 1/2 cups` },
    {ingredient_id: 14, step_id: 12, quantity: `4 cups shredded` },
    {ingredient_id: 15, step_id: 12, quantity: `2 cups shredded` },

    {ingredient_id: 5, step_id: 19, quantity: `1 tsp` },
    {ingredient_id: 12, step_id: 18, quantity: `2 cups` },
    {ingredient_id: 18, step_id: 18, quantity: `2 3.4 oz packages` },
    {ingredient_id: 20, step_id: 19, quantity: `2 cups` },
    {ingredient_id: 21, step_id: 21, quantity: `11oz` },
    {ingredient_id: 21, step_id: 22, quantity: `11oz` },
    {ingredient_id: 19, step_id: 18, quantity: `14oz` },
    {ingredient_id: 22, step_id: 21, quantity: `4` },
    {ingredient_id: 22, step_id: 22, quantity: `4` },
    {ingredient_id: 23, step_id: 20, quantity: `3 tbsp` }
  ]);
};
