import * as React from "react";
import Layout from "../components/layout"
import logo from '../images/logo.svg'
// components
import Scoreoptionbuttons from '../components/button/scoreoptionbuttons'
// svg - pink brain
import pinkBrain from '../images/header-meta-icon.svg'

const endtest = () => {
    const pinkBrainStyle={
        height:'5rem',
    }
    return (
        <>
    <Layout>
        <main className='endtest'>
            <article className='endtest-container'>
                <img style={pinkBrainStyle} src={pinkBrain} />
                <h1 className='endtest-title'>Congratulations! You Finished the Test!</h1>
                <p className='endtest-subtitle'>To view you results press one of the options below:</p>
      
            <Scoreoptionbuttons />
            </article>
        </main>
    </Layout>
    </>
    )
}

export default endtest
