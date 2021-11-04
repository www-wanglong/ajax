// 内存管理
// 申请
let obj = {}
// 使用
obj.name = 'o'
// 释放
obj = null


//
let obj1 = { name: 'xm' }

let ali = obj

obj = null


function objGroup(obj1, obj2) {
  obj1.next = obj2
  obj2.prev = obj1
  return {
    o1: obj1,
    o2: obj2
  }
}

let obj3 = objGroup({name: 'obj1'}, {name: 'obj2'})
console.log(obj3)

const user1 = {age: 1}

var x = 100
//1. 创建一个值100，存在栈中
//2. 声明一个变量，存放VO（g）
//3. 创建变量与值之间的联系
// 按照值赋值