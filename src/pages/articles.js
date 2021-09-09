import * as React from 'react'
import {useContext, useReducer, useDispatch, useEffect} from 'react'
import {Link} from 'gatsby'
import Layout from '../components/layout'
//components
import SEO from '../components/seo'
//images
import logo from '../images/logo.svg'
// gatsby query w/ graphql
import { graphql } from 'gatsby'

const Articles = ({data}) => {
  return (
    <>
    <Layout>
        <SEO title='end of test part of iq test' description='' image={logo} />
       <section className='articles'>
         <h1>Articles & News</h1>
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
                  <Link style={{textDecoration:'none'}} to={`/articles/${node.slug}`}> <button>read more</button> </Link>
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
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
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

export default Articles