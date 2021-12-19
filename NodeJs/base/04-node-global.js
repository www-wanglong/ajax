// console.log(__dirname)
// 默认情况下this是空对象
// console.log(this)
(
  function () {
    console.log(this === global)
  }
)()