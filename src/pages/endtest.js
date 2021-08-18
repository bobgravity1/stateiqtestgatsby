import * as React from "react";
import Layout from "../components/layout"
import logo from '../images/logo.svg'
// components
import Scoreoptionbuttons from '../components/button/scoreoptionbuttons'
// svg - pink brain
import pinkBrain from '../images/pinkbrain.svg'

const endtest = () => {
    return (
        <>
    <Layout>
        <main className='endtest'>
            <article className='endtest-container'>
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
