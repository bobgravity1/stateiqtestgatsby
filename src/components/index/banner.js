import React, {useContext} from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
// components
import { Button } from "../button/button";
//context - just the dispatch is needed to trigger first render of questions
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'

const Banner = ({photoName, text, indexPage}) => {
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

  const textRender=()=>{
    if(indexPage===true){
    return (<><h2 className="title-extra">{text.extraTitle}</h2>
    <h1 className="title">{text.bannerTitle}</h1>
    <p className="text">
      {text.bannerSubtitle}
      <hr className='banner-container-hr'  />
      {text.bannerSubtitleTwo}
    </p>
    <Button text={text.buttonText} page='/test/test' size="large" color="pink" /></> 
  )}
  else{
    return (<div className='description'><h2 className="description-extra">{text.extraTitle}</h2>
    <h1 className="description-title">{text.bannerTitle}</h1>
    <p className="description-text">
      {text.bannerSubtitle}
      <hr className='banner-container-hr'  />
      {text.bannerSubtitleTwo}
    </p>
    <Button text={text.buttonText} page='/test/test' size="large" color="pink" />
    </div>)
  }
}
   
  return (
    <>
     {data.image.edges.map((item, index) => {
    if(photoName===item.node.childImageSharp.fluid.originalName){
      // options are brainnew.jpg - description.png - indextest.png
      return (<BackgroundImage fluid={item.node.childImageSharp.fluid} className={`${indexPage?'banner-bg':'description-bg'}`}><div className="banner-container">
     {textRender()}</div></BackgroundImage>)
    }
    })}

     
    </>
  );
};


export default Banner