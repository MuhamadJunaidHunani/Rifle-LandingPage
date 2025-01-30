import React from 'react';
import sniper from '../../assets/Images/rifle4.jpg';

const Hero = () => {
  return (
    <div className={`h-[calc(100vh-90px)] bgImage flex flex-col justify-start items-center bg-[url(${sniper})] bg-cover bg-center bg-fixed `}>
      <div className='text-center w-full customFont text-white pt-[10px] text-[30px] font-semibold flex flex-col items-center justify-start animate-slide-up'>
        <h1>THE SNIPER <span className='text-[#E6CD1E]'>WEAPON</span> PLATFORM</h1>
        <h1>OF THE FUTURE</h1>
      </div>

    </div>
  );
};

export default Hero;
