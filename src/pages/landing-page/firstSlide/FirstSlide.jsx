import React from 'react'
import PalmTombo1 from '../../../assets/images/Palm Tombo1.png'
import Button from '../../../components/Button'
import Frame from '../../../assets/images/Frame.png'
import CountDown from './Countdown'
import CokeLogo from '../../../assets/images/CokeLogo.png'
import McDonLogo from '../../../assets/images/McDonLogo.png'
import KFCLogo from '../../../assets/images/KFCLogo.png'
import ShopriteLogo from '../../../assets/images/ShopriteLogo.png'
import PaystackLogo from '../../../assets/images/PaystackLogo.png'
import BudweiserLogo from '../../../assets/images/BudweiserLogo.png'
import RedBullLogo from '../../../assets/images/RedBullLogo.png'



const FirstSlide = () => {
  return (
    <div>
        <section className='flex mx-[120px] justify-between'>
            {/* Text, button and countdown */}
        <div className=''>
          {/* Header text */}
          <div>
            <h1 className='font-extrabold text-6xl bg-[url("https://i1.sndcdn.com/visuals-000135263314-ovWawt-t1240x260.jpg")] bg-clip-text text-transparent leading-normal'>Celeberate the Spirit of Tombo Festival</h1>
          </div>
          {/* Paragraph */}
          <div className='w-[700px] h-[64px] text-[22px] bg-[url("https://i1.sndcdn.com/visuals-000135263314-ovWawt-t1240x260.jpg")] bg-clip-text text-transparent'>
            <p>Join us for a cultural experience in the heart of the Niger Delta. A vibrant fusion of music, dance and tradition</p>
          </div>
          {/* Buy ticket and Be a vendor Buttons */}
          <div className='flex gap-[28px] my-5'>
            <Button content={'Buy Ticket'} link={'/tickets-info'} BtnStyle={'text-sm'} />
            <Button content={'Be a Vendor '} link={'/register-to-be-a-vendor'} BtnStyle={'bg-white text-[#236E45] shadow text-sm w-[150px]'} image={Frame}/>
          </div>

          {/* Coount Down */}
          <CountDown />
        </div>

        {/* PalmTombo Image */}
        <div className='flex  '>
            <img className='w-[564px] aspect-square' src={PalmTombo1} alt="" />
        </div>

        </section>

        {/* Sponsors section */}
       <section className='flex flex-col mx-[120px] my-[100px] gap-10'>
       <div className='text-center font-bold'>
            <h1>Sponsored By</h1>
        </div>
        <div className='flex justify-between'>
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
