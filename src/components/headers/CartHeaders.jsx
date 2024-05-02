import React from 'react'
import { Link } from 'react-router-dom';
import { PiMonitorBold } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { BiSolidOffer } from "react-icons/bi";
import { IoIosHelpBuoy } from "react-icons/io";
import { FaRegUser } from "react-icons/fa6";
import { FaOpencart } from "react-icons/fa";
import swiggyLogo from '../../public/swiggy-logo.png'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


function CartHeaders() {
  return (
    <div className='flex flex-row w-screen justify-center items-center font-bold text-gray-600 p-5 mx-auto drop-shadow-2xl shadow-lg shadow-gray-300'>
      <div className='flex flex-row items-center '>
        <img src={swiggyLogo} alt="swiggy-logo" className='h-12 ease-in-out duration-300 rounded-lg cursor-pointer hover:scale-125 '/>
        <span className='uppercase font-bold'>Secure Checkout</span>
        </div>
        <div className='flex ml-72'>
        <ul className='flex flex-row pl-80  space-x-12 justify-end'>
            <li className='flex flex-row justify-center items-center cursor-pointer  hover:text-orange-400'><span className='pr-2'><IoIosHelpBuoy /></span>Help</li>
            <Link to='/signIn'>
            <li className='flex flex-row justify-center items-center cursor-pointer  hover:text-orange-400'><span className='pr-2'><FaRegUser /></span>Sign In</li>
            </Link>
        </ul>
        </div>
    </div>
  )
}

export default CartHeaders