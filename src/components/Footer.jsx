import React from 'react'
import {FaFacebookSquare, FaInstagram, FaTwitterSquare, FaLinkedinIn, FaGithubSquare } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='max-w-[11240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 bg-[#3f3132] text-gray-300'>
      <div>
        <h1 className='w-full text 3xl font-bold text-[#ab9d95]'>PORTFOLIO</h1>
        <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        <div className='flex justify-between md:w-[75%] my-6' >
        <FaFacebookSquare size={30} />
        <FaInstagram size={30} />
        <FaTwitterSquare size={30} />
        <FaLinkedinIn size={30} />
        <FaGithubSquare size={30} />
        </div>
      </div>
    <div className='lg:col-span-3 flex justify-between'>
      <div>
        <ul>
          <li>About Me</li>
          <li>Resume Highlights</li>
          <li>Portfolio</li>
          <li>Contact</li>

        </ul>
      </div>
      </div>
    </div>
  )
}

export default Footer