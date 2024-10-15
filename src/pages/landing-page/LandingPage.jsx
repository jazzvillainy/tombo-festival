import React from 'react';
import { Link } from 'react-router-dom';
import Highlights from '../../components/festival-highlights/Highlights';
import TicketInfo from '../../components/ticket-informations/TicketInfo';


const LandingPage = () => {
  return (
    <div className=''>
      <Highlights/>
      <TicketInfo/>
    </div>
  )
}

export default LandingPage
