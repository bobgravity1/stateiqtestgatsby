import * as React from "react";
import Layout from "../../components/layout"
import {useState, useEffect, useContext} from "react"
// gatsby query w/ graphql
import { graphql } from 'gatsby'
// components
import BannerDescription from '../../components/banner/bannerdescription'
import Column from '../../components/index/column'
import Blackbar from '../../components/index/blackbar'
import Paragraph from '../../components/index/paragraph'
import Image from '../../components/images/image'
import Split from '../../components/index/split'
import SEO from '../../components/seo'
//questions-context
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'
import {QuestionsStateContext} from '../../context/GlobalContextProvider'
// components
import Card_Score from '../../components/cards/card_score'
// svg - pink brain
import pinkBrain from '../../images/header-meta-icon.svg'
// page content
const textPar=[
  'Many tests seek to measure what you already know. This is referred to as Crystallized IQ, or Crystallized Intelligence. Crystallized IQ can be expanded upon overtime, whereas Fluid IQ, or fluid intelligence/fluid reasoning classification attempts to measure what you have the capability to learn. Prior to the invention of the first IQ test, there was no viable way to measure intelligence (IQ), leading people to believe in many false presumptions about IQ and IQ tests; To read more about previous misconceptions about intelligence born from these previous IQ tests, click here.',
]
const text={
    title:"Why pay for an analysis?",
    subtitle:'Our state of the art iq test gives you something no other DELTA VARIANT will give you',
    buttonTextOne:'Checkout',
    buttonTextTwo:'Return Home'
}
const Description = ({data}) => {
  const dispatch=useContext(QuestionsDispatchContext)
  const state=useContext(QuestionsStateContext)
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
              {/* ADD A PRICE TAG... USE STRIPE GRAPHIC */}
            <BannerDescription/>
            {/* <Image image={image} />
            <Image image={imageTwo} /> */}
        {/* NEW TEXT */}
            <Column />
            {/* try to reuse. text and images should be passed through like props! */}
            <Split /> 
            <Split /> 
        {/* NEW COMPONENT */}
          </div>
          <h1 style={{color:"red"}}>entirely new component goes here with more pictures</h1>
    </Layout>
  </>
  );
};

const Index = React.memo(Description);
export default Index
