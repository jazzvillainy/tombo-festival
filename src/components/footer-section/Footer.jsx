import React from 'react';
import logo from '../../assets/images/Tombo-Fest-Logo.png';

const Footer = () => {
  return (
    <footer>
        <div className='flex justify-between px-24 h-[200px]'>
          {/* logo */}
          <div>
            <img src={logo} alt="Tombo Festival 2024" className='h-24 object-cover'/>
          </div>
          {/* social links */}
          <div className='flex gap-x-12'>
            <a href="" className='hover:text-[#236e45]'>Instagram</a>
            <a href="" className='hover:text-[#236e45]'>Facebook</a>
            <a href="" className='hover:text-[#236e45]'>WhatsApp</a>
            <a href="" className='hover:text-[#236e45]'>Email</a>
          </div>
          </div>
        {/* copyright */}
        <div className='flex justify-center items-center'>
            <p>&copy;Copyright 2024 Tombo Festival. All Rights Reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
