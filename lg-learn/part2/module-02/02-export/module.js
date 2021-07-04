var name = 'long'
var age = 12
console.log(name)

export  { // 固定的语法
  name,
  age
}

// export default { // 导出对象 导出的是地址的引用 只读的
//   name,
//   age
// }

setTimeout( () => {
  name = 'ben'
}, 1000)



