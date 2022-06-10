import React from 'react';
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedinIn, FaGithubSquare, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const About = () => {
    return (
        <div id='about' className='my-5 banner'>
            <div className="container">
                <div className="row py-5 g-5">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                        <div className='about-img-part'>
                            <img className='img-fluid' src="https://i.ibb.co/ySgNkF3/me12.jpg" alt="" />
                        </div>

                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                        <h4 className='fw-bold style-heading'>About Me</h4>
                        <h4 className='fw-bold'>I'm Professional Front End Developer <br /> & Tech Enthusiast</h4>
                        <p>Hello there, I am Shahin Miah. A Front End Developer from Bangladesh. Skilled in Front-end Development, html, css, jQuery, javascript, Bootstrap, Tailwind Css, Responsive Web Design, React, Node js, MongoDb, Express js. Strong web development professional with a Bachelor of Business Administration - BBA focused in Marketing from Khilgaon Model University College.</p>
                        <p>My vision is build a career in the Web and Software industry, and reach towards my goals.</p>
                        <div>
                            <ul className='ps-0'>
                                <li className='me-5'><FontAwesomeIcon icon={faEnvelope} /><span className='fw-bold ms-3'>Email:</span> shahn.mah@gmail.com</li>
                                <li><FontAwesomeIcon icon={faPhone} /><span className='fw-bold ms-3'>Phone:</span> +8801741409006</li>
                            </ul>
                            <ul className='ps-0 about-li-2'>
                                <li className='me-5'><FontAwesomeIcon icon={faLocationDot} /><span className='fw-bold ms-3'>Address:</span> Dhaka, Bangladesh</li>
                                <li className='ms-3 aga-icon'><FontAwesomeIcon icon={faUser} /><span className='fw-bold ms-3'>Age:</span> 24</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='ps-0 social-link'>
                                <li><a href="https://www.linkedin.com/in/shahnmah/" target={'_blank'}><FaLinkedinIn /></a></li>
                                <li><a href="https://github.com/shahnmah" target={'_blank'}><FaGithubSquare /></a></li>
                                <li><a href="https://www.facebook.com/shahnmah/" target={'_blank'}><FaFacebookF /></a></li>
                                <li><a href="https://www.instagram.com/shahnmah/" target={'_blank'}><FaInstagram/></a></li>
                                <li><a href="https://twitter.com/shahnmah" target={'_blank'}><FaTwitter/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;