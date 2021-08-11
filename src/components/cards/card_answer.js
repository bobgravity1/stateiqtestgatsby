import React, {useEffect, useContext} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
// imported gatsby query for dynamic paths
import QuestionImage from '../gatsby-image/questionImage'
import {Button} from '../button/button'
//context- just the state is needed. the dispatch is 
// called in the testbutton component
import {QuestionsStateContext} from '../../context/GlobalContextProvider'

const Card_Answer = ({data}) => {
  const state=useContext(QuestionsStateContext)
 let question=state.question[0];
    return (
        <>
        <div className='cardanswer'>
           <div className="cardanswer-container">
                <div className="cardanswer-text">
                    <h1>Answer</h1>          
                </div>
                <p>test question how many?</p>                
           <p>MC KIND? show this from dispatch</p>           
           </div>
           {/* {MC KIND OF QUESTION????SHOW THIS KIND}      */}
        </div>
        </>
    )
}

export  default Card_Answer