// Generator
 function * foo () {

  console.log('start')
  try {
    const res = yield 'foo'
    console.log(res)
  } catch (error) {
    console.log(error)
  }

 }


const generator = foo()
//  console.log(generator.next())
//  console.log(generator.next('res'))

generator.throw(new Error('generator error'))
