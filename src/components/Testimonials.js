import React, { useState } from 'react'
import Sliderdata from '../Slider'
import { AiFillStar } from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.min.css'
import './Testimonials.css'
import 'swiper/css/pagination'
import { Pagination } from 'swiper'

function Testimonials() {
  const [data, setData] = useState(Sliderdata)

  return (
    <section className='flex flex-col items-center'>
      <h1 className='text-center text-3xl'>What Our Customers are Saying </h1>

      <Swiper
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='mySwiper w-screen'
        onSwiper={(swiper) => console.log(swiper)}
        onChange={() => console.log('change')}>
        {data.map((item) => (
          <SwiperSlide
            key={item.id}
            className='w-[422px] flex flex-col items-center justify-start p-[30px] space-y-4 cursor-grab active:cursor-grabbing'>
            <span className='flex'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </span>
            <p className='text-center text-sm font-normal'>{item.text}</p>
            <img
              src={item.image}
              alt='user pic'
              className='rounded-full w-[62px] h-[62px]'
            />
            <div className='flex flex-col items-center justify-start space-y-0'>
              <p className='text-xl'>{item.name}</p>
              <p>{item.info}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default Testimonials
