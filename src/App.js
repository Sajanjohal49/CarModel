import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './routes/Home'
import Models from './routes/Models'
import Navbar from'./components/navbar/Navbar'

 const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/models" element={<Models />} />
  </Routes>
    </BrowserRouter>
    
  )
}
export default App;
