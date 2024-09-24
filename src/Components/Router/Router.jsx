import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';

const RouterOutlet = () => {
  return (
    <>
        <Router>

            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
            </Routes>
        </Router>
    </>
  )
}

export default RouterOutlet 
