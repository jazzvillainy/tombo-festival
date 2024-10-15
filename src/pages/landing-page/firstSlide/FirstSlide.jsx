import React from 'react'
import TomboTextBg from '../../../assets/images/TomboTextBg.png'
import PalmTombo1 from '../../../assets/images/Palm Tombo1.png'
import Button from '../../../components/Button'
import Frame from '../../../assets/images/Frame.png'
import CountDown from './Countdown'



const FirstSlide = () => {
  return (
    <div>
        <section className='flex mx-10'>
            {/* Text, button and countdown */}
        <div>
          {/* Header text */}
          <div>
            <h1 className='font-extrabold text-6xl w-[806px] h-[194px] bg-[url("https://i1.sndcdn.com/visuals-000135263314-ovWawt-t1240x260.jpg")] bg-clip-text text-transparent leading-[70px]'>Celeberate the Spirit of Tombo Festival</h1>
          </div>
          {/* Paragraph */}
          <div className='w-[745px] h-[64px] text-[24px] bg-[url("https://i1.sndcdn.com/visuals-000135263314-ovWawt-t1240x260.jpg")] bg-clip-text text-transparent'>
            <p>Join us for a cultural experience in the heart of the Niger Delta. A vibrant fusion of music, dance and tradition</p>
          </div>
          {/* Buy ticket and Be a vendor Buttons */}
          <div className='flex'>
            <Button content={'Buy Ticket'} link={'/tickets-info'} BtnStyle={'text-sm'} />
            <Button content={'Be a Vendor '} link={'/register-to-be-a-vendor'} BtnStyle={'bg-white text-green-600 shadow text-sm w-[150px]'} image={Frame}/>
          </div>
          {/* Coount Down */}
          <CountDown />
        </div>

        {/* PalmTombo Image */}
        <div className='w-[20%] aspect-square'>
            <img src={PalmTombo1} alt="" />
        </div>

        </section>
    </div>
  )
}

export default FirstSlide
