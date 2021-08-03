import React, {useContext, useEffect} from "react"
import Layout from "../components/layout"
//components
import Card_Question from '../components/cards/card_question'
import Card_Answer from '../components/cards/card_answer'
import SEO from '../components/seo'
// images
import logo from '../images/logo.svg'
//question deck--already randomized and shuffled
import {deckShuffled} from "../questions/questionList"
import {NavActive} from '../components/layout.js'

const Test = () => {
  const active=useContext(NavActive)

  useEffect(()=>{
    console.log(active)
    window.scrollTo(0, 0);
  },[])

  return (
<>
      <SEO title='test part of iq test' image={logo} />
        <div className={`${active&&'test'}`}>
        <Card_Question />
        <Card_Answer/>
        </div>
</>
  )
}

export default Test