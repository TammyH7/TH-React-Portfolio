import React from 'react'

const WorkItem = ({year, title, duration, details}) => {
  return (
    <ol className='flex flex-col md:flex-row relative border-l border-stone-200'>
        <li className='mt-5 mb-8 leading-relaxed text-xl 2xl:whitespace-normal whitespace' >
          <div className='absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 left-1.5 border-whiteE'/>
            <p className='flex flex-wrap gap-4 flex-row items-center justify-start text-lg md:text-sm'>
              <span className='inline-block px-2 py-1 font-semobold text-white bg-[#3f3132] rounded-mb' >{year}</span>
              <span className='text-lg font-semibold text-[#3f3132]'>{title}</span>
              <span className='my-1 text-sm font-normal leading-nome text-stone-400' >{duration}</span>
            </p>
            <p>{details}</p>
        </li>
    </ol>
  )
}

export default WorkItem