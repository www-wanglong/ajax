# new
new运算符创建一个用户定义的对象类型或具有构造函数

# 初步实现
```JavaScript
function objectFactory() {
  var obj = new Object()
  Constructor = [].shift.call(arguments)
  obj.__proto_ = Constructor.prototype
  let ret = Constructor.apply(obj, arguments)
  return typeof ret === 'object' ? ret : obj
}
```