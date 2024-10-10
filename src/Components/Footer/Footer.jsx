import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {


  const superList_1 = [
    {
      linkName: "Home",
      linkUrl: ""
    },
    {
      linkName: "About Us",
      linkUrl: "about"
    },
    {
      linkName: "Services",
      linkUrl: "services"
    },
    {
      linkName: "Career",
      linkUrl: "career"
    },
    {
      linkName: "Contact Us",
      linkUrl: "contact-us"
    },
  ]

  const superList_2 = [
    {
      linkName: "Gallery",
      linkUrl: ""
    },
    {
      linkName: "Cookies",
      linkUrl: ""
    },
    {
      linkName: "Privacy",
      linkUrl: ""
    },
    {
      linkName: "Terms",
      linkUrl: ""
    },
  ]

  const social = [
    {
      linkName: "Facebook",
      linkUrl: ""
    },
    {
      linkName: "Instagram",
      linkUrl: ""
    },
    {
      linkName: "GitHub",
      linkUrl: ""
    },
    {
      linkName: "LinkedIn",
      linkUrl: ""
    },
    {
      linkName: "X",
      linkUrl: ""
    },
  ]


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
          {/* footer Image */}
          <div className="footer_image">
            <img src={assets.footerimage} alt="" />
          </div>
          <div className="hyperLinks">
            <div className="superlists">
              <div className="superlist_heading">Superlist</div>
              <div className="superlist">
                {/* super list item 1 */}
                <ul className="footer_lists">
                  {
                    superList_1.map((list, index) => (
                      <Link Link to={`/${list.linkUrl}`}><li className="footer_list_item" key={index}>{list.linkName}</li></Link>
                    ))
                  }
                </ul>
                {/* super list item 2 */}
                <ul className="footer_lists">
                  {
                    superList_2.map((list, index) => (
                      <Link to={`/${list.linkUrl}`}><li className="footer_list_item" key={index}>{list.linkName}</li></Link>
                    ))
                  }
                </ul>
              </div>
            </div>
            {/* social media links */}
            <div className="socialMediaLinks">
              <div className="social_heading">social</div>
              <div className="social">
                <ul className="footer_lists">
                  {
                    social.map((list, index) => (
                      <Link to={`/${list.linkUrl}`}><li className="footer_list_item" key={index}>{list.linkName}</li></Link>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>

          {/* contact details */}

          <div className="contact_details">
            <div className="contact_info_heading">Contact Info</div>
            <ul className="footer_lists">
                <li className="contact_lists">No. 12/1, 22nd main road, Muneshwara block, Girinagar Bengaluru, Karnataka- 560085</li>
                <li className="contact_lists">inventionmindsblr@gmail.com​​</li>
                <li className="contact_lists">+91 98440 05600</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
