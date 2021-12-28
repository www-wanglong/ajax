// setTimeout(() => {
//   console.log('s1')
// })


// Promise.resolve().then(() => {
//   console.log('p1')
// })

// console.log('start')

// process.nextTick(() => {
//   console.log('tack')
// })

// setImmediate(() => {
//   console.log('setImmediate')
// })


// console.log('end')

setTimeout(() => {
  console.log('s1')
  Promise.resolve().then(() => {
    console.log('p1')
  })

  process.nextTick(() => {
    console.log('t1')
  })
}, 0);

Promise.resolve().then(() => {
  console.log('p2')
})

console.log('start')


setTimeout(() => {
  console.log('s2')
  Promise.resolve().then(() => {
    console.log('p3')
  })

  process.nextTick(() => {
    console.log('t2')
  })
}, 0);

console.log('end')

// start end p2 s1 t1 p1 s2 t2 p3
