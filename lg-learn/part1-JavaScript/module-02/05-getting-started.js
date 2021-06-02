// @flow
function sum (a: number, b: number) {
  return a + b
}

sum(100, 100)

function square (n) {
  return n * n
}

square(100)

let num: number = 12

function foo (): number {
  return 1
}

// flow原始类型
const a: string = 'f'
const b: number = NaN
const c: boolean = true
const d: null = null
const e: void = undefined

//数组类型
const arr1: Array<number> = [1,]
const arr2: number[] = [1,2]
const foo1: [string, number] = ['foo', 100]

// 对象类型
const obj1: {foo: string, bar: number} = {foo: 'x', bar: 1}
const obj2: {[string]: string} = {foo: 'x', bar: '1'}

// 函数类型
function foo5 (callback: (string, number) => void) {
  callback('string', 100)
}

foo5(function (str, n) {})

// 特殊类型
const aw: 'foo' = 'foo'
const type: 'success' | 'waring' = 'success'
type StringOrNumber = string | number
const bw: StringOrNumber = 'string'

// 可以接收空
const gender: ?number = null

// mixed any 接收任意类型

function passMixed (value: mixed) { // 强类型
  //value * value
}

function passAny (value: any) { // 弱类型

}

passMixed('string')
passMixed(1)
passAny(1)