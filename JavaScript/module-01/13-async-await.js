function timeout(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}
async function timeout1(ms) {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, ms)
  })
}


async function asyncPrint(value, ms) {
  await timeout1(ms)
  console.log(value)
}

// asyncPrint('hello', 1000)

// async函数的实现原理

async function fn(args) {

}

function fn1(args) {
  return spawn(function* () {
    console.log(1)
  })
}

function spawn(genFn) {
  return new Promise(function (resolve, reject) {
    const gen = genFn()

    function step (nextFn) {
      let next
      try {
        next = nextFn()
      } catch (e) {
        return reject(e)
      }

      if (next.done) {
        return resolve(next.value)
      }
      Promise.resolve(next.value).then(function () {
        step(function () { return gen.next(v) })
      }, function(e) {
        step(function () { return gen.throw(e) })
      })
    }

    step(function () {
      return gen.next(undefined)
    })
  })
}

// fn1()

async function a1() {
  const p1 = new Promise((resolve, reject) => {
    reject('error')
  })
  await p1.catch(e => console.log('error', e))
}
a1()