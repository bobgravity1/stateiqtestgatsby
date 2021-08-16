import React from 'react'

const Paragraph = ({header, text}) => {
    return (
        <div className='p-container'>
        <div className={`${!header&&'header-text'} paragraph`}>
            {header?
            <>
             <h1 className="title paragraph-header">History of IQ</h1>
             <div className='text paragraph-paragraph'>{text[0]}</div>  
             <div className='text paragraph-paragraph'>{text[1]}</div> 
             </>
             :
             <>
             <p className='x text paragraph-paragraph'>{text[2]}</p> 
             </>
            }           
        </div>
        </div>
    )
}

export default Paragraph
