import React, { useState } from 'react'
import { Bestproducts } from '../Bestproducts'
import { TbCurrencyRupee } from 'react-icons/tb'
import { AiFillStar } from 'react-icons/ai'

function Bestsellers() {
  const [bestsellers, setBestSellers] = useState(Bestproducts)

  return (
    <section className='p-[40px]'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl'>Bestsellers</h1>
        <a href='/' className='underline'>
          View all
        </a>
      </div>
      <div className='flex space-x-3'>
        {bestsellers.map((item) => (
          <div
            key={item.id}
            className='w-[238px]  mt-4 bg-gray-100 p-2 flex flex-col justify-between space-y-1 cursor-pointer'>
            <div>
              <img src={item.img} alt='pic' className='w-[233px] h-[233px]' />
              <h1 className='text-sm'>{item.title}</h1>
            </div>
            <div className='flex items-center space-x-2'>
              <span className='flex items-center justify-start'>
                <TbCurrencyRupee className='text-lg' />
                {item.selling_price}
              </span>
              {item.mrp > 0 && (
                <span className='text-xs text-gray-600 line-through flex items-center'>
                  <TbCurrencyRupee className='text-xs' />
                  {item.mrp}
                </span>
              )}
              <span className='text-xs text-red-700'>{item.save}</span>
            </div>
            <div className='flex items-center justify-center p-0 space-x-3'>
              <span className='flex justify-start items-center text-yellow-500'>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </span>
              <span className='text-xs tracking-tight'>{item.reviews}</span>
            </div>
            <div className='card-btn flex justify-center items-center'>
              <button className='bg-[#577C3A] text-white text-xs font-semibold w-[112px] py-2 rounded-sm'>
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Bestsellers
