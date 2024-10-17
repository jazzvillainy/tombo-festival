import React, { useContext } from 'react';
import Button from '../Button';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/TomboLogo.png';
// import icon
import { RxHamburgerMenu } from "react-icons/rx";
// import menu context
import { MenuContext } from '../../context/MenuContext';

const Navbar = () => {
  // getting the menu context
  const {isClicked, setIsClicked} = useContext(MenuContext);

  return (
    <nav className='flex justify-between s:px-0 sm:px-0 md:px-0 lg:px-[120px] xl:px-[120px] py-5 bg-[#FCFDFC] sticky top-0 z-20'>
      {/* section links */}
      <div className='s:hidden sm:hidden md:hidden lg:flex xl:flex gap-x-12 justify-center items-center'>
        <Link to={'/'} className='hover:text-[#236e45]'>Home</Link>
        <Link to={''} className='hover:text-[#236e45]'>About</Link>
        <Link to={''} className='hover:text-[#236e45]'>Highlights</Link>
      </div>
      <div className='s:block sm:block md:block lg:hidden xl:hidden'></div>
      {/* logo */}
      <div>
        <img src={logo} alt="Tombo Festival 2024" className='s:h-10 sm:h-12 md:h-14 lg:h-20 xl:h-20 s:ml-16 object-cover'/>
      </div>
      {/* buy ticket */}
      <div className='flex items-center s:hidden sm:hidden md:hidden lg:block xl:block'>
        <Button content={'Buy Ticket'} link={'/tickets-info'}/>
      </div>
      <div onClick={() => setIsClicked(!isClicked)} className='s:block sm:block md:block lg:hidden xl:hidden hover:cursor-pointer'>
        {isClicked ? <RxHamburgerMenu className='transition-all rotate-90 duration-200 text-3xl mr-8'/> : <RxHamburgerMenu className='transition-all duration-200 rotate-0 text-3xl mr-8'/>}
      </div>
    </nav>
  )
}

export default Navbar
