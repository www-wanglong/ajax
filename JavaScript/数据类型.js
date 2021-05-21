// - null是一个表示‘空’的对象，转为数值为0；undefind是一个表示’此处无定义‘的原始值，转为数值为NaN
// 如果不同的变量名指向同一个对象，那么它们都是这个对象的引用，也就是说指向同一个内存地址。
// 函数与其他数据类型地位平等，所以函数又称第一等公民
// 函数本身也是一个值，也有自己的作用域。他的作用域与变量一样，就是其声明所在的作用域，与其运行时所在的作用域无关。
var obj = {
  get p() {
    return 'getter'
  },
  set p(value) {
    console.log('setter', value)
  }
}
// 对象的copy
var extend = function(to, from) {
  for (var property in from) {
    to[property] = from[property]
  }
  return to
}
var extend = function(to, from) {
  for (var property in from) {
    if (from.hasOwnProperty(property)) continue;
    Object.defineProperty(
      to,
      property,
      Object.getOwnPropertyDescriptor(from. property)
    )
  }
  return to
}
extend({}, {
  a: 1
})

extend({}, {
  get a() { return 1 }
})
