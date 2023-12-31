import React from 'react';
import './App.css';
import ProjectList from './components/Project/ProjectList';
import myPicture from './Assets/imgs/Christopher.jpg';
import Skill from './components/Skills/Skill';
import ContactForm from './components/Contact/ContactForm';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import Logo from './Assets/imgs/Logo.png'
import AboutHead from './components/AboutHead/AboutHead';

function App() {
  return (
    <div>
      <header className='header'>
        <h1>Christopher Baldock</h1>
        <nav className='nav'>
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#work'>Work</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='https://drive.google.com/file/d/1bAzu0LhCjo6i0lqssjuog62C50OGWadf/view?usp=sharing' target='_blank'>Resume</a></li>
          </ul>
        </nav>
      </header>

      <div className='pageBody'>
        <section className='aboutSection' id='about'>
          <img className='profilePic' src={myPicture} alt='me' />
          <div className='aboutWording'>
            <h2 className='about'>
              About
            </h2>
            <p className='shortAboutMe'>
              <AboutHead />
            </p>
            <p className='longAboutMe'>
              <br />
              I enjoy solving tough problems and programming thoughtful designs.
              My specialties are in <span className='highlights'>MySQL</span>, <span className='highlights'>React</span>, and <span className='highlights'>Frontend Development</span>. In my free time I like to listen to music, play games, and travel around the world.
            </p>
          </div>
        </section>

        <section className='workSection' id='work'>
          <div className='workWording'>
            <h2 className='work'>Work</h2>
            <p className='shortWork'>Check out some of the projects I have worked on!</p>
          </div>
          <div className='projectListConatiner'>
            <ProjectList />
          </div>
        </section>

        <section className='skillSection'>
          <div className='skillContainer'>
            <h2 className='skill'>Skills</h2>
            <Skill />
          </div>
        </section>

        <div className='pageBreak'></div>

        <section className='contactSection' id='contact'>
          <h2 className='contact'>
            Contact Me
          </h2>
          <div className='contactContainer'>
            <div className='contactWords'>
              <p>
                If you have any questions or just want to say hi, I'll try my best to get back to you!
              </p>
              <div className='email'>
                <FaEnvelope className='emailIcon' />
                <p>
                  ChristopherMBaldock@gmail.com
                </p>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>

        <section className='sourceCodeSection'>
          <h2 className='source'>
            Source Code
          </h2>
          <p className='sourceJoke'>
            Weeks of coding can save you hours of planning.
          </p>
          <a href='https://github.com/CBaldock2/Portfolio-v2' className='sourceBtn'>Show Code</a>
        </section>
      </div>

      <footer>
        <div className='logoContainer'>
          <img className='logo' src={Logo} alt='CB logo'></img>
        </div>
        <nav className='footerNav'>
          <ul>
            <li><a href='#about'>About</a></li>
            <li><a href='#work'>Work</a></li>
            <li><a href='#contact'>Contact</a></li>
            <li><a href='https://drive.google.com/file/d/1bAzu0LhCjo6i0lqssjuog62C50OGWadf/view?usp=drive_link'>Resume</a></li>
          </ul>
        </nav>
        <div className='socialLinks'>
          <li><a href='https://www.instagram.com/chrisbaldockofficial/'><FaInstagram /></a></li>
          <li><a href='https://github.com/CBaldock2'><FaGithub /></a></li>
          <li><a href='https://www.linkedin.com/in/christopher-baldock/'><FaLinkedin /></a></li>
        </div>
      </footer>
    </div>

  );
}

export default App;
