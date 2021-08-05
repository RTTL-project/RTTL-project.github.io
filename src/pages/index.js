import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import { graphql } from "gatsby"
import PostLink from "../components/post-link"

const HomeIndex = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const siteTitle = 'Gatsby Starter - Strata'
  const siteDescription = 'Site description'
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date)
  .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>

      <div id="main">
        <section id="one">
          <div>{Posts}</div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
