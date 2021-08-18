import React, {useEffect, useContext} from 'react'
import {Link} from 'gatsby'
// context - just the dispatch it needed to trigger the reducer
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'
import {QuestionsStateContext} from '../../context/GlobalContextProvider'

const Test_Buttons = () => {
    //  Context
    const dispatch=useContext(QuestionsDispatchContext)
    const state=useContext(QuestionsStateContext)
    //  Submit Answer Function
    useEffect(()=>{
        console.log(state.index)
    })
    const answerSubmit=(answer)=>{      
        dispatch({type:'SUBMIT_ANSWER', payload:{answer: answer}})
        dispatch({type:'NEXT_QUESTION'})
    
        window.scrollTo(0,0)
    }
    return (
        <div className='testbuttons'>
        {state.index<30&&<Link to='/' exact><button className='blue xlarge testbuttons-button'>Restart</button></Link>}
        {state.index<30?<button onClick={()=>answerSubmit(state.answer)}  className='pink xlarge testbuttons-button'>Submit</button>
        :<Link to='/endtest'><button className='pink xlarge testbuttons-button'>End Test</button></Link>}
        </div>
    )
}

export default Test_Buttons;
