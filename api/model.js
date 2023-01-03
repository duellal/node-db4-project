const db = require(`../data/db-config`)

async function find(){
    const recipes = await db(`recipes`).select(`*`)

    return recipes
}

async function getRecipeById(recipe_id){
    const recipeById = await db(`recipe_steps as rs`)
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


    const recipe = recipeById.reduce((acc, row) => {
        // step/instruction w/o ingredients
        if(!row.ingredient_id){
             acc.steps.push({
                step_id: row.step_id, 
                step_number: row.step_number, 
                instruction: row.instruction
            })
        }

        // step with ingredient 
        else if(row.ingredient_id){
         acc.steps.push({
                step_id: row.step_id,
                step_number: row.step_number,
                instruction: row.instruction,  
                ingredients: [{
                    ingredient_id: row.ingredient_id,
                    ingredient_name: row.ingredient,
                    quantity: row.quantity
                }]
            })
        }

        //can't figure out how to combine ingredients within the same step

        return acc
    }, { recipe_id: recipeById[0].recipe_id,
        recipe_name: recipeById[0].recipe_name,
        steps: []
    })
    

return recipe
}


module.exports = {
    getRecipeById,
    find,
 }