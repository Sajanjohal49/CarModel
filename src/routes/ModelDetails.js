import React from "react";
import { useParams } from "react-router-dom";
import modelData from "../components/Data/modelData";

export const ModelDetails = () => {
  const { modelId } = useParams();
  const thisModel = modelData.find(model => model.id === modelId);
  return (
    <div>
      <h1 className="text-white">{thisModel.name}</h1>
      <p className="text-white">{thisModel.price}</p>
      <p className="text-white">{thisModel.description}</p>
    </div>
  );
};
