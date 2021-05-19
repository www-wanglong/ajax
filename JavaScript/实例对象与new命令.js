// 典型的面向对象，都有’类‘的概念。’类‘就是对象的模板。对象就是’类‘的实例。
// 构造函数：JavaScript语言的对象体系，不是基于类的，而是基于构造函数(constructor)和原型链(prototype)。

// JavaScript语言使用构造函数作为对象的模板。’构造函数‘就是专门用来生成实例对象的函数。
// 构造函数两个特点： 1.内部使用this,代表所要生成的对象实例
var Vehicle = function () {
  this.price = 100
}

var findRepeatNumber = function(nums) {
  let finishedNnums = []
  for(let num in nums) {
      if (finishedNnums.some( i => i === num)) {
          console.log(num)
          return num
      } else {
        finishedNnums.push(num)
        console.log(finishedNnums)
      }
  }
  console.log(12)
};