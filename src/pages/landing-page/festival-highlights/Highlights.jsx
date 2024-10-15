import React from 'react';
// import icons
import { HiOutlineSparkles } from "react-icons/hi2";
import { GiSparkles } from "react-icons/gi";
// import images
import peopleAtConcert from '../../assets/images/Palm Tombo2.png';
import boleFish from '../../assets/images/Palm Tombo3.png';
import manDrumming from '../../assets/images/pexels-yankrukov-9010079.jpg';

const Highlights = () => {
  return (
    <div className='flex mx-auto bg-[#fcfcfc] py-2'>
      {/* texts */}
      <div className='p-20 w-full flex flex-col gap-10'>
        {/* header */}
        <div className='font-semibold capitalize text-3xl flex flex-col gap-5'>
          <HiOutlineSparkles className='text-[#f29435] mx-3'/>
          <h1>festival highlights</h1>
        </div>
        {/* mini texts */}
        <div className='flex items-start gap-x-2'>
          <div>
            <GiSparkles className='text-2xl text-[#f29435]'/>
          </div>
          <div className='pr-16'>
            <h3 className='font-semibold text-lg mb-2'>Food & Comedy</h3>
            <p className='text-sm'>Laugh out loud with the region's top comedians while grooving to the best beats. A perfect blend of entertainment and rhythm awaits you!</p>
          </div>
        </div>
        <div className='flex items-start gap-x-2'>
          <div>
            <GiSparkles className='text-2xl text-[#f29435]'/>
          </div>
          <div className='pr-16'>
            <h3 className='font-semibold text-lg mb-2'>Live Band</h3>
            <p className='text-sm'>Feel the rhythm of the Niger Delta with electrifying performances from local and national bands. Let the music move your soul!</p>
          </div>
        </div>
        <div className='flex items-start gap-x-2'>
          <div>
            <GiSparkles className='text-2xl text-[#f29435]'/>
          </div>
          <div className='pr-16'>
            <h3 className='font-semibold text-lg mb-2'>Games</h3>
            <p className='text-sm'>Join in the fun with traditional and modern games for all ages. Exciting challenges and prizes guarantee an unforgettable experience!</p>
          </div>
        </div>
      </div>
      {/* images */}
      <div className='w-full pr-5'>
        <div className='grid grid-cols-2 grid-rows-2 gap-3'>
          <img src={peopleAtConcert} alt="People at a Festival" className='rounded-lg' />
          <img src={manDrumming} alt="An image of a man drumming" className='row-span-2 rounded-lg h-[100%] object-cover' />
          <img src={boleFish} alt="An image of Bole" className='rounded-lg' />
        </div>
      </div>
    </div>
  )
}

export default Highlights;
