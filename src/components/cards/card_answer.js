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
 console.log(question.options)
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
                  console.log(item.node.name)
                if(question.answerPhoto.value===item.node.name){
                  return  <div className="cardanswer-image"><GatsbyImage image={item.node.childImageSharp.gatsbyImageData} alt="" /></div>
                }
                })} 
           <ul>
           {question.options&&question.options.map(option=>(
                <section>
               <div>
               <li>{option.value}</li>
               {option.word&&<label>{option.word}</label>}
               </div>
               </section>
           ))}
           </ul>      
        {/* PUT THE LOGIC HERE FOR FIB */}
      {/* <section>  </section> */}
        </div>
        </>
    )
}

export  default Card_Answer