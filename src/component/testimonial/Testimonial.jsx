import React from 'react'
import './testimonial.css'
import Ava from '../../asset/me1.jpg'
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data =[
  {
    avatar: Ava,
    name: 'Fire Wales',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores culpa, praesentium quidem, deserunt nostrum, inventore placeat facilis ea laboriosam autem quod quas facere vitae quam nesciunt minus quasi aliquam sapiente?'
  },
  {
    avatar: Ava,
    name: 'Shatta Allen',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores culpa, praesentium quidem, deserunt nostrum, inventore placeat facilis ea laboriosam autem quod quas facere vitae quam nesciunt minus quasi aliquam sapiente?'
  },
  {
    avatar: Ava,
    name: 'Brian Tracy',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores culpa, praesentium quidem, deserunt nostrum, inventore placeat facilis ea laboriosam autem quod quas facere vitae quam nesciunt minus quasi aliquam sapiente?'
  },
  {
    avatar: Ava,
    name: 'Allison Walker',
    review: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores culpa, praesentium quidem, deserunt nostrum, inventore placeat facilis ea laboriosam autem quod quas facere vitae quam nesciunt minus quasi aliquam sapiente?'
  }
]

const Testimonial = () => {

  return (
    <section id='testimonial'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonial__container"
            modules={[ Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}>

        {
          data.map(({avatar, name, review}, index)=>{
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'> 
                {review}
              </small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonial
