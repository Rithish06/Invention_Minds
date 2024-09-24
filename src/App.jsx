import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import RouterOutlet from './Components/Router/Router'
import Accordion from './Components/Accordion/Accordion'
import About from './Pages/About/About'
import HomePageClients from './Components/HomePageClients/HomePageClients'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <RouterOutlet />
      <Footer />
      {/* <Accordion /> */}
      {/* <About />/ */}
      {/* <HomePageClients /> */}
    </div>
  )
}

export default App
