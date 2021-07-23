import * as React from "react";
import Layout from "../components/layout"
import {useState, createContext} from "react"
// components
import Banner from '../components/index/banner'
import Column from '../components/index/column'
import Blackbar from '../components/index/blackbar'
import Paragraph from '../components/index/paragraph'
import Split from '../components/index/split'
import SEO from '../components/seo'
// images
import logo from '../images/logo.svg'

// page content
const text=[
  'Many tests seek to measure what you already know. This is referred to as Crystallized IQ, or Crystallized Intelligence. Crystallized IQ can be expanded upon overtime, whereas Fluid IQ, or fluid intelligence/fluid reasoning classification attempts to measure what you have the capability to learn. Prior to the invention of the first IQ test, there was no viable way to measure intelligence (IQ), leading people to believe in many false presumptions about IQ and IQ tests; such as head size seen as being related to intelligence, intelligence being routinely correlated with birth order, and left handed people being more intelligent than their right handed counterparts. To read more about previous misconceptions about intelligence born from these previous IQ tests, click here.',
  `IQ assessments have been performed for purposes of job recruitment, military service induction, and cases of identifying intellectual disability. IQ tests are performed to assess your intellectual ability, or your IQ; this is done by comparison of your IQ test score relative to a wider population of IQ test score data. If you score an IQ test score within the higher end on an IQ test, it is an indication of your intellectual abilities relative to that area. Of the many abilities measured by IQ tests, including linguistic ability and numerical reasoning, general logic and pattern recognition, the extent to which your final IQ test score is reflective of your real world abilities tends to fall the more variables you try to measure. To solve this issue, we only measure three variables in coming to our overall IQ test score. All purchases of our IQ test service help to fund more of our IQ test research, IQ test development and IQ test validity. For more information about purchasing our IQ test service, If you are scored as having an IQ test result within a certain unexpected range of intelligence, you should not take that as a reflection of what you can accomplish. The world is your oyster, and making IQ tests free and accessible to everybody is our specialty. To read more about our research, here.`,
  `IQ test scores have been seen as being generally reflective of financial success, but not always. IQ tests and IQ scores have become controversial in recent years, due to their dependency on culturally skewed imagery or language, skewing IQ test results towards people with certain cultural proclivities. IQ test scores have been seen as being generally reflective of financial success, but not always. IQ tests and IQ scores have become controversial in recent years, due to their dependency on culturally skewed imagery or language, skewing IQ test results towards people with certain cultural proclivities. To read more information about IQ tests, please click here. IQ tests like the ASVAB, SAT, ACT, seek to measure your fluid intelligence, also called fluid reasoning, or things you have the capability of learning. Your scores on these tests decide what job is most suited to both your crystallized knowledge and your fluid reasoning skills. Many employers use an IQ test of some variation in order to predict workplace performance, typically the Wonderlic test. IQ tests today have a variety of applications in both professional life and education. IQ scores have even been correlated with increased morbidity and mortality.`
]

export const NavActive=createContext()


const IndexPage = () => {
const [active, setActive]=useState()
  return (
    <>
  <NavActive.Provider value={active}>
    <SEO description="a hard brown lump" title={'stateIQtest'} />
   <Layout active={active} setActive={setActive}>
    <div className={`${active&&'body-active'}`}>
      <Banner />
      <Column />
      <Paragraph text={text} header/>
      <Blackbar /> 
      <Paragraph text={text} />
      <Blackbar button />
      <Split />
      <div className='c'>
      <Blackbar />
      </div>
    </div>
  </Layout>
</NavActive.Provider>
  </>
  );
};

export default IndexPage;



