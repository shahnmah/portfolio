import React from 'react';
import './About.css'
import { ParallaxHover } from 'react-parallax-hover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faUser, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FaLinkedinIn, FaGithubSquare, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const About = () => {
    return (
        <div className='my-5 banner'>
            <div className="container">
                <div className="row py-5 g-5">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-12">
                        <div className='about-img-part'>
                            {/* <ParallaxHover width={440} height={485} radius={5} rotation={5} shine={0} scale={1}>
                                <img className='img-fluid' src="https://i.ibb.co/ky90BCb/me12.png" alt="" />
                            </ParallaxHover> */}
                            <img className='img-fluid' src="https://i.ibb.co/ky90BCb/me12.png" alt="" />
                        </div>

                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                        <h4 className='fw-bold style-heading'>About Me</h4>
                        <h4 className='fw-bold'>I'm Professional Front End Developer <br /> & Tech Enthusiast</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id inventore natus neque sit rerum, velit ipsum. Culpa omnis harum quisquam veniam rerum provident magnam explicabo tempore. Atque autem cumque nisi. natus neque sit rerum, velit ipsum. Culpa omnis harum quisquam veniam rerum.natus neque sit rerum, velit ipsum. Culpa omnis harum quisquam veniam rerum provident magnam explicabo tempore. Atque autem cumque nisi.</p>
                        <div>
                            <ul className='ps-0'>
                                <li className='me-5'><FontAwesomeIcon icon={faEnvelope} /><span className='fw-bold ms-3'>Email:</span> shahn.mah@gmail.com</li>
                                <li><FontAwesomeIcon icon={faPhone} /><span className='fw-bold ms-3'>Phone:</span> +8801741409006</li>
                            </ul>
                            <ul className='ps-0'>
                                <li className='me-5'><FontAwesomeIcon icon={faLocationDot} /><span className='fw-bold ms-3'>Address:</span> Dhaka, Bangladesh</li>
                                <li className='ms-3'><FontAwesomeIcon icon={faUser} /><span className='fw-bold ms-3'>Age:</span> 24</li>
                            </ul>
                        </div>
                        <div>
                            <ul className='ps-0 social-link'>
                                <li><a href=""><FaLinkedinIn /></a></li>
                                <li><a href=""><FaGithubSquare /></a></li>
                                <li><a href=""><FaFacebookF /></a></li>
                                <li><a href=""><FaInstagram/></a></li>
                                <li><a href=""><FaTwitter/></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;