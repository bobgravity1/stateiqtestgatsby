import * as React from "react"
import Layout from "../components/layout"
//components
import SEO from '../components/seo'
import Button from '../components/button/button'
// images
import logo from '../images/logo.svg'

const Test = () => {
  return (
    <Layout>
    <SEO image={logo} />
    <main>
      <title>Home Page</title>
      <a href="/">Return  Home</a>
    </main>
    </Layout>
  )
}

export default Test