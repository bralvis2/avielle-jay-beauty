import React, { useState } from 'react';

import Home from './pages/Home'
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

import Navigation from './Nav';
import Footer from './Footer'


export default function Container() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Services') {
      return <Services />;
    }
    if (currentPage === 'Gallery') {
      return <Gallery />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <header>
        {/* We are passing the currentPage from state and the function to update it */}
        <div>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
        {/* Here we are calling the renderPage method which will return a component  */}
      </header>
      <main>
        {renderPage()}
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
