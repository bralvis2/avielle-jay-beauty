import React from 'react';
import Nav from './Nav';
import Footer from './Footer';
import Home from './pages/Home';

export default function Container(){
    return (
        <div>
          <header>
            <Nav/>
          </header>
          <main>
            <Home/>
          </main>
          <Footer/>
        </div>
    );
}


