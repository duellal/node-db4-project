const express = require(`express`)
const Recipes = require(`./model`)

const router = express.Router()

router.get(`/recipes`, (req, res) => {
    Recipes.findAll()
        .then(recipe => {
            res.json(recipe)
        })
        .catch(err => console.log(err))
})

router.get(`/recipes/:id`, (req, res) => {
    Recipes.getRecipeById(req.params.id)
        .then(recipe => {
            res.status(201).json(recipe)
        })
        .catch(() => {
            res.status(404).json({message: `the recipe with id ${req.params.id} could not be found`})
        })
})

module.exports = router