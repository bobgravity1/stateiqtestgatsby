
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"

// this is querying ALL images in the questions folder )
// inside images folder. relative to gatsby.config filesystem setup
// also generates webP or fallbacks
    export const data = graphql`
        query {
        allFile(filter: {relativeDirectory: {eq: "questions"}}) {
        edges {
            node {
            childImageSharp {
                gatsbyImageData(layout: FIXED, placeholder: BLURRED)
            }
            }
        }
        }
    }
  `
