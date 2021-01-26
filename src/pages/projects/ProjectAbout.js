import { Typography } from '@material-ui/core';
import React from 'react';
import './ProjectAbout.sass';

function ProjectAbout(props) {
    return (
        <div className="projectAbout">
            <Typography>
                <div className="projectAbout__content">
                    {props.about}
                </div>
            </Typography>
        </div>
    )
}

export default ProjectAbout
