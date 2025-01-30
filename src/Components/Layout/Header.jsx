import { FaBriefcase, FaSearchengin } from 'react-icons/fa';
import logoImage from '../../assets/Images/logo.png'
import { PiDetectiveFill } from 'react-icons/pi';

export default function Header() {
    return (
      <header className="bg-[#00000047] text-white px-6 h-[90px] py-3 flex items-center justify-between sticky top-0 z-10 backdrop-blur-2xl">
        <div className="flex items-center space-x-2">
         <img src={logoImage} alt='Guns Store' className='h-[70px] dropShadow'/>
        </div>
  
        <nav className="hidden md:flex space-x-6 text-gray-300">
          <a href="#" className="text-yellow-500">Home</a>
          <a href="#">About</a>
          <a href="#">Product</a>
          <a href="#">Reviews</a>
          <a href="#">Contact</a>
        </nav>
  
        <div className="flex space-x-5 text-gray-400 text-[20px]">
          <button className="hover:text-yellow-500 cursor-pointer"><FaSearchengin /></button>
          <button className="hover:text-yellow-500 cursor-pointer"><FaBriefcase /></button>
          <button className="hover:text-yellow-500 cursor-pointer"><PiDetectiveFill /></button>
        </div>
      </header>
    );
  }
  