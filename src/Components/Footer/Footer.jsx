import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import { GiBrain } from "react-icons/gi";

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
      linkUrl: "https://www.facebook.com/profile.php?id=100085627813693"
    },
    {
      linkName: "Instagram",
      linkUrl: "https://www.instagram.com/invention_minds2023/"
    },
    {
      linkName: "LinkedIn",
      linkUrl: ""
    },
    {
      linkName: "Twitter",
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
      <div className="footer_root">
        <div className="footer_content_container">
          {/* <div className="footer_wrapper"> */}
          <div className="footer_content">
            {/* footer Image */}
            <div className="footer_image">
              <GiBrain className="brain" />
            </div>
            <div className="hyperLinks">
              <div className="superlists">
                <div className="superlist_heading">Superlist</div>
                <div className="superlist">
                  {/* super list item 1 */}
                  <ul className="footer_lists">
                    {
                      superList_1.map((list, index) => (
                        <Link key={index} style={{ textDecoration: 'none' }} to={`/${list.linkUrl}`}><li className="footer_list_item">{list.linkName}</li></Link>
                      ))
                    }
                  </ul>
                  {/* super list item 2 */}
                  <ul className="footer_lists">
                    {
                      superList_2.map((list, index) => (
                        <Link key={index} style={{ textDecoration: 'none' }} to={`/${list.linkUrl}`}><li className="footer_list_item">{list.linkName}</li></Link>
                      ))
                    }
                  </ul>
                </div>
              </div>
              {/* social media links */}
              <div className="socialMediaLinks">
                <div className="social_heading">Social</div>
                <div className="social">
                  <ul className="footer_lists">
                    {
                      social.map((list, index) => (
                        <a href={list.linkUrl} target="_blank" rel="noopener noreferrer" key={index} style={{ textDecoration: 'none' }} to={`/${list.linkUrl}`}><li className="footer_list_item">{list.linkName}</li></a>
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
          {/* copy rights */}
        {/* <div className="copyrights">
            <p>ⓒ Invention Minds 2024</p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
