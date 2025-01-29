import React from 'react';
import sniper from '../../assets/Images/rifle4.jpg';

const Hero = () => {
  return (
    <div className='h-[calc(100vh-90px)] bg-black flex flex-col justify-end items-center'>
      <div className='text-center w-full customFont text-white pt-[10px] text-[30px] font-semibold flex flex-col items-center justify-end animate-slide-up'>
        <h1>THE SNIPER <span className='text-[#E6CD1E]'>WEAPON</span> PLATFORM</h1>
        <h1>OF THE FUTURE</h1>
      </div>
      <div className='grow flex justify-center items-end'>
        <img src={sniper} alt="" className='w-[750px]' />
      </div>
    </div>
  );
};

export default Hero;
