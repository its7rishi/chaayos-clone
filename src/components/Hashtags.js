import React, { useState } from 'react'
import Feeds from '../Feeds'
import { FaPlay, FaInstagram } from 'react-icons/fa'

function Hashtags() {
  const [feeds, setFeeds] = useState(Feeds)

  return (
    <section className='w-screen'>
      <div className='flex justify-center items-center'>
        <h1 className='text-3xl'>Chaayos Hashtag Feeds</h1>
      </div>
      <div className='py-[40px] grid grid-cols-4 gap-y-1 gap-x-1 w-full'>
        {feeds.map((item) => (
          <div
            className='feed w-[334px] h-[334px] cursor-pointer'
            key={item.id}
            style={{
              backgroundImage: `url(${item.img})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}>
            <div className='default hover-img width-full h-full bg-black opacity-0 flex justify-center items-center text-white text-xl transition-all duration-400 ease-linear hover:opacity-70'>
              <div className='icon'>
                {item.id === 1 ||
                item.id === 4 ||
                item.id === 5 ||
                item.id === 6 ? (
                  <FaPlay />
                ) : (
                  <FaInstagram />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
export default Hashtags
