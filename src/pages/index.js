import * as React from "react";
import Layout from "../components/layout"
import {useState, useEffect, useContext} from "react"
// gatsby query w/ graphql
import { graphql } from 'gatsby'
// components
import Banner from '../components/index/banner'
import Column from '../components/index/column'
import Blackbar from '../components/index/blackbar'
import Paragraph from '../components/index/paragraph'
import Split from '../components/index/split'
import SEO from '../components/seo'
//questions-context
import {QuestionsDispatchContext} from '../context/GlobalContextProvider'
import {QuestionsStateContext} from '../context/GlobalContextProvider'
// page content
import {bannerText, threeColumnText, paragraphText, blackBarTextButton, blackBarText} from '../text/homePage.js'
// split component images
// images
import imgOne from '../images/charts.svg'
import imgTwo from '../images/mobile-panel.svg'

const IndexPage = ({data}) => {
  const dispatch=useContext(QuestionsDispatchContext)
  const state=useContext(QuestionsStateContext)
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
    }
  },[])
  return (
    <>
    <Layout>
      <SEO description="stateIQtest - the best test out there" title='stateIQtest' />
          <div className='index-page'>
          {/* // options are brainnew.jpg - description.png - indextest.png */}
            <Banner buttonText='Start Test!' 
                    photoName='mainbrain.jpg'
                    text={bannerText}
                    indexPage
            />
            <Column text={threeColumnText} />
            <Paragraph left data={data} text={paragraphText[0]} header={'History of IQ'}/>
            <Blackbar text={blackBarText} /> 
            <Paragraph left data={data} text={paragraphText[1]} />
            <Blackbar text={blackBarTextButton} button />
            <Split imgOne={imgOne} imgTwo={imgTwo}/>
            <Paragraph data={data} text={paragraphText[2]} />
            <Blackbar />
          </div>
    </Layout>
  </>
  );
};

export const query = graphql`query{
  allFile(filter: {relativeDirectory: {eq: "banner"}}) {
    edges {
      node {
        id
        childImageSharp {
          gatsbyImageData(
            placeholder: BLURRED
            formats: WEBP
            layout: FIXED
            width: 350
            height: 350
            transformOptions: {cropFocus: CENTER, fit: CONTAIN}
            aspectRatio: 1.2
          )
        }
      }
    }
  }
}
`

const Index = React.memo(IndexPage);
export default Index



