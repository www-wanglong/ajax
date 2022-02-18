# 1. 原型链和原型
## 1.1 构造函数
先使用构造函数常见一个对象
```JavaScript
function Person() {

}
var person = new Person()
person.name = 'Kevin'
console.log(person.name) // Kevin
```
Person就是一个构造函数，使用new创建了一个实例对象person.

## 1.2 prototype

每个函数都有一个`prototype`属性，比如：
```JavaScript
function Person() {
}
Person.prototype.name = 'Ke'
var person1 = new Person()
var person2 = new Person()
console.log(person1.name) // Kevin
console.log(person2.name) // Kevin
```
函数的`prototype`属性指向了一个对象，这个对象正是调用该构造函数而创建的**实例**的原型，也就是例子中的`person1`和`person2`的原型。

原型：每个JavaScript对象在创建的时候就会与之关联另一个对象，这个对象就是原型，每个对象都会从原型继承属性。

怎么表示实例与实例原型，也就是person和Person.prototype之间的关系呢，使用`__proto__`

### 1.3 __proto__
每个JavaScript对象（null除外）都具有一个属性，叫`__proto__`，这个属性会指向该对象的原型
```JavaScript
function Person () {
}
var person = new Person()
console.log(person.__proto__ === Person.prototype) // true
```

关系图

![image](../Image/prototype-2.jpg)



### 1.4 constructor
每个原型都有一个`constructor`属性指向关联的构造函数。
```JavaScript
function Person() {}
console.log(Person === Person.prototype.constructor) // true
```

