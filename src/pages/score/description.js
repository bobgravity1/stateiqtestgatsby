import * as React from "react";
import Layout from "../../components/layout"
import {useState, useEffect, useContext} from "react"
// gatsby query w/ graphql
import { graphql } from 'gatsby'
// components
import Banner from '../../components/index/banner'
import Image from '../../components/image/image'
import Column from '../../components/index/column'
import Blackbar from '../../components/index/blackbar'
import Paragraph from '../../components/index/paragraph'
import Split from '../../components/index/split'
import SEO from '../../components/seo'
//questions-context
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'
import {QuestionsStateContext} from '../../context/GlobalContextProvider'
// components
import Card_Score from '../../components/cards/card_score'
// svg
import pinkBrain from '../../images/header-meta-icon.svg'
import imgOne from '../../images/descriptionchart.svg'
import imgTwo from '../../images/mobile-panel.svg'
//text
import {bannerText, threeColumnText, paragraphText, blackBarTextButton, blackBarText} from '../../text/descriptionPage'

const header='Why Pay for a Score Analysis?'

const Description = ({data}) => {
  const dispatch=useContext(QuestionsDispatchContext)
  const state=useContext(QuestionsStateContext)
  // images being queries from the page query (inside the banner folder)
  const images=data.allFile.edges
  // inline styling
  const pinkBrainStyle={
    height:'5rem',
}
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
    }
  },[])
  return (
    <>
    <Layout>
      <SEO description="stateIQtest - the best test out there" title={'stateIQtest'} />
          <div>
          {/* // options are brainnew.jpg - description.png - indextest.png */}
            <Banner text={bannerText} photoName='description.png' />
            <Paragraph whiteText header={header} left data={data} text={paragraphText} />
            <Column text={threeColumnText}/>   
            <Split imgOne={imgOne} imgTwo={imgTwo} />
            <Blackbar description text={blackBarTextButton} button/>
            <Paragraph left data={data} text={paragraphText} />  
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

const Index = React.memo(Description);
export default Index
