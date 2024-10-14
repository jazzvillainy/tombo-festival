import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Tombo-Fest-Logo.png';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-24 py-7 bg-white sticky top-0'>
      {/* section links */}
      <div className='flex gap-x-12'>
        <Link to={'/'} className='hover:text-[#236e45]'>Home</Link>
        <Link to={''} className='hover:text-[#236e45]'>About</Link>
        <Link to={''} className='hover:text-[#236e45]'>Highlights</Link>
      </div>
      {/* logo */}
      <div>
        <img src={logo} alt="Tombo Festival 2024" className='h-20 object-cover'/>
      </div>
      {/* buy ticket */}
      <div>
        <Button content={'Buy Ticket'} link={'/tickets-info'}/>
      </div>
    </nav>
  )
}

export default Navbar
