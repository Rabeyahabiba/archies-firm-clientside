import React from 'react';

const Project = ({project}) => {
    return (
        <div className="col-md-4 text-center">
        <img style={{height: '500px'}} src={project.img} alt="" />
        {/* <h5 className="mt-3 mb-3">{project.name}</h5> */}
        {/* <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, quaerat?</p> */}
    </div>
    );
};

export default Project;