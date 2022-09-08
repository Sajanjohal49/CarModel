import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Models from "./routes/Models";
import Navbar from "./components/navbar/Navbar";
import { ModelDetails } from "./routes/ModelDetails";
import ThreeModel from "./routes/ThreeModel";
import ContactUs from "./routes/ContactUs";



const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/models" element={<Models />} />
        <Route path="/models/:modelId" element={<ModelDetails/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
        <Route path="/threeModel" element={<ThreeModel/>}/>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
