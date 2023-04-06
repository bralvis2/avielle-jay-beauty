import React from 'react';
import GCarousel from './page-components/G-Carousel.js'
import ContactForm from './page-components/Form.js'

// Style Sheet
import './Contact.css'

export default function Contact() {
  return (
    <div className='contact'>
      <div className='section-one-contact'>
        <div className='g-carousel'>
          <GCarousel />
        </div>
        <div className='contact-header-text'>
          <h1 className='cursive'>Ready to Book?</h1>
          <p>GET IN TOUCH</p>
          <h2>SEND US AN INQUIRY</h2>
          <div className='location-details'>
            <div className='location-icon'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M255.5,470a12,12,0,0,1-9.49-4.66c-.36-.46-36.12-46.81-71.38-102.15C126.44,
                  287.57,102,231.61,102,196.88c0-84.64,68.86-153.5,153.5-153.5S409,112.24,409,196.88c0,
                  34.73-24.44,90.69-72.63,166.32-35.26,55.34-71,101.69-71.38,102.15A12,12,0,0,1,255.5,
                  470Zm0-402.63A129.64,129.64,0,0,0,126,196.88C126,217.57,138,261,194.87,350.3c23.81,
                  37.36,47.81,70.51,60.63,87.77,12.85-17.29,36.9-50.52,60.72-87.91C373.07,260.92,385,
                  217.55,385,196.88A129.64,129.64,0,0,0,255.5,67.38Z"></path>
                  <path d="M255.5,262.17a65.29,65.29,0,1,1,65.29-65.29A65.37,65.37,0,0,1,
                  255.5,262.17Zm0-106.58a41.29,41.29,0,1,0,41.29,41.29A41.33,41.33,0,0,0,255.5,155.59Z"></path>
                </svg>
            </div>
            <p>AUSTIN, TEXAS</p>
          </div>
          <p>Are you in search of pricing information or wishing to book professional makeup and hair 
            services for your wedding day? Simply complete our contact form and we will provide you 
            with a comprehensive price sheet. We can't wait to meet you and help make your special day 
            even more memorable!</p>
        </div>
      </div>
      <div className='section-two-contact'>
        <h1>SEND US AN INQUIRY</h1>
        <ContactForm />
      </div>
    </div>
  );
}
