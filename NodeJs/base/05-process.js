// 1.资源 cpu 内存
// Buffer.alloc(1000)
// const fs = require('fs')
// // 内存
// console.log(process.memoryUsage())

// // cpu
// console.log(process.cpuUsage())


// 2. 运用环境：运行目录、node环境、CPU架构、用户环境、系统平台
// console.log(process.cwd())
// console.log(process.version)
// console.log(process.versions)
// console.log(process.arch)
// console.log(process.env.NODE_ENV)
// console.log(process.env.argv)

// 3. 运行状态：启动参数、pid、运行时间

// console.log(process.uptime())

// 4. 事件
// process.on('exit', (code) => {
//   console.log('exit', code)
// })

// 退出之前
// process.on('beforeExit', (code) => {
//   console.log('beforeExit', code)
// })

// 5. 标准的输入输出

// console.log = function (data) {
//   // 输出流
//   process.stdout.write('---' + data + '\n')
// }

// console.log(11)

process.stdin.pipe(process.stdout)