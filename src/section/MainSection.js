import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import mainImage from "../carMedia/mainImage3.jpg";

const MainSection = () => {
  return (
    <div className="relative ">
      <img className="mx-auto " src={mainImage} alt="main" />

      <div className="absolute top-1/2 left-[10%]     ">
        <h1 className="text-5xl text-slate-50 font-extralight  uppercase">
          Gran Turismo
        </h1>
        <button className="group text-sm text-slate-700 font-medium bg-white py-3 px-6  uppercase rounded-full  mt-4 flex space-x-1 items-center hover:px-9">
          Discover now <AiOutlineArrowRight className=' text-slate-700  invisible group-hover:visible mx-2'/>
        </button>
      </div>
    </div>
  );
};

export default MainSection;
