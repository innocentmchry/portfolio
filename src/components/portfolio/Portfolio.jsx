import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpeg';
import IMG2 from '../../assets/portfolio2.png';
import IMG3 from '../../assets/portfolio3.jpeg';
import IMG4 from '../../assets/portfolio4.png';
import IMG5 from '../../assets/portfolio5.jpeg';
import IMG6 from '../../assets/portfolio6.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Live Emotion Detection in Android (Android Studio)',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Autism Spectrum Disorder Detection using Deep Learning',
    github: '#',
    demo: 'https://drive.google.com/drive/folders/1Gvmubs_ZG0Gx9Xe-j7T6ve19FODYbp3d?usp=sharing'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Webpage for Technical Clubs of CIT',
    github: '#',
    demo: 'https://roboticsclub.cit.ac.in/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Library Information System',
    github: '#',
    demo: '#'
  },
  {
    id: 5,
    image: IMG5,
    title: '2D Game Development (Unity)',
    github: '#',
    demo: 'https://drive.google.com/drive/folders/1EgUYzvrUn0VED3QKnkznkxH3PYlAuy7j?usp=sharing'
  },
  {
    id: 6,
    image: IMG6,
    title: 'A Survey on 3D object reconstruction',
    github: '#',
    demo: 'https://drive.google.com/drive/folders/1wl_47WdlKhxmnQID_uhDswDFl97mpiFC?usp=sharing'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={demo} className='btn btn-primary' target='_blank'>Link</a>
              </div>          
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio