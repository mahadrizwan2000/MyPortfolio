import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
          <p className='py-6'>Please fill the form below to get in touch with me.</p>
        </div>
        <div className='flex justify-center items-center'>
          <form action="https://getform.io/f/lajklqob" method='POST' className='flex flex-col w-full md:w-1/2 space-y-4'>
            <input type="text" name='name' placeholder='Please enter your name' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <input type="email" name='email' placeholder='Please enter your email' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
            <textarea name="message" rows="10" placeholder='Please enter your message' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;