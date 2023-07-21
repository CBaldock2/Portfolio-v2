import React from 'react';
import './App.css';
import ProjectList from './components/Project/ProjectList';
import myPicture from './Assets/imgs/Christopher.jpg';
import Skill from './components/Skills/Skill';

function App() {
  return (
    <div>
      <header className='header'>
        <h1>Christopher Baldock</h1>
        <nav className='nav'>
          <ul>
            <li>About</li>
            <li>Work</li>
            <li>Contact</li>
            <li>Resume</li>
          </ul>
        </nav>
      </header>

      <div className='pageBody'>
        <section className='aboutSection'>
          <img className='profilePic' src={myPicture} alt='me' />
          <div className='aboutWording'>
            <h2 className='about'>
              About
            </h2>
            <p className='shortAboutMe'>
              et egestas quis ipsum suspendisse ultrices gravida
            </p>
            <p className='longAboutMe'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <span className='highlights'>do eiusmod tempor incididunt ut labore</span> et dolore magna aliqua.
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <span className='highlights'>eiusmod</span> tempor <span className='highlights'>incididunt</span> ut labore et dolore magna aliqua. Lacus sed turpis <span className='highlights'>tincidunt id aliquet</span> risus. Dictumst vestibulum rhoncus est pellentesque elit.
            </p>
          </div>
        </section>

        <section className='workSection'>
          <div className='workWording'>
            <h2 className='work'>Work</h2>
            <p className='shortWork'>Check out some of the projects I have worked on!</p>
            <div>
              <ProjectList />
            </div>
          </div>
        </section>

        <section className='skillSection'>
          <div className='skillContainer'>
            <h2 className='skill'>Skills</h2>
            <Skill />
          </div>
        </section>

        <section>
          <div>
            <h2>
              ContactMe
            </h2>
          </div>
        </section>
      </div>
    </div>

  );
}

export default App;
