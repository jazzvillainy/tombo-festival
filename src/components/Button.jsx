import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({content, link}) => {
  return (
    <div className='bg-[#236e45] text-white h-12 w-32 m-2 px-5 rounded-full capitalize flex items-center justify-center font-semibold cursor-pointer'>
        <Link to={link}>{content}</Link>
    </div>
  )
}

export default Button
