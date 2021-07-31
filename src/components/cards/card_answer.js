import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"


const Card_Answer = () => {
    const data = useStaticQuery(graphql`
    query AnswerImage {
      image: file(relativePath: { eq: "questions/logicSix-one.png" }) {
        childImageSharp {
          fixed(width: 300){
            ...GatsbyImageSharpFixed_withWebp
          }
          fluid(quality: 90, maxHeight: 500) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
    return (
        <>
        <div className='cardanswer'>
           <div className="cardanswer-container">
                <div className="cardanswer-text">
                    <h1>Answer 23</h1>          
                </div>
                <p>test question how many?</p> 
                <Img fixed={data.image.childImageSharp.fixed}
                objectFit="contain"
                objectPosition="50% 0%"
                alt="" />
           </div> 
        </div>
        </>
    )
}

export  default Card_Answer