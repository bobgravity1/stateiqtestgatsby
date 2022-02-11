import React from 'react'


const Split = ({imgOne, imgTwo}) => {
    return (
<>   
    <div className="split">
        <div className="split-piece split-left">
            <h1>IQ Score Analysis <br />Meaningful Results, <br /> Backed by Data</h1>
               <div className="split-left-image">
                    <img src={imgOne} alt="data-chart"/>
                    <p></p> 
                </div>
               <p>The average IQ is 100. Roughly 68% of people have an IQ between 85 and 115. What's your IQ?</p>
        </div>
        <div className="split-piece split-right">
            <h1>(IQ Score Analysis) <br />Complete IQ Profile for just <br /> $2.99! <br /> </h1>
          
                <div className="split-right-img">
                    <img src={imgTwo} alt="pricing-img" />
                </div>
                <p>Purchase a full Cognitive Analysis for just $2.99 at the end of the test! Every analysis is 100% unique. </p> 
        </div>
    </div>
</>
    )
}

export default Split;
