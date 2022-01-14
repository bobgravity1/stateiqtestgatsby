import React, {useContext} from 'react'
import {Button} from '../button/button'
import logoinverse from '../../images/logoinverse.svg'
import Wave from '../../images/wavey.svg'
//context - just the dispatch is needed to trigger first render of questions
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'
// svg
import stripe from '../../images/stripe.svg'

const title=['Free Online Assesment', 'The Best Free IQ Test']

const Blackbar = ({button, text, description}) => {
    const dispatch=useContext(QuestionsDispatchContext)
    return (
        <> 
        <div className='c blackbar'>   
           
        {button?(
            <div>
           <h1 className='title'>{text.title}</h1> 
           <p className='title'>{text.subtitle}</p>
           <p style={{fontSize:'1.2rem'}} className='title'>{text.stripeSubtitle}</p>
           {description&&<p style={{marginBottom:'-2rem'}} className='stripe-banner'>{text.checkoutSubtitle}<img className='stripe-icon' src={stripe} /></p>}
           <Button onClick={()=>dispatch({type:'NEXT_QUESTION'})} text={text.buttonText} page='/test/test' size="large" color="pink"/>
            </div>
        ):
        (
            <>
            <img style={{height:'auto', marginBottom:'1vh', marginTop:'1.5vh'}} src={logoinverse} alt='logo'></img>
            <h1 className='title'>{title[1]}</h1> 
            <p className='title'>"Exceptional service, A+ Rating"</p>
            </>
        )
          } 
        </div>
        </>
    )
}

export default Blackbar
