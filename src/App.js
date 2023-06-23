import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'

// Pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

// Images
import Logo from "./brand-images/logo.png"

// Styles 
import './App.css'
import './components/Nav.css'

const App = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <Router basename='/avielle-jay-beauty'>
      <div className='announcement'>
        <div>
          <p>Book Today! Call/Text 512-829-7997 or send us a message from the site!</p>
        </div>
      </div>
      <nav className='main-navbar'>
        <div className='logo-item'>
          <Link to={'/'}>
            <img src={Logo} width={'400px'} alt='Avielle Jay Beuty, Heartlock Texas' />
          </Link>
        </div>
        <ul className={isMobile ? 'nav-links-mobile' : 'main-nav-links'}
          onClick={() => setIsMobile(false)}>

          <li><Link to={'/about'}>About</Link></li>
          <li><Link to={'/services'}>Services</Link></li>
          <li><Link to={'/gallery'}>Gallery</Link></li>
          <li><Link to={'/contact'}>Request a Quote</Link></li>
        </ul>
        <button className='mobile-menu-icon'
          onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <i className='fa fa-xmark'></i> : <i className='fa fa-bars'></i>}
        </button>
      </nav>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/services" element={<Services />} exact />
        <Route path="/gallery" element={<Gallery />} exact />
        <Route path="/contact" element={<Contact />} exact />
      </Routes>
      <Footer />
    </Router>
  );

}


export default App;
