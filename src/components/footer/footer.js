import React from 'react'
import logo from '../../images/logo-text-inverse.svg';
import facebook from '../../images/facebook.svg';
import twitter from '../../images/twitter.svg';
import youtube from '../../images/youtube.svg';
import instagram from '../../images/instagram.svg';

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
            <p className='footer-text-desktop'>Copyright © 2021. All rights reserved. developed by Square1 and 
                    powered by PublisherPlus.com</p>
            </div>
            <div className="footer-links">
                <ul>
                    <section>
                        <h1>Policies</h1>
                            <li>Schedule</li>
                            <li>Get in Touch</li>
                            <li>Video</li>
                            <li>About</li>
                    </section>
                    <section className='footer-podcasts'>
                        <div>
                        <h1>Why Our Test</h1>
                            <li>Foodcast</li>
                            <li>Daily Dilemma</li>
                            <li>Documentaries</li>
                            <li>Irish Beats</li>
                        </div>
                    </section>
                    <section>
                        <h1>Other</h1>
                            <li>Complaints</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Terms & Conditions</li>
                    </section>
                </ul>
            </div>
                <p className='footer-text-mobile'>
                    Copyright © 2021. All rights 
                    reserved. developed by stateIQtest © 
                </p>
            </div>
        </div>
    )
}

export default Footer