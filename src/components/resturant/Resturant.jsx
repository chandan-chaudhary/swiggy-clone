import React from 'react'
import { MdStars } from "react-icons/md";
import swiggyFood from '../../public/swiggy-food.jpg'

function Resturant() {
  return (
    <div className=' m-5 bg-gray-100 rounded-lg cursor-pointer hover:scale-95 ease-in-out duration-100 max-w-64'>
      <div className='relative'>
      <img src={swiggyFood} alt="swiggy-food" className='max-w-64  rounded-xl' >
      </img>
      <div className='absolute bottom-0 pt-16 w-full bg-gradient-to-b from-transparent to-black  font-bold text-xl px-3 text-white uppercase rounded-xl'>
      40% Off upto rs.100
      </div>
      </div>
      <div className='p-2 text-slate-800'>
      <span className='font-bold text-xl'>Arjun Da Dhaba</span>
      <span className='flex items-center justify-space font-bold text-lg'>
        <span> <MdStars className='text-green-700 text-2xl'/></span>
        4.0 . 40-60 mins
      </span>
      <p className=' text-gray-500  truncate text-wrap'>North Indian, Rolls , Sweets...</p>
      <span className=' text-gray-500 '>Smriti Nagar</span>
      </div>
    </div>
  )
}

export default Resturant