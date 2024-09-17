import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import RouterOutlet from './Components/Router/Router'

const App = () => {
  return (
    <div>
      <Navbar />
      <RouterOutlet />
      <Footer />
    </div>
  )
}

export default App
