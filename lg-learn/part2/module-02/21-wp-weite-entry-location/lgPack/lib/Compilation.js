const ejs = require('ejs')
const Chunk = require('./Chunk')
const { Tapable, SyncHook } = require('tapable')
const async = require('neo-async')
const path = require('path')
const NormalModuleFactory = require('./NormalModuleFactory')
const Parser = require('./Parser')
const { entry } = require('../../webpack.config')

const normalModuleFactory = new NormalModuleFactory()
const parser = new Parser()

class Compilation extends Tapable {

  constructor(compiler) {
    super()
    this.compiler = compiler
    this.context = compiler.context
    this.options = compiler.options
    //  让compilation具备文件的读写能力
    this.inputFileSystem = compiler.inputFileSystem
    this.outputFileSystem = compiler.outputFileSystem
    this.entries = [] // 存放所有入口模块的数组
    this.modules = [] // 存放所有模块的书籍
    this.chunks = [] // 存放当前打包产生的chunk
    this.assets = []
    this.files = []
    this.hooks = {
      successModule: new SyncHook(['module']),
      seal: new SyncHook(),
      beforeChunks: new SyncHook(),
      afterChunks: new SyncHook(),
    }
  }

  /**
   * 完成模块编辑操作
   * @param {*} context 当前项目的跟
   * @param {*} entry 当前入口的相对路径
   * @param {*} name
   * @param {*} callback
   */
  addEntry(context, entry, name, callback) {
    this._addModuleChain(context, entry, name, (err, module) => {
      callback(err, module)
    })
  }

  _addModuleChain(context, entry, name, callback) {
    this.createModule({
      parser,
      name: name,
      context: context,
      rawRequest: entry,
      resource: path.posix.join(context, entry),
      moduleId: './' + path.posix.relative(context, path.posix.join(context, entry))
    }, (entryModule) => {
      this.entries.push(entryModule)
    }, callback)
  }


  /**
   * 定义创建模块的方法 复用代码
   * @param {*} data 创建模块时所需要的一些属性
   * @param {*} doAddEntry 可选参数 在加载入口模块的时候 将入口模块的id写入
   * @param {*} callback
   */
  createModule(data, doAddEntry, callback) {
    let module = normalModuleFactory.create(data)

    const afterBuild = (err, module) => {
      // 在afterBuild当中需要
      if (module.dependencies.length > 0) {
        // 当前逻辑就表示module有需要 依赖加载的模块 一次就可以在单独定义一个方法来实现
        this.processDependencies(module, (err) => {
          callback(err, module)
        })
      }
      callback(err, module)
    }

    this.buildModule(module, afterBuild)

    // 当完成本次的build操作后 将module进行保护
    doAddEntry && doAddEntry(module)
    this.modules.push(module)
  }

  /**
   * 完成集体的build行为
   * @param {*} module
   * @param {*} callback
   */
  buildModule(module, callback) {
    module.build(this, (err) => {
      // 当前module编译完成了
      this.hooks.successModule.call(module)
      callback(err, module)
    })
  }

  processDependencies(module, callback) {
    //1. 当前的函数核心功能就是实现一个被依赖模块的递归加载
    //2. 加载模块的思想都是创建一个模块 然后想办法将加载模块的内容拿进来
    //3. 当前不知道module需要依赖几个模块
    let dependencies = module.dependencies
    async.forEach(dependencies, (dependency, done) => {
      this.createModule({
        parser,
        name: dependency.name,
        context: dependency.dependencies,
        rawRequest: dependency.rawRequest,
        moduleId: dependency.moduleId,
        resource: dependency.resource

      }, null, done)
    }, callback)
  }


  seal(callback) {
    this.hooks.seal.call()
    this.hooks.beforeChunks.call()

    //01 当前所有的入口模块都被存放在compilation对象的entries数组里
    //02 所谓封装chunk指的就是依据某个入口，然后找到它的所有依赖 将它们的源代码放在一起
    for (const entryModule of this.entries) {
      // 核心：创建模块 加载已有模块的内容 同时记录模块的信息
      const chunk = new Chunk(entryModule)

      // 保存chunk信息
      this.chunks.push(chunk)

      // 给chunk属性赋值
      chunk.module = this.modules.filter( module => module.name === chunk.name)
    }
    // chunk流程梳理之后 进入到chunk代码处理环节
    // 模版文件 + 模块中的源代码
    this.hooks.afterChunks.call(this.chunks)

    // 生成代码内容
    this.createChunkAssets()
    callback()
  }

  createChunkAssets() {
    for(let i = 0; i < this.chunks.length; i++) {
      const chunk = this.chunks[i]
      const fileName = chunk.name + '.js'
      chunk.files.push(fileName)

      //01 获取模版文件的路径
      let tempPath = path.posix.join(__dirname, 'temp/main.ejs')
      //02 读取模块文件中的内容
      let tempCode = this.inputFileSystem.readFileSync(tempPath, 'utf8')
      //03 获取渲染函数
      let tempRender = ejs.compile(tempCode)
      //04
      let source = tempRender({
        entryModuleId: chunk.entryModule.moduleId,
        modules: chunk.modules
      })

      // 输出文件
      this.emitAssets(fileName, source)

    }


  }

  emitAssets(fileName, source) {
    this.assets[fileName] = source
    this.files.push(fileName)
  }

}

module.exports = Compilation