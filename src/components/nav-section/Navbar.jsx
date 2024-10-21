import React from 'react';
import Button from '../Button';
import { Link } from 'react-scroll';
import Logo from './Logo';


const Navbar = () => {

  return (
    <nav className='flex justify-between px-[120px] py-5 bg-[#FCFDFC] sticky top-0 z-20 cursor-pointer'>
      {/* section links */}
      <div className='flex gap-x-12 justify-center items-center'>
        <Link to='hero' smooth={true} offset={-150} className='hover:text-[#236e45]'>Home</Link>

        <button >
        <Link to='about' smooth={true} offset={-100}  className='hover:text-[#236e45]'>About</Link>
        </button> 

        <Link to='highlight' smooth={true} offset={-100} className='hover:text-[#236e45]'>Highlights</Link>
      </div>
      {/* logo */}
      <div >
        <Logo />
      </div>
      {/* buy ticket */}
      <Link to='buyTicket' smooth={true} offset={-150} className='flex items-center'>
        <Button content={'Buy Ticket'} />
      </Link>
    </nav>
  )
}

export default Navbar
