import React from 'react';
// import icons
import { HiOutlineSparkles } from 'react-icons/hi2';
import { CiCalendar, CiClock2, CiLocationOn } from "react-icons/ci";
import Map from './Map';
// import flyer
import flyer from '../../../assets/images/tombo-fest-flyer.jpg';
import Button from '../../../components/Button';

const TicketInfo = () => {
  return (
    <div>
      {/* header */}
      <div className='font-semibold capitalize text-3xl flex flex-col items-center gap-6 mb-8'>
        <HiOutlineSparkles className='text-[#f29435] mx-3'/>
        <h1>ticket informations</h1>
      </div>
      {/* body */}
      <div className='flex ml-28 mr-20 py-2 gap-x-16'>
        {/* events info and map */}
        <div className='w-full flex flex-col gap-14'>
          {/* event info */}
          <div className='flex flex-col gap-4'>
            <h3 className='font-semibold text-lg mb-2'>Event Info</h3>
            <div className='flex gap-3 items-center'>
              <div><CiCalendar className='text-2xl'/></div>
              <p>Saturday, 14th December, 2024</p>
            </div>
            <div className='flex gap-3 items-center'>
              <div><CiClock2 className='text-2xl'/></div>
              <p>1 PM Prompt</p>
            </div>
            <div className='flex gap-3 items-center'>
              <div><CiLocationOn className='text-2xl'/></div>
              <p>Polo Club GRA Phase 2, Port Harcourt</p>
            </div>
          </div>
          {/* map */}
          <div className='flex flex-col gap-5'>
            <h3 className='font-semibold text-lg mb-2'>Location on map</h3>
            <div className='ml-5'>
              <Map/>
            </div>
          </div>
        </div>
        {/* tickets info */}
        <div className='w-full'>
          <div className='flex flex-col gap-3'>
            <h3 className='font-semibold text-lg mb-2'>Purchase Ticket</h3>
            <div className='flex justify-between items-center hover:bg-[#f5f5f5] px-5 py-2 rounded-lg hover:cursor-pointer'>
              {/* package */}
              <div>
                <p>Early Bird</p>
                <p>₦ 4,000</p>
              </div>
              {/* image */}
              <img src={flyer} alt="Early Bird Ticket" className='h-[75px]' />
            </div>
            <div className='flex justify-between items-center hover:bg-[#f5f5f5] px-5 py-2 rounded-lg hover:cursor-pointer'>
              {/* package */}
              <div>
                <p>Regular</p>
                <p>₦ 5,000</p>
              </div>
              {/* image */}
              <img src={flyer} alt="Early Bird Ticket" className='h-[75px]' />
            </div>
            <div className='flex justify-between items-center hover:bg-[#f5f5f5] px-5 py-2 rounded-lg hover:cursor-pointer'>
              {/* package */}
              <div>
                <p>VIP</p>
                <p>₦ 25,000</p>
              </div>
              {/* image */}
              <img src={flyer} alt="Early Bird Ticket" className='h-[75px]' />
            </div>
            <div className='flex justify-between items-center hover:bg-[#f5f5f5] px-5 py-2 rounded-lg hover:cursor-pointer'>
              {/* package */}
              <div>
                <p>Golden Hut</p>
                <p>₦ 200,000</p>
              </div>
              {/* image */}
              <img src={flyer} alt="Early Bird Ticket" className='h-[75px]' />
            </div>
            <div className='flex justify-between items-center hover:bg-[#f5f5f5] px-5 py-2 rounded-lg hover:cursor-pointer'>
              {/* package */}
              <div>
                <p>Exclusive Hut</p>
                <p>₦ 500,000</p>
              </div>
              {/* image */}
              <img src={flyer} alt="Early Bird Ticket" className='h-[75px]' />
            </div>
          </div>
          <Button content={'Buy Ticket'}/>
        </div>
      </div>
    </div>
  )
}

export default TicketInfo;
