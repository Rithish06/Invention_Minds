import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {

  const [menuBtn, setMenuBtn] = useState(false)
  const [navbarColor, setNavbarColor] = useState(false)

  const MenuToggler = () => {
    !setMenuBtn((prev) => !prev)
  }

  const NavColor = () => {
    if(window.scrollY >= 700){
      setNavbarColor(true)
    }
    else{
      setNavbarColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', NavColor)
    return() => window.removeEventListener('scroll', NavColor)
  },[])

  return (
    <div className={"navbar_container"}>
      <nav className={`navbar ${navbarColor ? "navbar_onscroll" : ""}`}>
        <div className="logo">
          <img src={assets.logo} alt="" />
          <div className="menu_btn_container" onClick={MenuToggler}>
          {menuBtn ? 
            <i className="fa-solid fa-x"></i>
          :
          <div className="menu_toggler">
              <div className="menu_icon_line menu_icon_line_1"></div>
              <div className="menu_icon_line menu_icon_line_2"></div>
              <div className="menu_icon_line menu_icon_line_3"></div>
          </div>
        }
        </div>
          
        </div>
        <div className="menu_list">
          <ul className={`menu_items ${menuBtn ? 'openMenu' : 'close_menu'}`}> 
            <li className="menu_item_list">Home</li>
            <li className="menu_item_list">About Us</li>
            <li className="menu_item_list">Services</li>
            <li className="menu_item_list">Career</li>
            <li className="menu_item_list">Contact Us</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
