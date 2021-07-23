import React from 'react'
const columnText=[
{
    header:`What is an IQ test?`,
    text:`IQ stands for intelligence quotient. 
    An IQ test measures IQ, or intelligence. 
    An IQ test gives you an IQ score and evaluates 
    standard intelligence. Press the link to take 
    this IQ test!`
},
{
    header:`How it works`,
    text:`IQ tests seek to measure your fluid 
    reasoning skills. Average IQ scores range 
    from 85-115 - The average being 100. Roughly 
    66% of the population falls within this range.`
},
{
    header:`About Us`,
    text:`We offer the opportunity to test your IQ 
    in a place where your results will be kept confidential.
    We also offer a full cognitive analysis of your score 
    for an unbeatable price.`
}
]

const Column = () => {
    return (
        <>
             {/* <hr /> */}
        <div className='column'>
            {columnText.map(({header, text})=>{
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
