const MyTransform= require('./my-transform')

let ts = new MyTransform()

let str1 = 'hello world'

let encodeBuf = ts.encode(str1, 1)

let a = ts.decode(encodeBuf)

console.log(a)

console.log(ts.getPackageLen(encodeBuf))