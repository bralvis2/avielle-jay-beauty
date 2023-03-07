import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

export default function Container(){
    return (
        <div>
          <header>
            <Nav/>
          </header>
          <main>Main Content</main>
          <Footer/>
        </div>
    );
}


