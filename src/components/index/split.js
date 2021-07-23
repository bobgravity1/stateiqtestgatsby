import React from 'react'

// images
import logoOne from '../../images/panel.svg'
import logoTwo from '../../images/scans.svg'
import logoThree from '../../images/world.svg'
import logoFour from '../../images/charts.svg'
import logoSix from '../../images/mobile-panel.svg'

// components
import {Button} from '../button/button'

const Split = () => {
    return (
<>   
    <div className="split">
        <div className="split-piece split-left">
            <h1>Knowledge Is Power. <br />Why Not Test Your Abilities?</h1>
               <div className="split-left-image">
                    <img src={logoFour} />
                    <p></p> 
                </div>
               <p>The average IQ is 100. Most people (about 68%) have an IQ between 85 and 115. What's your IQ? stateIQtest works with you to innovate and elevate your understanding of yourself.</p>
        </div>
        <div className="split-piece split-right">
            <h1>Get a Professional Score Analysis<br />share with friends!</h1>
          
                <div className="split-right-image">
                    <img src={logoSix} />
                </div>
                <p>Purchase a full score breakdown for 1.99 at the end of the test! Every result and analysis is 100% unique. Just like you! One word though my freinddddddddddddddddddddddd. Deltaaa</p> 
        </div>
    </div>
</>
    )
}

export default Split;
