import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import {FaFacebookF, FaInstagram, FaLinkedinIn} from 'react-icons/fa'

const Main = () => {
  return (
    <div id='main'>
      <img className='w-full h-screen object-cover object-left' src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
      <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
        <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>I'm Tammy Harry</h1>
        <h2 className='flex sm:text-3xl text-2xl pt-4 text-gray-800'>
          I'm a
          <TypeAnimation
          sequence={[
          'Full-Stack Developer',
          2000, 
          'Coder',
          2000,
          'Tech Enthusiast',
          2000,
         ]}
        wrapper="div"
        cursor={true}
        speed={50}
        style={{ fontSize: '1em', paddingLeft: '5px' }}
        repeat={Infinity}
        />
        </h2>
        <div className='flex justify-between pt-6 max-w-[200px] w-full' >
            <FaFacebookF className='cusor-pointer' size={20} />
            <FaInstagram className='cusor-pointer' size={20} />
            <FaLinkedinIn className='cusor-pointer' size={20} />
        </div>
      </div>
      </div>
    </div>
  )
}

export default Main