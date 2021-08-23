import React, {useContext} from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
// components
import { Button } from "../button/button";
//context - just the dispatch is needed to trigger first render of questions
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'

const Banner = ({photoName}) => {
  const dispatch=useContext(QuestionsDispatchContext)
  // this is the old depracated gatsby-image technique
  //using fluid and fixed is now depracated
  const data = useStaticQuery(graphql`
    query Images {
      image: allFile(filter: {relativeDirectory: {eq: "banner"}}){
        edges {
      node {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
            originalName
          }
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
            originalName
          }
        }
      }
        }
      }
    }
  `);
   
  return (
    <>
     {data.image.edges.map((item, index) => {
       console.log(photoName)
    if(photoName===item.node.childImageSharp.fluid.originalName){
  console.log('match')
      // options are brainnew.jpg - description.png - indextest.png
      return (<BackgroundImage fluid={item.node.childImageSharp.fluid} className="banner-bg"><div className="banner-container">
      <h1 className="title">TEST YOUR IQ</h1>
      <p className="text">
        Try our State of the Art IQ Test. Professionally scored.
        <hr className='banner-container-hr'  />
        Professionally built.
      </p>
      <Button text='Start Test!' page='/test/test' size="large" color="pink" />   
    </div></BackgroundImage>)
    }
    })}

     
    </>
  );
};


export default Banner