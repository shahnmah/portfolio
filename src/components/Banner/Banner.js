import React from 'react';
import './Banner.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import Typewriter from 'typewriter-effect';

const Banner = () => {
    return (
        <div id='banner' style={{ backgroundColor: '#FBFBFB' }} className="banner py-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-center">
                        <div className='banner-text'>
                            <h5 className='fw-bold fs-4'>Hello</h5>
                            <h1 className='fw-bold display-2'>I'm Shahin</h1>
                            <h5 className='fw-bold fs-4 mb-4'>
                                <Typewriter
                                    options={{
                                        strings: ['Front End Developer', 'React Developer', 'MERN Developer'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </h5>
                            <a href='https://drive.google.com/file/d/1ie5iYkW4hP2oeUxLfw99Uct5LXySjXWf/view?usp=sharing' target={"_blank"} className='fs-5 primary-button'>Download Resume</a>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 col-12 banner-image">
                        <Player
                            autoplay
                            loop
                            src="https://assets9.lottiefiles.com/private_files/lf30_wqypnpu5.json"
                            style={{ height: '400px', width: '400px' }}
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;