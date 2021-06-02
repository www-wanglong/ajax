// Promise 基本示例

const promise = new Promise(function (resolve, reject) {

  resolve(100)

  //reject(new Error('promise rejected'))
})

promise.then( function (value) {
  console.log('resolve', value)
}, function (error) {
  console.log('rejected', error)
})

//console.log('end')


// function ajax (url) {
//   return new Promise(function (resolve, reject) {
//     var xhr = new XMLHttpRequest()
//     xhr.open('GET', url)
//     xhr.responseType = 'json'
//     xhr.onload = function () {
//       if (this.status === 200) {
//         resolve(this.response)
//       } else {
//         reject(new Error(this.statusText))
//       }
//     }
//     xhr.send()
//   })
// }

// // var promise2 = ajax('/api/user.json').then(function (res) {
// //   console.log(res)
// //   return ajax('/api/use1r.json')
// // }, function (error) {
// //   console.log('promise2eroor', error)
// // })

// // console.log(promise2)

// //避免回调嵌套 promise链式调用

// //catch方法就是then方法的别名  catch
// // var promise2 = ajax('/api/user.json').then(function (res) {
// //   console.log(res)
// //   return ajax('/api/use1r.json')
// // })
// // .catch( function (error) {
// //     console.log('promise2eroor', error)
// //   }
// // )


// // // Promise静态方法 resolve | reject 返回promise对象
// // Promise.resolve('foo')
// //   .then(function (value) {
// //     console.log(value)
// //   })

// // var allPromise = Promise.all([
// //   ajax('/api/user.json'),
// //   ajax('/api/user.json')
// // ]).then( function (values) {
// //   console.log(values)
// // }).catch( function (error) {
// //   console.log(error)
// // })

// const request = ajax('/api/user.json')
// const timeout = new Promise((resolve, reject) => {
//   // setTimeout( () => reject(new Error('timeout reject')), 500)
// })

// // 实现请求超时的 方式
// Promise.race([
//   request,
//   timeout
// ]).then( (value) => {
//   console.log(value)
// }).catch( (error) => {
//   console.log('race error', error)
// })

// // promise微任务

// function * main () {
//   try {
//     const result1 = yield ajax('/api/user.json')
//     console.log('main', result1)
//     const result2 = yield ajax('/api/user.json')
//     console.log('main2', result2)
//   } catch(e) {
//     console.log(e)
//   }
// }

// //const g = main()
// // result.value.then( data => {
// //   const result = g.next(data)
// //   result.value.then( data2 => {
// //     g.next(data2)
// //   })
// // })



// function co (generator) {
//   const g = generator()

//   function handleResult (result) {
//     if(result.done) return
//     result.value.then( date => {
//       handleResult(g.next(date))
//     }).catch(error => [
//       g.throw(error)
//     ])
//   }

//   handleResult(g.next())
// }

// //  co(main)


//  async function main2 () {
//   try {
//     const result1 = await ajax('/api/user.json')
//     console.log('main', result1)
//     const result2 = await ajax('/api/user.json')
//     console.log('main2', result2)
//   } catch(e) {
//     console.log(e)
//   }
// }
// main2()