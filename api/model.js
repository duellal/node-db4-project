const db = require(`../data/db-config`)

async function find(){
    const recipes = await db(`recipes`).select(`*`)

    return recipes
}

async function getRecipeById(recipe_id){
    const recipes = await db(`recipe_steps as rs`)
        .leftJoin(`recipes as r`, `rs.recipe_id`, `r.recipe_id`)
        .leftJoin(`recipe_ingredients_per_step as rips`, `rs.step_id`, `rips.step_id`)
        .leftJoin(`ingredients as i`, `rips.ingredient_id`, `i.ingredient_id`)
        .select(
            `r.recipe_id`,
            `r.recipe_name`,
            `created_at`, 
            `rs.step_id`,
            `rs.step_number`,
            `rs.instruction`,
            `rips.ingredient_id`,
            `i.ingredient`,
            `quantity`)
        .where(`r.recipe_id`, recipe_id)
        .orderBy(`rs.recipe_id`, `rs.step_number`)

return recipes
}


module.exports = {
    getRecipeById,
    find,
 }