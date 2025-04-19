import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/images/best-digital-marketing-company-in-banglore.png";
import { NavLink, Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [locator, setLocator] = useState(0);
  const [mobileNav, setMobileNav] = useState(false);
  const location = useLocation();

  const MenuList = [
    { menu: "Home", url: "" },
    { menu: "About", url: "about" },
    { menu: "Services", url: "services" }, // Parent route for /services/seo, /services/ppc, etc.
    { menu: "Career", url: "career" },
    { menu: "Contact Us", url: "contact-us" },
  ];

  const locatorStyle = {
    transform: `translateX(${locator}px)`,
    transition: "transform 0.3s ease",
  };

  const calculateLocatorPosition = () => {
    const currentIndex = MenuList.findIndex((menuItem) => {
      const basePath = `/${menuItem.url}`;
      if (menuItem.url === "") {
        return location.pathname === "/";
      }
      return location.pathname.startsWith(basePath);
    });

    if (currentIndex !== -1) {
      setLocator(currentIndex * 120);
    }
  };

  const MobileIconHandler = () => {
    setMobileNav(!mobileNav);
  };

  const autoClose = () => {
    setMobileNav(false);
  };

  useEffect(() => {
    calculateLocatorPosition();
  }, [location]); 

  return (
    <div className="navbar">
      <nav className="nav">
        <div className="logo_container">
          <Link style={{ textDecoration: "none" }} to="/">
            <img src={logo} alt="Best Digital Marketing Company In Bangalore" />
          </Link>
        </div>
        <div className={`menu ${mobileNav ? "shownav" : "hidenav"}`}>
          <ul className="menu_list" onClick={autoClose}>
            {MenuList.map((menuItem, index) => (
              <NavLink
                exact={menuItem.url === ""} // Only use "exact" for Home
                className="linktag"
                to={`/${menuItem.url}`}
                isActive={(match, location) => {
                  if (menuItem.url === "") {
                    return location.pathname === "/";
                  }
                  return location.pathname.startsWith(`/${menuItem.url}`);
                }}
                onClick={() => setLocator(index * 120)}
                key={index}
                activeClassName="active"
              >
                <li className="menu_list_item">{menuItem.menu}</li>
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