const fs = require('fs')


// Generator
 function* foo () {

  console.log('start')
  try {
    const res = yield 'foo'
    console.log(res)
  } catch (error) {
    console.log(error)
  }

}


const generator = foo()
// console.log(generator.next())
// console.log(generator.next())
// console.log(generator.next())
//  console.log(generator.next('res'))

// generator.throw(new Error('generator error'))

const readFile = function (fileName) {
  return new Promise(function (resolve, reject) {
    fs.readFile(fileName, function (error, data) {
      if (error) {
        reject(error)
      }
      resolve(data)
    })
  })
}

const gen = function* () {
  console.log(11)
  const f1 = yield readFile('./test.html')
  const f2 = yield readFile('./test.html')
  console.log(f1)
  console.log(f1)
}

const asyncReadFile = async function () {
  console.log(11)
  const f1 = await readFile('./test.html')
  const f2 = await readFile('./test.html')
  console.log(f1)
  console.log(f1)
}

asyncReadFile()

