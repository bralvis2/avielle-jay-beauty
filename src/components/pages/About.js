import React from 'react';

import CRCarousel from './page-components/CRCarousel.js'

import header1 from './images/about-header.png'
import header2 from './images/about-header2.png'
import owner from './images/anahi.png'
import featureO from './images/feature-one.png'
import featureT from './images/feature-two.png'



//Style Sheet
import './About.css'


export default function About() {
  return (
    <div className='about'>
      <div className='section-one-about'>
        <div className='header-images'>
            <img src={header1} alt='Bride and her bridal party' width={'850px'}/>
            <img src={header2} className='img-2'alt='Bride and her bridal party' width={'900px'}/>
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
      <div className='section-two-about'>
        <div className='owner-image'>
          <img src={owner} alt='Anahi Lopez'/>
        </div>
        <div className='meet-owner'>
          <h1>Meet Anahi</h1>
          <h3>Owner & Stylist</h3>
          <p>Hi, my name is Anahi, and I am a makeup artist and hair stylist. As a mother of three, 
            I know firsthand the importance of feeling confident and beautiful, especially on your 
            big day. This is why I specialize in creating stunning bridal looks that enhance each 
            client's natural beauty and make them feel like the best version of themselves. For me, 
            there is nothing more rewarding than seeing the look of joy and satisfaction on a client's 
            face when they see their finished makeup and hair. I am passionate about my work and 
            dedicated to providing exceptional service to each and every client. With years of 
            experience in the beauty industry, I have developed a keen eye for color, composition, 
            and texture, which I use to create personalized looks that perfectly complement each 
            client's features and personality. Whether it's a natural, classic, or dramatic look, I 
            strive to make every client feel confident and beautiful from the inside out.</p>
        </div>
      </div>
      <div className='section-three-about'>
        <h1>I'VE BEEN FEATURED ON</h1>
        <div className='featured-icons'>
          <img src={featureO} alt='The know best of weddings award 2023' width={'100px'}/>
          <img src={featureT} alt='The know best of weddings award 2020' width={'105px'}/>
        </div>
      </div>
      <div className='section-five'>
                <h1>customer reviews</h1>
                <div>
                    <CRCarousel />
                </div>
            </div>
    </div>
  );
}
