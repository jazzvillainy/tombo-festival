import React from 'react';
import { Link } from 'react-router-dom';
import FirstSlide from './firstSlide/FirstSlide';
import SecondSlide from './SecondSlide/SecondSlide';


const LandingPage = () => {
  return (
    <div className=''>
      {/* This is the first slide */}
      <div>
        <FirstSlide />
      </div>
      {/* This Is the second Slide */}
      <div>
        <SecondSlide />
      </div>
    </div>
  )
}

export default LandingPage
