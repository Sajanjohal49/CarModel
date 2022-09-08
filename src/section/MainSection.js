import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import mainImage from "../carMedia/mainImage3.jpg";

const MainSection = () => {
  return (
    <div className="relative ">
      <img className="mx-auto " src={mainImage} alt="main" />

      <div className="absolute top-1/2 left-[10%]     ">
        <h1 className=" text-xl lg:text-5xl text-slate-50 font-extralight  uppercase">
          Gran Turismo
        </h1>
        <Link to="/models/1">
        <button className="group text-[10px] font-medium text-slate-700   lg:text-base  bg-white py-0.5 lg:py-2 px-2 lg:px-5   uppercase rounded-full  mt-1 lg:mt-4 flex space-x-1 items-center hover:px-9">
          Discover now <AiOutlineArrowRight className=' text-slate-700  invisible group-hover:visible mx-2'/>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default MainSection;
