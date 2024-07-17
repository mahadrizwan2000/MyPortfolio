import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from from-gray-800 to to-black text-white '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-19'>Hi, my name is Mahad Rizwan. I graduated with a BS in Computer Science in January, 2024 from Comsats University, Wah Campus. Those 4 years in University, helped me polish my problem-solving skills through subjects like data structures & algorithms, Object Oriented Progrramming, programming fundamentals etc. My final year project was a MERN Stack app called 'Pakistan Tourist'. It's purpose was to help tourist book and pay for various tour packages through our web app and it helped tourist companies to boost their sales by generating business through our webb app.</p> <br/>
            <p className='text-xl'>Since graduating I have been working on my frontend skills by thoroughly going revising React.JS concepts and learning different CSS frameworks like bootstrap & tailwind. </p>
        </div>
      
    </div>
  )
}

export default About
