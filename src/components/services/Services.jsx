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
              <p>E-commerce development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Website maintenance and support</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Search engine optimization (SEO)</p>
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
              <p>Mobile app development</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Desktop app development</p>
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
              <p>Data analysis and preprocessing</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Supervised learning</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Unsupervised learning</p>
            </li>

            <li>
              <BiCheck className='service__list-icon' />
              <p>Deep learning</p>
            </li>

          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services