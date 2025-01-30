import React from 'react'
import gun1 from '../../assets/Images/gun1.png';
import gun2 from '../../assets/Images/gun2.png';
import gun3 from '../../assets/Images/gun3.png';
import gun4 from '../../assets/Images/gun4.png';
import gun5 from '../../assets/Images/gun5.png';
import gun6 from '../../assets/Images/gun6.png';
import gun7 from '../../assets/Images/gun7.png';
import gun8 from '../../assets/Images/gun8.png';


const products = [
    {
        name: "AK - 47",
        price: "$600",
        image: gun5,
    },
    {
        name: "TT - 99",
        price: "$130",
        image: gun8,
    },
    {
        name: "Sniper",
        price: "$1200",
        image: gun6,
    },
    {
        name: "Jaguar",
        price: "$700",
        image: gun7,
    },
    {
        name: "Rifle",
        price: "$300",
        image: gun2,
    },
    {
        name: "Rifle",
        price: "$300",
        image: gun1,
    },
    {
        name: "Rifle",
        price: "$300",
        image: gun3,
    },
    {
        name: "Rifle",
        price: "$300",
        image: gun4,
    },
]


const OurProducts = () => {
    return (
        <div className='py-[70px] px-8 bg-black'>
            <div className='text-center w-full customFont animate-slide-up text-white pt-[10px] text-[30px] font-semibold flex flex-col items-center justify-end animate-slide-up'>
                <h1>Our <span className='text-[#E6CD1E] '>Products</span></h1>
            </div>
            <div className='grid grid-cols-4 gap-10 mt-[40px]'>

                {products.slice(0,4).map((prod, index) => (
                    <div key={index} className={`h-[280px] cursor-pointer p-5 border rounded-sm border-[#e6cf1e3e] shadow-[1px_1px_40px_#292929]`}>
                        <div className='w-full'>
                            <img src={prod.image} alt={prod.name} className='w-full h-[150px] object-contain ' />

                        </div>
                        <div className='w-full flex  flex-col gap-1 items-center pt-[40px]'>
                            <p className='text-white text-2xl font-semibold'>{prod.name}</p>
                            <p className='text-[#C2A265] text-sm font-light'>{prod.price}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default OurProducts