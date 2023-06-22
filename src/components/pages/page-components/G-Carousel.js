import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Style Sheet
import './G-Carousel.css'

// images
import gCarouselA from '../images/g-carousel-a.png';
import gCarouselB from '../images/g-carousel-b.png';
import gCarouselC from '../images/g-carousel-c.png';
import gCarouselD from '../images/g-carousel-d.png';


export default function GCarousel() {
    return (
        <div className='gallery-carousel-container'>
            <Carousel>
                <Carousel.Item>
                    <div className='gc-slide'>
                        <div className='gc-image-container'>
                            <img
                                className="d-block"
                                src={gCarouselA}
                                alt=""
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='gc-slide'>
                        <div className='gc-image-container'>
                            <img
                                className="d-block"
                                src={gCarouselB}
                                alt=""
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='gc-slide'>
                        <div className='gc-image-container'>
                            <img
                                className="d-block"
                                src={gCarouselC}
                                alt=""
                            />
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='gc-slide'>
                        <div className='gc-image-container'>
                            <img
                                className="d-block"
                                src={gCarouselD}
                                alt=""
                            />
                        </div>
                    </div>
                </Carousel.Item>

            </Carousel>
        </div>
    )
}