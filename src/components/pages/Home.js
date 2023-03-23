import React from 'react';
import CRCarousel from './page-components/CRCarousel.js'
import bannerA from './images/banner-a.png'
import bannerB from './images/banner-b.png'
import bannerC from './images/banner-c.png'
import homeO from './images/home-1.png'
import homeT from './images/home-2.png'

// Style Sheet
import './Home.css'

function Home(){
    return (
        <div>
            <div className='banner'>
                <img src={bannerA} alt='Bridal Client photography credit https://hollymarie.photo/' width={'450px'}/>
                <img src={bannerB} alt='Bridal Client event by lux beauty and bridal ' width={'320px'}/>
                <img src={bannerC} alt='Brial Client photography by photo house films' width={'450px'}/>
            </div>
            <div className='section-two'>
                <div className='about-home'>
                    <h1 className='quote'>hi babe!</h1>
                    <h1>LETS GLAM</h1>
                    <p>Hi, I'm Anahi, a make-up artist who specializes in bridal make-up and other special events. 
                        My goal is to create a customized look that enhances the natural beauty of my clients on 
                        their special day. With years of experience in the industry, I have a wide range of styles 
                        to fit my clients' expectations. I believe that every client is unique, and therefore, I 
                        work closely with them to understand their vision and preferences. From classic and elegant 
                        to bold and glamorous, I can create any look that my clients desire. My attention to detail 
                        and creativity allows me to create flawless make-up looks that leave my clients feeling 
                        confident and beautiful. Whether it's a wedding, prom, or any other special event, I am 
                        dedicated to delivering exceptional results that exceed my clients' expectations.</p>
                </div>
            </div>
            <div>
                <h1 className='quote decoration'>makeup is art beauty is spirit</h1>
                <div className='section-three'>
                    <div className='section-three-image'>
                        <img src={homeO} alt='Client and Owner of Bella Body Design LLC' width={'600px'}/>
                    </div>
                    <div className='beauty-services'>
                        <h1>Beauty Services</h1>
                        <p>I provide a range of services to cater to their specific needs and preferences. Whether 
                            they are preparing for a special event, like a wedding or prom, or simply want to learn 
                            how to apply makeup themselves. I specialize in airbrush makeup application, using 
                            high-quality, safe products that enhance their natural features. I stay up-to-date with 
                            the latest makeup trends and techniques, ensuring that my clients receive personalized 
                            and professional makeup services. With my help, clients can achieve their desired look 
                            and feel confident and beautiful for any occasion.</p>
                        <h2>Some Services Include:</h2>
                        <ul>
                            <li>Bridal Makeup</li>
                            <li>HD Makeup Bridal Party</li>
                            <li>Temptu Airbrush</li>
                            <li>
                                <button className='beauty-services-btn'>
                                    <a href="">VIEW BEAUTY SERVICES</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='hair-services'>
                        <h1>Hair Services</h1>
                        <p>I offer a range of services to help achieve the look they desire, including updos, half-up 
                            half-down styles, braids, and more. Before we begin, we'll have a consultation to discuss 
                            their vision, preferences, and any special considerations like veil placement or hair 
                            accessories. From there, I'll work my magic, using high-quality products and tools to create 
                            a flawless style that will last throughout the event. Whether they want a classic, romantic 
                            look or something more modern and edgy, I'm committed to helping them feel like the best 
                            version of themselves on their special day.</p>
                        <h2>Some Services Include:</h2>
                        <ul>
                            <li>Bridal Hair</li>
                            <li>Hair Styling for Bridal Party</li>
                            <li>Flower Girl Hair</li>
                            <li>
                                <button className='beauty-services-btn'>
                                    <a href="">VIEW HAIR SERVICES</a>
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className='section-three-image'>
                        <img src={homeT} alt='Bridal Client photography by Lauren Parr Photography' width={'550px'}/>
                    </div>
                </div>
            </div>
            <div className='section-four'>
                <h1>WHAT WE HAVE TO OFFER</h1>
                <div className='offer-card-container'>
                    <div className='offer-card'>
                        <div className='offer-card-heading'>
                            <h2><span className='number'>01</span> ATTENTION TO DETAIL</h2>
                        </div>
                        <div className='offer-card-content'>
                        <p>Attention to detail is a key aspect of my work as a makeup artist, and I strive to ensure that every 
                            aspect of my client's final look is flawless. I perform a detailed inspection of the final look to 
                            ensure that everything is in place and that the makeup complements the client's unique features. I 
                            am able to create a polished and professional finish that my clients will love.</p>
                        </div>
                    </div>
                    <div className='offer-card'>
                        <div className='offer-card-heading'>
                            <h2><span className='number'>02</span> CLIENT VISION</h2>
                        </div>
                        <div className='offer-card-content'>
                            <p> From the initial consultation to the final touches, I am dedicated to creating a look that not only meets but exceeds 
                                their expectations. Whether my client desires a natural or bold look, I tailor my approach to meet 
                                their unique needs and preferences. Above all, my ultimate goal is to create a look that enhances my 
                                client's natural beauty and makes them feel confident and radiant.</p>
                        </div>
                    </div>
                    <div className='offer-card'>
                        <div className='offer-card-heading'>
                            <h2><span className='number'>03</span> SKILLS & EXPERTISE</h2>
                        </div>
                        <div className='offer-card-content'>
                            <p>With years of experience and training in various makeup techniques, I have developed a keen eye for 
                                color, texture, and composition. I use my skills to tailor each application to the client's unique 
                                needs and preferences. I stay up-to-date with the latest trends and techniques to ensure that my 
                                clients receive the best possible service.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-five'>
                <h1>customer reviews</h1>
                <div>
                    <CRCarousel />
                </div>
            </div>
            <div>
                
            </div>
        </div>
    )
}

export default Home;