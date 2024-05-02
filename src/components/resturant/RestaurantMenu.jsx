import React from "react";
import { MdStars } from "react-icons/md";
import { BsArrowsVertical } from "react-icons/bs";
import Deals from "./Deals";
import Menu from "./Menu";
import Headers from "../headers/Headers";

function RestaurantMenu() {
  return (
    <>
    <Headers />
    <div className="flex flex-col justify-center mx-80 mt-5">
      <div className="text-sm text-gray-400">
        <span>Home / Bhilai / Arjun Da Dhaba</span>
      </div>
      <div className="pt-10 pl-3">
        <h1 className="font-bold text-xl">Arjun Da Dhaba</h1>
        <div className=" p-5 bg-gradient-to-b from-transparent via-gray-100 to-gray-300  mt-8 rounded-2xl">
          <div className="flex flex-col border border-gray-400 rounded-2xl p-4 bg-white space-y-3">
            <span className="flex flex-row font-bold  ">
              <MdStars className="text-green-700 text-2xl" />
              4.0 (1K+ ratings) . ₹200 for two
            </span>
            <span className="text-orange-500 underline font-semibold">
              North Indian, Biryani
            </span>
            <div className="flex flex-row">
              <BsArrowsVertical className="text-6xl text-gray-400" />
              <div className="flex flex-col space-y-3">
                <div className="flex flex-row space-x-5">
                  <span className="font-bold">Outlet</span>
                  <span className="text-gray-600"> Shanti Nagar</span>
                </div>
                <span className="font-bold">30-35 mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Deals />
      <Menu />
    </div>
    </>
  );
}

export default RestaurantMenu;
