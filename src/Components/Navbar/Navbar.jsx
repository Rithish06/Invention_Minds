import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/logo.png";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [locator, setLocator] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation(); // Hook to get the current route

  const MenuList = [
    { menu: "Home", url: "" },
    { menu: "About", url: "about" },
    { menu: "Services", url: "services" },
    { menu: "Career", url: "career" },
    { menu: "Contact Us", url: "contact-us" },
  ];

  const locatorStyle = {
    transform: `translateX(${locator}px)`,
    transition: "transform 0.3s ease",
  };

  // Function to calculate the locator's position based on the active route
  const calculateLocatorPosition = () => {
    const currentIndex = MenuList.findIndex(
      (menuItem) => `/${menuItem.url}` === location.pathname
    );
    if (currentIndex !== -1) {
      setLocator(currentIndex * 120); // Adjust as per your layout
    }
  };

  const MobileIconHandler = () => {
    setMobileNav(!mobileNav);
  };

  const autoClose = () => {
    setMobileNav(false);
  };

  // Run on location change to set locator position
  useEffect(() => {
    calculateLocatorPosition();
  }, [location]);

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo_container">
          <Link style={{ textDecoration: "none" }} to="/">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className={`menu ${mobileNav ? "shownav" : "hidenav"}`}>
          <ul className="menu_list" onClick={autoClose}> 
            {MenuList.map((menuItem, index) => (
              <NavLink
              className="linktag" to={`/${menuItem.url}`}
                  isActive={() => `/${menuItem.url}` === location.pathname}
                  onClick={() => setLocator(index * 100)}
                  key={index} 
              >
                <li className="menu_list_item">
                  {menuItem.menu}
                </li>
              </NavLink>
            ))}
          </ul>
          <div className="nav_locator" style={locatorStyle}></div>
        </div>
        <div className="mobile_icons" onClick={MobileIconHandler}>
          <i className={mobileNav ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
