const { parseString } = require("xml2js")
const { promisify } = require("util")

const parse = promisify(parseString)
const createNodeHelpers = require("gatsby-node-helpers").default
/**
 * xml 转换为js
 * @param {*} param0
 */
async function onCreateNode({ node, loadNodeContent, actions }) {
  const { createNode } = actions
  // 判断node是否是 需要转换的节点
  if (node.internal.mediaType === 'application/xml') {
    // 获取xml类容
    let content = await loadNodeContent(node)
    let obj = await  parse(content, {explicitRoot: false, explicitArray: false})
    const { createNodeFactory } = createNodeHelpers({
      typePrefix: "XML"
    })

    const createNodeObject = createNodeFactory("parsedContent")
    createNode(createNodeObject(obj))
  }

};

module.exports = {
  onCreateNode,
}