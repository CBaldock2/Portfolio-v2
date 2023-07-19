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
            description='This is Jolt'
            // deployed='Insert Link'
            // github='Insert Link'
            skills={['#React', '#Chart.js']}
        />
        <ProjectCard
            className='projectCard'
            imgPath={ParkingBuddy}
            title='Parking buddy'
            description='This is PD'
            // deployed='Insert Link'
            // github='Insert Link'
            skills={['#React', '#Chart.js']}
        />
        <ProjectCard
            className='projectCard'
            imgPath={MixingPot}
            title='Mixing Pot'
            description='This is MP'
            // deployed='Insert Link'
            // github='Insert Link'
            skills={['#React', '#Chart.js']}
        />
        <ProjectCard
            className='projectCard'
            imgPath={WeatherDashboard}
            title='Weather Dashboard'
            description='This is WD'
            // deployed='Insert Link'
            // github='Insert Link'
            skills={['#React', '#Chart.js']}
        />
    </div>
    )
}

export default ProjectList