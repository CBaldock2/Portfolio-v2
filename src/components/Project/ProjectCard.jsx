import React from "react";
import './Project.css';

function ProjectCard(props) {
    return (
        <a href={props.deployed} className="projectCard">
            <div className="overlay"></div>
            <img className="image" src={props.imgPath} alt="project Chris Baldock contributed to"></img>
            <div className="cardBody">
                <h3>{props.title}</h3>
                <div className="projectSkillContainer">
                    {Array.isArray(props.skills) && props.skills.map((skill) => (
                        <div key={skill} className='projectSkill'>{skill}</div>
                    ))}
                </div>
            </div>
        </a>
    )
}

export default ProjectCard