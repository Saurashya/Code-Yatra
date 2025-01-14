import React from 'react'
import Itclub from "../assets/itclub.png"
import Hecc from "../assets/hecc.png"
import Hrc from "../assets/hrc.png"

const OC = () => {
  return (
    <div className='h-[80vh] w-[100vw] flex flex-col justify-around items-center'>
        <h1 className='text-center text-4xl text-white font-semibold tracking-wider my-12'>CodeYatra Organizing Club</h1>
        <div className="club-logo grid grid-cols-3 gap-12">
            {/* <div></div> */}
            <img src="https://drive.google.com/uc?export=view&id=13sX6NOOmhkEejxVDuoVWZTogp8sIPdBh
" alt="It club Logo"className='h-[70%] rounded-full mx-12 z-20' />
            <img src="https://drive.google.com/uc?export=view&id=15Eq7mjqi_1NOdj2ERaLmuB0Rwy4DR_DE
" alt="Hecc Logo" className='h-[70%] rounded-full z-20'/>
            <img src="https://drive.google.com/uc?export=view&id=1_I5O4UIM2LwG9ixTFZO3MGJ_ZalP0KHT
" alt=" HRC logo" className='h-[70%] rounded-full z-20' />
            {/* <div></div> */}
        </div>
    </div>
  )
}

export default OC