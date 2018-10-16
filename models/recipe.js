const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: {
    fr: { type: String },
    en: { type: String },
  },
  description: {
    fr: { type: String },
    en: { type: String },
  },
  imageUrl: {
    type: String
  },
  country: {
    cca3: {
      type: String,
      max: 3
    }
  },
  difficulty: {
    type: Number
  },
  cost: {
    type: Number
  },
  prepTime: {
    hour: { type: Number },
    minute: { type: Number}
  },
  cookingTime: {
    hour: { type: Number },
    minute: { type: Number}
  },
  waitingTime: {
    hour: { type: Number },
    minute: { type: Number}
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  isValid: {
    type: Boolean,
    default: false
  }
});

const Recipe = module.exports = mongoose.model('recipe', RecipeSchema);