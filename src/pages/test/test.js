import React, {useState, useContext, useEffect} from "react"
import Layout from "../../components/layout"
// gatsby query w/ graphql
import { graphql } from 'gatsby'
//components
import ProgressBar from '../../components/progressBar/progress_bar'
import { Button } from "../../components/button/button";
import Test_Buttons from '../../components/button/testbuttons'
import Card_Question from '../../components/cards/card_question'
import Card_Answer from '../../components/cards/card_answer'
import SEO from '../../components/seo'
import logo from '../../images/logo.svg'
//questions-context
import {QuestionsStateContext} from '../../context/GlobalContextProvider'
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'
//navbar-context
import {ActiveNavStateContext} from '../../context/GlobalContextProvider'

const Test = ({data}) => {
  const {active}=useContext(ActiveNavStateContext);
  const state=useContext(QuestionsStateContext)
  const {deck}=state
  const [complete, setComplete]=useState(0)
  const testData = [
    { bgcolor: " #EC4899", completed: Math.ceil(complete.toFixed(2)) },
  ];
  useEffect(() => {
    if (typeof window !== `undefined`) {
      window.scrollTo(0, 0);
    }
    setComplete(prev=>prev+3.33)
  },[state.question[0]])

  return (
<>
    <Layout>
      <SEO title='the iq test' image={logo} />
        <div className={`${active?'test-active':'test'}`}>
          <div className='test-container'>
            <Card_Question data={data}/>
            <Card_Answer data={data}/>
          </div>
            <Test_Buttons />
        </div>
            {testData.map((item, idx) => (
            <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} />
            ))}
    </Layout>
</>
  )
}

// this is the page query. the data is destructured from props of component
// this is querying ALL images in the questions folder. inside images folder
// relative to gatsby.config filesystem setup
// also generates webP or fallbacks (png, jpg, etc...)
//****not sure why we have to do this in page query and cant import from gatsby image separate file
export const query = graphql`
  query {
        allFile(filter: {relativeDirectory: {eq: "questions"}}) {
        edges {
            node {
            childImageSharp {
                gatsbyImageData(layout: FIXED, placeholder: BLURRED, width: 300)
            }
            name
            }
        }
        }
    }
`

export default Test