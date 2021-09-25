import React from 'react';
import Header from '../components/Header'
import SEO from '../components/SEO'
import { graphql } from "gatsby";

export default function List({ data }) {
  return (
    <div>list
      <SEO title="list page" description="list page description" />
      <Header />
      {
        data.allMarkdownRemark.nodes.map( post => (
          <div key={post.id}>
            <p>{post.frontmatter.title}</p>
            <p>{post.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{__html: post.html}}></div>
          </div>
        ))
      }
    </div>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        frontmatter {
          title,
          date
        }
        html
        id
      }
    }
  }

`