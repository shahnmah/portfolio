import React from 'react';

const Project = ({ project }) => {
    const { name, title, img, live, github } = project;
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-12 p-3">
            <div className='px-2 pt-2 pb-4' style={{ border: '1px solid #3366cc'}}>
                <div className='mt-3' style={{ height: '250px', overflow: 'hidden' }}>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='mt-3 mb-4'>
                    <h4 className='fw-bold'>{name}</h4>
                    <h5 className='fw-bold'>{title}</h5>
                </div>
                <div>
                    <a className='primary-button me-3' href={github}>Github</a>
                    <a className='primary-button' href={live}>See Live</a>
                </div>
            </div>
        </div>
    );
};

export default Project;