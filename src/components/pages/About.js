import React from 'react';

import header1 from './images/about-header.png'
import header2 from './images/about-header2.png'

//Style Sheet
import './About.css'

import Image from 'react-bootstrap/Image'


export default function About() {
  return (
    <div className='about'>
      <div className='section-one-about'>
        <div className='header-images'>
            <Image src={header1} alt='Bride and her bridal party' width={'850px'}/>
            <Image src={header2} className='img-2'alt='Bride and her bridal party' width={'900px'}/>
        </div>
        <div className='mission-statement-container'>
          <div className='mission-statement'>
            <h1>OUR MISSION IS TO MAKE YOU FEEL BEAUTIFUL</h1>
            <p>
              We strive to provide high-quality, personalized makeup services that enhance 
              natural beauty, complement individual style, and exceed expectations. With our 
              passion for makeup artistry and attention to detail, we aim to create a stress-free 
              and enjoyable experience for each bride, ensuring they feel confident and radiant as 
              they walk down the aisle.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
