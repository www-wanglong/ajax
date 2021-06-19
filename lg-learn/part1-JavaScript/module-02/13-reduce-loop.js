// var test = () => {
//   var i
//   var arr = ['x', 38, 'long']
//   for (i = 0; i < arr.length; i++) {
//     console.log(arr[i])
//   }
// }

let test = () => {
  let obj = new Object()
  obj.name = 'wl'
  obj.age = 90
  obj.slogan = 'sda'
  return obj
}
let test = () => {
  return {
    name: 'wl',
    age: 18,
    slogan: 'sda'
  }
}
console.log(test())