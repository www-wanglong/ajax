const path = require("path")

// 创建页面 项目构建的时候执行
// function createPages({ actions }) {
//   const { createPage } = actions
//   // 获取模版的绝对路径
//   const template = require.resolve("./src/templates/person.js");
//   // 获取模版所需要的数据
//   const persons = [
//     {slug: "zhangsan", name: "张三", age: 20},
//     {slug: "lisi", name: "里斯", age: 21}
//   ]
//   // 根据模版和数据创建页面
//   persons.forEach(person => {
//     createPage({
//       // 模版的绝对路径
//       component: template,
//       // 访问地址
//       path: `/person/${person.slug}`,
//       // 传递给模版数据
//       context: person,
//     })
//   })

// }

async function createPages({ graphql, actions }) {
  const { createPage } = actions
  // 1. 获取模版的绝对路径
  const template = require.resolve("./src/templates/article.js");

  // 2. 获取页面的访问标识
  let { data } = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          fields {
            slug
          }
        }
      }
    }
  `)
  console.log(data.toString)
  // 3. 创建页面
  data.allMarkdownRemark.nodes.forEach( node => {
    createPage({
      component: template,
      path: `/article/${node.fields.slug}`,
      context: {
        slug: node.fields.slug
      }
    })
  })
};

function onCreateNode({ node, actions }) {
  // 将markdown数据放入数据层
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }

}

module.exports = {
  createPages,
  onCreateNode,
}