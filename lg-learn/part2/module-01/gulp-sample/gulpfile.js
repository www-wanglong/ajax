const { series, parallel, src, dest } = require('gulp')
const fs = require('fs')
const cleanCss = require('gulp-clean-css')
const rename = require('gulp-rename')
const { Transform } = require('stream')
// gulp任务都是异步任务
done => {
  console.log('foo task working')

  done() // 表示任务完成
}

 done => {
  console.log('default task')
  done()
}

// 不推荐使用的方式
const gulp  = require('gulp')
gulp.task('bar', done => {
  console.log('bar')
  done()
})

//组合任务使用

const task1 = done => {
  setTimeout(() => {
    console.log('task1')
    done()
  }, 1000)
}

const task2 = done => {
  setTimeout(() => {
    console.log('task2')
    done()
  }, 1000)
}
// 并行执行
exports.foo = series(task1, task2)
// 串行
exports.bar = parallel(task1, task2)

exports.callback = done => {
  console.log('callback task')
  done()
}

exports.error = done => { //后续的任务不会执行
  console.log('error task')
  done(new Error('error'))
}

exports.promise = () => {
  console.log('promise task')
  return Promise.reject(new Error('promise task error'))
}

const timeout = time => {
  return new Promise( resolve => {
    setTimeout(resolve, time)
  })
}

exports.async = async() => { //node环境必须大于8
  await timeout(1000)
  console.log('async tasks')
}

// 复制文件
exports.steam = (done) => {
  const readStream = fs.createReadStream('package.json')
  const writeStream = fs.createWriteStream('temp.txt')
  readStream.pipe(writeStream)
  readStream.on('end', () => {
    done()
  })
}

// 转换文件的
exports.transform = () => {
  const read = fs.createReadStream('normalize.css')
  const write = fs.createWriteStream('normalize.min.css')
  const transform = new Transform({
    transform: (chunk, encoding, callback) => {
      // 核心转换过程
      // chunk => 读取流中的内容（buffer）
      const input = chunk.toString()
      const output = input.replace(/\s+/g, '').replace(/\/\*.+?\*\//g, '')
      callback(null, output)
    }
  })

  read
    .pipe(transform)// 转换流
    .pipe(write)

  return read

}

// gulp文件的使用
exports.file = () => {
  return src('normalize.css')
    .pipe(cleanCss())
    .pipe(rename({ extname: '.min.css' }))
    .pipe(dest('dist'))
}