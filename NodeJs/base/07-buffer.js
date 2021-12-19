
// const b1 = Buffer.alloc(10)
// const b2 = Buffer.allocUnsafe(10)
// console.log(b1)
// console.log(b2)

// 创建指定大小
// const b3 = Buffer.from([0xe4, ])
// console.log(b3)

// const b4 = Buffer.from('中')
// console.log(b4.toString())

const b1 = Buffer.alloc(3)
// 创建新的空间
const b2 = Buffer.from(b1)

console.log(b1)
console.log(b2)

b1[0] = 1

console.log(b1)
console.log(b2)