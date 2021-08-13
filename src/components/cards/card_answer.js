import React, {useEffect, useContext} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Img from "gatsby-image"
// imported gatsby query for dynamic paths
import QuestionImage from '../gatsby-image/questionImage'
import {Button} from '../button/button'
//context
import {QuestionsStateContext} from '../../context/GlobalContextProvider'
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'
//
const Card_Answer = ({data}) => {
  const state=useContext(QuestionsStateContext)
  const dispatch=useContext(QuestionsDispatchContext)
  let question=state.question[0];
    return (
        <>
    <div className='cardanswer'>
           <div className="cardanswer-container">
                <div className="cardanswer-text">
                    <h1>Answer</h1>          
                </div>     
           </div>         
                {/* IMAGE */}
    {/* here we are filtering through the nodes */}
          {question.answerPhoto&&data.allFile.edges.map((item, index) => {
                if(question.answerPhoto.value===item.node.name){
                  return  <div className="cardanswer-image"><GatsbyImage image={item.node.childImageSharp.gatsbyImageData} alt="" /></div>
                }
                })} 
           <ul>
    {/* MC OPTIONS */}    
           {question.options&&question.options.map(option=>(
            <section>
                <div>
                    <li onClick={e=>dispatch({type:'CURRENT_ANSWER', payload: {answer: option.value}})}>{option.value}</li>
                    {option.word&&<label>{option.word}</label>}
                </div>
            </section>
               ))}
           </ul>      
    {/* FIB INPUT PANEL GOES HERE! */}
            {question.type==='FIB'&&
                <div className='form'>
                    <input onChange={e=>dispatch({type:'CURRENT_ANSWER', payload: {answer: e.target.value.toLowerCase()}})} type='text' placeholder=" " name='name' autocomplete='off' />
                    <label for='name' className='label-name'>
                        <span className='cardanswer-contentname'>Type Answer Here:</span>
                    </label>
                </div>}
    </div>
        </>
    )
}

export  default Card_Answer