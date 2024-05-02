import React from 'react'
import { BiSolidOffer } from "react-icons/bi";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Offers from './Offers';

function Deals() {
  return (
    <div className='flex flex-col space-y-8 pt-8 m-2'> 
        <div className=''>
            <div className='flex space-x-80 items-center'>
                 <h3 className='font-extrabold text-xl'>Deals for you</h3>
            </div>
            <div className='flex flex-row justify-end space-x-5 text-2xl'>
                    <FaArrowLeft className='bg-slate-300 rounded-full' />
                    <FaArrowRight className='bg-slate-300 rounded-full' />

            </div>
        </div>
        <div className='flex flex-row overflow-hidden space-x-4'>
        <Offers />
        <Offers />
        <Offers />

        </div>
    </div>
  )
}

export default Deals