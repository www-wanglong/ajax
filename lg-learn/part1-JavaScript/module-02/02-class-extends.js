class Person {
  constructor (name) {
    this.name = name
  }

  say () {
    console.log(`hi, my name is ${this.name}`)
  }
}

const s = new Set()
s.add(2).add(4)
console.log(s)