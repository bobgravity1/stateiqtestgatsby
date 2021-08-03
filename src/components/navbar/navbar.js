import React, {useEffect, useContext} from 'react'
import {Link} from 'gatsby'
import logo from '../../images/logo.svg'

// context
import {GlobalStateContext} from '../../context/GlobalContextProvider'
import {GlobalDispatchContext} from '../../context/GlobalContextProvider'

const Navbar = (props) => {
const {active}=useContext(GlobalStateContext);
const dispatch=useContext(GlobalDispatchContext);
useEffect(()=>{
console.log(active)
},[active])

    return (
        <>
        <div className='plz body'>   
    <nav className={`${active&&'active'}`}>
            <div className='logo'>
                <img style={{height:'auto', margin:'1vh 0vw'}} src={logo} alt='iqtestlogo' />
            </div>

            <ul className={`${active&&'nav-active'} nav-links`}>
            <div>
                <Link style={{ textDecoration:'none'}} to="/"><li>Why Our IQ Test</li></Link>
                <Link style={{ textDecoration:'none'}} to="/"><li>About Us</li></Link>
                <Link style={{ textDecoration:'none'}} to="/"><li>Research</li></Link>
                <Link style={{ textDecoration:'none'}} to="/"><li>News </li></Link>
                <Link style={{ textDecoration:'none'}} to="/"><li>FAQ </li></Link>
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
