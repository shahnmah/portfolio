import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div id='blogs' className='mb-5'>
            <div className='text-center style-heading-2'>
                <h2 className='fw-bold'>My Blogs</h2>
                <p className='my-0 mx-auto w-50'> I have completed mary projects.Hare few of them. You can share me your thought about my projects</p>
            </div>
            <div className='blogs-part'>
                <div className="container d-flex justify-content-center py-5">
                    <h1 className='fw-bold'>Coming Soon <span style={{color:"#3366cc"}}>!</span></h1>
                </div>
            </div>
        </div>
    );
};

export default Blogs;