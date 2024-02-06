import React from 'react'
import AboutItem from './AboutItem'
import aboutmeImg from '../assets/aboutme.png'

const AboutMe = () => {
  return (
    <div id='aboutme' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
    <h1 className='mb-10 text-4xl font-bold text-center text-[#3f3132]'>About Me</h1>
    <div  className='w-[60%] m-auto shadow-xl shadow-gray-400 rounded-xl'>
      <AboutItem img={aboutmeImg} />
    </div>
    <p className='mt-16 mb-8 leading-relaxed text-xl 2xl:whitespace-normal whitespace'>
    As a full-stack developer, I am passionate about crafting innovative and seamless digital solutions that span the entire spectrum of web development. With a solid foundation in both front-end and back-end technologies, I specialize in creating responsive and user-friendly interfaces that engage and delight users. My expertise includes mastering the intricacies of HTML, CSS, and JavaScript on the client side, coupled with robust server-side development using languages such as Node.js, MySQL and Mongo DB. Whether architecting databases, optimizing server performance, or implementing dynamic front-end features, I thrive on the challenges of delivering end-to-end solutions. 
    </p>
  </div>
  )
}

export default AboutMe