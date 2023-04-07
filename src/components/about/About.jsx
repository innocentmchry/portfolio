import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpeg'
import {FaAward} from 'react-icons/fa'
import {HiOutlineUsers} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
 
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <HiOutlineUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Open for work</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>6 Completed</small>
            </article>
          </div>
          <p>
          Meet me, a skilled full-stack web developer, software developer, and coder with a passion for learning and technology. With experience in various programming languages, such as HTML, CSS, JavaScript, Java, Python, and Ruby, I can create and maintain complex systems with ease. Additionally, I have some knowledge of machine learning and enjoy exploring the possibilities of this exciting field. With a keen eye for detail and a drive to deliver high-quality work, I am a valuable asset to any technology team.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About