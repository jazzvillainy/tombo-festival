import React from 'react';
import { Link } from 'react-router-dom';
import FirstSlide from './firstSlide/FirstSlide';


const LandingPage = () => {
  return (
    <div className=''>
      {/* This is the first slide */}
      <div>
        <FirstSlide />
      </div>
    </div>
  )
}

export default LandingPage
