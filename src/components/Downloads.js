import React from 'react'

function Downloads() {
  return (
    <section className='w-screen p-[40px]'>
      <div className='flex items-center justify-evenly space-x-4'>
        <div className='flex flex-col items-start justify-center space-y-4'>
          <h1 className='text-left text-3xl font-semibold '>
            Download the app
          </h1>
          <p className='text-left tracking-tighter'>
            Use app for more offers and seamless experience.
          </p>
        </div>
        <div className='flex justify-start items-center space-x-4'>
          <img
            src='https://cdn.shopify.com/s/files/1/0537/1104/4798/files/apple_68b8f9de-e4c7-4605-a179-463e2e451148_540x.png?v=1630483748'
            alt='appstore'
            width='408px'
            height='122px'
          />
          <img
            src='https://cdn.shopify.com/s/files/1/0537/1104/4798/files/android_540x.png?v=1630483772'
            alt='playstore'
            width='408px'
            height='122px'
          />
        </div>
      </div>
    </section>
  )
}

export default Downloads
