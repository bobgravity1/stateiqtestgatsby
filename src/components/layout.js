/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, {useState, createContext} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../sass/index.scss"
//components
import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"
// export context
export const NavActive=createContext()


const Layout = ({ children}) => {
  const [active, setActive]=useState(false)
  const value={active, setActive}
  
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  

  return (
<>
<NavActive.Provider value={value}>
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <div className={`${active&&'body-active'}`}>
        {children}
      </div>  
      <Footer />
</NavActive.Provider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout