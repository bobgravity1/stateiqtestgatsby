import React from 'react'
import {Link} from 'gatsby'

export const Button = ({width, page, size, text, color}) => {
    const widthset={
        width:`${width}`
    }
    console.log(width)

    return (
    <div className='button-main'>
       <Link to={`${page}`}>
           <button style={widthset} className={`${color} ${size} text button-main-button`}>{text}</button>
       </Link>
    </div>
    )
}
