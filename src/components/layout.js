/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useContext} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../sass/index.scss"
// context
import {NavActive} from '../pages/index.js'
//components
import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"
import SEO from './seo'


const Layout = ({ children, active, setActive }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
const value = useContext(NavActive);
  return (
<>
   
    <div className=''>
      <Navbar active={active} setActive={setActive} siteTitle={data.site.siteMetadata.title} />
      <main className={`${active&&'body-active'}`}>
        {children}
      </main>  
      <Footer />
    </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout