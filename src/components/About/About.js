import React from 'react';
import './About.css'
import { ParallaxHover } from 'react-parallax-hover';

const About = () => {
    return (
        <div className='my-5 banner'>
            <div className="container">
                <div className="row py-5 g-5">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                        <div className='about-img-part'>
                            <ParallaxHover width={440} height={485} radius={5} rotation={5} shine={0} scale={1}>
                                <img className='img-fluid' src="https://i.ibb.co/ky90BCb/me12.png" alt="" />
                            </ParallaxHover>
                            {/* <img className='img-fluid' src="https://i.ibb.co/ky90BCb/me12.png" alt="" /> */}
                        </div>

                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                        <h4>About Me</h4>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;