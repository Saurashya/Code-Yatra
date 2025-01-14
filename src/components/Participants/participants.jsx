import React from 'react'

const participants = () => {
  return (
    <div className="h-[30vh] w-[100vw]  flex flex-col justify-around items-center">
        <h1 className='text-2xl font-light text-white text-center'>Expected Participants</h1>
    <div className="container grid grid-cols-3 justify-center items-center text-white">
        <div className="box flex flex-col justify-center items-center gap-4">
            <h1>3-5 teams</h1>
            <h3  className='text-xl'>Per Team</h3>
        </div>
        <div className="box flex flex-col justify-center items-center gap-4">
            <h1>100+</h1>
            <h3 className='text-xl'>Total Participants</h3>
        </div>
        <div className="box flex flex-col justify-center items-center gap-4">
            <h1>25+</h1>
            <h3 className='text-xl'> Total Team</h3>
        </div>
    </div>
</div>
  )
}

export default participants