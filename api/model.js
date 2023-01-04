const db = require(`../data/db-config`)

async function findAll(){
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
            `i.ingredient`,
            `quantity`)
        .where(`r.recipe_id`, recipe_id)
        .orderBy(`rs.recipe_id`, `rs.step_number`)

    // const recipeById = await db(`recipes`)
    //     .select(
    //         `recipe_id`,
    //         `recipe_name`,
    //         `created_at`
    //     )
    //     .where(`recipe_id`, recipe_id)

    // let recipeStepsById = await db(`recipe_steps as rs`)
    //     .leftJoin(`recipe_ingredients_per_step as rips`, `rs.step_id`, `rips.step_id`)
    //     .leftJoin(`ingredients as i`, `rips.ingredient_id`, `i.ingredient_id`)
    //     .select(
    //         `rs.step_id`,
    //         `rs.step_number`,
    //         `rs.instruction`,
    //         `i.ingredient`,
    //         `quantity`)
    //     .where(`rs.recipe_id`, recipe_id)
    //     .orderBy(`rs.recipe_id`, `rs.step_number`)


        // recipeStepsById.reduce((acc, row) => {
        //     const index = acc.findIndex(step => step.step_id === row.step_id)

        //     if(index !== -1){
        //         const ingredients = Object.keys(row)[3]
        //         acc[index][ingredients].push(row.ingredient)
        //     }
        //     else{
        //         row.ingredient = row.ingredient ? [row.ingredient] : []
        //         acc.push(row)
        //     }

        //     return acc
        // }, [])


        // let steps = []

        // recipeStepsById.forEach((step, index) => {
        //     console.log(`STEP:`, step)
        //     console.log(`INDEX:`, index)
        //     if(index > 1){
        //         if(step.step_id !== recipeStepsById[index-1].step_id){
        //             steps.push(step)
        //         }
        //     }
        //     else {
        //         steps.push(step)
        //     }
        // })

        // const recipe = {
        //     recipe_id: recipeById[0].recipe_id,
        //     recipe_name: recipeById[0].recipe_name, 
        //     created_at: recipeById[0].created_at,
        //     steps: steps
        // }

        // console.log(`recipeById:`, recipeById)
        // console.log(`recipeStepsById:`, recipeStepsById)

    let steps = recipeById.reduce((acc, row) => {
        // console.log(acc)
        // console.log(`Reduce ROW:`, row)
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
            // console.log(`ACC:`, acc)
            // console.log(`------------------------------------`)
         acc.push({
                step_id: row.step_id,
                step_number: row.step_number,
                instruction: row.instruction,  
                ingredients: []
            })

            let index = acc.find(step => {
                return step.step_id === row.step_id
            })
    
            // console.log(`INDEX:`, index)
    
            index.ingredients.push({
                ingredient_name: row.ingredient,
                quantity: row.quantity
            })
        }

        

        return acc
    }, [])

    // console.log(`RECIPE STEPS:`, steps)

    // //Trying to get rid of the duplicate steps:

    // steps.forEach(step => {
    //     if(typeof step.ingredients === `undefined`){
    //         return step
    //     }
    //     else if (step.ingredients.length > 0){
    //         return step
    //     }
    // })

    // console.log(steps)

    const recipe = {
        recipe_id: recipeById[0].recipe_id,
        recipe_name: recipeById[0].recipe_name, 
        created_at: recipeById[0].created_at,
        steps: steps
    }


//    recipe = recipe[0].steps.map((step, index) => {
//         // console.log(`INDEX:`, index)
//         // console.log(`STEP:`, step)

//         if(index > 0){
//             if(step.step_id !== recipe[0].steps[index-1].step_id){
//                 recipe[0].steps[index-1].push(step)
//             }
//         }
//         else{
//             recipe[0].steps[index-1].push(step)
//         }
//     })

        // if(index > 0){
        //     if(step.step_id !== recipe[0].steps[index-1].step_id){
        //                  recipe[0].steps.push(step)
        //                 }
        //             }
        //      else {
        //         recipe[0].steps.push(step)
        //         }
        // })

return recipe
}


module.exports = {
    getRecipeById,
    findAll,
 }