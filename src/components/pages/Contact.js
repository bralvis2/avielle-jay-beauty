import React from 'react';
import GCarousel from './page-components/G-Carousel.js'
import ContactForm from './page-components/Form.js'

import wedding from './SVG-icons/wedding-day.svg'
import contract from './SVG-icons/contract.svg'
import brushes from './SVG-icons/brushes.svg'

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
        <ContactForm />
      </div>
      <h1 className='next-steps'>next steps</h1>
      <div className='process'>
        <div className='process-card'>
          <img src={wedding} alt='wedding date'/>
          <h2>Personalized Quote</h2>
          <p>Upon availability, we will promptly deliver a personalized quote outlining the services requested</p>
        </div>
        <div className='process-card'>
          <img src={contract} alt='contract'/>
          <h2>Contract</h2>
          <p>We will then send a comprehensive contract for review and signature. Once the client returns the signed contract
            along with the agreed-upon deposit, the booking will be confirmed.</p>
        </div>
        <div className='process-card'>
          <img src={brushes} alt='makeup brush icon'/>
          <h2>The Event Day</h2>
          <p>A final confirmation of event date and times will be sent out via email the week of contracted services.
            Avielle Jay Beauty is poised and ready to enhance your natural beauty, leaving you looking absolutely radiant.
          </p>
        </div>
      </div>
      <div className='section-three-contact'>
        <h1>Frequently asked questions</h1>
        <div className='questions-answers'>
          <details>
            <summary>Can I Preview Before I Book?</summary>
            <p>
              Yes, I do provide preview makeup and hair services for an additional charge after booking.
              I highly recommend a trial before your big day to ensure you are happy with the final look.
            </p>
          </details>
          <details>
            <summary>Do You Travel For Weddings?</summary>
            <p>
              Yes, I do offer my makeup services for weddings outside of Austin, TX. I am willing
              to travel to areas surrounding Austin for an additional fee to cover travel expenses.
              Whether your wedding is in the Hill Country or beyond, I am happy to work with you to
              create the perfect look for your special day. Please contact me for more information
              and to discuss travel arrangements.
            </p>
          </details>
          <details>
            <summary>Can You Accomodate For A Large Wedding Party?</summary>
            <p>
              I am happy to accommodate large bridal parties for weddings and other special events.
              For groups larger than six, I require an additional artist to ensure that everyone receives
              the attention they deserve. There is an additional fee per artist, but I can assure you
              that my team and I will work efficiently to make sure everyone is ready on time and
              looking their best. Please don't hesitate to contact me for more information and to discuss
              your specific needs.
            </p>
          </details>
          <details>
            <summary>How Far In Advance Should I Book Your Services</summary>
            <p>
              I recommend booking as far in advance as possible to secure your desired date and time.
              Some clients book me up to a year in advance, especially for peak wedding season. However,
              I do my best to accommodate last-minute bookings if my schedule allows. It's always best to
              reach out as soon as you know your event date to ensure availability.
            </p>
          </details>
          <details>
            <summary>How Should I Prepare My Skin For Makeup Application?</summary>
            <p>
              It's important to have clean, moisturized skin before makeup application. Avoid any harsh
              scrubs or peels the day of and let me know if you have any specific skincare needs or concerns.
            </p>
          </details>
          <details>
            <summary>How Should I Prepare My Hair for Hair Services?</summary>
            <p>
              It's important to have clean, dry hair before your hair service.
            </p>
          </details>
        </div>
      </div>
    </div>
  );
}
