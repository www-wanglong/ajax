
import { camelCase } from 'lodash'

//declare function camelCase(input: string): string


(function () { // 作用域问题
  const a = 123
})()

const res = camelCase('hello typed')

const a = 123

export {

}

const a1: string = 'sad'
const a2: number = 11
const a3: boolean = false
const e4: void = undefined
const e5: symbol = Symbol()

Array
Promise

const error: string = '1000'

// Object类型(除了原始的类型)
const foo: object = function a () {}

const obj: { foo: number } = {foo: 12}

// 数组
const arr1: Array<number> = [1,2]
const arr2: number[] = [1,2]

function sum (...args: number[]) {
  return args.reduce( (total, current) => total + current, 0)
}
sum(1,3)

// 元数组类型

const tuple: [number, string] = [12, '1']

// 枚举类型
const PostStatus1 = {
  Draft: 0
}

// 值默认累加从0开始
const enum PostStatus {
  Draft = 0,
  Published = 2
}

// 函数类型
function func1 (a: number, b?: number, ...rest: number[]): string {
  return 'f'
}

const func2 = function (a: number): string {
  return 'func2'
}

// 任意类型

function stringify (value: any) {
  return JSON.stringify(value)
}

// 隐式推断
let age = 10
//age = 's'

//类型断言 编译过程中
const num = [100, 120, 130]
const res1 = num.find(i => i > 0)
//const square = res1 * res1

const num1 = res1 as number
const num2 = <number>res1 //JSX 可能会语法冲突

// 接口  interfaces
//约束对象的结构
interface Post {
  title: string
  content: string,
  subtitle?: string //可选成员
  readonly summary: string // 只读
}
function printPost (post: Post) {
  console.log(post.title)
  console.log(post.content)
}

const hello1: Post =  {
  title: 'hello',
  content: 'content',
  summary: 'sad'
}
// hello1.summary = 3

interface Cache {
  [prop: string]: string
}

const cache: Cache = {
  id: '1'
}


// class  描述一类具体事物的抽象特征(先声明)
// constructor默认是public
class Person {

  public name: string
  private age: number
  protected readonly gender: boolean// 只允许在子类中使用

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
    this.gender = true
  }

  sayHi () {

  }
}

// 类 成员的访问修饰符

//const tom = new Person('tom', 18)
//console.log(tom.age)

// 类 只读属性  readonly

// 定义接口
interface Eat {
  eat (food: string): void

}
interface Run {
  run (distance: number): void
}
// 类和接口
class Person1 implements Eat, Run {
  eat (food: string): void {

  }

  run (distance: number): void {

  }
}



// 抽象类 包含具体的实现
//自能被继承
abstract class Animal {
  eat (food: string): void {

  }

  abstract run (distance: number): void //子类必须实现抽象方法
}

class Dog1 extends Animal {
  run(distance: number): void {
    throw new Error("Method not implemented.");
  }

}

// 泛型 声明函数的时候不定义类型 传递的时候定义
function createNumberArray (length: number, value: number): number[] {
  const arr = Array<number>(length).fill(value)
  return arr
}
createNumberArray(3, '100')

function createArray<T> (length: number, value: T): T[] {
  const arr = Array<T>(length).fill(value)
  return arr
}

createArray<string>(3, '100')