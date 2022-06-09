import React, { useEffect, useState } from 'react';
import Project from './Project';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="projects my-5 py-5" style={{ backgroundColor: '#FBFBFB' }}>
            <div className='container'>
                <div className='text-center style-heading-2'>
                    <h2 className='fw-bold'>My Projects</h2>
                    <p className='my-0 mx-auto w-50'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab voluptatibus explicabo ex autem ullam voluptatibus</p>
                </div>
                <div className="row g-5">
                    {
                        projects.map(project => <Project key={project.id} project={project} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;