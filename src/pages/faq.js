import * as React from 'react'
import Layout from '../components/layout'
//this allows us to render the body node of any MDX content from
//within the data layer of graphql page query (seen below)
import { MDXRenderer } from 'gatsby-plugin-mdx'
// gatsby query w/ graphql
import { graphql } from 'gatsby'
//components
import SEO from '../components/seo'

const faq = ({data}) => {
   const content=data.allMdx.edges[0].node;

   console.log(content)
   
    return (
        <Layout>
        <SEO title={content.frontmatter.title} description='Frequently asked questions, either about our IQ test, IQ tests in general or our company and what we do.' />
          <article className='markdown'>
            <h1>{content.frontmatter.title}</h1>
            <span>{content.frontmatter.date}</span>
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
    allMdx(filter: {fileAbsolutePath: {regex: "/faq/"}}) {
      edges {
        node {
          id
          frontmatter {
            date
            title
          }
          body
        }
      }
    }
  }
  `

export default faq
