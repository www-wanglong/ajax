const path = require('path')
const types = require('@babel/types')
const generator = require('@babel/generator').default
const traverse = require('@babel/traverse').default

class NormalModule {
  constructor(data) {
    this.context = data.context
    this.name = data.name
    this.entry = data.entry
    this.rawRequest = data.rawRequest
    this.parser = data.parser
    this.resource = data.resource
    this.dependencies = [] // 定义空数组用于保存被依赖加载的模块信息
  }

  build(compilation, callback) {
    /**
     * 1. 从文件中读取 需要被加载的module内容
     * 2. 如果不是js 模块则需要loader进行处理
     * 3. 上述完成后就可以将js代码转为ast语法树
     * 4. 当前js内部可能引用其他模块，因此需要递归
     */
    this.doBuild(compilation, (err) => {
      this._ast = this.parser.parse(this._source)
      // 这里的_ast就是当前module的语法树 我们可以对它进行修改 最后再将ast转回成code代码
      traverse(this._ast, {
        CallExpression: (nodePath) => {
          let node = nodePath.node

          // 定位require所在的节点
          if (node.callee.name === 'require') {
            // 获取原始的请求路径
            let modulePath = node.arguments[0].value // './title'
            // 取出当前被加载的模块名称
            let moduleName = modulePath.split(path.posix.sep).pop() //title
            // 当前的打包器只处理js
            let extName = moduleName.indexOf('.') === -1 ? '.js' : ''
            moduleName += extName //title.js
            // 最终读取当前js里的内容
            let depResource = path.posix.join(path.posix.dirname(this.resource), moduleName)
            // 将当前模块的id 定义（相对路径）
            let depModuleId = './' + path.posix.relative(this.context, depResource) // ./src/title.js

            console.log(depModuleId)
            // 记录当前被依赖模块的信息
            this.dependencies.push({
              name: this.name, // 需要修改
              context: this.context,
              rawRequest: moduleName,
              moduleId: depModuleId,
              resource: depResource
            })

            // 替换内容 require
            node.callee.name =  '_webpack_require_'
            node.arguments = [types.stringLiteral(depModuleId)]
          }
        }
      })

      // 上述操作是利用ast按要求做了代码修改 下面的内容就是利用 修改之后的
      let { code } = generator(this._ast)
      callback(err)
    })
  }

  doBuild(compilation, callback) {
    this.getSource(compilation, (err, source) => {
      this._source = source
      callback()
    })
  }

  getSource(compilation, callback) {
    compilation.inputFileSystem.readFile(this.resource, 'utf8', callback)
  }
}

module.exports = NormalModule