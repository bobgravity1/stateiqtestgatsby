import React from 'react'
import {Button} from './button.js'
import {Link} from 'gatsby'

const Test_Buttons = () => {
    return (
        <div className='testbuttons'>
            <Link to='/' exact><button className='blue xlarge testbuttons-button'>Home</button></Link>
            <button className='pink xlarge testbuttons-button'>Submit</button>
        </div>
    )
}

export default Test_Buttons;
