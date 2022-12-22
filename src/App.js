import Bestsellers from './components/Bestsellers'
import Hashtags from './components/Hashtags'
import Header from './components/Header'
import Hero from './components/Hero'
import Newarrivals from './components/Newarrivals'
import Recommendedforyou from './components/Recommendedforyou'
import Shopnow from './components/Shopnow'
import Testimonials from './components/Testimonials'
import FreeShipping from './components/FreeShipping'
import Blogs from './components/Blogs'
import Downloads from './components/Downloads'
import Footer from './components/Footer'
import { BsFillGiftFill } from 'react-icons/bs'

function App() {
  return (
    <div className='container h-screen w-screen flex flex-col justify-start items-center bg-white p-0'>
      <Header />
      <Hero />
      <Shopnow />
      <Bestsellers />
      <Newarrivals />
      <Recommendedforyou />
      <Hashtags />
      <Testimonials />
      <FreeShipping />
      <Blogs />
      <Downloads />
      <Footer />
      <button className='bg-[#577C3A] text-white w-[60px] h-[60px] text-3xl text-center rounded-full p-4 align-start fixed bottom-4 left-4'>
        <BsFillGiftFill />
      </button>
    </div>
  )
}

export default App
