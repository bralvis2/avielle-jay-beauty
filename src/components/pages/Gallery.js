import React from 'react';

import galleryHeader from './images/gallery-header.png'
import galleryHeaderTwo from './images/gallery-header2.png'

//Style Sheet
import './Gallery.css'

export default function Gallery() {
  return (
    <div className='gallery'>
      <div className='section-one-gallery'>
        <div className='gallery-header-img'>
          <img src={galleryHeader} alt='Bride and her bridal party in blue'/>
        </div>
        <div className='gallery-header-img-two'>
          <img src={galleryHeaderTwo} alt='Bride and Groom'/>
        </div>
        <div className='gallery-header-text'>
          <h1 className='cursive'>explore past client's</h1>
          <h2 className=''>BRIDAL LOOKS</h2>
          <h3>I STRIVE TO MAKE EVETY CLIENT FEEL CONFIDENT AND BEAUTIFUL.</h3>
        </div>
      </div>
    </div>
  );
}
