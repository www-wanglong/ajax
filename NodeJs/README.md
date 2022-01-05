# Nodejs
## 一. base - Nodejs基础

## CommonJs规范
主要应用于NodeJs
### 模块引用
require
### 模块定义
module
### 模块标识
模块ID

## 2.  事件环
### 2.1 完整事件环执行顺序
每执行一个宏任务之后就会立刻检查微任务队列

### 2.2 Node环境事件环
### 2.3 Node环境队列说明
异步任务执行顺序：process微任务执行最优先（process.nextTick）、 Promise微任务、timers（setTimeout和setInterval）、 poll（readFile）、 check（setImmediate）

- timers:执行setTimeout于setInterval回调
- pending callbacks: 执行系统操作的回调，例如tcp udp

### 2.4 Nodejs和浏览器事件环区别
##### 微任务执行时机不同
- 二者都会在同步代码执行完毕执行微任务
- 浏览器平台下每当一个宏任务执行完毕后就清空微任务
- NodeJs平台在事件队列**切换**时会去清空微任务
#### 微任务优先级不同
- `NodeJs`中`process.nextTick`先于`promise.then`

### 2.5 NodeJs小问题
setTimeout和setImmediate默认情况下执行是随机的，当放到readFile回调中，则先执行setImmediate，后执行setTimeout。（任务队列从poll切换到check再到timers）

## 3. stream
### 3.1 流处理的优势
- 时间效率
- 空间效率
- 使用方便

### 3.2 流分类
- Readble
- Writeable
- Duplex
- Tranform

### 3.3 可读流

### 3.3 可写流
- pipe()
- unpipe()

### 3.4 双工流 - Duplex

### 3.5 转换流 - Transform

## 4 背压机制
数据的消费速度跟不上数据的生产速度，从而导致内存溢出、GC频繁调用、其他进程变慢。

## 二、通信

### 1. TCP三次握手和四次挥手

三次握手建立连接

四次挥手 断开链接

TCP协议