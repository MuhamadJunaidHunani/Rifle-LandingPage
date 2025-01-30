import AboutUsImage from '../../assets/Images/about.jpg'

const AboutUs = () => {
    return (
        <section className="bg-black text-white py-[100px] px-8 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-12">
                <div className='text-center w-full py-[20px] customFont animate-slide-up text-white pt-[10px] text-[30px] font-semibold flex flex-col items-start animate-slide-up'>
                    <h1>About <span className='text-[#E6CD1E] '>Us</span></h1>
                </div>
                <p className="text-[16px] text-[#ffffffdb] mb-6 leading-[25px]">
                    SIRARMS ARMOURY entered into the field of barrel and rifle manufacturing in 2004. The
                    success of the manufacturing of highly accurate actions and barrels led to the
                    development of combination of our own barrel range and sophisticated sniper rifle
                    technology. The proud result of this combination is SIRARMS REX range of extremely
                    accurate, long range rifles with calibers up to 14.5 x 114mm for any tactical,
                    anti-personnel, urban CQB or extreme range and anti-materiel missions. The SIRARMS design
                    and engineering team profits of the unique advantage.
                </p>
                <button className="bg-[#C2A265] text-white font-semibold px-6 py-3 rounded-md hover:opacity-80 transition">
                    LEARN MORE
                </button>
            </div>
            <div className="md:w-1/2">
                <img src={AboutUsImage} alt="Sniper aiming" className="" />
            </div>
        </section>
    );
}

export default AboutUs