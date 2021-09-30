import * as React from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
//components
import SEO from '../components/seo'
// gatsby query w/ graphql
import { graphql } from 'gatsby'
const Readus = ({data}) => {
  return (
    <>
    <Layout>
    <SEO title='Latest scientific studies' description='Read more about our studies, what we do, along with how and why we do it.'/>
        <section className='articles'>
         <h1>Read Us</h1>
         <h2>click an article below</h2>
         <div className='articles-item'>
            {
          data.allMdx.nodes.map(node=> (  
               <>   
                  <li key={node.id}>
                  <label>
                    <h3>{node.frontmatter.title}</h3>
                    <p>{node.frontmatter.date}</p>
                  </label>
                  <span>{node.excerpt}</span>
                  <Link style={{textDecoration:'none'}} to={`/readus/${node.slug}`}> <button>read more</button> </Link>
                  </li>         
                  </>  
            ))
          }
        </div>
      </section>
    </Layout>
    </>
  )
}

export const query = graphql`query{
  site {
    siteMetadata {
      title
    }
  }
  allMdx(
    filter: {fileAbsolutePath: {regex: "/readus/"}}
    sort: {fields: frontmatter___date, order: DESC}
  ) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      body
      excerpt
      slug
      id
    }
  }
}
`

export default Readus