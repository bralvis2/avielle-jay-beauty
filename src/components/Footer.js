import React from 'react';
import AJIcon from '../images/AJB-icon.png'

// Style Sheet
import '../styles/Footer.css';

function Footer(){
    return (
    <footer>
        <div className='footer-content'>
            <div className='aj-icon'>
                <img
                src={AJIcon}
                alt="Avielle Jay Beauty Small Icon"
                width={'200px'}
                />
            </div>
            <div className='socials'>
                <h1>FOLLOW <br/>ALONG</h1>
                <h4>@AVIELLEJAYBEAUTY</h4>
                <div className='social-icon-container'>
                    <a href='https://www.instagram.com/aviellejaybeauty/'>
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
                    <a href='https://www.facebook.com/aviellejaybeauty'>
                        <div className='social-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M288 192v-38.1c0-17.2 3.8-25.9 30.5-25.9H352V64h-55.9c-68.5 
                                0-91.1 31.4-91.1 85.3V192h-45v64h45v192h83V256h56.4l7.6-64h-64z"></path>
                            </svg>
                        </div>
                    </a>
                    <a>
                        <div className='social-icons'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M256,41C137.26,41,41,137.26,41,256s96.26,215,215,215,215-96.26,215-215S374.74,41,256,
                                41Zm96.75,182.15a114.35,114.35,0,0,1-34.11-17.79V318.11c-.26,4.31-4,51.95-47.07,78.19-42.62,
                                26-86.24,8.14-90.35,6.38a52.41,52.41,0,0,1-11.1-5.16c-1.43-.89-2.8-1.84-4.11-2.83a112.93,112.93
                                ,0,0,1-16-12.77,93.27,93.27,0,0,1-28.33-66A99.63,99.63,0,0,1,128,278.53c2.88-7.69,13.59-35,
                                43.44-51.69,27.72-15.46,54.52-12,62.68-10.62-.07,4.28-.66,40-.87,53.55-2.76-.74-19.65-5-36.15,
                                5.39-15.78,9.93-19.59,25.92-20.23,28.86-.81,3.7-2.46,9.9-1,17.76a40.61,40.61,0,0,0,10,19.55,48.54
                                ,48.54,0,0,0,7.15,6.69,57.27,57.27,0,0,0,6.77,4.27l0,0,0,0,.07,0c9.4,4.92,26.21,5.45,38.55-.55,
                                17.05-8.28,26.35-27.36,26.32-38.69q-.31-105.6-.64-211.2l53.49-.31a41.07,41.07,0,0,0,1.69,12c.23.79.48,
                                1.52.74,2.23,1,2.32,2.17,5,3.62,7.88.41.8,2,4,4,7.4q.74,1.25,1.53,
                                2.52l.1.17c.15.25.31.5.47.75l.48.76A125.79,125.79,0,0,0,351,160.21c14,11.26,30,14.44,40,15.37.26
                                ,12.65.86,48,.95,53A114.45,114.45,0,0,1,352.75,223.15Z"></path>
                            </svg>
                        </div>
                    </a>
                </div>
                <div className='book-button'>
                    <button className='book-online'>
                            <a href="mailto:email@gmail.com">Book Online</a>
                            <div className='book-online-icon'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path d="M172,134a12,12,0,0,1-12-12V63a12,12,0,0,1,24,0v59A12,12,0,0,1,172,134Z"></path>
                                    <path d="M340,135a12,12,0,0,1-12-12V64a12,12,0,0,1,24,0v59A12,12,0,0,1,340,135Z"></path>
                                    <path d="M424,92H368v31a28,28,0,0,1-56,0V92H200v30a28,28,0,0,1-56,0V92H88a12,12,0,0,0-12,12V449a12,12,0,0,0,12,12H424a12,12,0,0,0,12-12V104A12,12,0,0,0,424,92ZM412,437H100V197.46H412Z"></path>
                                    <rect x="290" y="231" width="88" height="88" rx="12.34"></rect>
                                </svg>
                            </div>
                    </button>
                </div>
            </div>
            <div className='buisness-hours'>
                <h3>Buisness Hours</h3>
                <ul>
                    <li>Mon 09:00 am - 05:00 pm</li>
                    <li>Tue 09:00 am - 05:00 pm</li>
                    <li>Wed 09:00 am - 05:00 pm</li>
                    <li>Thu 09:00 am - 05:00 pm</li>
                    <li>Fri 09:00 am - 05:00 pm</li>
                    <li>Sat closed</li>
                    <li>Sun closed</li>
                </ul>
            </div>
        </div>
        <p> &#169; 2023 Avielle Jay Beauty </p>
    </footer>
    )
}

export default Footer;