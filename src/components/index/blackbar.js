import React from 'react'
import {Button} from '../button/button'
import logoinverse from '../../images/logoinverse.svg'

const title=['Free Online Assesment', 'The Best Free IQ Test']

const Blackbar = ({button}) => {
    return (
        <div className='c blackbar'>        
        {button?(
            <div>
           <h1 className='title'>{title[0]}</h1> 
           <p className='title'>"The best test out there."</p>
           <Button page='test' size="large" color="pink"/>
            </div>
        ):
        (
            <>
            <img style={{height:'auto', marginBottom:'1vh', marginTop:'1.5vh'}} src={logoinverse} alt='iqtestinverselogo'></img>
            <h1 className='title'>{title[1]}</h1> 
            <p className='title'>"The best test out there."</p>
            </>
        )
          } 
        </div>
    )
}

export default Blackbar
