import React, {useContext, useState, useEffect} from 'react'
//score-context
import {QuestionsStateContext} from '../../context/GlobalContextProvider'
import Layout from "../../components/layout"
import logo from '../../images/logo.svg'
// components
import Card_Score from '../../components/cards/card_score'
import SEO from '../../components/seo'
// svg - pink brain
import pinkBrain from '../../images/header-meta-icon.svg'
// text for this page
const text={
    title:"You scored: ",
    subtitle:'If you would like to find out more about your score, see where you rank compared to others, and get a full analysis of your intelligence press the blue button below! Otherwise press the home button',
    buttonTextOne:'Score Analysis',
    buttonTextTwo:'Return Home'
}

const Freescore = () => {
    const state=useContext(QuestionsStateContext);
    const [scoreLoading, setScoreLoading]=useState(true)
    const pinkBrainStyle={
        height:'5rem',
    }
    useEffect(()=>{
        setTimeout(()=>{
    setScoreLoading(false)
        },3000)
    })
    return (
    <Layout>
        <SEO title='end of test part of iq test' image={logo} />
        <Card_Score 
        scoreLoading={scoreLoading}
        pageOne='/score/description'
        pageTwo='/'
        buttonTextOne={text.buttonTextOne}
        buttonTextTwo={text.buttonTextTwo}
        title={text.title} 
        score={state.score} 
        subtitle={text.subtitle} 
        style={pinkBrainStyle} 
        image={pinkBrain} />
    </Layout>
    )
}

export default Freescore
