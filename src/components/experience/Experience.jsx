import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill, BsGit} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'
import {SiPhp} from 'react-icons/si'
import {TbBrandMysql} from 'react-icons/tb'
import {FaPython} from 'react-icons/fa'
import {FaJava} from 'react-icons/fa'
import {FiCode} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
import {BsUnity} from 'react-icons/bs'
import {SiDocker} from 'react-icons/si'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
             <AiFillHtml5 className='experience__details-icon' />
             <div>
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
             </div>             
            </article>

            <article className="experience__details">
              <DiCss3 className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
             <IoLogoJavascript className='experience__details-icon'/>
             <div>
              <h4>JavaScript</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>

            <article className="experience__details">
             <FaReact className='experience__details-icon'/>
             <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
             </div>              
            </article>
          </div>
        </div>
        
        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <SiPhp className='experience__details-icon'/>
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Intermediate</small>
              </div>              
            </article>

            <article className="experience__details">
              <TbBrandMysql className='experience__details-icon'/>
              <div>
              <h4>MySQL</h4>
              <small className='text-light'>Experienced</small>
              </div>              
            </article>

            <article className="experience__details">
              <FaPython className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <small className='text-light'>Intermediate</small>
              </div>              
            </article>
          </div>
        </div>

        <div className="experience__programming">
          <h3>Programming Languages</h3>
          <div className="experience__content">
            <article className="experience__details">
             <FaJava className='experience__details-icon' />
             <div>
              <h4>Java</h4>
              <small className='text-light'>Experienced</small>
             </div>             
            </article>

            <article className="experience__details">
              <FiCode className='experience__details-icon' />
              <div>
                <h4>C</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
             <FaPython className='experience__details-icon'/>
             <div>
              <h4>Python</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>

          </div>
        </div>

        <div className="experience__others">
          <h3>Others</h3>
          <div className="experience__content">
            <article className="experience__details">
             <BsGithub className='experience__details-icon' />
             <div>
              <h4>Git</h4>
              <small className='text-light'>Experienced</small>
             </div>             
            </article>

            <article className="experience__details">
              <BsUnity className='experience__details-icon' />
              <div>
                <h4>Unity</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
             <SiDocker className='experience__details-icon'/>
             <div>
              <h4>Docker</h4>
              <small className='text-light'>Experienced</small>
             </div>
            </article>

          </div>
        </div>

      </div>
    </section>
  )
}

export default Experience