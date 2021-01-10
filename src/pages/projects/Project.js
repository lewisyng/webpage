import React from "react";
import "./Project.css";
import ProjectTitle from "./ProjectTitle";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectLinks from "./ProjectLinks";
import ProjectAbout from "./ProjectAbout";
import ProjectTech from "./ProjectTech";

import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";

function Project(props) {
  const { project } = props;

  return (
    <div className="project">
      <Card>
        <CardHeader
          title={<ProjectTitle name={project.name} />}
          action={<ProjectLinks links={project.links} />} 
        />
        <CardMedia>
          <ProjectThumbnail src={project.thumbnail} />
        </CardMedia>
        <CardContent>
          <ProjectAbout about={project.about} />
        </CardContent>
        <CardContent>
          <ProjectTech stack={project.stack} />
        </CardContent>
      </Card>
    </div>
  );
}

export default Project;
