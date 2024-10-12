import React from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='flex justify-between px-24 py-9 bg-white sticky top-0'>
      {/* section links */}
      <div className='flex gap-x-12'>
        <Link to={'/'}>Home</Link>
        <a href="">About</a>
        <a href="">Highlights</a>
      </div>
      {/* logo */}
      <div>Logo goes HERE</div>
      {/* buy ticket */}
      <div>
        <Button content={'Buy Ticket'} link={'/tickets-info'}/>
      </div>
    </nav>
  )
}

export default Navbar
