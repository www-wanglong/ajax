# bind
bind()方法创建一个新函数。当这个新函数被调用时，
bind()的第一个参数将作为它运行时的this,之后的一些列参数将会在传递的实参

# bind 实现原理（采用apply方法实现）

```JavaScript
Function.prototype.bind2 = function (context) {
  var self = this
  var args = Array.prototype.slice.call(arguments, 1)
  return function () {
    var bindArgs = Array.prototype.slice.call(arguments)
    return self.apply(context, args.concat[bindArgs])
  }
}
```

# call
## call使用
```JavaScript
var foo = {
  value: 1
}
function bar(name, age) {
  console.log(name)
  console.log(age)
  console.log(this.value)
}

bar.call(foo, '章三', 23)
```
第一步实现
```JavaScript
Function.prototype.call2 = function (context) {
  var context = context || window
  context.fn = this
  // var args = []
  // for (var i = 1, len = arguments.length; i < len; i++) {
  //   args.push('arguments[' + i + ']')
  // }
  context.fn(...(Array.prototype.slice.call(arguments, 1)))
  // eval('content.fn(' + args + ')')
  delete context.fn
}
``