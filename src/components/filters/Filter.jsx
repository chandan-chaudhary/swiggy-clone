import React from 'react'
import { RxMixerHorizontal } from "react-icons/rx";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


function Filter() {
  return (
    <div className=''>
        <h1 className='font-extrabold text-2xl pl-5'>Restaurants with online food delivery in Bhilai</h1>
         <div className='flex flex-row space-x-10 p-5'>
            <div className='flex items-center rounded-full px-5 cursor-pointer border'>Filter<span className='pl-3'> <RxMixerHorizontal/></span></div>
            <div className='flex items-center rounded-full px-5 cursor-pointer border'>Sort By
             <span className='pl-2'><MdOutlineKeyboardArrowDown /></span>
            </div>
            <div className='flex items-center rounded-full px-5 cursor-pointer border'>Rating 4.0</div>
            <div className='flex items-center rounded-full px-5 cursor-pointer border'>Pure Veg</div>
            <div className='flex items-center rounded-full px-5 cursor-pointer border'>Others</div>
            <div className='flex items-center rounded-full px-5 cursor-pointer border'>Rs. 300-Rs. 600</div>
            <div className='flex items-center rounded-full px-5 cursor-pointer border'>Less then Rs. 300</div>
         </div>
    </div>
  )
}

export default Filter