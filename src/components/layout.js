/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import React, {useState, useContext} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../sass/index.scss"
//components
import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"
// context
import {ActiveNavDispatchContext} from '../context/GlobalContextProvider'
import {ActiveNavStateContext} from '../context/GlobalContextProvider'

const Layout = ({ children}) => {  
  const {active}=useContext(ActiveNavStateContext);
  const dispatch=useContext(ActiveNavDispatchContext);

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
      <Navbar siteTitle={data.site.siteMetadata.title} />
      <div id={`${active&&'body-active'}`}>
      {/* <div className={`${active&&'body-active'}`}> */}
        {children}
      </div>  
      <Footer />
    </>
  )
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout