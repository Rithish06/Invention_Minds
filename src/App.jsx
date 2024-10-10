import React, {useEffect} from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import RouterOutlet from './Components/Router/Router'
import { useLocation } from 'react-router-dom';
import Footer from './Components/Footer/Footer';
import ContactPageBanner from './Components/ContactPageBanner/ContactPageBanner';
// import Navbar from './Components/Navbar/Navbar'

const App = () => {

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, [pathname]);


  return (
    <div>
        <Navbar />
        <RouterOutlet />
        {/* <ContactPageBanner /> */}
        <Footer />
    </div>
  )
}

export default App
