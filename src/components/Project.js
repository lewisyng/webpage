import React from 'react';
import './Project.css';
import ProjectTitle from './ProjectTitle';
import ProjectThumbnail from './ProjectThumbnail';
import ProjectLinks from './ProjectLinks';
import ProjectAbout from './ProjectAbout';
import ProjectTech from './ProjectTech';

function Project(props) {
    return (
        <div className="project">
            <ProjectTitle 
                name={props.name}
            />
            <ProjectThumbnail 
                src={props.thumbnail}
            />
            <ProjectLinks />
            <ProjectAbout />
            <ProjectTech techStack={props.techStack}/>
        </div>
    )
}

export default Project
