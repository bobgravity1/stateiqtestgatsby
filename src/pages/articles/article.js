import * as React from 'react'
import Layout from '../../components/layout'
//components
import SEO from '../../components/seo'
//images
import logo from '../../images/logo.svg'
// gatsby query w/ graphql
import { graphql } from 'gatsby'

const Article = ({data}) => {
  console.log(data)
  return (
    <>
    <Layout>
        <SEO title='end of test part of iq test' description='' image={logo} />
        {
      data.allFile.edges.map(({node}) => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
    </Layout>
    </>
  )
}

export const query = graphql`query{
  allFile(filter: {extension: {eq: "mdx"}}) {
    edges {
      node {
      name
      }
    }
  }
}
`

export default Article