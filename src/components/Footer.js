import React from 'react';
import { Link } from 'react-router-dom';
import AJIcon from '../brand-images/AJB-icon.png'

// Style Sheet
import './Footer.css';

// import Nav from 'react-bootstrap/Nav';

function Footer({ handlePageChange }) {
    return (
        <footer>
            <div className='footer-content'>
                <div className='socials'>
                    <h1>FOLLOW <br />ALONG</h1>
                    <h4>@AVIELLEJAYBEAUTY</h4>
                    <div className='social-icon-container'>
                        <a href='https://www.instagram.com/aviellejaybeauty/' target="_blank" rel="noreferrer">
                            <div className='social-icons'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <circle cx="255.25" cy="256.21" r="70.68"></circle>
                                    <path d="M338,54.63H174c-62.72,0-114,51.31-114,114V343.33c0,62.73,51.32,114,114,114H338c62.72,
                                0,114-51.31,114-114V168.67C452,105.94,400.68,54.63,338,54.63ZM255.77,364.07A107.95,107.95,0,1,
                                1,363.71,256.13,107.95,107.95,0,0,1,255.77,364.07Zm109.67-192A25.56,25.56,0,1,1,391,146.5,25.56
                                ,25.56,0,0,1,365.44,172.06Z"></path>
                                </svg>
                            </div>
                        </a>
                        <a href='https://www.facebook.com/aviellejaybeauty' target="_blank" rel="noreferrer">
                            <div className='social-icons'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 
                                0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"></path>
                                </svg>
                            </div>
                        </a>
                    </div>
                </div>
                <div className='ajb-small-icon'>
                    <img
                        src={AJIcon}
                        alt="Avielle Jay Beauty Small Icon"
                    />
                </div>
                <div className='footer-nav'>
                    <h3>BROWSE</h3>
                    <ul className='footer-nav-links'>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link to={'/services'}>Services</Link></li>
                        <li><Link to={'/gallery'}>Gallery</Link></li>
                        {/* <li><Link to={'/contact'}>Contact</Link></li> */}
                    </ul>
                    <button className='blush-btn footer-btn'>
                        <Link to={'/contact'}>
                            Request a Quote
                        </Link>
                    </button>
                </div>
                {/* <div className='buisness-hours'>
                    <h3>BUSINESS HOURS</h3>
                    <ul>
                        <li>Mon 09:00 am - 05:00 pm</li>
                        <li>Tue 09:00 am - 05:00 pm</li>
                        <li>Wed 09:00 am - 05:00 pm</li>
                        <li>Thu 09:00 am - 05:00 pm</li>
                        <li>Fri 09:00 am - 05:00 pm</li>
                        <li>Sat closed</li>
                        <li>Sun closed</li>
                    </ul>
                </div> */}
            </div>
            <p> &#169; 2023 Avielle Jay Beauty </p>
        </footer>
    )
}

export default Footer;