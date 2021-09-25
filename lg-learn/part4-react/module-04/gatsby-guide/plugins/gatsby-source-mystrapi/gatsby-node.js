const axios = require('axios')
const pluralize = require("pluralize")
const createNodeHelper = require("gatsby-node-helpers").default

async function sourceNodes({ actions }, configOptions) {
  const { apiUrl, contentTypes } = configOptions;
  const { createNode } = actions;
  // Post -> posts 处理地址
  const types = contentTypes
    .map(type => type.toLowerCase())
    .map(type => pluralize(type))

  let final = await getContents(types, apiUrl);
  for (let [key, value] of Object.entries(final)) {
    // 1. 构建数据节点对象
    const { createNodeFactory } = createNodeHelper({
      typePrefix: key,
    })
    const createNodeObject = createNodeFactory("content")
    // 2. 根据数据节点对象创建节点
    value.forEach( item => {
      // 创建数据节点
      createNode(createNodeObject(item))
    })
  }
};

 async function getContents(types, apiUrl) {
  const size = types.length;
  let index = 0;
  const final = {}

  await loadContents()

  async function loadContents() {
    if (index === size) {
      return
    }

    let { data } = await axios.get(`${apiUrl}/${types[index]}`)
    final[types[index++]] = data
    await loadContents
  }
  return final;
}

module.exports = {
  sourceNodes,
}