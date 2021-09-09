import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
//components
import SEO from '../components/seo'
//images
import logo from '../images/logo.svg'
// gatsby query w/ graphql
import { graphql } from 'gatsby'

const Article = ({data}) => {
  console.log(data)
  return (
    <>
    <Layout>
        <SEO title='end of test part of iq test' description='' image={logo} />
        {
      data.allMdx.nodes.map(node=> (  
            <li key={node.id}>
               <Link to={`/articles/${node.slug}`}>
              <h2>{node.frontmatter.title}</h2>
              <p>Posted: {node.frontmatter.date}</p>
              </Link>
            </li>
         
        ))
      }
    </Layout>
    </>
  )
}

export const query = graphql`query{
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      body
      slug
      id
    }
  }
}
`

export default Article