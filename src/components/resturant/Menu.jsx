import React from "react";
import { GiFoodChain } from "react-icons/gi";
import { IoSearchOutline } from "react-icons/io5";

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
    </div>
  );
}   

export default Menu;
