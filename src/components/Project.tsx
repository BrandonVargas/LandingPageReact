import React from "react";
import '../css/Project.css'

interface ProjectProps {
    project: {
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
    },
    isLeftOriented: boolean;
}
const Project: React.FC<ProjectProps> = ( {project, isLeftOriented} ) => {
    if (isLeftOriented) {
        return (
            <div className="container">
                <div className="image-note">
                    <img className="project-image" src={require(`../assets/${project.image ? project.image : 'hero.png'}`)} alt="project"/>
                    <div className="sidenote">
                        <p className="note">{project.sidenote.note}</p>
                        <div className="info">
                            <img className="author" src={require(`../assets/${project.sidenote.image ? project.sidenote.image : 'ceo_pic.png'}`)} alt="author"/>
                            <div className="author-container">
                                <p className="name">{project.sidenote.author.name}</p>
                                <p className="about">{project.sidenote.author.position}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="description">
                    <p className="title">
                        {project.title}
                    </p>
                    <p className="text">
                        {project.content}
                    </p>
                    <a href="/">See case study</a>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container">
                <div className="description-left">
                    <p className="title">
                        {project.title}
                    </p>
                    <p className="text">
                        {project.content}
                    </p>
                    <a href="/">See case study</a>
                </div>
                <div className="image-note-right">
                    <img className="project-image" src={require(`../assets/${project.image ? project.image : 'hero.png'}`)} alt="project"/>
                    <div className="sidenote-left">
                        <p className="note">{project.sidenote.note}</p>
                        <div className="info">
                            <img className="author" src={require(`../assets/${project.sidenote.image ? project.sidenote.image : 'ceo_pic.png'}`)} alt="author"/>
                            <div className="author-container">
                                <p className="name">{project.sidenote.author.name}</p>
                                <p className="about">{project.sidenote.author.position}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Project