import React, {useEffect, useContext} from 'react'
import {Button} from './button.js'
import {Link} from 'gatsby'
// context - just the dispatch it needed to trigger the reducer
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'

const Test_Buttons = () => {
    //  Submit Answer Function
    const answerSubmit=()=>{
        dispatch({type:'NEXT_QUESTION'})
        dispatch({type:'SUBMIT_ANSWER'})
        window.scrollTo(0,0)
        }
    const dispatch=useContext(QuestionsDispatchContext)
    return (
        <div className='testbuttons'>
            <Link to='/' exact><button className='blue xlarge testbuttons-button'>Back</button></Link>
            <button onClick={()=>answerSubmit()}  className='pink xlarge testbuttons-button'>Submit</button>
        </div>
    )
}

export default Test_Buttons;
