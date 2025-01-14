import React from 'react'
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer h-[30vh] w-[100vw] bg-gradient-to-b from-blue-800 from-5 to-black to-80% flex flex-col justify-center items-center' id='footer'>
        <h1 className='text-white text-center text-lg tracking-wide'>Stay Up To Date with our News and Notifications</h1>
        <div className="logos flex justify-center gap-4 items-center h-[50%]">
          <div className="logo bg-gray-500 rounded-full p-1">
          <FaInstagram className='text-white' />
          </div>
          <div className="logo bg-gray-500 rounded-full p-1">
          <FaInstagram className='text-white' />
          </div>
          <div className="logo bg-gray-500 rounded-full p-1">
          <FaInstagram className='text-white' />
          </div>
        </div>
        <p className='text-white font-extralight text-[8px]'>Copyright &copy; CodeYatra | All Rights Reserved</p>
        <p className='text-white font-extralight text-[8px]'>Powered By Panacea Solution</p>
    </div>
  )
}

export default Footer