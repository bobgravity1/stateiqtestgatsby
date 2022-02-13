import React, {useEffect} from 'react'
// components
import Loading from '../../components/loading/loading'
import Scoreoptionbuttons from '../../components/button/scoreoptionbuttons'
// the button text as well as where these buttons lead is passed as a prop from the page
// a decent amount of prop-drilling here (probably ways to avoid it but this allowed compoennt reuse)
const Card_score = ({
    style, 
    image, 
    title, 
    subtitle, 
    score, 
    pageOne, 
    pageTwo,
    buttonTextOne, 
    buttonTextTwo,
    scoreLoading}) => {
 
    useEffect(()=>{
        console.log(scoreLoading)
    },[scoreLoading])

    return (
    <main className='cardscore'>
        
          {scoreLoading===true?<article className='cardscore-loading'><p className='cardscore-loading-text'>Calculating Free Score.<br /> One Moment Please...<Loading /></p></article>:
          <>
          <article className='cardscore-container'>
          <img style={style} src={image} alt=""/>
            <h1 className='cardscore-title'>{title}<span>{score&&score}</span></h1>
            <p className='cardscore-subtitle'>{subtitle}</p>
            <Scoreoptionbuttons 
                pageOne={pageOne} 
                pageTwo={pageTwo} 
                buttonTextOne={buttonTextOne}
                buttonTextTwo={buttonTextTwo}
            />
            </article>
            </>}  
           
    </main>
    )
}

export default Card_score
