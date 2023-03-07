import React from 'react';
import logo from '../images/logo.png'

// Style Sheet
import '../styles/container.css';

function Nav(){
    return (
    <div>
        <div className='announcement'>
            <div>
                <p>Book Today! Call/Text 512-829-7997 or send us a message from the site!</p>
            </div>
        </div>
        <h1>
            <a>
                <img src={logo} className='logo' alt='Avielle Jay Beuaty' width={'380px'}/>
            </a>
        </h1>
        <nav>
          <ul>
            <li><a>About</a></li>
            <li><a>Services</a></li>
            <li><a>Gallery</a></li>
            <li><a>Contact</a></li>
          </ul>
        </nav>
    </div>
    )
}

export default Nav;