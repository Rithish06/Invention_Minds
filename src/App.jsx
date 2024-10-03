import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import RouterOutlet from './Components/Router/Router'
import Accordion from './Components/Accordion/Accordion'
import About from './Pages/About/About'
import Services from './Pages/Services/Services'
import Tire from './Components/Tire/Tire'
import ServicesCarousel from './Components/ServicesCarousel/ServicesCarousel'
import ServicesBannerDesign from './Components/ServicesBannerDesign/ServicesBannerDesign'
import Webdevelopment from './Pages/Webdevelopment/Webdevelopment'

const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      {/* <RouterOutlet /> */}
      {/* <Footer /> */}
      {/* <About /> */}
      {/* <Accordion /> */}
      {/* <About />/ */}
      {/* <HomePageClients /> */}
      {/* <ServicesBanner /> */}
      {/* <Services></Services> */}
      {/* <ServicesCarousel /> */}
      {/* <Tire /> */}
      {/* <ServicesBannerDesign /> */}
      <Webdevelopment />

    </div>
  )
}

export default App
