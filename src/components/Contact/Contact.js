import { Controls, Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
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
                        <Form className='mt-5'>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="name" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="email" placeholder="Your Email" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Control type="name" placeholder="Your Subject" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Control as="textarea" rows={3} placeholder="Your Message"/>
                            </Form.Group>
                            <Button className='primary-button w-100' type="submit">
                                Send
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;