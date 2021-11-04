import React from 'react';
import { graphql } from 'gatsby'
import Img from "gatsby-image"

export default function Product({ data }) {
  console.log(data)
  return data.allProductsJson.nodes.map( (node,index) => (
    <div key={index}>
      <p>{node.address}</p>
      <p>{node.price}</p>
      <div>
        <Img fluid={node.url.childImageSharp.fluid} />
      </div>
    </div>
  ))
}

export const query = graphql`
  query {
    allProductsJson {
      nodes {
        address
        price
        url {
          childImageSharp {
            fluid {
              src
              srcSet
              srcSetWebp
            }
          }
        }
      }
    }
  }
`