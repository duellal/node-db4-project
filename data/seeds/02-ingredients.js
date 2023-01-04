exports.seed = function(knex) {
   return knex('ingredients').insert([
    {ingredient: `butter`},
    {ingredient: `white granulated sugar`},
    {ingredient: `brown sugar`},
    {ingredient: `eggs`},
    {ingredient: `vanilla extract`},
    {ingredient: `flour`},
    {ingredient: `baking soda`},
    {ingredient: `baking powder`},
    {ingredient: `salt`},
    {ingredient: `chocolate chips`},
    {ingredient: `shell pasta`},
    {ingredient: `milk`},
    {ingredient: `half and half`},
    {ingredient: `cheddar cheese`},
    {ingredient: `gruyere`},
    {ingredient: `black pepper`},
    {ingredient: `paprika`},
    {ingredient: `instant vanilla pudding`},
    {ingredient: `sweetened condensed milk`},
    {ingredient: `heavy whipping cream`},
    {ingredient: `vanilla wafers`},
    {ingredient: `bananas`},
    {ingredient: `powdered sugar`}
  ]);
};
