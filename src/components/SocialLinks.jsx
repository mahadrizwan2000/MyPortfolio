import React from 'react'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'

const SocialLinks = () => {
    const links = [
      {
        id: 1,
        href: 'https://www.linkedin.com',
        child: (
          <>
            LinkedIn <FaLinkedin size={23} />
          </>
        ),
      },
      {
        id: 2,
        href: 'https://github.com/mahadrizwan2000',
        child: (
          <>
            GitHub <FaGithub size={23} />
          </>
        ),
      },
      {
        id: 3,
        href: 'mailto:mahadrizwan2000@gmail.com',
        child: (
          <>
            Email <HiOutlineMail size={23} />
          </>
        ),
        
      },
      {
        id: 4,
        href: '/Resume.pdf',
        child: (
          <>
            Resume <BsFillPersonLinesFill size={23} />
          </>
        ),
        download: true,
      },
    ];
    
  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
      <ul>
        {links.map(({id, child,href,download})=> (
            <li
             key={id} className='flex justify-between items-center w-40 h-14 px-4 rounded-md bg-gray-300 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 + " "'>
            <a 
            href={href}
             className='flex justify-between items-center w-full text-black' 
             download={download} 
             target='_blank'
             rel='noreferrer'> {child}
            
            </a>
        </li>
        ))}
        
      </ul>
    </div>
  )
}

export default SocialLinks
