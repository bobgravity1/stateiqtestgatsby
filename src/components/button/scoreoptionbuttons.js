import React from 'react'
import {Button} from './button'

const Scoreoptionbuttons = ({pageOne, pageTwo, buttonTextOne, buttonTextTwo}) => {
    return (
        <div className='scoreoptionbuttons'>
            <div className="scoreoptionbuttons-button">
                <Button page={pageOne} width='15rem' text={buttonTextOne} size="xlarge" color="blue" /> 
            </div>
            <div className="scoreoptionbuttons-button">
                <Button page={pageTwo} width='15rem' text={buttonTextTwo} size="xlarge" color="pink" />     
            </div>
        </div>
    )
}

export default Scoreoptionbuttons
