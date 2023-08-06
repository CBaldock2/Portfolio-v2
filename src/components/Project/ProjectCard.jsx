import React from "react";
import './Project.css';
import {  FaLink } from "react-icons/fa"

function ProjectCard(props) {
    return (
        <div className="cardFlip">
            <div className="flipCardInner">
                <div className="flipCardFront">
                    <img className="image" src={props.imgPath} alt="project Chris Baldock contributed to"></img>
                </div>
                <div className="flipCardBack">
                    <h3>{props.title}</h3>
                    <p className="description">{props.description}</p>
                    <div className="test">
                        <a href={props.deployed} className="link"><FaLink /></a>
                        <div className="projectSkillContainer">
                            {Array.isArray(props.skills) && props.skills.map((skill) => (<div key={skill} className='projectSkill'>{skill}
                            </div>
                            ))}

                        </div>
                    </div>

                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard