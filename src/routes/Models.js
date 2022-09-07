import React from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import modelData from "../components/Data/modelData";


const Models = () => {
  const models = modelData.map((model) => {
    return (
      <div key={model.id} className="bg-slate-800 p-8 m-5 rounded-[12px] relative ">
      <div  >
        <img  className='rounded-md object-cover'src={model.image} alt={model.name}/>
        <div className=" align-baseline   absolute bottom-2 left-2  text-slate-300 font-sans font-semibold ">
        <h3 className=" ">
          <Link to={`/models/${model.id}`}>{model.name}</Link>
        </h3>
        <p className=" ">Price:${model.price}</p>
        </div>
      </div>
      </div>
    );
  });
  return (
    <Fragment>
      <h1 className="text-slate-200  text-5xl font-black text-center  pt-16"> Select your model</h1>

      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5 rounded-lg '>
        {" "}
        {models}
      </div>
    </Fragment>
  );
};

export default Models;
