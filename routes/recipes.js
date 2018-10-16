const express = require('express');
const router = require('express-promise-router')();
const RecipesController = require('../controllers/recipes');

router.route('/')
	.get(RecipesController.getRecipes)
	.post(RecipesController.addRecipe);

module.exports = router;