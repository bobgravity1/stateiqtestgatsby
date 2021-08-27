import React from 'react'


const Split = ({imgOne, imgTwo}) => {
    return (
<>   
    <div className="split">
        <div className="split-piece split-left">
            <h1>Knowledge Is Power. <br />Why Not Test Your Abilities?</h1>
               <div className="split-left-image">
                    <img src={imgOne} />
                    <p></p> 
                </div>
               <p>The average IQ is 100. Most people (about 68%) have an IQ between 85 and 115. What's your IQ?</p>
        </div>
        <div className="split-piece split-right">
            <h1>Get a Professional <br />Score Analysis for only 2.99$!</h1>
          
                <div className="split-right-image">
                    <img src={imgTwo} />
                </div>
                <p>Purchase a full score breakdown for 1.99 at the end of the test! Every analysis is 100% unique. </p> 
        </div>
    </div>
</>
    )
}

export default Split;
