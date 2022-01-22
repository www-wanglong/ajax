const { Article, User } = require('../model')

exports.getArticles = async (req, res, next) => {
  try {
    const {
      limit = 20,
      offset = 0,
      tag,
      author
    } = req.query

    const filter = {}

    if (tag) {
      filter.tagList = tag
    }

    if (author) {
      const user = User.findOne({ username: author })
      filter.author = user ? user._id : null
    }

    const articlesCount = await Article.countDocuments()
    const articles = await Article.find(filter)
      .skip(Number.parseInt(offset))
      .limit(Number.parseInt(limit))
      .sort({
        createdAt: -1
      })

    res.status(200).json({
      articles,
      articlesCount
    })
  } catch (error) {
    next(err)
  }
}

exports.createArticle = async (req, res, next) => {
  try {
    const article = new Article(req.body.article)

    article.author = req.user._id

    article.populate('author')

    await article.save()
    res.status(201).json({
      article
    })
  } catch (err) {
    next(err)
  }
}

exports.updateArticle = async (req, res, next) => {
  try {
    const article = req.article
    const bodyArticle = req.body.article
    // TODO
    res.end('updateArticle')
  } catch (err) {
    next(err)
  }
}