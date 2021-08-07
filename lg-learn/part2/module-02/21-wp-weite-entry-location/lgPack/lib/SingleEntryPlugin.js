class SingleEntryPlugin {
  constructor(context, entry, name) {
    this.context = context
    this.entry = entry
    this.name = name
  }

  apply(complier) {
    // 组册监听make
    complier.hooks.make.tapAsync('SingleEntryPlugin', (compilation, callback) => {
      const { context, entry, name } = this
      console.log('make 监听执行了')
      compilation.addEntry(context, entry, name, callback)
    })
  }
}

module.exports = SingleEntryPlugin