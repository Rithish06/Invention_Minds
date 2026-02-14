import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../../Pages/Home/Home';
import About from '../../Pages/About/About';
import Services from '../../Pages/Services/Services';
import Seo from '../../Pages/Seo/Seo';
import DigitalMarketing from '../../Pages/DigitalMarketing/DigitalMarketing';
import Webdevelopment from '../../Pages/Webdevelopment/Webdevelopment';
import UserExperiences from '../../Pages/UserExperiences/UserExperiences';
import SocialMedia from '../../Pages/SocialMedia/SocialMedia';
import CreativeContent from '../../Pages/CreativeContent/CreativeContent';
import ResponsiveDesign from '../../Pages/ResponsiveDesign/ResponsiveDesign';
import Branding from '../../Pages/Branding/Branding';
import MobileApp from '../../Pages/MobileApp/MobileApp';
import ContactUs from '../../Pages/ContactUs/ContactUs';
import Career from '../../Pages/Career/Career';
import Portfolio from '../../Pages/Portfolio/Portfolio';
import PrivacyPolicy from '../../Pages/PrivacyPolicy/PrivacyPolicy';

const RouterOutlet = () => {
  return (
    <>
      <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/services' element={<Services/>} />
         <Route path='/contact-us' element={<ContactUs/>} />
         <Route path='/career' element={<Career/>} />
         <Route path='/Portfolio' element={<Portfolio/>} />
         <Route path='/services' >
            <Route path='seo' element = {<Seo />}/>
            <Route path='digital-marketing' element = {<DigitalMarketing />}/>
            <Route path='web-development' element = {<Webdevelopment />}/>
            <Route path='ui-ux-design' element = {<UserExperiences />}/>
            <Route path='social-media' element = {<SocialMedia />}/>
            <Route path='creative-content' element = {<CreativeContent />}/>
            <Route path='responsive-design' element = {<ResponsiveDesign />}/>
            <Route path='branding' element = {<Branding />}/>
            <Route path='mobile-app-development' element = {<MobileApp />}/>
         </Route>

         <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              
      </Routes>
    </>
  )
}

export default RouterOutlet 
