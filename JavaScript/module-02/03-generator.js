//实现id自增

function * createIdMark () {
  let id = 0
  while (true) {
    yield id++
  }
}

const id = createIdMark()
console.log(id.next())
console.log(id.next())


var obj = {
  a: 'aoo',
  b: 'boo'
}
console.log(new Map(Object.entries(obj)))


const p1 = {
  firstName: 'Lei',
  lastName: 'Wang',
  get fullName () {
    return this.firstName + this.lastName
  }
}
console.log(p1.fullName)

const p2 = Object.assign({}, p1) // 浅拷贝
p2.firstName = 'dsa'
console.log(p2.fullName)

const de = Object.getOwnPropertyDescriptors(p1) // 深拷贝
console.log(de)
const p3 = Object.defineProperties({}, de)
p3.firstName = 'long'
console.log(p3.fullName)


const books = {
  html: 5,
  css: 6,
  java: 1243
}


for (const [name, count] of Object.entries(books)) {
  console.log(name, count)
}

for (const [name, count] of Object.entries(books)) {
  console.log(`${name.padEnd(16, '-')} | ${count.toString().padStart(3, '0')}`)
}
