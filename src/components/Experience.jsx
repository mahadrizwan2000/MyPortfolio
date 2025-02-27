import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import react from '../assets/react.png'
import javascript from '../assets/javascript.png'
import tailwind from '../assets/tailwind.png'
import github from '../assets/github.png'

const Experience = () => {
    const experience = [
        {
            id : 1,
            src : html,
            title : "html",
            style : 'shadow-orange-500'
        },
        {
            id : 2,
            src : css,
            title : "css",
            style : 'shadow-blue-500'
        },
        {
            id : 3,
            src : javascript,
            title : "javascript",
            style : 'shadow-yellow-500'
        },
        {
            id : 4,
            src : react,
            title : "react",
            style : 'shadow-blue-600'
        },
        {
            id : 5,
            src : tailwind,
            title : "tailwind",
            style : 'shadow-sky-400'
        },
        {
            id : 6,
            src : github,
            title : "github",
            style : 'shadow-gray-500'
        },

    ]


  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen '>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline '>Experience</p>
            <p className='py-6'>These are the languages and tools I have worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>

            {
                experience.map(({id,title,src, style})=>(
                    <div key={id}
                     className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`} >
                <img src={src} alt="" className='w-20 mx-auto' />
                <p className='mt-4'>{title}</p>
            </div>

                ))
            }

            
        </div>



      </div>
    </div>
  )
}

export default Experience
