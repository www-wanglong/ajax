const { Article, User } = require('../model')

exports.showIndex = async (req, res, next) => {
  try {
    const articles = await Article.find()
    res.render('index', {
      articles
    })
  } catch (err) {
    next(err)
  }
}

exports.showEditor = async (req, res, next) => {
  try {
    res.render('editArticle')
  } catch (err) {
    next(err)
  }
}

exports.showArticle = async (req, res, next) => {
  try {
    res.render('article')
  } catch (err) {
    next(err)
  }
}