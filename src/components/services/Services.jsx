import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
      <h5>What I am currently learning</h5>
      <h2>Interests</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Website design and development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Website maintenance and support</p>
            </li>

          </ul>
        </article>

        {/* END OF UI / UX */}

        <article className="service">
          <div className="service__head">
            <h3>App Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Android App development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Game development</p>
            </li>

          </ul>
        </article>

        {/* END OF WEB DEV */}

        <article className="service">
          <div className="service__head">
            <h3>Machine Learning</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Data Analysis and Preprocessing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Deep Learning, Neural Networks</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Computer Vision, Image Processing</p>
            </li>

          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services