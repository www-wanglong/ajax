const mongoose = require('mongoose')
const baseModel = require('./base-model')
const Schema = mongoose.Schema

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  body: {
    type: String,
    require: true
  },
  tagList: {
    type: [String],
    default: null
  },
  favoritesCount: {
    type: Number,
    default: 0
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  ...baseModel,
})
module.exports = articleSchema