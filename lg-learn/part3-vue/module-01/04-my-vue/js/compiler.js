class Compiler {

  constructor(vm) {
    this.el = vm.$el
    this.vm = vm
    this.compile(this.el)
  }

  /** 编译模板 处理文本节点和元素节点 */
  compile (el) {
    let childNodes = el.childNodes
    Array.from(childNodes).forEach(node => {
      if (this.isTextNode(node)) { // 文本节点
        this.compileText(node)
      } else if (this.isElementNode(node)) { // 元素节点
        this.compileElement(node)
      }

      // 递归处理 节点
      if (node.childNodes && node.childNodes.length) {
        this.compile(node)
      }
    })
  }

  /** 编译元素节点 处理指令 */
  compileElement (node) {
    //console.dir('元素节点', node)
    // 遍历所有的属性节点
    Array.from(node.attributes).forEach(attr => {
      let attrName = attr.name
      if (this.isDirective(attrName)) {
        // v-text -> text
        this.updater(node, attr.value, attrName.substr(2))
      }
    })
    // 判断是否是指令

  }

  updater (node, key, attrName) {
    let updaterFn = this[`${attrName}Updater`]
    updaterFn && updaterFn(node, this.vm[key])
  }

  /** 处理v-text指令 */
  textUpdater (node, value) {
    node.textContent = value
  }

  /** 处理v-model指令 */
  modelUpdater (node, value) {
    node.value = value
  }

  /** 编译文本节点 处理差值表达式 */
  compileText (node) {
    // console.dir(node)
    // {{msg}}
    let reg = /\{\{(.+?)\}\}/
    let value = node.textContent
    if (reg.test(value)) {
      let key = RegExp.$1.trim()
      node.textContent = value.replace(reg, this.vm[key])
    }
  }

  /** 判断元素属性是否是指令 */
  isDirective (attrName) {
    return attrName.startsWith('v-')
  }

  /** 判断节点是否是文本节点 */
  isTextNode (node) {
    return node.nodeType === 3
  }

  /** 判断节点是否是元素节点 */
  isElementNode (node) {
    return node.nodeType === 1
  }
}