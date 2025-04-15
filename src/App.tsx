import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

// Pages
import Home from './pages/Home';
import Header from './pages/components/Header';

function App() {

  return (
    <>
      <div className="bg-gradient-to-b from-black to-[#030303] @container w-screen h-screen ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
