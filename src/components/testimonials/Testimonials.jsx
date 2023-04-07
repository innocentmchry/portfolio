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
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quibusdam facilis, ab unde corrupti aliquam ut consequatur ipsa, repellendus, ad laboriosam voluptas id voluptatibus esse!'
  },
  {
    avatar: AVTR2,
    name: 'Ranold Timber', 
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quibusdam facilis, ab unde corrupti aliquam ut consequatur ipsa, repellendus, ad laboriosam voluptas id voluptatibus esse!'
  },
  {
    avatar: AVTR3,
    name: 'Dakota Johnson', 
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quibusdam facilis, ab unde corrupti aliquam ut consequatur ipsa, repellendus, ad laboriosam voluptas id voluptatibus esse!'
  },
  {
    avatar: AVTR4,
    name: 'Johnny Dev', 
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quibusdam facilis, ab unde corrupti aliquam ut consequatur ipsa, repellendus, ad laboriosam voluptas id voluptatibus esse!'
  }
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
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
