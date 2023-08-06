import React from "react";
import ProjectCard from "./ProjectCard";
import MixingPot from "../../Assets/imgs/Mixing Pot.png";
import ParkingBuddy from "../../Assets/imgs/Parking Buddy.png";
import Jolt from "../../Assets/imgs/JOLT-logo.png";
import WeatherDashboard from "../../Assets/imgs/Weather Dashboard.png";
import MB from "../../Assets/imgs/Midnight Bakery.png"
import "./Project.css"

function ProjectList() {
    return (
        <div className="projectList">
            <ProjectCard
                className='projectCard'
                imgPath={MB}
                title='Midnight Bakery'
                description='Midnight Bakery is a bakery application where you can look around from seasonal items on the home screen to go to a menu for regular items. When you are ready to order you can go to the contact page and fill out the form and send it to Midnight Bakery.'
                deployed='https://midnightbakerytx.github.io/MBTx'
                skills={['#React', '#CSS']}
            />
            <ProjectCard
                className='projectCard'
                imgPath={Jolt}
                title='Jolt'
                description='Jolt is a personal finance and budgeting app. You can create goals to save for, allocate funds to create a budget and see your spending and transaction history.'
                deployed='https://jolt2.herokuapp.com/'
                skills={['#React', '#components', '#Chart.js']}
            />
            <ProjectCard
                className='projectCard'
                imgPath={ParkingBuddy}
                title='Parking Buddy'
                description={`This application allows you to add guest parking under your name. You will sign in to their account and then have the option to add or remove a guest with their and their car's information`}
                deployed='https://serene-cove-30368.herokuapp.com/'
                skills={['#MySQL', '#MVC', '#API']}
            />
            <ProjectCard
                className='projectCard'
                imgPath={MixingPot}
                title='Mixing Pot'
                description='Here you can find something to cook based on items you already have at the house! On the home screen you can enter ingredients and when you are ready click enter. Then reciepes that have those ingredients will appear.'
                deployed='https://three-amigos-recipes.github.io/three-amigos-recipes/'
                skills={['#JavaScript', '#CSS', '#HTML']}
            />
            <ProjectCard
                className='projectCard'
                imgPath={WeatherDashboard}
                title='Weather Dashboard'
                description='This is a weather app. You enter a location anywhere in the world and it will give you the 7-day forecast.'
                deployed='https://cbaldock2.github.io/Weather-Dashboard/'
                skills={['#JavaScript', '#CSS']}
            />
        </div>



    )
}

export default ProjectList