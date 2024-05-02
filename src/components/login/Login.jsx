import React from "react";
import rollPng from "../../public/rolls-carving.jpg";
import shwarma from "../../public/cheese-pizza.png";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex flex-col items-center mx-auto h-screen">
      <div className="flex flex-col pt-44  space-y-8">
        <Link to={'/'}><FaArrowLeft className="text-2xl"/></Link> 
        <div className="flex  space-x-24">
          <div className="flex flex-col space-y-1">
            <span className="font-semibold text-3xl">Login</span>
            <span className="text-gray-600">
              or{" "}
              <span className="text-orange-500 font-semibold cursor-pointer">
                create an account
              </span>
              <span className="flex flex-col">_____</span>
            </span>
          </div>
          <img src={shwarma} alt="rollPNG" className="w-16 drop-shadow-2xl" />
        </div>
        <div className="flex flex-col space-y-8 w-fit pr-12 ">
          <input
            type="text"
            placeholder="phone number"
            className="border  p-5 font-semibold"
          />
          <button className="py-3 px-24 bg-orange-400 text-white uppercase w-fit font-semibold">
            Login
          </button>
        </div>
      </div>
        <div className="flex ml-14 break-words ">
        <span className=" text-gray-500 ">
          By clicking on Login, I accept the{" "}
          <span className=" font-semibold cursor-pointer text-slate-600">
            Terms & Conditions & Privacy Policy
          </span>
        </span>
        </div>
    </div>
  );
}

export default Login;
