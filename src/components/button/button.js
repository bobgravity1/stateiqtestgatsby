import React from 'react'
import {Link} from 'gatsby'

export const Button = ({page, size, text, color}) => {
    return (
        <div className='button-main'>
       <Link to={`${page}`}><button className={`${color} ${size} text button-main-button`}>Start Test!</button>
       </Link>
       </div>
    )
}
