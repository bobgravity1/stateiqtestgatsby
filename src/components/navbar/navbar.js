import React, {useEffect, useContext} from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.svg'
// context
import {ActiveNavStateContext} from '../../context/GlobalContextProvider'
import {ActiveNavDispatchContext} from '../../context/GlobalContextProvider'
import {QuestionsDispatchContext} from '../../context/GlobalContextProvider'
import {initialState} from '../../reducers/activeNavReducer'
const Navbar = (props) => {
const {active}=useContext(ActiveNavStateContext);
const dispatch=useContext(ActiveNavDispatchContext);
const dispatchTwo=useContext(QuestionsDispatchContext);
    return (
    <>
    <div className='plz body'>   
        <nav className={`${active&&'active'}`}>
            <Link to='/'>
                <div onClick={()=>dispatchTwo({type:'INIT_STATE', payload:initialState})} className='logo'>
                <img style={{height:'auto', margin:'1vh 0vw'}} src={logo} alt='iqtestlogo' />
            </div>
            </Link>
            <ul className={`${active&&'nav-active'} nav-links`}>
            <div onClick={()=>dispatch({type:'LINK_CLICKED'})}>
                <Link style={{ textDecoration:'none'}} to="/whyourtest"><li>Why Our IQ Test</li></Link>
                <Link style={{ textDecoration:'none'}} to="/aboutus"><li>About Us</li></Link>
                <Link style={{ textDecoration:'none'}} to="/research"><li>Research</li></Link>
                <Link style={{ textDecoration:'none'}} to="/news"><li>News </li></Link>
                <Link style={{ textDecoration:'none'}} to="/faq"><li>FAQ </li></Link>
                <Link style={{ textDecoration:'none'}} to="/readus"><li>Read Us </li></Link>
            </div>
            </ul>       
            <div onClick={()=>dispatch({type:'SET_ACTIVE'})} className='burger'>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    </div>
    </>
    )
}

export default Navbar
