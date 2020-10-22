import React from 'react';
import './ProjectLinks.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

function ProjectLinks() {
    return (
        <div className="projectLinks">
            <OpenInNewIcon
                fontSize="large"
                color="primary"
                className="projectLink"
            />
            <GitHubIcon 
                fontSize="large"
                className="projectLink"
            />
        </div>
    )
}

export default ProjectLinks
