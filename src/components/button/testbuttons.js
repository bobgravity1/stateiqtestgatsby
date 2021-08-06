import React, {useEffect, useContext} from 'react'
import {Button} from './button.js'
import {Link} from 'gatsby'

import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'
import {QuestionsStateContext} from '../../context/GlobalContextProvider'

const Test_Buttons = () => {
    const dispatch=useContext(QuestionsDispatchContext)
    const state=useContext(QuestionsStateContext)
    useEffect(()=>{
        console.log(state)
    },[])

    return (
        <div className='testbuttons'>
            <Link to='/' exact><button className='blue xlarge testbuttons-button'>Home</button></Link>
            <button onClick={()=>dispatch({type:'NEXT_QUESTION'})}  className='pink xlarge testbuttons-button'>Submit</button>
        </div>
    )
}

export default Test_Buttons;
