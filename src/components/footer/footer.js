import React from 'react';
import logo from '../../images/logo-text-inverse.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import youtube from '../../images/youtube.svg';
import instagram from '../../images/instagram.svg';
import { Link } from 'gatsby';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
            <div className='footer-desktop'>
                <img className='footer-logo' src={logo} alt='footer logo' />
            <div className='footer-social'>
                <img src={facebook} alt='facebook logo' />
                <img src={twitter} alt='twitter logo' />
                <img src={youtube} alt='youtube logo' />
                <img src={instagram} alt='instagram logo' />
            </div>
            <p className='footer-text-desktop'>Copyright © 2021. All rights reserved. developed by STATEIQTEST LIMITED. 
                   </p>
            </div>
            <div className="footer-links">
                <ul>
                    <section>
                        
                        <h1>Policies</h1>
                        <ol>
                            <li>
                            <Link to="/readus/privacypolicy">Privacy Policy</Link>
                            </li>
                            <li>
                            <Link to="/readus/cookiepolicy">Cookie Policy</Link>
                            </li>
                            <li>
                            <Link to="/readus/termsofservice">Terms and Conditions</Link>
                            </li>
                            <li>
                            <Link to="/readus/disclaimer">Disclaimer</Link>
                            </li>
                        </ol>
                    </section>
                    <section className='footer-podcasts'>
                        <div>
                        <h1>Read Us</h1>
                        <ol>
                            <li>
                            <Link to="/readus/euphoricrecall">Euphoric Recall</Link>
                            </li>
                            <li>
                            <Link to="/readus/raiseyouriq/">5 Ways to Increase Your IQ!</Link>
                            </li>
                            <li>
                            <Link to="/whyourtest/">Why our IQ Test?</Link>
                            </li>
                            <li>
                            <Link to="/news/einstein/">How Sleep Impacts the Brain</Link>
                            </li>
                        </ol>
                        </div>
                    </section>
                    <section>
                        <h1>News</h1>
                        <ol>
                            <li>
                            <Link to="/news/booksvsscreens/">Books vs Screens</Link>
                            </li>
                            <li>
                            <Link to="/news/raveniq/">What is a Ravens IQ?</Link>
                            </li>
                            <li>
                            <Link to="/news/zombieplants/">Zombie Plants?</Link>
                            </li>
                            <li>
                            <Link to="/news/5chernobylfacts/">5 Chernobyl Facts</Link>
                            </li>
                        </ol>
                       
                    </section>
                </ul>
            </div>
                <p className='footer-text-mobile'>
                    Copyright © 2022. All rights 
                    reserved. developed by stateIQtest © 
                </p>
            </div>
        </div>
    )
}

export default Footer