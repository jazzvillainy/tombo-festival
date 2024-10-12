import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div className='h-full'>
      this is supposed to be the landing page
      click <Link to={"/tickets-info"}>here</Link> to book a ticket
    </div>
  )
}

export default LandingPage
