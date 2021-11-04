const {
  Tapable,
  AsyncSeriesHook,
  SyncBailHook,
  SyncHook,
  AsyncParallelHook,
} = require('tapable')

const path = require('path')
const mkdirp = require('mkdirp')

const NormalModuleFactory = require('./NormalModuleFactory')
const Compilation = require('./Compilation')
const Stats = require('./Stats')
const { output } = require('../../webpack.config')


class Complier extends Tapable {

  constructor(context) {
    super()

    this.context = context
    this.hooks = {
      done: new AsyncSeriesHook(["stats"]),
      entryOption: new SyncBailHook(["context", "entry"]),

      beforeRun: new AsyncSeriesHook(["compiler"]),
      run: new AsyncSeriesHook(["compiler"]),

      thisCompilation: new SyncHook(["compilation", "params"]),
      compilation: new SyncHook(["compilation", "params"]),

      beforeCompile: new AsyncSeriesHook(["params"]),
      compile: new SyncHook(["params"]),
      make: new AsyncParallelHook(["compilation"]),
      afterCompile: new AsyncSeriesHook(["compilation"]),

      emit: new AsyncSeriesHook(["compilation"])
    }

  }

  emitAssets(compilation, callback) {
    // 定义工具方法执行文件的生成
    const emitFiles = (err) => {
      const assets = compilation.assets
      let outputPath = this.options.output.path
      for (let file in assets) {
        let source = assets[file]
        let targetPath = path.posix.join(outputPath, file)
        this.outputFileSystem.writeFileSync(targetPath, source, 'utf8')
      }
      callback(err)
    }

    // 创建目录 启动文件写入
    this.hooks.emit.callAsync(compilation, (err) => {
      mkdirp.sync(this.options.output.path)
      emitFiles()
    })
  }

  run(callback) {
    console.log('run 方法执行了')

    const finalCallBack = function (err, stats) {
      callback(err, stats)
    }

    const onCompiled = (err, compilation) => {
      console.log('onCompiled ~~~')
      finalCallBack(err, new Stats(compilation))

      // 处理好的chunk写入指定的文件 输出到dist
      this.emitAssets(compilation, (err) => {
        let stats = new Stats(compilation)
        finalCallBack(err, stats)
      })
    }


    this.hooks.beforeRun.callAsync(this, err => {
      this.hooks.run.callAsync(this, err => {
        this.compile(onCompiled)
      })
    })
  }

  compile(callback) {
    const params = this.newCompilationParams()

    this.hooks.beforeRun.callAsync(params, (err) => {
      this.hooks.compile.call(params)
      const compilation = this.newCompilation(params)

      this.hooks.make.callAsync(compilation, (err) => {
        // console.log('make钩子触发了~~~')
        // callback(err, compilation)
        // 开始处理chunk
        compilation.seal((err) => {
          this.hooks.afterCompile.callAsync(compilation, (err) => {
            callback(err, compilation)
          })
        })
      })
    })

  }

  newCompilationParams() {
    const params = {
      normalModuleFactory: new NormalModuleFactory()
    }
    return params
  }

  newCompilation(params) {
    const compilation = this.createCompilation()
    this.hooks.thisCompilation.call(compilation, params)
    this.hooks.compilation.call(compilation, params)
    return compilation
  }

  createCompilation() {
    return new Compilation(this)
  }

}
module.exports = Complier