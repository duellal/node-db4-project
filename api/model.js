const db = require(`../data/db-config`)

async function findAll(){
    const recipes = await db(`recipes`).select(`*`)
    return recipes
}

async function getRecipeById(recipe_id){
    //Getting the information needed from the database
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
            `i.ingredient`,
            `quantity`)
        .where(`r.recipe_id`, recipe_id)
        .orderBy(`rs.step_number`)

    //Making the steps:
    let steps = recipeById.reduce((acc, row) => {
        // step/instruction w/o ingredients
        if(!row.ingredient){
             acc.push({
                step_id: row.step_id, 
                step_number: row.step_number, 
                instruction: row.instruction
            })
        }

        // step with ingredient 
        else if(row.ingredient){
         acc.push({
                step_id: row.step_id,
                step_number: row.step_number,
                instruction: row.instruction,  
                ingredients: []
            })

            //Pushing all ingredients for a particular step to that step:
            let index = acc.find(step => {
                return step.step_id === row.step_id
            })
    
            index.ingredients.push({
                ingredient_name: row.ingredient,
                quantity: row.quantity
            })
        }

        return acc
    }, [])


    // Getting rid of the duplicate steps:
    let allSteps = []

    steps.forEach(step => {
        if(typeof step.ingredients === `undefined` || step.ingredients.length > 0){
            return allSteps.push(step)
        }
        else if(step.ingredients === 0){
            return step.delete()
        }
    })

    const recipe = {
        recipe_id: recipeById[0].recipe_id,
        recipe_name: recipeById[0].recipe_name, 
        created_at: recipeById[0].created_at,
        steps: allSteps
    }

return recipe
}


module.exports = {
    getRecipeById,
    findAll,
 }