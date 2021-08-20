import * as React from "react";
import Layout from "../../components/layout"
import logo from '../../images/logo.svg'
// components
import Card_Score from '../../components/cards/card_score'
import SEO from '../../components/seo'
// svg - pink brain
import pinkBrain from '../../images/header-meta-icon.svg'
// text for this page
const text={
    title:"Congratulations! You Finished the Test!",
    subtitle:'To view you results press one of the options below:',
    buttonTextOne:'Free Score',
    buttonTextTwo:'Score & Analysis'
}
const endtest = () => {
    const pinkBrainStyle={
        height:'5rem',
    }
    return (
    <>
        <Layout>
            <SEO title='end of test part of iq test' image={logo} />
            <Card_Score 
            pageOne='/score/freescore'
            pageTwo='/score/description'
            buttonTextOne={text.buttonTextOne}
            buttonTextTwo={text.buttonTextTwo}
            title={text.title} 
            subtitle={text.subtitle} 
            style={pinkBrainStyle} 
            image={pinkBrain} />
        </Layout>
    </>
    )
}

export default endtest
