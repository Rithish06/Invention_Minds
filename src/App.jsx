import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import DigitalMarketing from './Pages/DigitalMarketing/DigitalMarketing'
import SocialMedia from './Pages/SocialMedia/SocialMedia'
import Webdevelopment from './Pages/Webdevelopment/Webdevelopment'
import CreativeContent from './Pages/CreativeContent/CreativeContent'
import Seo from './Pages/Seo/Seo'
import ResponsiveDesign from './Pages/ResponsiveDesign/ResponsiveDesign'
import Branding from './Pages/Branding/Branding'
import UserExperiences from './Pages/UserExperiences/UserExperiences'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  return (
    <div>
        {/* <Webdevelopment /> */}
        {/* <DigitalMarketing /> */}
        <SocialMedia />
        {/* <CreativeContent /> */}
        {/* <Seo /> */}
        {/* <ResponsiveDesign /> */}
        {/* <Branding /> */}
{/*         <UserExperiences /> */}
{/*         <Navbar /> */}
    </div>
  )
}

export default App
