import React from 'react'
import waterbottle from '../../public/water-bottle.jpeg'
import vegSymImg from '../../public/vegetarian-sym.png'

function FoodItems() {
  return (
    <>
    <div className="flex mt-6 pb-16">
    <div className="flex flex-col">
      <div className="flex flex-col items-start mt-5 w-fit">
      <img src={vegSymImg} alt="" className="w-5 h-fit" />
        <span className="flex flex-col text-lg font-semibold text-gray-700">Mineral Water
        <span>₹20</span>
        </span>
        <p className="text-gray-500 text-wrap mt-3 pr-72">Quench your thirst with a refreshing and invigorating beverage that will leave you feeling rejuvenated.</p>
      </div>
    </div>
    {/* <div className="bg-slate-200 h-1 mt-8 "></div> */}
    
    <div className="relative flex flex-row items-center pl-5 mt-16">
      <img src={waterbottle} alt="water-bottle" className="w-32 " />
      <button className="absolute bg-white uppercase text-green-500 px-7 py-1 -bottom-2 right-1 border rounded-lg border-gray-400 w-fit shadow-lg shadow-gray-400">Add</button>
    </div> 
  </div>
    <div className="bg-slate-200 h-1"></div>
    </>

  )
}

export default FoodItems