import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { IoIosClose } from 'react-icons/io'
import { SlUser } from 'react-icons/sl'
import { BsHandbag, BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import { CgMenuLeftAlt } from 'react-icons/cg'

export default function Header() {
  return (
    <header className='w-screen fixed z-10'>
      <div className='bg-[#362B0C] h-[29px] py-0 px-[3rem] flex justify-center items-center'>
        <p className='text-white text-xs text-center'>
          15% Off on First Order | Customer care - bazaar@chaayos.com
        </p>
      </div>
      <div className='w-screen h-[88px] bg-[#577C3A] flex justify-evenly items-center px-[40px]'>
        <img
          className='medium-up--hide'
          src='//cdn.shopify.com/s/files/1/0537/1104/4798/files/Chaayos_logo_140x.png?v=1624873098'
          srcSet='//cdn.shopify.com/s/files/1/0537/1104/4798/files/Chaayos_logo_140x.png?v=1624873098 1x, //cdn.shopify.com/s/files/1/0537/1104/4798/files/Chaayos_logo_140x@2x.png?v=1624873098 2x'
          alt='Chaayos'
          width='250px'
          height='58px'
        />
        <div className='flex items-center'>
          <input
            type='text'
            placeholder='Search...'
            className='pl-[10px] py-[8px] pr-[60px] w-[307px] h-[38px] placeholder:text-black focus:outline-none'
          />
          <button className='bg-white h-[38px] w-[58px] px-15px flex justify-center items-center'>
            <FiSearch style={{ width: '28px', height: '28px' }} />
          </button>
        </div>
        <div className='flex items-center space-x-6'>
          <a
            className='text-white flex justify-center items-center text-xl space-x-3 font-semibold'
            href='#'>
            <span>
              <SlUser />
            </span>
            <span>Account</span>
          </a>
          <a
            className='text-white flex justify-center items-center text-xl space-x-3 font-semibold'
            href='#'>
            <span>
              <BsHandbag />
            </span>
            <span>Cart</span>
          </a>
        </div>
      </div>
      <div className='w-screen px-[40px] mx-auto my-0 h-[54px] bg-[#577C3A] border border-t-[0.5px] border-[#68894E]'>
        <ul className='m-0 p-0 flex flex-wrap justify-evenly items-center ml-[20px] w-full'>
          <li className='text-white text-xl tracking-[0.16px] leading-[19.2px] hover:border-b-2 h-[54px] flex items-center justify-center'>
            <a className='px-[20px] py-[16px]' href='#'>
              Home
            </a>
          </li>
          <li className='text-white text-xl tracking-[0.16px] leading-[19.2px] hover:border-b-2 h-[54px] flex items-center justify-center'>
            <a className='px-[20px] py-[16px]' href='#'>
              Shop
            </a>
          </li>
          <li className='text-white text-xl tracking-[0.16px] leading-[19.2px] hover:border-b-2 h-[54px] flex items-center justify-center'>
            <a className='px-[20px] py-[16px]' href='#'>
              Make Your Own Chai
            </a>
          </li>
          <li className='text-white text-xl tracking-[0.16px] leading-[19.2px] hover:border-b-2 h-[54px] flex items-center justify-center'>
            <a className='px-[20px] py-[16px]' href='#'>
              Download App
            </a>
          </li>
          <li className='text-white text-xl tracking-[0.16px] leading-[19.2px] hover:border-b-2 h-[54px] flex items-center justify-center'>
            <a className='px-[20px] py-[16px]' href='#'>
              Cafe Locator
            </a>
          </li>
          <li className='text-white text-xl tracking-[0.16px] leading-[19.2px] hover:border-b-2 h-[54px] flex items-center justify-center'>
            <a className='px-[20px] py-[16px]' href='#'>
              Cafes
            </a>
          </li>
          <li className='text-white text-xl tracking-[0.16px] leading-[19.2px] hover:border-b-2 h-[54px] flex items-center justify-center'>
            <a className='px-[20px] py-[16px]' href='#'>
              About Brand
            </a>
          </li>
          <li className='text-white text-xl tracking-[0.16px] leading-[19.2px] hover:border-b-2 h-[54px] flex items-center justify-center'>
            <a className='px-[20px] py-[16px]' href='#'>
              Careers
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
