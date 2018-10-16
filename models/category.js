const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  title: {
    fr: { type: String },
    en: { type: String },
  },
  description: {
    fr: { type: String },
    en: { type: String },
  }
});

const Category = module.exports = mongoose.model('category', CategorySchema);