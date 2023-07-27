import React from "react";
import ProjectCard from "./ProjectCard";
import MixingPot from "../../Assets/imgs/Mixing Pot.png";
import ParkingBuddy from "../../Assets/imgs/Parking Buddy.png";
import Jolt from "../../Assets/imgs/JOLT-logo.png";
import WeatherDashboard from "../../Assets/imgs/Weather Dashboard.png";
import "./Project.css"

function ProjectList() {
    return (
            <div className="projectList">
                    <ProjectCard
                        className='projectCard'
                        imgPath={Jolt}
                        title='Jolt'
                        deployed='https://jolt2.herokuapp.com/'
                        skills={['#React', '#Chart.js']}
                    />
                    <ProjectCard
                        className='projectCard'
                        imgPath={ParkingBuddy}
                        title='Parking Buddy'
                        deployed='https://serene-cove-30368.herokuapp.com/'
                        skills={['#React', '#Chart.js']}
                    />
                    <ProjectCard
                        className='projectCard'
                        imgPath={MixingPot}
                        title='Mixing Pot'
                        deployed='https://three-amigos-recipes.github.io/three-amigos-recipes/'
                        skills={['#React', '#Chart.js']}
                    />
                    <ProjectCard
                        className='projectCard'
                        imgPath={WeatherDashboard}
                        title='Weather Dashboard'
                        deployed='https://cbaldock2.github.io/Weather-Dashboard/'
                        skills={['#React', '#Chart.js']}
                    />
            </div>



    )
}

export default ProjectList