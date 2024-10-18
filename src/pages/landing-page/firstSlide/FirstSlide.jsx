import React from 'react';
import PalmTombo1 from '../../../../dist/assets/Palm Tombo1-Dz9cBsyf.png';
import Button from '../../../components/Button';
import Frame from '../../../assets/images/Frame.png';
import CountDown from './Countdown';
import CokeLogo from '../../../assets/images/CokeLogo.png';
import McDonLogo from '../../../assets/images/McDonLogo.png';
import KFCLogo from '../../../assets/images/KFCLogo.png';
import ShopriteLogo from '../../../../dist/assets/ShopriteLogo-BKELNKIF.png';
import PaystackLogo from '../../../assets/images/PaystackLogo.png';
import BudweiserLogo from '../../../assets/images/BudweiserLogo.png';
import RedBullLogo from '../../../assets/images/RedBullLogo.png';



const FirstSlide = () => {
  return (
    // First slide contains hero section and sponsors section
    <div>
        <section className='flex s:flex-col sm:flex-col md:flex-col lg:flex xl:flex px-[120px] s:px-6 justify-between s:gap-5 s:justify-center '>
            {/* Text, button and countdown */}
        <div className=''>

          {/* Header text */}
          <div>
            <h1 className='font-extrabold text-5xl s:text-3xl s:mb-3 bg-[url("https://i1.sndcdn.com/visuals-000135263314-ovWawt-t1240x260.jpg")] bg-clip-text text-transparent leading-normal'>Celeberate the Spirit of Tombo Festival</h1>
          </div>

          {/* Paragraph */}
          <div className='w-[650px] s:w-full h-[64px] s:h-full text-[20px] s:text-sm text-[#301D0B] '>
            <p>Join us for a cultural experience in the heart of the Niger Delta. A vibrant fusion of music, dance and tradition</p>
          </div>

          {/* Buy ticket and Be a vendor Buttons */}
          <div className='flex gap-[28px] my-5'>
            <Button content={'Buy Ticket'} link={'/tickets-info'} BtnStyle={'text-sm'} />
            <Button content={'Be a Vendor '} link={'/register-to-be-a-vendor'} BtnStyle={'bg-white text-[#236E45] shadow text-sm w-[160px] space-x-2'} image={Frame}/>
          </div>

          {/* Count Down */}
          <CountDown />
        </div>

        {/* PalmTombo Image */}
        <div className='flex s:w-full s:h-full '>
            <img className='object-cover' src={PalmTombo1} alt="" />
        </div>

        </section>

        {/* Sponsors section */}
       <section className='flex flex-col px-[120px] s:px-5 my-[100px] gap-10'>
       <div className='text-center font-bold'>
            <h1>Sponsored By</h1>
        </div>
        <div className='grid grid-cols-7 s:grid-cols-4 s:grid-rows-2 s:items-center justify-items-center s:gap-2 object-cover aspect-auto'>
            <img src={CokeLogo} alt="" />
            <img src={McDonLogo} alt="" />
            <img src={KFCLogo} alt="" />
            <img src={ShopriteLogo} alt="" />      
            <img src={PaystackLogo} alt="" />
            <img src={BudweiserLogo} alt="" />
            <img src={RedBullLogo} alt="" />
        </div>
       </section>
    </div>
  )
}

export default FirstSlide
