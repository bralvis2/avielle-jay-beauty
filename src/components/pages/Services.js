import React from 'react';

import serviceA from './images/service-a.png'
import serviceB from './images/service-b.png'
import serviceC from './images/service-c.png'
import serviceD from './images/service-d.png'

//Style Sheet
import './Services.css'

export default function Services() {
  return (
    <div className='services'>
      <div className='section-two-services'>
        <h1 className='services-two-header'>EXPLORE MAKEUP SERVICES</h1>
        <div className='service-details'>
          <div className='service-images'>
            <img src={serviceA} alt=''/>
          </div>
          <div className='service-bridal'>
            <h1>Bridal Airbrush Makeup Application</h1>
            <h2 className='cursive'>bride to be!</h2>
            <p>Airbrush makeup is the perfect choice for brides who want to achieve a flawless, 
              natural-looking complexion on their wedding day. Its lightweight formula creates 
              a long-lasting, smudge-proof finish that withstands tears, sweat, and humidity, 
              ensuring you look your best throughout the entire day.</p>
            <ul>
              <h3>Services Include:</h3>
              <li>AIRBRUSH MAKEUP APPLICATION</li>
              <li>LASH APPLICATION</li>
              <li> PRICE: $120</li>
            </ul>
          </div>
        </div>

        <div className='service-details'>
          <div className='service-images'>
            <img src={serviceC} alt=''/>
          </div>
          <div className='service-bridal'>
            <h1>Bridal Party Makeup Application</h1>
            <h2 className='cursive'>for the group!</h2>
            <p>For a cohesive look that complements the bride's makeup and overall wedding theme. 
              Services are perfect for the bride's bridesmaids, mother of the bride, and any other 
              members of the bridal party.</p>
            <ul>
              <li>
                <h4>TEMPTU AIRBRUSH MAKEUP APPLICATION</h4>
                <p>This technique involves spraying a fine mist of makeup onto the skin using an 
                  airbrush gun, which creates a flawless and natural-looking finish</p>
                <p>PRICE: $95</p>
              </li>
              <li>
                <h4>HD MAKEUP APPLICATION</h4>
                <p>The makeup is made with specialized light-diffusing ingredients that blur 
                  imperfections and create a smooth, even finish that looks great both in person and 
                  on camera.</p>
                <p>PRICE: $85</p>
              </li>
            </ul>
          </div>
        </div>

        <div className='service-details'>
          <div className='service-images'>
            <img src={serviceD} alt=''/>
          </div>
          <div className='service-bridal'>
            <h1>Special Occasion Makeup Application</h1>
            <h2 className='cursive'>for anyone!</h2>
            <p>Whether it's a special occasion, a photoshoot, or just a night out, professional makeup 
              services can help you achieve a stunning look that turns heads. You can enjoy a customized 
              makeup application that enhances your natural beauty and leaves you feeling confident and 
              beautiful.</p>
            <ul>
              <li>
                <h4>MAKEUP APPLICATION</h4>
                <p>Express yourself with professional makeup application to enhance your natural beauty.</p>
                <p>PRICE: $125</p>
              </li>
              <li>
                <h4>TEMPTU AIRBRUSH MAKEUP APPLICATION</h4>
                <p>The airbrush makeup technique is popular for its ability to create a lightweight, 
                  even coverage that is long-lasting and resistant to sweat and humidity</p>
                <p>PRICE: $135</p>
              </li>
              <li>
                <h4>PRIVATE MAKEUP CLASSES</h4>
                <p>Private classes can be a valuable resource for anyone looking to improve their makeup 
                  skills and techniques. These one-on-one sessions offer personalized instruction, product 
                  recommendations, and hands-on practice to help you achieve your makeup goals and enhance 
                  your overall beauty routine.</p>
                <p>PRICE: $350</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
