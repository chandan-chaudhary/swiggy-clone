import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { PiMonitorBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";
import swiggyLogo from '../../public/swiggy-logo.png'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Headers() {
  const [cart, setCart] = useState(false);
 const handleCart = ()=>{
  setCart = true
  localStorage.setItem('cartSelected', true);
 }

  return (
    <div className='flex flex-row w-screen space-x-28 font-bold text-gray-600 justify-center items-center p-5 mx-auto drop-shadow-2xl shadow-lg shadow-gray-300'>
        <img src={swiggyLogo} alt="swiggy-logo" className='h-12 ease-in-out duration-300 rounded-lg cursor-pointer hover:scale-125 '/>
        <span className='flex flex-row underline-offset-8 hover:text-orange-400'> Bhilai <span className=' pl-5 text-orange-400 text-2xl'><MdOutlineKeyboardArrowDown /></span></span>
        <ul className='flex flex-row px-8  space-x-12  items-end'>
            <li className='flex flex-row justify-center items-center cursor-pointer  hover:text-orange-400'><span className='pr-2'><PiMonitorBold /></span>Swiggy Corporate</li>
            <li className='flex flex-row justify-center items-center cursor-pointer  hover:text-orange-400'><span className='pr-2'><IoSearchOutline /></span>Search</li>
            <li className='flex flex-row justify-center items-center cursor-pointer  hover:text-orange-400'><span className='pr-2'><IoIosHelpBuoy /></span>Help</li>
            <li className='flex flex-row justify-center items-center cursor-pointer  hover:text-orange-400'><span className='pr-2'><BiSolidOffer /></span>Offers</li>
            <Link to='/signIn'>
            <li className='flex flex-row justify-center items-center cursor-pointer  hover:text-orange-400'><span className='pr-2'><FaRegUser /></span>Sign In</li>
            </Link>
            <Link to= '/cart'>
            <li className='flex flex-row justify-center items-center cursor-pointer  hover:text-orange-400'><span className='pr-2'><FaOpencart /></span>Cart</li>
            </Link>
        </ul>
    </div>
  )
}

export default Headers