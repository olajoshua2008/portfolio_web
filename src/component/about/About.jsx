import React from 'react'
import './about.css'
import Me from '../../asset/me.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import Ava from '../../asset/me1.jpg'
import {VscFolderLibrary} from 'react-icons/vsc'




const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      

      <div className="container about__container">
        <div className="about__me">
          <img src={Ava} alt="About Image" className="about_me-image" />
        </div>
        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>3+ Years Working </small>
            </article>           
             <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>10+ clients worldwide </small>
            </article>            
            <article className="about__card">
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Completed Projects </small>
            </article>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad esse voluptates commodi ex illum reprehenderit corrupti ratione, expedita minima tempora obcaecati, voluptatibus necessitatibus tenetur aspernatur amet neque quam odio? Dolores!
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
