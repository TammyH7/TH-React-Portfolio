import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
      year: 2023,
      title: 'Front-End Developer: Food-4-Foodies',
      duration:'3 months',
      details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloribus voluptatibus commodi cum quisquam, accusantium eveniet numquam rem ipsam? Aut accusantium praesentium fugiat qui ducimus velit ea harum delectus quibusdam!'
  },
  {
      year: 2024,
      title: 'Back-End Developer: Anyway, Here is Wonderwall...',
      duration:'3 months',
      details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloribus voluptatibus commodi cum quisquam, accusantium eveniet numquam rem ipsam? Aut accusantium praesentium fugiat qui ducimus velit ea harum delectus quibusdam!'
  },
  {
      year: 2024,
      title: 'Content Creator: Regex Tutorial Blog',
      duration:'3 months',
      details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloribus voluptatibus commodi cum quisquam, accusantium eveniet numquam rem ipsam? Aut accusantium praesentium fugiat qui ducimus velit ea harum delectus quibusdam!'
  },
  {
      year: 2024,
      title: 'PWA Designer: Text Editor',
      duration:'3 months',
      details:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa doloribus voluptatibus commodi cum quisquam, accusantium eveniet numquam rem ipsam? Aut accusantium praesentium fugiat qui ducimus velit ea harum delectus quibusdam!'
    },
  ]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
      <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Work</h1>
        {data.map((item, idx) => (
            <WorkItem 
              key={idx} 
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />  
        ))}
    </div>
  );
};

export default Work