import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from "gatsby-image"

const Card_Question = () => {
    const data = useStaticQuery(graphql`
    query QuestionImage {
      image: file(relativePath: { eq: "questions/spatialSixteen-two.png" }) {
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
        <div className='cardquestion'>
           <div className="cardquestion-container">
                <div className="cardquestion-text">
                    <h1>Question 23</h1>                   
                </div>
                <p>test question how many?</p> 
                <Img fixed={data.image.childImageSharp.fixed}
                objectFit="contain"
                objectPosition="50% 0%"
                alt="question image" />
           </div> 
        </div>
        </>
    )
}

export  default Card_Question
