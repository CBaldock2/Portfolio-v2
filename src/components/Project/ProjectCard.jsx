import React from "react";
import './Project.css';

function ProjectCard(props) {
    return (
        <div className="projectCard">
            <div className="overlay"></div>
            <img className="image" src={props.imgPath} alt="project Chris Baldock contributed to"></img>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <div>
                <button href={props.deployed}>Access</button>
                <button href={props.github}>GitHub</button>
            </div>
            <div>
                {props.skills}
            </div>
        </div>
    )
}

export default ProjectCard