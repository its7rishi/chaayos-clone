import React from 'react'

function Blogs() {
  return (
    <section className='p-[40px] w-full flex items-center'>
      <div className='grid grid-cols-2'>
        <div className='flex flex-col items-start justify-start space-y-4'>
          <img
            src='https://cdn.shopify.com/s/files/1/0537/1104/4798/files/img_151321_survivors_chaayos_bg_540x.jpg?v=1627022331'
            alt='founder_pic'
            width='480px'
            height='320px'
          />
          <h3 className='text-left text-2xl tracking-wide'>
            Little chaos, more Chaayos
          </h3>
          <p className='text-left tracking-tighter'>
            How tea retail chain Chaayos managed to keep its brew intact by
            surviving chaotic months. All it banked on was safe-tea.
          </p>
          <a href='/' className='underline'>
            Read More
          </a>
        </div>
        <div className='flex flex-col items-start justify-start space-y-4'>
          <img
            src='https://cdn.shopify.com/s/files/1/0537/1104/4798/files/chaayos_57a55546-d299-41d0-b5f8-eb9e32e7ac93_540x.jpg?v=1627022902'
            alt='storePic'
            width='520px'
            height='306px'
          />
          <h3 className='text-left text-2xl tracking-wider'>
            Chaayos eyes to have 300 stores in 3 years
          </h3>
          <p className='text-left tracking-tighter'>
            The tea cafe chain further targets to have 100 stores by the end of
            the current fiscal year.
          </p>
          <a href='/' className='underline'>
            Read More
          </a>
        </div>
      </div>
    </section>
  )
}

export default Blogs
