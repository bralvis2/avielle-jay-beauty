import React from 'react';

//Importing Images
import galleryHeader from './images/gallery-header.png'
import galleryHeaderTwo from './images/gallery-header2.png'

import galleryA from './gallery-images/gallery-a.png'
import galleryB from './gallery-images/gallery-b.png'
import galleryC from './gallery-images/gallery-c.png'
import galleryD from './gallery-images/gallery-d.png'
import galleryE from './gallery-images/gallery-e.png'
import galleryF from './gallery-images/gallery-f.png'
import galleryG from './gallery-images/gallery-g.png'

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
          <h1>explore past client's</h1>
          <h2 className=''>BRIDAL LOOKS</h2>
          <h3>I STRIVE TO MAKE EVETY CLIENT FEEL CONFIDENT AND BEAUTIFUL.</h3>
        </div>
      </div>
      <div className='section-two-gallery'>
        <div className='gallery-images'>
          <img src={galleryA} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryB} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryC} alt=''/>
        </div>
        <div className='gallery-images'>
          <img src={galleryD} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryE} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryF} alt=''/>
        </div>
        <div className='gallery-images'>
          <img src={galleryG} />
        </div>
      </div>
    </div>
  );
}
