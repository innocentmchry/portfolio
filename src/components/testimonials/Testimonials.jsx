import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Snow', 
    review: 'Your work on this project was outstanding. Your attention to detail and ability to think critically were evident in the quality of your analysis and recommendations.'
  },
  {
    avatar: AVTR2,
    name: 'Raynold Timber', 
    review: 'I was impressed with your ability to work independently and collaboratively, demonstrating strong communication and problem-solving skills throughout the project.'
  },
  {
    avatar: AVTR3,
    name: 'Duke Johnson', 
    review: 'Your coding skills are exceptional, and your ability to apply those skills to solve complex problems is truly remarkable. Keep up the great work!'
  },
  {
    avatar: AVTR4,
    name: 'Selina Mogez', 
    review: 'Your dedication to learning and mastering new technologies is evident in the high-quality work you produced on this project. I have no doubt you will continue to excel in your career.'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Appraisals</h5>
      <h2>Testimonials</h2>

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
