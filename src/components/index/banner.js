import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import styled from "styled-components";
// comonents
import { Button } from "../button/button";

const BG = () => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "mainbrain.jpg" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed_withWebp
          }
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.image.childImageSharp.fluid;
  return (
    <>
      <BackgroundImage
        Tag="section"
        // Spread bgImage into BackgroundImage:
        fluid={imageData}
        className="banner-bg"
      >
        <div className="banner-container">
          <h1 className="title">TEST YOUR IQ</h1>
          <p className="text">
            Try our State of the Art IQ Test. Professionally scored.
            <hr className='banner-container-hr'  />
            Professionally built.
          </p>
          <Button page='test' size="large" color="pink" />   
        </div>
      </BackgroundImage>
    </>
  );
};

const Banner = styled(BG)``;

export default Banner