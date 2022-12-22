import React, { useState } from 'react'
import { ShopList } from '../ShopList'

// console.log(ShopList)

function Shopnow() {
  const [data, setData] = useState(ShopList)

  return (
    <section className='p-[40px] flex flex-col space-y-10'>
      <div className='section-header p-0'>
        <h2 className='text-3xl text-left '>Shop Now</h2>
      </div>
      <div className='card-container flex flex-wrap justify-start'>
        {data.map((item) => (
          <div
            key={item.id}
            className='w-[180px] h-[292px] mb-10 mr-4  cursor-pointer  hover:-translate-y-1'>
            <img src={item.img} alt='pic' className='w-full' />
            <p className='text-center text-sm p-1 tracking-wide'>{item.text}</p>
          </div>
        ))}
      </div>
      <div className=' w-full bg-gray-300 py-4 flex items-center justify-center'>
        <div>
          <span className='text-2xl mr-4'>Get 15% Off on First ORDER</span>
          <span className='text.sm mr-4'>use Code FIRSTORDER</span>
          <button className='bg-black text-white p-2 text-sm'>Shop Now</button>
        </div>
      </div>
    </section>
  )
}

export default Shopnow
