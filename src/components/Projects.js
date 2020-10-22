import React from 'react';
import './Projects.css';
import Project from './Project';
import googleIMG from '../assets/googleProjectTN.jpg';
import TodoIMG from '../assets/todoTN.png';
import GameIMG from '../assets/2048tn.jpeg';
import SectionHeader from './SectionHeader';

function Projects() {
    return (
        <div id="projects__container">
            <SectionHeader
                section="Projekte"
            />
            <div id="projects">
                <Project 
                    name="GoogleClone"
                    thumbnail={googleIMG}
                    techStack={["firebase", "CSS", "HTML", "JS", "REACT"]}
                    />
                <Project 
                    name="TodoList"
                    thumbnail={TodoIMG}
                    techStack={["firebase", "CSS", "HTML", "JS", "REACT"]}
                    />
                <Project 
                    name="2048"
                    thumbnail={GameIMG}
                    techStack={["firebase", "CSS", "HTML", "JS", "REACT"]}
                />
            </div>
        </div>
    )
}

export default Projects
