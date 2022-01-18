// 路由模块
const express = require('express')
const fs = require('fs')
const { getDb, saveDb } = require('./db')

// 配置路由
const router = express.Router()

router.get('', async (req, res, next) => {
  try {
    const db = await getDb()
    res.status(200).json(db.todos)
  } catch (err) {
    next(err)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const db = await getDb()
    const todo = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))
    if (!todo) {
      return res.status(404).end()
    }

    res.status(200).json(todo)
  } catch (err) {
    next(err)
  }
})

router.post('', async (req, res, next) => {
  try {
    const todo = req.body
    if (!todo.title) {
      return res.status(422).json({
        error: 'The field title is required'
      })
    }

    const db = await getDb()

    const lastTodo = db.todos[db.todos.length - 1]
    todo.id = lastTodo ? lastTodo.id + 1 : 1,
    db.todos.push(todo)

    await saveDb(db)

    res.status(201).json(todo)
  } catch(err) {
    next(err)
  }
})

router.patch('/:id', async (req, res, next) => {
  try {
    const todo = req.body
    const db = await getDb()
    const ret = db.todos.find(todo => todo.id === Number.parseInt(req.params.id))
    if (!ret) {
      return res.status(404).end()
    }

    Object.assign(ret, todo)

    await saveDb(db)
    res.status(200).json(ret)

  } catch (err) {
    next(err)
  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const todoId = Number.parseInt(req.params.id)
    const db = await getDb()
    const todoIndex = db.todos.findIndex(todo => todo.id === todoId)
    console.log(todoIndex)
    if (todoIndex === -1) {
      return res.status(404).end()
    }
    db.todos.splice(todoIndex, 1)
    await saveDb(db)
    res.status(204).end()

  } catch (err) {
    next(err)
  }
})



module.exports = router

