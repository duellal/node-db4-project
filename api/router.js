const express = require(`express`)
const recipeHelper = require(`./model`)

const router = express.Router()

router.get(`/recipes/:id`, (req, res) => {
    recipeHelper.getRecipeById(req.params.id)
        .then(recipe => {
            res.status(201).json(recipe)
        })
        .catch(err => {
            res.status(404).json({message: `the recipe with id ${req.params.id} could not be found`})
        })
})