import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/TomboLogo.png';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-24 py-5 bg-white sticky top-0 '>
      {/* section links */}
      <div className='flex gap-x-12 justify-center items-center'>
        <Link to={'/'} className='hover:text-[#236e45]'>Home</Link>
        <Link to={''} className='hover:text-[#236e45]'>About</Link>
        <Link to={''} className='hover:text-[#236e45]'>Highlights</Link>
      </div>
      {/* logo */}
      <div>
        <img src={logo} alt="Tombo Festival 2024" className='h-20 object-cover'/>
      </div>
      {/* buy ticket */}
      <div className='flex items-center'>
        <Button content={'Buy Ticket'} link={'/tickets-info'}/>
      </div>
    </nav>
  )
}

export default Navbar
