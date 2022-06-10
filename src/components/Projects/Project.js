import React, { useState } from 'react';
import './Project.css'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Carousel } from 'react-bootstrap';
import { BsInfoSquareFill } from "react-icons/bs";

const Project = ({ project }) => {
    const { name, title, img, live, github, dis, slideImg1, slideImg2, slideImg3, slideImg4, slideImg5, disMore, tech } = project;
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
                <div className='mt-3 mb-4 project-sub-details'>
                    <button className='modal-button primary-button position-absolute' onClick={onOpenModal}><BsInfoSquareFill /></button>
                    <h4 className='fw-bold'>{name}</h4>
                    <h5 className='fw-bold'>{title}</h5>
                    <p>{dis}</p>
                    <button className='modal-button primary-button' onClick={onOpenModal}><BsInfoSquareFill /></button>
                </div>
                <div>
                    <a className='primary-button project-button me-3' href={github}>Github</a>
                    <a className='primary-button project-button' href={live}>See Live</a>
                </div>
            </div>
            <Modal open={open} onClose={onCloseModal} center>

                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slideImg1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slideImg2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slideImg3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slideImg4}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={slideImg5}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>

                <h2>{name}</h2>
                <p>
                    {disMore}
                </p>
                <h5 className='fw-bold'>Technology Used</h5>
                <p>{tech}</p>
                <div>
                    <a className='primary-button me-3' href={github} target={'_blank'}>Github</a>
                    <a className='primary-button' href={live} target={'_blank'}>See Live</a>
                </div>
            </Modal>
        </div>
    );
};

export default Project;