import * as React from 'react'
import Layout from '../components/layout'
//this allows us to render the body node of any MDX content from
//within the data layer of graphql page query (seen below)
import { MDXRenderer } from 'gatsby-plugin-mdx'
// gatsby query w/ graphql
import { graphql } from 'gatsby'
//components
import SEO from '../components/seo'

const whyourtest = ({data}) => {
   const content=data.allMdx.edges[0].node;

   console.log(content)
   
    return (
        <Layout>
        <SEO title={content.frontmatter.title} description='' />
          <article className='markdown'>
            <h1>{content.frontmatter.title}</h1>
            <p>
              <MDXRenderer>       
                {content.body}       
              </MDXRenderer>
            </p>
          </article>
    </Layout>
    )
}

export const query= graphql`query{
    allMdx(filter: {fileAbsolutePath: {regex: "/whyourtest/"}}) {
      edges {
        node {
          id
          frontmatter {
            title
          }
          body
        }
      }
    }
  }
  `

export default whyourtest
