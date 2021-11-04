const axios = require('axios')
const createNodeHelper = require('gatsby-node-helpers').default
const { paginate } = require('gatsby-awesome-pagination')

exports.sourceNodes = async ({ actions }, { apiUrl }) => {
  const { createNode } = actions
  let articles = await loadArticles(apiUrl)
  const { createNodeFactory, generateNodeId } = createNodeHelper({ typePrefix: "articles" })
  const createNodeObject = createNodeFactory('list', node => {
    // 指定节点id
    node.id = generateNodeId("list", node.slug)
    return node;
  })

  articles.forEach(article => {
    // 根据数据id创建节点id
    createNode(createNodeObject(article))
  });
}

async function loadArticles(apiUrl) {
  let limit = 100
  let offset = 0
  let result = []

  await load()
  async function load() {
    let { data } = await axios.get(`${apiUrl}/articles.json`, {
      params: { limit, offset }
    })

    result.push(...data.articles)

    if (result.length < data.articlesCount) {
      offset += limit
      await load()
    }
  }
  return result
}

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allArticlesList {
        nodes {
          slug
        }
      }
    }
  `)
  
  paginate({
    createPage,
    items: data.allArticlesList.nodes,
    itemsPerPage: 10,
    pathPrefix: "/list",
    component: require.resolve('../../src/templates/list.js')
  })
}