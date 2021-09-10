// import * as React from 'react'
// import Layout from '../components/layout'
// //this allows us to render the body node of any MDX content from
// //within the data layer of graphql page query (seen below)
// import { MDXRenderer } from 'gatsby-plugin-mdx'
// // gatsby query w/ graphql
// import { graphql } from 'gatsby'
// //components
// import SEO from '../components/seo'

// const faq = ({data}) => {
//     console.log(data)
//     return (
//         <Layout>
//         <SEO title={data.mdx.frontmatter.title} description='' />
//           <article className='article'>
//             <h1>{data.mdx.frontmatter.title}</h1>
//             <span>{data.mdx.frontmatter.date}</span>
//             <p>
//               <MDXRenderer>       
//                 {data.mdx.body}       
//               </MDXRenderer>
//             </p>
//           </article>
//     </Layout>
//     )
// }

// export const query= graphql`query{
//     allMdx(
//       filter: {fileAbsolutePath: {regex: "/FAQ/"}}
//       sort: {fields: frontmatter___date, order: DESC}
//     ) {
//       nodes {
//         frontmatter {
//           date(formatString: "MMMM D, YYYY")
//           title
//         }
//         body
//         slug
//         id
//       }
//     }
//   }
//   `

// export default faq
