import React from 'react';

import serviceHeader from './images/service-header.png'
import serviceHeaderS from './images/service-headers.png'

import serviceA from './images/service-a.png'
import serviceB from './images/service-b.png'
import serviceC from './images/service-c.png'
import serviceD from './images/service-d.png'
import serviceE from './images/service-e.png'
import serviceF from './images/service-f.png'

//Style Sheet
import './Services.css'

export default function Services() {
  return (
    <div className='services'>
      <div className='section-one-services'>
        <div className='service-header-image'>
          <img src={serviceHeader} alt=''/>
        </div>
        <div className='service-header-image-two'>
          <img src={serviceHeaderS} alt=''/>
        </div>
        <div className='service-header-text'>
          <h1>LOOK YOUR BEST</h1>
          <h2 className='cursive'>on your special day!</h2>
          <p>I strive to create a customized makeup look that highlights their unique beauty 
            and personality. Seeing the joy and satisfaction on my clients' faces when they 
            see the final result is truly rewarding, and I take pride in knowing that I have 
            helped them feel their absolute best.</p>
        </div>
      </div>
      <div className='section-two-services'>
        <h1 className='services-two-header'>EXPLORE MAKEUP SERVICES</h1>
        <div className='service-makeup-container'>
          <div className='service-images'>
            <img src={serviceA} alt=''/>
          </div>
          <div className='service-details'>
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

        <div className='service-makeup-container'>
          <div className='service-images'>
            <img src={serviceC} alt=''/>
          </div>
          <div className='service-details'>
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

        <div className='service-makeup-container'>
          <div className='service-images'>
            <img src={serviceD} alt=''/>
          </div>
          <div className='service-details'>
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

      <div className='section-three-services'>
        <h1 className='services-three-header'>EXPLORE HAIR SERVICES</h1>
        <div className='service-hair-container'>
          <div className='service-hair-details'>
            <h1>Bridal Hair Styling</h1>
            <h2 className='cursive'>bride to be!</h2>
            <p>Whether you're looking for an elegant updo, romantic waves, or a classic 
              half-up half-down style, we can create a beautiful and 
              timeless hairstyle that complements your bridal makeup and overall wedding aesthetic.</p>
            <ul>
              <h3>Services Include:</h3>
              <li>Styling Hair Accessories</li>
              <li>Bridal Veil</li>
              <li> PRICE: $125</li>
            </ul>
          </div>
          <div className='service-images'>
            <img src={serviceB} alt=''/>
          </div>
        </div>

        <div className='service-hair-container'>
          <div className='service-hair-details'>
            <h1>Bridal Party Hair Styling</h1>
            <h2 className='cursive'>for the group!</h2>
            <p>We offer a range of hair services for bridal parties to create a cohesive look that
              complements your wedding theme ensuring each member feels confident and beautiful.</p>
            <ul>
              <h3>Services Include:</h3>
              <li>
                <h4>Styling Hair Accessories</h4>
                <p>PRICE: $85</p>
              </li>
              <li>
                <h4>Flower Girl Hair Styling, 5 - 10 years of age</h4>
                <p>PRICE: $45</p>
              </li>
            </ul>
          </div>
          <div className='service-images'>
            <img src={serviceE} alt=''/>
          </div>
        </div>

        <div className='service-hair-container'>
          <div className='service-hair-details'>
            <h1>Special Occasion Hair Styling</h1>
            <h2 className='cursive'>for anyone!</h2>
            <p>Whether you want a classic or trendy look, I work closely with you to create a 
              hairstyle that perfectly complements your features, style, and personal preferences.</p>
            <p>Contact me to request pricing</p>
          </div>
          <div className='service-images'>
            <img src={serviceF} alt=''/>
          </div>
        </div>
      </div>

      <div className='section-four-services'>
        <div className='policies-container'>
          <h1>POLICIES</h1>
          <div>
            <p>To secure a booking, a deposit and signed contract are required. This deposit ensures that the 
              date and time are reserved for the client and is non-refundable. The contract outlines the terms 
              of the makeup services, including the specific services to be provided, the fee for the services, 
              and any other relevant details.
              
              For clients located in surrounding areas near Austin, Texas, there may be an additional travel fee. 
              This fee covers the cost of transportation to and from the location, as well as any other associated expenses. 
              The travel fee will vary depending on the distance traveled and other factors, such as tolls and parking fees.</p>
          </div>
        </div>
      </div>

    </div>
  );
}
