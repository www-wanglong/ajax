import React from "react";
import { Link, graphql } from "gatsby";

export default function Home({ data }) {
  console.log('data', data)
  return <div>
    <Link to="/person/zhangsan">zhangsan</Link>
    <Link to="/person/lisi">lisi</Link>
  </div>
}

export const query = graphql`
  query MyQuery {
    site(siteMetadata: {}) {
      siteMetadata {
        author
        title
      }
    }
  }
`
