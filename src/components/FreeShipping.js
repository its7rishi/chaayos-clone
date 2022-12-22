import React from 'react'
import { BsFacebook, BsTwitter, BsPinterest } from 'react-icons/bs'

function FreeShipping() {
  return (
    <section className='p-[40px] w-screen flex items-center justify-center'>
      <div className='w-[700px] flex flex-col items-center justify-center space-y-4'>
        <h2 className='text-3xl text-center'>
          Free shipping on orders above Rs. 250
        </h2>
        <p className='text-xl text-center'>
          Subscribe to get special offers, great deals and know about new
          launches.
        </p>
        <div className='flex justify-center items-center'>
          <input
            type='email'
            placeholder='Enter your email'
            className='border border-black h-12 p-3 placeholder:text-black focus:outline-blue-600'
          />
          <button className='bg-black text-white p-3'>Subscribe</button>
        </div>
        <div className='flex items-center justify-center space-x-6'>
          <span className='flex items-center justify-center'>
            <BsFacebook /> &nbsp; Share
          </span>
          <span className='flex items-center justify-center'>
            <BsTwitter /> &nbsp; Tweet
          </span>
          <span className='flex items-center justify-center'>
            <BsPinterest /> &nbsp; Pin it
          </span>
        </div>
      </div>
    </section>
  )
}

export default FreeShipping
