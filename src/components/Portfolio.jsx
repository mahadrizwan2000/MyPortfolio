import React from 'react'
import GymWebsite from '../assets/portfolio/GymWebsite.PNG'
import Photography from '../assets/portfolio/Photography.PNG'

const Portfolio = () => {
  const portfolio = [
    {
      id: 1,
      src : GymWebsite,
      href : 'https://github.com/mahadrizwan2000/Gym-website-landing-page'
    },
    {
      id: 2,
      src : Photography,
      href : 'https://github.com/mahadrizwan2000/Freelance-Photographer-Portfolio-Website'
    },
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen '>
      <div className='max-w-screen-lg p-4 max-auto flex flex-col justify-center w-full h-full'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Portfolio</p>
          <p className='py-6'>Check out some of my work here</p>
      </div>

     
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

        {
        portfolio.map(({id, src, href}) => (
          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
            <img src={src} alt="" className='rounded-md duration-200 hover:scale-105 px-4' />
            <div className='flex items-center justify-center '>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
              <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'><a href= {href} target='_blank' rel='noopener noreferrer'>Code</a></button>
            </div> 
          </div>
        

        ))
      }
    </div>
          
      
    </div> 
  )
}

export default Portfolio
