import React from "react";
import { BiSolidOffer } from "react-icons/bi";

function Offers() {
  return (
    // <div className="carousel carousel-center  p-4 space-x-4  rounded-box ">
      <div className="flex flex-row carousel-item border border-gray-400 rounded-lg p-4 w-fit pr-12 space-x-4">
        <BiSolidOffer className="text-orange-500 text-5xl" />
        <div className="flex flex-col uppercase ">
          <span className="text-xl font-bold">50% Off Upto ₹100</span>
          <span className="text-gray-500 font-semibold ">use trynew</span>
        </div>
      </div>
    // </div>
  );
}

export default Offers;
