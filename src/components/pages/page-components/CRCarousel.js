import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

// Style Sheet
import './CRCarousel.css'

// images
import sbreview from '../images/sb-review.png'
import hareview from '../images/ha-review.png'
import ecreview from '../images/ec-review.png'
import ksreview from '../images/ks-review.png'
import mjreview from '../images/mj-review.png'
import mmreview from '../images/mm-review.png'
import nhreview from '../images/nh-review.png'





export default function CRCarousel() {
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
                                width={'528px'}
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
                                width={'500px'}
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
                <Carousel.Item>
                    <div className='slide'>
                        <div className='cr-image'>
                            <img
                                className="d-block"
                                src={ecreview}
                                alt="Elvia's review"
                                width={'440px'}
                            />
                        </div>
                        <div className='review'>
                            <h3>"ANAHI'S WORK WAS SPOT ON AND AMAZING"</h3>
                            <p className='review-content'>Anahi’s work was spot on and amazing! There are not enough
                                words for me to explain how much I appreciate everything she was able to do for my family
                                and myself. From the first time we connected she was open to hearing me out on what I
                                needed, communication was great. She was very accommodating during trials and on my actual
                                wedding day. Anahi was open to feedback during trials and worked with me to get exactly
                                what I wanted my final look to be. Without a doubt she made me feel that much more
                                special on my wedding day!</p>
                            <p className='client'>- Elvia C.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='cr-image'>
                            <img
                                className="d-block"
                                src={ksreview}
                                alt="Kindall's review"
                                width={'485px'}
                            />
                        </div>
                        <div className='review'>
                            <h3>"SHE MADE ME & MY BRIDESMAIDS LOOK FABULOUS!"</h3>
                            <p className='review-content'>Anahi is amazing! She made me and my bridesmaids look so
                                fabulous the day of my wedding! She did my mom and grandma’s makeup as well, she does
                                perfect work on both young and mature skin. She is also so sweet! I am so happy that I
                                got to book her for my big day. She really helped to make it perfect!</p>
                            <p className='client'>- Kindall S.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='cr-image'>
                            <img
                                className="d-block"
                                src={mjreview}
                                alt="Meghan's review"
                                width={'475px'}
                            />
                        </div>
                        <div className='review'>
                            <h3>"SHE MADE MY WEDDING DAY DREAM LOOK COME TO LIFE EVEN BETTER THAN I IMAGINED"</h3>
                            <p className='review-content'>Anahi was such a blessing to have on my wedding day. She is
                                very easy going and flexible and made me feel so comfortable in the midst of the wedding
                                day jitters. Not to mention, she made my wedding day dream look come to life even better
                                than I imagined. Highly recommend!</p>
                            <p className='client'>- Meghan J.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='cr-image'>
                            <img
                                className="d-block"
                                src={mmreview}
                                alt="Monica's review"
                                width={'525px'}
                            />
                        </div>
                        <div className='review'>
                            <h3>"ALWAYS BLOWN AWAY WITH HER WORK"</h3>
                            <p className='review-content'>Anahi does such an amazing job, I’ve booked her a few times
                                and always blown away with her work. I highly recommend her if you’re looking for a fabulous
                                makeup artist!! ❤️
                            </p>
                            <p className='client'>- Monica M.</p>
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className='slide'>
                        <div className='cr-image'>
                            <img
                                className="d-block"
                                src={nhreview}
                                alt="Noelle's review"
                                width={'479px'}
                            />
                        </div>
                        <div className='review'>
                            <h3>"WORKED WONDERS WITH MY HAIR & MAKEUP"</h3>
                            <p className='review-content'>Very professional and personable! Able to be adjustable with 
                            location and timing as some of our plans changed prior to our wedding day and Anahi was so 
                            courteous in her ability to adjust as needed. WORKED WONDERS WITH MY HAIR AND MAKEUP - our 
                            wedding was in June and my make up never moved and my hair didn’t drop. Great personality 
                            and made our morning getting ready fun. 10/10 would recommend.</p>
                            <p className='client'>- Noelle H.</p>
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}