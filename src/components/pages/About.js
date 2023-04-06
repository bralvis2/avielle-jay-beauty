import React from 'react';

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
          <div className='meet-owner-header'>
            <h1>Meet Anahi</h1>
            <h3>Owner & Stylist</h3>
          </div>
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
            strive to make every client feel confident and beautiful.</p>
        </div>
      </div>
      

      <div className='section-four'>
                <h1>WHAT WE HAVE TO OFFER</h1>
                <div className='offer-card-container'>
                    <div className='offer-card'>
                        <div className='offer-card-heading'>
                            <h2><span className='number'>01</span> ATTENTION TO DETAIL</h2>
                        </div>
                        <div className='offer-card-content'>
                        <p>Attention to detail is a key aspect of my work as a makeup artist, and I strive to ensure that every 
                            aspect of my client's final look is flawless. I perform a detailed inspection of the final look to 
                            ensure that everything is in place and that the makeup complements the client's unique features. I 
                            am able to create a polished and professional finish that my clients will love.</p>
                        </div>
                    </div>
                    <div className='offer-card'>
                        <div className='offer-card-heading'>
                            <h2><span className='number'>02</span> CLIENT VISION</h2>
                        </div>
                        <div className='offer-card-content'>
                            <p> From the initial consultation to the final touches, I am dedicated to creating a look that not only meets but exceeds 
                                their expectations. Whether my client desires a natural or bold look, I tailor my approach to meet 
                                their unique needs and preferences. Above all, my ultimate goal is to create a look that enhances my 
                                client's natural beauty and makes them feel confident and radiant.</p>
                        </div>
                    </div>
                    <div className='offer-card'>
                        <div className='offer-card-heading'>
                            <h2><span className='number'>03</span> SKILLS & EXPERTISE</h2>
                        </div>
                        <div className='offer-card-content'>
                            <p>With years of experience and training in various makeup techniques, I have developed a keen eye for 
                                color, texture, and composition. I use my skills to tailor each application to the client's unique 
                                needs and preferences. I stay up-to-date with the latest trends and techniques to ensure that my 
                                clients receive the best possible service.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='section-three-about'>
              <h1>I'VE BEEN FEATURED ON</h1>
              <div className='featured-icons'>
                <img src={featureO} alt='The know best of weddings award 2023' width={'100px'}/>
                <img src={featureT} alt='The know best of weddings award 2020' width={'105px'}/>
              </div>
            </div>
    </div>
  );
}
