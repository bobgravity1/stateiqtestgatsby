import React, {useContext, useEffect} from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import logo from '../../images/questions/logicSix-two.png'
import { StaticImage } from "gatsby-plugin-image"
// called in the testbutton component
import {QuestionsStateContext} from '../../context/GlobalContextProvider'
// gatsby photo
import {data} from '../gatsby-image/questionImage'

const Card_Question = ({data}) => {
  console.log(data)
  // const image = data?.avatar?.childImageSharp?.gatsbyImageData?????? syntax????
  const state=useContext(QuestionsStateContext)
  let question=state.question[0]
  let photoSrc=question.questionPhoto.value;

// const data = graphql`
    return (
        <>
        <div className='cardquestion'>
           <div className="cardquestion-container">
                <div className="cardquestion-text">
                    <h1>Question 23 ({question.title})</h1>                   
                </div>
                <p>{question.question}</p> 
                {/* here we are filtering through the nodes */}
                {data.allFile.edges.map((item, index) => {
                  console.log(item.node.name)
        if(question.questionPhoto.value===item.node.name){
          return <GatsbyImage image={item.node.childImageSharp.gatsbyImageData} alt="" />
        }
      })}
                <StaticImage src={`../../images/questions/${photoSrc}`}></StaticImage>
           </div> 
        </div>
        </>
    )
}

export  default Card_Question
