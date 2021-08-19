import React from 'react'
// components
import Scoreoptionbuttons from '../../components/button/scoreoptionbuttons'
// the button text as well as where these buttons lead is passed as a prop from the page
// a decent amount of prop-drilling here (probably ways to avoid it but this allowed compoennt reuse)
const card_score = ({
    style, 
    image, 
    title, 
    subtitle, 
    score, 
    pageOne, 
    pageTwo,
    buttonTextOne, 
    buttonTextTwo}) => {
    return (
        <main className='endtest'>
        <article className='endtest-container'>
            <img style={style} src={image} />
            <h1 className='endtest-title'>{title}{score&&score}</h1>
            <p className='endtest-subtitle'>{subtitle}</p>
            <Scoreoptionbuttons 
                pageOne={pageOne} 
                pageTwo={pageTwo} 
                buttonTextOne={buttonTextOne}
                buttonTextTwo={buttonTextTwo}
            />
        </article>
    </main>
    )
}

export default card_score
