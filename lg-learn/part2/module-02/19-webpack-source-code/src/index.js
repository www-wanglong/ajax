// let name = require('./login.js')
// // import name, { age } from './login.js'
// // console.log('index.js内容')
console.log('name', name)
// console.log('age', age)

let oBtn = document.getElementById('btn')
oBtn.addEventListener('click', function() {
  import(/*webpackChunkName: "login"*/ './login.js').then( (login) => {
    console.log(login)
  } )
})
console.log('index.js')