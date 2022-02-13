import React, {useContext, useEffect} from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import logo from '../../images/questions/logicSix-two.png'
// called in the testbutton component
import {QuestionsStateContext} from '../../context/GlobalContextProvider'


const Card_Question = ({data}) => {
  // const image = data?.avatar?.childImageSharp?.gatsbyImageData (syntax)
  const state=useContext(QuestionsStateContext)
  const question=state.question[0]
  const photoSrc=question.questionPhoto.value;
    return (
        <>
        <div className='cardquestion'>
           <div className="cardquestion-container">
                <div className="cardquestion-text">
                    <h1>Question {state.index} ({question.title})</h1>
                </div>
                <p>{question.question}</p>
                <div className="cardquestion-image">
                {/* IMAGE */}
  {/* here we are filtering through the nodes */}
                  {data.allFile.edges.map((item, index) => {
                  if(question.questionPhoto.value===item.node.name){
                    return <GatsbyImage image={item.node.childImageSharp.gatsbyImageData} alt="" />
                  }
                  })}
                </div>
           </div>
        </div>
        </>
    )
}

export  default Card_Question
