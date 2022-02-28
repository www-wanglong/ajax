
// 1. promise catch方法和then方法其实是一样的，只不过，它只处理了错误的回调
// 2. promise 不论是成功回调还是失败回调函数的返回值，都会传到下一个then中


const r1 = () => {
  return new Promise((resolve, reject) => {
    reject(30)
  })
}

const to = (promise) => {
  return promise.then((data) => {
    return [null, data]
  }).catch((err) => {
    return [err, null]
  })
}



async function a1() {
  r1().catch((err)=> {
    return err
  }).then((data) => {
    console.log(data)
  })
}

a1()

