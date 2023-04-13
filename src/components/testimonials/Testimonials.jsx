import React from 'react'
import './testimonials.css'
import PHN from '../../assets/phn.png'
import EDU from '../../assets/edulyt.png'
import COD from '../../assets/coding.png'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: PHN,
    name: 'PHN Technologies', 
    review: 'Web Developer Intern @ PHN Technology Pvt. Ltd. Joining Date 6th April 2023.'
  },
  {
    avatar: EDU,
    name: 'Edulyt India', 
    review: 'Fellowship Program(Analytics) @ Edulyt India. Joining Date 12th April 2023'
  },
  {
    avatar: COD,
    name: 'Coding Club CITK', 
    review: 'Founding member, Coordinator and Instructor of students during various bootcamps and workshops. Tenure: Jan 2022 to April 2023'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Internships, Certifications, Trainings</h5>
      <h2>Activities</h2>

      <Swiper className='container testimonials__container'
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials
