import React from "react";
import { Link, graphql } from "gatsby";
import SEO from '../components/SEO'
import styles from '../styles/index.module.less'

export default function Home({ data }) {
  console.log('data', data)
  return (
    <>
      <SEO title="index page" />
      <div>
        <Link className={styles.red} to="/person/zhangsan">zhangsan</Link>
        <Link to="/person/lisi">lisi</Link>
      </div>
    </>
  );
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
