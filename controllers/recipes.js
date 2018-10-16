const Recipe = require('../models/recipe');

module.exports = {
	getRecipes: async (req, res, next) => {
		const recipes = await Recipe.find({});
		res.status(200).json(recipes);
	},
	addRecipe: async (req, res, next) => {
		const newRecipe = new Recipe(req.body);
		const recipe = await newRecipe.save();
		res.status(201).json(recipe);
	},
};