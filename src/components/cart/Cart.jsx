import React from 'react'
import cookingPic from '../../public/cooking.png'
import CartHeaders from '../headers/CartHeaders'

function Cart() {
  return (
  <>
    <CartHeaders />
    <div className='flex flex-col items-center space-y-4 pt-32 pb-20 z-0'>
        <img src={cookingPic} alt="cookingImg" className='w-48 h-fit opacity-65' />
        <div className='text-xl font-bold text-gray-600'>Your Cart is Empty</div>
        <span className='text-gray-500'>You can go to home page to view more restaurants</span>
        <button className='uppercase bg-orange-500 py-2 px-3 text-white font-semibold'>See Restaurants near you</button>
    </div>
    </>
  )
}

export default Cart