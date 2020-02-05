import React from "react";
import Project from "./Project"
import "../css/Projects.css"
import {Element} from 'react-scroll'

interface ProjectsProps {
    projects: Array<{
        image: string;
        title: string;
        content: string;
        url:string;
        sidenote: {
            image: string;
            note: string;
            author: {
                name: string;
                position: string;
            }
        }
    }>
}
const Projects: React.FC<ProjectsProps> = ( {projects} ) => {
    return (
        <Element name="projects">
            <div>
                <div className="separator"/>
                <div className="header">
                    <p className="title">We Have Some Awesome Projects.</p>
                    <p className="disclaimer">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                </div>
                <div>
                    { projects.map((p, i) => (
                        <Project key={p.title} project={p} isLeftOriented={i % 2 === 0}/>
                    ))}
                </div>
                <div className="separator"/>
            </div>
        </Element>
    )
}

export default Projects