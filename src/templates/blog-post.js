import React from "react"
import { graphql } from "gatsby"
import Helmet from 'react-helmet'
import Layout from "../components/layout"
export default function BlogPost({ data }) {
  const post = data.markdownRemark
  const siteTitle = ' Strata'
  const siteDescription = 'Site description'
  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <div id="main">
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`