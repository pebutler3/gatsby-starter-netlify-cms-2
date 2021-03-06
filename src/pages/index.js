import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import HomePageTemplate from '../templates/home-page'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <section className="section">
      <HomePageTemplate></HomePageTemplate>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          html
          frontmatter {
            title
            templateKey
          }
        }
      }
    }
  }
`
