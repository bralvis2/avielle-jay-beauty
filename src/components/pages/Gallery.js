import React from 'react';
import CRCarousel from './page-components/CRCarousel.js'

//Importing Images
import galleryHeader from './images/gallery-header.png'

import galleryA from './gallery-images/gallery-a.png'
import galleryB from './gallery-images/gallery-b.png'
import galleryC from './gallery-images/gallery-c.png'
import galleryD from './gallery-images/gallery-d.png'
import galleryE from './gallery-images/gallery-e.png'
import galleryF from './gallery-images/gallery-f.png'
import galleryG from './gallery-images/gallery-g.png'
import galleryH from './gallery-images/gallery-h.png'
import galleryI from './gallery-images/gallery-i.png'
import galleryJ from './gallery-images/gallery-j.png'
import galleryK from './gallery-images/gallery-k.png'
import galleryL from './gallery-images/gallery-l.png'
import galleryM from './gallery-images/gallery-m.png'
import galleryN from './gallery-images/gallery-n.png'
import galleryO from './gallery-images/gallery-o.png'
import galleryP from './gallery-images/gallery-p.png'

import Star from './SVG-icons/star.svg'

//Style Sheet
import './Gallery.css'

export default function Gallery() {
  return (
    <div className='gallery'>
      <div className='section-one-gallery'>
        <div className='gallery-header-img'>
          <img src={galleryHeader} alt='Bride and her bridal party in pink' />
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
          <img src={galleryC} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryD} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryE} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryF} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryG} />
        </div>
        <div className='gallery-images'>
          <img src={galleryH} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryI} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryJ} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryK} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryL} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryM} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryN} />
        </div>
        <div className='gallery-images'>
          <img src={galleryO} alt='' />
        </div>
        <div className='gallery-images'>
          <img src={galleryP} />
        </div>
      </div>

      <div className='carousel-section'>
        <div className='ratings'>
          <img src={Star} alt='star icon'></img>
          <img src={Star} alt='star icon'></img>
          <img src={Star} alt='star icon'></img>
          <img src={Star} alt='star icon'></img>
          <img src={Star} alt='star icon'></img>
        </div>
        <h1>customer reviews</h1>
        <div>
          <CRCarousel />
        </div>
      </div>
    </div>
  );
}
