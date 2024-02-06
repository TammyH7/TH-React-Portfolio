import React from 'react'
import WorkItem from './WorkItem'

const data = [
  {
      year: 2023,
      title: 'Front-End Developer: Food-4-Foodies',
      duration:'3 months',
      details:
      'Participated in the front-end development efforts for a dynamic recipe serve platform, demonstrating proficiency in HTML, CSS, and JavaScript frameworks, resulting in an enhanced user experience.'
  },
  {
      year: 2024,
      title: 'Back-End Developer: Anyway, Here is Wonderwall...',
      duration:'3 months',
      details:
      'Participated in the back-end development of an MVC comprehensive music database system, utilizing JavaScript and SQL, Node.js, Express and Sequelize to optimize data storage, retrieval, and processing, leading to improved system efficiency and seamless integration with the front-end, ultimately enhancing the overall performance and user experience of the platform.'
  },
  {
      year: 2024,
      title: 'Content Creator: Regex Tutorial Blog',
      duration:'3 months',
      details:
      'Produced engaging and informative content as a content creator, specializing in crafting a comprehensive and beginner-friendly regular expressions (regex) tutorial. Combined creativity with technical expertise to demystify complex concepts, resulting in a well-detailed tutorial that is geared to empower users to master regex patterns for diverse applications.'
  },
  {
      year: 2024,
      title: 'PWA Designer: Text Editor',
      duration:'3 months',
      details:
      'As a Progressive Web App (PWA) designer, conceptualized and implemented a user-centric approach to enhance a text editors functionality, employing responsive design principles and offline capabilities. The result was an innovative and efficient PWA text editor that seamlessly adapted to various devices and empowered users to create and edit content offline, significantly elevating the applications usability and accessibility.'
    },
  ]

const Work = () => {
  return (
    <div id='work' className='max-w-[1040px] m-auto md:pl-20 p-4 py-5'>
      <h1 className='text-4xl font-bold text-center text-[#3f3132]'>Resume Highlights</h1>
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