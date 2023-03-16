import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Style Sheet
import './CRCarousel.css'

// images
import sbreview from '../images/sb-review.png'
import hareview from '../images/ha-review.png'




export default function CRCarousel(){
    return (
        <div className='customer-review-container'>
            <Carousel>
            <Carousel.Item>
                    <div className='slide'>
                        <div className='cr-image'>
                            <img
                            className="d-block"
                            src={hareview}
                            alt="Hannah's review"
                            width={'600px'}
                            />
                        </div>
                        <div className='review'>
                            <h3>"IN SHOCK HOW AMAZING SHE MADE ME LOOK AND FEEL"</h3>
                            <p className='review-content'>Holy cow. I cannot say enough amazing things about Anahi! She worked me into her schedule during 
                                COVID times to do a trial and spent hours making sure everything was just how I want it. She 
                                then traveled all the way to Schulenburg and did not complain one bit about it! I am still in 
                                shock how amazing she made me look and feel on my wedding! She made each and every one of my 
                                bridesmaids feel beautiful and made sure their hair and makeup was exactly what they wanted.</p>
                            <p className='client'>- Hannah A.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='cr-image'>
                            <img
                            className="d-block"
                            src={sbreview}
                            alt="Shelby's review"
                            width={'600px'}
                            />
                        </div>
                        <div className='review'>
                            <h3>"YOU WILL NOT REGRET BOOKING THEM"</h3>
                            <p className='review-content'>Anahi was absolutely amazing for our wedding. She was so sweet to do my trial the day before since 
                                I live out of town. Everyone loved my makeup and she even went out of her way to make my flower 
                                girls feel extra special! You will not regret booking them!</p>
                            <p className='client'>- Shelby B.</p>
                        </div>
                    </div>
                </Carousel.Item>
                
                
            </Carousel>
        </div>
    )
}