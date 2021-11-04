import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Helmet } from "react-helmet";

export default function SEO({title, description, mate, lang}) {

  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)
  const mateDescription = description || site.siteMetadata.description
  return (
    <Helmet
      htmlAttributes={{lang}}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      mate={[{
        name: "description",
        content: mateDescription
      }].concat(mate)}
    />
  );
}

SEO.defaultProps = {
  description: 'test description',
  meta: [],
  lang: 'en',
}