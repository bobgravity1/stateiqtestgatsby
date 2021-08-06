import React, {useContext, useEffect} from "react"
import Layout from "../components/layout"
//components
import { Button } from "../components/button/button";
import Test_Buttons from '../components/button/testbuttons'
import Card_Question from '../components/cards/card_question'
import Card_Answer from '../components/cards/card_answer'
import SEO from '../components/seo'
// images
import logo from '../images/logo.svg'
//questions-context
import {QuestionsStateContext} from '../context/GlobalContextProvider'
import {QuestionsDispatchContext} from '../context/GlobalContextProvider'
//navbar-context
import {ActiveNavStateContext} from '../context/GlobalContextProvider'


const Test = () => {
  const {active}=useContext(ActiveNavStateContext);
  const {deck}=useContext(QuestionsStateContext)

  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
<>
    <Layout>
      <SEO title='test part of iq test' image={logo} />
        <div className={`${active?'test-active':'test'}`}>
          <div className='test-container'>
        <Card_Question />
        <Card_Answer/>
        </div>
        <Test_Buttons />
        </div>
    </Layout>
</>
  )
}

export default Test