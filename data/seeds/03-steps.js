exports.seed = function(knex) {
   return knex('recipe_steps').insert([
    {recipe_id: `1`, step_number: 1, instruction: `Preheat oven to 375 degrees F. Line a baking pan with parchment paper and set aside.`},
    {recipe_id: `1`, step_number: 2, instruction: `In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.`},
    {recipe_id: `1`, step_number: 3, instruction: `Cream together butter and sugars until combined.`},
    {recipe_id: `1`, step_number: 4, instruction: `Beat eggs and vanilla until fluffy.`},
    {recipe_id: `1`, step_number: 6, instruction: `Add 12oz package of chocolate chips and mix well.`},
    {recipe_id: `1`, step_number: 5, instruction: `Mix in the dry ingredients until combined.`},
    {recipe_id: `1`, step_number: 7, instruction: `Roll 2-3 TBS (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. (alternately, use a small cookie scoop to make your cookies).`},
    {recipe_id: `1`, step_number: 8, instruction: `Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just BARELY starting to turn brown.`},
    {recipe_id: `1`, step_number: 9, instruction: `Let them sit on the baking pan for 2 minutes before removing to cooling rack.`},
   
    {recipe_id: `2`, step_number: 1, instruction: `Preheat oven to 325 degrees F and grease a 3 qt baking dish (9x13").  Set aside.`},
    {recipe_id: `2`, step_number: 2, instruction: `Bring a large pot of salted water to a boil.  When boiling, add dried pasta and cook 1 minute less than the package directs for al dente.  Drain and drizzle with a little bit of olive oil to keep from sticking.`},
    {recipe_id: `2`, step_number: 3, instruction: `While water is coming up to a boil, shred cheeses and toss together to mix, then divide into three piles.  Approximately 3 cups for the sauce, 1 1/2 cups for the inner layer, and 1 1/2 cups for the topping.`},
    {recipe_id: `2`, step_number: 4, instruction: `Melt butter in a large saucepan over MED heat.  Sprinkle in flour and whisk to combine.  Mixture will look like very wet sand.  Cook for approximately 1 minute, whisking often.  Slowly pour in about 2 cups or so of the milk/half and half, while whisking constantly, until smooth.  Slowly pour in the remaining milk/half and half, while whisking constantly, until combined and smooth.`},
    {recipe_id: `2`, step_number: 5, instruction: `Continue to heat over MED heat, whisking very often, until thickened to a very thick consistency.  It should almost be the consistency of a semi thinned out condensed soup.`},
    {recipe_id: `2`, step_number: 6, instruction: `Remove from the heat and stir in spices and 1 1/2 cups of the cheeses, stirring to melt and combine.  Stir in another 1 1/2 cups of cheese, and stir until completely melted and smooth.`},
    {recipe_id: `2`, step_number: 7, instruction: `In a large mixing bowl, combine drained pasta with cheese sauce, stirring to combine fully.  Pour half of the pasta mixture into the prepared baking dish.  Top with 1 1/2 cups of shredded cheeses, then top that with the remaining pasta mixture.`},
    {recipe_id: `2`, step_number: 8, instruction: `Sprinkle the top with the last 1 1/2 cups of cheese and bake for 15 minutes, until cheesy is bubbly and lightly golden brown.  `},
 
    {recipe_id: `3`, step_number: 1, instruction: `In a large bowl, beat the cold milk with vanilla extract and vanilla pudding until it thickens. Pour in the condensed milk and beat to combine.`},
    {recipe_id: `3`, step_number: 2, instruction: `In a separate bowl, beat the heavy whipping cream until stiff peaks form. Add about two-thirds of the whipped cream into the pudding and gently fold in with a spatula.`},
    {recipe_id: `3`, step_number: 3, instruction: `Add the powdered sugar into the remaining one-third whipped cream and fold with a spatula to combine. Refrigerate until needed.`},
    {recipe_id: `3`, step_number: 4, instruction: `Add about 1/4th of the vanilla wafers into the bottom of your trifle bowl and about 1/4th of the bananas.`},
    {recipe_id: `3`, step_number: 5, instruction: `Spread 1/4 of the pudding over the bananas/wafers. Repeat with remaining layers until you have four layers.`},
    {recipe_id: `3`, step_number: 6, instruction: `Add the reserved whipped cream over top of pudding and decorate as desired. Cover and refrigerate 2 hours before serving.`}
  ]);
};
