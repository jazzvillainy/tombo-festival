import React from 'react'

const Footer = () => {
  return (
    <footer>
        <div className='flex justify-between px-24 h-[200px]'>
          {/* logo */}
          <div>Logo goes HERE</div>
          {/* social links */}
          <div className='flex gap-x-12'>
            <a href="">Instagram</a>
            <a href="">Facebook</a>
            <a href="">WhatsApp</a>
            <a href="">Email</a>
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
