const express = require('express')
const articleCtrl = require('../controller/article')
const auth = require('../middleware/auth')
const articleValidator = require('../validator/article')


const router = express.Router()

router.get('/', articleCtrl.getArticles)

router.post('/', auth, articleValidator.createArticle, articleCtrl.createArticle)

router.put('/:articleId', articleValidator.updateArticle, articleCtrl.updateArticle)

module.exports = router