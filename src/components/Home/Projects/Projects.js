import React from 'react';
import office from '../../../images/office.jpg';
import appertment  from '../../../images/appertment.jpg';
import villa from '../../../images/villa.jpg'
import Project from '../Project/Project';
import './Projects.css'
const projectData = [
    {
        name: 'Fluoride Treatment',
        img: office
},
{
    name: 'Cavity Filling',
    img:appertment
},
{
    name: 'Teeth Whitening',
    img:  villa
}
]
const Projects = () => {

    return (
        <section className="projects mt-5">
          <div className="projects-container text-center">
               <h1>PORTFOLIO</h1>
               
            </div>
            <div className="d-flex justify-content-center">
            <div className=" card-deck w-100 row mt-2 pt-2">
                {
                    projectData.map(project => <Project project={project} key={project.name}></Project>)
                }
            </div>
        </div>
        </section>
    );
};

export default Projects;