import React, {useEffect} from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import RouterOutlet from './Components/Router/Router'
import { useLocation } from 'react-router-dom';
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
    </div>
  )
}

export default App
