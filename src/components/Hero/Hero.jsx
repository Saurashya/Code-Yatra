import React, { useEffect, useState } from 'react';
import vision from "../../assets/vision-pro.png"
const Hero = () => {
    const [timeLeft, setTimeLeft] = useState(3 * 24 * 60 * 60);

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const days = Math.floor(timeLeft / (24 * 60 * 60));
    const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
    const seconds = timeLeft % 60;

    return (
        <div className='w-full h-[94vh]  grid grid-cols-2 grid-rows-1
'>
        <div className="container-welcome uppercase flex flex-col justify-center items-center">
            <div className="text-content text-white flex flex-col gap-4">
                <h1 className='tracking-wide text-lg font-semibold'>Himalaya college of Engineering</h1>
                <h2 className='tracking-wide text-lg font-extralight'> Presents</h2>
                <h1 className='text-6xl font-bold tracking-widest'>Code Yatra</h1>
                <h2 className='text-lg font-extralight tracking-wide'>journey to innovation</h2>

            </div>
        </div>
        <div className="container-timer flex justify-center items-center z-30">
            <div className="container-text-timer h-[50%] w-[100%] relative  cursor-default">
            <div className="image h-[100%] w-[100%]">
                <img src={vision} alt="" />
            </div>
            <div className="timer-text grid grid-cols-7 h-[20%] w-[60%] text-white tracking-normal absolute top-[38%] left-[20%]">
                <h2 className=' text-4xl font-bold'>{days}</h2>
                <h2 className=' text-4xl font-bold'>:</h2>
                <h2 className=' text-4xl font-bold'>{hours}</h2>
                <h2 className=' text-4xl font-bold'>:</h2>
                <h2 className=' text-4xl font-bold'>{minutes}</h2>
                <h2 className=' text-4xl font-bold'>:</h2>
                <h2 className=' text-4xl font-bold'>{seconds}</h2>
                <h2>Days</h2>
                <h2></h2>
                <h2>Hours</h2>
                <h2></h2>
                <h2>Minutes</h2>
                <h2></h2>
                <h2>Seconds</h2>
                
            </div>
            </div>
        </div>
        </div>
    );
};

export default Hero;