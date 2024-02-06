import React from 'react'
import ProjectItem from './ProjectItem'
import foodiesImg from '../assets/foodies.png'
import notetakerImg from '../assets/notetaker.png'
import wonderwallImg from '../assets/wonderwall.png'
import pwgeneratorImg from '../assets/pwgenerator.png'
import refactorImg from '../assets/refactor.png'
import regexImg from '../assets/regex.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#3f3132]'>Portfolio</h1>
      <p className='mt-5 mb-8 leading-relaxed text-xl 2xl:whitespace-normal whitespace'>
        
I have successfully engaged in the end-to-end development of software applications. Leveraging a diverse skill set encompassing front-end technologies such as React.js, back-end proficiency in Node.js, and database management using MongoDB, and engineered a robust and scalable solution. Implemented features included a responsive user interface, secure authentication, and seamless integration with a database. Here are a few projects that I have completed.
      </p>
      <div className='grid sm:grid-cols-3 gap-12'>
        <ProjectItem img={foodiesImg} title='Recipe App' />
        <ProjectItem img={notetakerImg} title='Notetaker App' />
        <ProjectItem img={wonderwallImg} title='Music DB App' />
        <ProjectItem img={pwgeneratorImg} title='Password App' />
        <ProjectItem img={refactorImg} title='Code Refacotr App' />
        <ProjectItem img={regexImg} title='Tutorial App' />
      </div>
    </div>
  )
}

export default Projects