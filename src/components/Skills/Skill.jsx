import React from "react";
import { FaBootstrap, FaChartLine, FaCodeBranch, FaCss3Alt, FaDatabase, FaDev, FaFigma, FaGitAlt, FaGithub, FaHtml5, FaJsSquare, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";
import "./Skill.css"


function Skill() {
    return (
        <div className="skills">
            <div className="html individualSkill">
                <FaHtml5 className=" icon" />
                <p>HTML</p>
            </div>
            <div className="css individualSkill">
                <FaCss3Alt className=" icon" />
                <p>CSS</p>
            </div>
            <div className="js individualSkill">
                <FaJsSquare className=" icon" />
                <p>JavaScript</p>
            </div>
            <div className="react individualSkill">
                <FaReact className=" icon" />
                <p>React</p>
            </div>
            <div className="bootstrap individualSkill">
                <FaBootstrap className=" icon" />
                <p>Bootstrap</p>
            </div>
            <div className="database individualSkill">
                <FaDatabase className=" icon" />
                <p>Databases</p>
            </div>
            <div className="dev individualSkill">
                <FaDev className=" icon" />
                <p>Web Development</p>
            </div>
            <div className="figma individualSkill">
                <FaFigma className=" icon" />
                <p>Figma</p>
            </div>
            <div className="github individualSkill">
                <FaGithub className=" icon" />
                <p>GitHub</p>
            </div>
            <div className="git individualSkill">
                <FaGitAlt className=" icon" />
                <p>Git</p>
            </div>
            <div className="node individualSkill">
                <FaNodeJs className=" icon" />
                <p>Node</p>
            </div>
            <div className="npm individualSkill">
                <FaNpm className=" icon" />
                <p>npm</p>
            </div>
            <div className="restfulApis individualSkill">
                <FaCodeBranch className=" icon" />
                <p>Restful APIs</p>
            </div>
            <div className="chartJs individualSkill">
                <FaChartLine className=" icon" />
                <p>Chart.Js</p>
            </div>
        </div>
    )
}

export default Skill