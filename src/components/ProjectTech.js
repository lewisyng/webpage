import React from 'react';
import './ProjectTech.css'

function ProjectTech(props) {

    const techStack = props.techStack.map((tech, index) => {
        return <div className="projectTech__stack__item" key={index}>{tech}</div>
    })

    return (
        <div className="projectTech">
            <div className="projectTech__header">
                TECH
            </div>
            <div className="projectTech__stack">
                {techStack}
            </div>
        </div>
    )
}

export default ProjectTech
