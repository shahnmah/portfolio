import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        
        e.preventDefault();
       
        emailjs.sendForm('service_ppicngi', 'template_v5r8m38', form.current, '98eZXE4kLrpSIU2TB')
          .then((result) => {
              console.log(result.text);
              
          }, (error) => {
              console.log(error.text);
          });
      
    };
  
    return (
        <div className='contact py-5' style={{ backgroundColor: '#FBFBFB' }}>
            <div className="container">
                <div className='text-center style-heading-2'>
                    <h2 className='fw-bold'>Contact Me</h2>
                    <p className='my-0 mx-auto w-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptatibus explicabo ex autem ullam voluptatibus</p>
                </div>
                <div className="row">
                    <div className="col-lg-6 col-md-6 com-sm-12 col-12">
                        <Player
                            autoplay
                            loop
                            src="contact-animation.json"
                            style={{ height: '400px', width: '400px' }}
                        >
                            <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
                        </Player>
                    </div>
                    <div className="col-lg-6 col-md-6 com-sm-12 col-12">
                        <form className='mt-5'  ref={form} onSubmit={sendEmail}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control name="user_name" placeholder="Your Name" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control name="user_email" type="email" placeholder="Your Email" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control name="message" as="textarea" rows={3} placeholder="Your Message" required/>
                            </Form.Group>
                            <Button className='primary-button w-100' type="submit">
                                Send
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;