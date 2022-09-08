import React from "react";
import { useParams } from "react-router-dom";
import modelData from "../components/Data/modelData";

export const ModelDetails = () => {
  const { modelId } = useParams();
  const thisModel = modelData.find(model => model.id === modelId);
  return (
    <div className=" mx-3 mt-10  md:px-6 xl:px-[20rem] lg:pt-[5rem] ">
      <div className=' rounded px-3 lg:px-12 py-2'>
      <h1 className="text-white">{thisModel.name}</h1>
      <img className='mx-auto lg:max-w-xl' src={thisModel.image} alt='nissan model'/>
      <p className="text-white text-lg italic font-extralight"> Price starts from {thisModel.price}</p>
      <p className="text-white font-light py-10">{thisModel.description}</p>
      </div>
    </div>
  );
};
