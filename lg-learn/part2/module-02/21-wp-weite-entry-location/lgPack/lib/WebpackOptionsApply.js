const EntryOptionPlugin = require('./EntryOptionPlugin')

class WebpackOptionsApply {

  process(options, complier) {
    // 实例化
    new EntryOptionPlugin().apply(complier)
    // 触发钩子
    complier.hooks.entryOption.call(options.context, options.entry)
  }

}

module.exports = WebpackOptionsApply