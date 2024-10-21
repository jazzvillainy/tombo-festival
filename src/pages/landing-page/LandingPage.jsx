import FirstSlide from './firstSlide/FirstSlide';
import SecondSlide from './SecondSlide/SecondSlide';
import Highlights from './festival-highlights/Highlights';
import TicketInfo from './ticket-informations/TicketInfo';
import { useRef } from 'react';


const LandingPage = () => {
  
  return (
    <div>
    {/* This is the first slide */}
      <div>
        <FirstSlide />
      </div>
      {/* This Is the second Slide */}
      <div>
        <SecondSlide />
      </div>
      <Highlights/>
      <TicketInfo/>
    </div>
  )
}

export default LandingPage
