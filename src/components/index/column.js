import React from 'react'

const Column = ({text}) => {
    console.log(text)
    return (
        <>
             {/* <hr /> */}
        <div className='column'>
            {text.map(({header, text})=>{
                return (    
                <div className='column-card'>
                    <hr />
                <h1 className='title column-title'>{header}</h1>
                <p className='text column-text'>{text}</p>
                </div>
                
                )
            })}
      </div>
      </>
    )
}

export default Column
