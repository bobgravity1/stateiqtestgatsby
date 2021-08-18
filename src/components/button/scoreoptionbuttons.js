import React from 'react'
import {Button} from './button'

const Scoreoptionbuttons = () => {
    return (
        <div className='scoreoptionbuttons'>
            <div className="scoreoptionbuttons-button">
                <Button width='15rem' text='Free Score' page='test' size="xlarge" color="blue" /> 
            </div>
            <div className="scoreoptionbuttons-button">
                <Button width='15rem' text='Score & Analysis' page='test' size="xlarge" color="pink" />     
            </div>
        </div>
    )
}

export default Scoreoptionbuttons
