
const SingleEntryPlugin = require('./SingleEntryPlugin')

const itemToPlugin = function (context, entry, name) {
  return new SingleEntryPlugin(context, entry, name)
}

class EntryOptionPlugin {

  apply(complier) {
    // 注册监听
    complier.hooks.entryOption.tap('EntryOptionPlugin', (context, entry) => {
      itemToPlugin(context, entry, 'main').apply(complier)
    })
  }

}

module.exports = EntryOptionPlugin