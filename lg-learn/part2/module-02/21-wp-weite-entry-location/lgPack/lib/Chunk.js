

class Chunk {
  constructor(entryModule) {
    this.entryModule = entryModule
    this.name = entryModule.name
    this.files = [] // 记录每个chunk文件的名称
    this.modules = [] // 记录每个chunk里包含的所有模块

  }
}
module.exports = Chunk