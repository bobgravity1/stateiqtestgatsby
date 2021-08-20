import React, {useEffect, useState, useContext} from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
// components
import {Button} from '../button/button'
//context
import {QuestionsStateContext} from '../../context/GlobalContextProvider'
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'
//
const Card_Answer = ({data}) => {
  const [active, setActive]=useState({active:false, index:null})
  const state=useContext(QuestionsStateContext)
  const dispatch=useContext(QuestionsDispatchContext)
  let question=state.question[0];
  useEffect(()=>{
    setActive({active:false, index:null})
  },[state.question[0]])

  const optionSelect=(option, index)=>{ 
    dispatch({type:'CURRENT_ANSWER', payload: {answer: option}})
    // here we are assigning an index and active state to toggle
    // each question option (a,c,b,d, etc.)
    setActive({active:!active.active, index:index})  
  }

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
                  return <section><div className="cardanswer-image"><GatsbyImage image={item.node.childImageSharp.gatsbyImageData} alt="" /></div></section>
                }
                })} 
           <ul>
    {/* MC OPTIONS */}    
           {question.options&&question.options.map((option, index)=>(     
            <section>
                <div>
                    <li className={`${index===active.index?`cardanswer-option-active`:'cardanswer-option-inactive'}`} onClick={()=>optionSelect(option.value, index)}>{option.value}</li>
                    {option.word&&<label>{option.word}</label>}
                </div>
            </section>
               ))}
           </ul>      
       
    {/* FIB INPUT PANEL GOES HERE! */}
            {question.type==='FIB'&&
                <div className='form'>
                    <input onChange={e=>dispatch({type:'CURRENT_ANSWER', payload: {answer: e.target.value.toLowerCase()}})} type='text' placeholder=" " name='name' autocomplete='off' />
                    <label onClick={e=>optionSelect(e.target.value)} for='name' className='label-name'>
                        <span className='cardanswer-contentname'>Type Answer Here:</span>
                    </label>
                </div>}
    </div>
        </>
    )
}

export  default Card_Answer