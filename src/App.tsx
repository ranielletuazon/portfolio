import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';

// Pages
import Home from './pages/Home';
import Header from './pages/components/Header';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {

  return (
    <>
      <div className="bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800 @container w-screen h-screen ">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
