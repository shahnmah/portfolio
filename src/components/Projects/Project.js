import React, { useState } from 'react';
import './Project.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Carousel } from 'react-bootstrap';
const Project = ({ project }) => {
    const { name, title, img, live, github, dis } = project;
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 p-3">
            <div className='px-2 pt-2 pb-4' style={{ border: '1px solid #3366cc' }}>
                <div className='mt-3' style={{ height: '250px', overflow: 'hidden' }}>
                    <img className='img-fluid' src={img} alt="" />
                    <button onClick={onOpenModal}>Open modal</button>
                </div>
                <div className='mt-3 mb-4'>
                    <h4 className='fw-bold'>{name}</h4>
                    <h5 className='fw-bold'>{title}</h5>
                    <p>{dis}</p>
                </div>
                <div>
                    <a className='primary-button project-button me-3' href={github}>Github</a>
                    <a className='primary-button project-button' href={live}>See Live</a>
                </div>
            </div>
            <button onClick={onOpenModal}>Open modal</button>
            <Modal open={open} onClose={onCloseModal} center>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Second slide&bg=282c34"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=Third slide&bg=20232a"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h2>{name}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                    pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
                    hendrerit risus, sed porttitor quam.
                </p>
            </Modal>
        </div>
    );
};

export default Project;