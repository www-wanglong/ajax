const AsyncParallelHook  = require('./AsyncParallelHook.js')

// const { AsyncParallelHook } = require('tapable')

let hook = new AsyncParallelHook(['name', 'age'])

hook.tapAsync('fn1', function (name, age, callback) {
  console.log('f1 -> ', name, age)
  callback()
})

hook.tapAsync('fn2', function (name, age, callback) {
  console.log('f2 -> ', name, age)
  callback()
})

hook.callAsync('wl', 18, function() {
  console.log('end~')
})

/**
 * 01 实例化hook 定义_x = [f1,f2,...] taps = [{}, {}]
 * 02 实例调用tap taps = [{}, {}]
 * 03 调用call方法  HookCodeFactory setup create创造要执行的函数
 * 04 存在的类Hook SyncHook HookCodeFactory
 */