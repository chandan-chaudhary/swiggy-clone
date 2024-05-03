import React from "react";
import { GiFoodChain } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";
import nonVegSymImg from '../../public/nonVegLogo.avif'
import vegSymImg from '../../public/vegetarian-sym.png'
import FoodItems from "./FoodItems";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


function Menu() {
  return (
    <div className="mt-5">
      <div className="flex flex-row space-x-3 items-center justify-center">
        <GiFoodChain />
        <span className="uppercase font-normal">menu</span>
        <GiFoodChain />
      </div>
      <div className="flex relative border-none bg-gray-300 justify-center items-center w-full mt-5 p-3 rounded-lg outline-none cursor-pointer">
          <span className="text-gray-500 font-bold">Search for dishes</span>
          <div className="absolute right-3 flex justify-end text-xl"><IoSearchOutline /></div>
      </div>
      {/* VEG / NON_VEG & BESTSELLER */}
      <div className="flex flex-row space-x-5 mt-5 w-fit ">
        <span className="relative border rounded-full p-4 ">
          <div className="flex items-center bg-gray-500 rounded-lg  w-12 h-3"></div>
        <img src={vegSymImg} alt="" className="w-5 h-fit absolute  top-3" />
        </span>
        <span className="relative border rounded-full p-4 ">
          <div className="flex items-center bg-gray-500 rounded-lg  w-12 h-3"></div>
        <img src={nonVegSymImg} alt="" className="w-10  absolute  top-1 left-1 " />
        </span>
        <span className="border rounded-full p-2 text-gray-600 font-semibold text-sm ">Bestseller</span>
      </div>
      <div className="bg-slate-200 h-1 mt-8  "></div>
      <div className="mt-8 flex flex-row items-center relative">
        <span className=" flex-row items-start  text-xl font-bold">Recommended (20)</span>
        <MdOutlineKeyboardArrowDown className="absolute right-0 text-2xl font-semibold"/>
         </div>
      {/* MENU DISPLAY */}
      <FoodItems />
      <FoodItems />     
      <FoodItems />     
      <FoodItems />     
      <FoodItems />     
      <FoodItems />     

    </div>
  );
}   

export default Menu;
