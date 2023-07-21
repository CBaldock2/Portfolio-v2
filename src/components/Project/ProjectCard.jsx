import React from "react";
import './Project.css';

function ProjectCard(props) {
    return (
        <a href={props.deployed} className="projectCard">
            <div className="overlay"></div>
            <img className="image" src={props.imgPath} alt="project Chris Baldock contributed to"></img>
            <div className="cardBody">
                <h3>{props.title}</h3>
                <p className="projectDescription">{props.description}</p>
                <div>
                    {props.skills}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard