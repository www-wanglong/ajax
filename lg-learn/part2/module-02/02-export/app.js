// import { name, age } from './module.js'
// console.log(name)
// name = 1
// setTimeout( () => {
//   console.log(name)
// }, 1500)

// import * as md from './module.js'
// console.log(md)\
import('./module.js').then( function(module) { console.log(module) })