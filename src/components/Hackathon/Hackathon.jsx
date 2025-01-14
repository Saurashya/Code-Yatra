import React from 'react'
import img from '../../assets/hackathon.png'

const Hackathon = () => {
  return (
    <div className='h-[100vh] w-[100vw] flex flex-col justify-start items-center gap-4 '>
        <img src="https://drive.google.com/uc?export=view&id=1IPkNPL85YRpCV7pCCxP8mzfw8NXX3Mgu
" alt="" className='h-[80vh] w-[45vw] rounded-xl z-20'/>
        <button className='bg-orange-500 p-1 rounded-lg cursor-pointer px-3 font-light tracking-wider hover:bg-gradient-to-br from-purple-500 to-indigo-400 z-20 text-white text-xl'>Click Here For Registration</button>
    </div>
  )
}

export default Hackathon