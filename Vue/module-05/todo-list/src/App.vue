<template>
  <section id="app" class="todoapp">
    <header class="header">
      <h1>todos</h1>
      <input
        class="new-todo"
        placeholder="What needs to be done?"
        autocomplete="off"
        autofocus
        v-model="input"
        @keyup.enter="addTodo"
      >
    </header>
    <section class="main" v-show="1">
      <input id="toggle-all" class="toggle-all" type="checkbox">
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <li
          v-for="todo in todos"
          :key="todo"
          :class="{editing: todo === editingTodo}"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed">
            <label @dblclick="editTodo(todo)">{{ todo.text }}</label>
            <button class="destroy" @click="remove(todo)"></button>
          </div>
          <input
            class="edit"
            type="text"
            v-editing-focus="todo === editingTodo"
            v-model="todo.text"
            @keyup.enter="doneEdit(todo)"
            @blur="doneEdit(todo)"
            @keyup.esc="calcelEdit(todo)"
          >
        </li>
      </ul>
    </section>
    <footer class="footer" v-show="1">
      <span class="todo-count">
        <strong>{{ 2 }}</strong> {{ 2 > 1 ? 'items' : 'item' }} left
      </span>
      <ul class="filters">
        <li><a href="#/all">All</a></li>
        <li><a href="#/active">Active</a></li>
        <li><a href="#/completed">Completed</a></li>
      </ul>
      <button class="clear-completed" @click="removeCompleted" v-show="1 > 2">
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
import './assets/index.css'
import { ref } from 'vue'

// 1. 添加代办事项
const useAdd = todos => {
  const input = ref('')
  const addTodo = () => {
    console.log('add')
    const text = input.value && input.value.trim()
    if (text.length === 0) {
      return
    }

    todos.value.unshift({
      text,
      completed: false
    })

    input.value = ''
  }

  return {
    input,
    addTodo
  }
}

// 2. 删除代办事项
const useRemove = todos => {
  const remove = todo => {
    const index = todos.value.indexOf(todo)
    todos.value.splice(index, 1)
  }
  return {
    remove
  }
}

// 3.编辑代办项
const useEdit = remove => {
  let beforeEditingText = ''
  const editingTodo = ref(null)
  const editTodo = todo => {
    beforeEditingText = todo.text
    editingTodo.value = todo
  }
  const doneEdit = todo => {
    if (!editingTodo.value) {
      return
    }
    todo.text = todo.text.trim()
    todo.text || remove(todo)
    editingTodo.value = null
  }

  const calcelEdit = todo => {
    editingTodo.value = null
    todo.text = beforeEditingText
  }
  return {
    editingTodo,
    editTodo,
    doneEdit,
    calcelEdit,
  }
}

export default {
  name: 'App',
  setup () {
    // 响应式对象
    const todos = ref([])
    const { remove } =  useRemove(todos)
    return {
      todos,
      remove,
      ...useAdd(todos),
      ...useEdit(remove)
    }
  },

  directives: {
    editingFocus: (el, binding) => {
      binding.value && el.focus()
    }
  }
}
</script>

<style>
</style>
