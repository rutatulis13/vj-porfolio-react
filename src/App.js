import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FashionFront from './pages/Fashion/FashionFront.jsx';
import Homepage from './pages/Homepage/Homepage.jsx'
import Archive from './pages/Archive/Archive.jsx';
import Contact from './pages/Contact/Contact.jsx';
import Fashion from './pages/Fashion/Fashion.jsx';
import Loader from './components/Loader/Loader.jsx';
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path="/" element={<Loader />} />
      <Route  path="/home" element={<Homepage />}/>
      <Route path="/archive" element={<Archive />}/>
      <Route path="/fashion" element={<FashionFront />}/>
      <Route path="/fashion/:id" element={<Fashion />}/>
      <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
