import React, { useState } from 'react'
import {close, logo, menu} from '../assets'
import { navLinks} from '../Constants'
const Navbar = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <nav className='w-full flex py-6  justify-center items-center navbar'>
      <img src={logo} alt="" className='w-[124px] h-[32px]'/>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
  {navLinks.map((item, index)=>(
    <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-10' :'mr-10'} text-white`}>
    <a href={`#${item.id}`}>
      {item.title}
    </a>
  </li>
  
  ))}
</ul>

<div className='sm:hidden flex flex-1 justify-end items-center'>
  <img src={toggle ? close : menu} alt="" className='w-[28px] object-contain' onClick={()=>setToggle((prev)=> !prev)}/>

  <div className={`${toggle ? 'flex' : 'hidden'} p-6 absolute bg-black-gradient top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}>
  <ul className='list-none flex justify-end items-center flex-1 flex-col'>
  {navLinks.map((item, index)=>(
    <li key={index} className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length-1 ? 'mr-0' :'mb-4'} text-white`}>
    <a href={`#${item.id}`}>
      {item.title}
    </a>
  </li>
  
  ))}
</ul>
  </div>
</div>

    </nav>
  )
}

export default Navbar
