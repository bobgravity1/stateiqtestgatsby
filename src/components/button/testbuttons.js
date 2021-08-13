import React, {useEffect, useContext} from 'react'
import {Button} from './button.js'
import {Link} from 'gatsby'
// context - just the dispatch it needed to trigger the reducer
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'
import {QuestionsStateContext} from '../../context/GlobalContextProvider'

const Test_Buttons = () => {
    //  Submit Answer Function
    const answerSubmit=(answer)=>{      
        dispatch({type:'SUBMIT_ANSWER', payload:{answer: answer}})
        dispatch({type:'NEXT_QUESTION'})
        window.scrollTo(0,0)
        console.log(state)
        }
    const dispatch=useContext(QuestionsDispatchContext)
    const state=useContext(QuestionsStateContext)
    return (
        <div className='testbuttons'>
            <Link to='/' exact><button className='blue xlarge testbuttons-button'>Back</button></Link>
            <button onClick={()=>answerSubmit(state.answer)}  className='pink xlarge testbuttons-button'>Submit</button>
        </div>
    )
}

export default Test_Buttons;
