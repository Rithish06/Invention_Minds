import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer">
      {/* footer background */}
      <div className="footer_background">
        <div className="blue_ellipse"></div>
        <div className="orange_ellipse"></div>
      </div>
      {/* footer container */}
      <div className="footer_content_container">
        <div className="footer_content">
          {/* footer image */}
          <div className="footer_image">
            <img src={assets.footerimage} alt="" />
          </div>
          {/* superlist */}
          <div className="super_list footer_columns">
            <div className="super_list_heading">Superlist</div>
            <div className="footer_lists_1">
              <ul className="list_items">
                <li className="list_item">Home</li>
                <li className="list_item">About Us</li>
                <li className="list_item">Services</li>
                <li className="list_item">Career</li>
                <li className="list_item">Contact Us</li>
              </ul>
              <ul className="list_items">
                <li className="list_item">Gallery</li>
                <li className="list_item">Cookies</li>
                <li className="list_item">Privacy</li>
                <li className="list_item">Terms</li>
              </ul>
            </div>
          </div>
          {/* social */}
          <div className="social footer_columns">
            <div className="social_heading">Social</div>
            <div className="footer_lists">
              <ul className="list_items">
                <li className="list_item">Facebook</li>
                <li className="list_item">Instagram</li>
                <li className="list_item">GitHub</li>
                <li className="list_item">LinkedIn</li>
                <li className="list_item">X</li>
              </ul>
            </div>
          </div>
          {/* contact info */}
          <div className="contact_info footer_columns">
            <div className="contact_heading">Contact Info</div>
            <div className="footer_lists">
            <ul className="list_items">
              <li className="list_item">
                No. 12/1, 22nd main road, Muneshwara block, Girinagar Bengaluru,
                Karnataka- 560085
              </li>
              <li className="list_item">inventionmindsblr@gmail.com</li>
              <li className="list_item">+91 98440 05600</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
