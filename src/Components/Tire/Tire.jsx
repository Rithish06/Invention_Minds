import React, { useState } from "react";
import "./Tire.css";
import { assets } from "../../assets/assets";


const Tier = () => {

  const [activeCon, setActiveCon] = useState(0)

  const tierTitles = [
    {
      title: "Healthcare industry",
      titleColor: "tire_title1_color",
      para: "Crafting a unique online presence is crucial, as your website serves as your digital identity. Web development encompasses a range of projects, from simple static web pages to complex internet applications, electronic businesses, or social network services.We partner with the healthcare sector to create innovative and user-friendly websites. Our designs prioritise accessibility, ensuring patients and professionals can navigate seamlessly.",
    },
    {
      title: "Educational Institutions",
      titleColor: "tire_title2_color",
      para: "For educational institutions, we craft websites and promote them on social platforms that reflect their values and academic excellence. Our designs facilitate easy navigation for students, parents, and faculty. With interactive features and dynamic content, we contribute to an engaging online learning environment, fostering a sense of community and knowledge sharing.",
    },
    {
      title: "Real Estate Industry",
      titleColor: "tire_title3_color",
      para: "We transform real estate ventures into digital experiences. Our web designs showcase properties elegantly, and our mobile app development ensures property searches are at your client's fingertips. We specialise in SEO strategies to enhance your online presence, creating a strong brand identity with logo and graphic designing.",
    },
    {
      title: "Small Businesses",
      titleColor: "tire_title4_color",
      para: "For small businesses, Invention Minds is your digital partner for growth. Our website designs are tailored to showcase your unique offerings, supported by SEO strategies for increased visibility. We provide comprehensive digital solutions, including logo designs, graphic designs, and business presentations that leave a lasting impression.",
    },
  ];



  const [degree, setDegree] = useState(0);
  const [titleTransform, settiTleTransform] = useState(0);

  const TireImage = {
    transform: `rotate(${degree}deg)`,
    transition: "transform 1s ease-in-out",
  };

  const TireTitle = {
    transform: `translateY(-${titleTransform}px)`,
    transition: "transform 1s ease-in-out",
  }

  const RotateFunction = () => {
    setDegree((curr) => curr + 90);

    if (titleTransform < 400) {
      settiTleTransform((curr) => curr + 100)
    }

    if (titleTransform >= 300) {
      settiTleTransform(0)
    }

    if (activeCon < tierTitles.length - 1) {
      setActiveCon((curr) => curr + 1);
    } else {
      setActiveCon(0);
    }
  };

  return (
    <div className="tier_Container">
      <div className="tier_container">
        <div className="tier_img">
          <img
            style={TireImage}
            src={assets.tire}
            alt="Invention Minds product development services in Bangalore for innovative solutions"
            onClick={RotateFunction}
          />
          <p className="image_txt">
            Where cutting-edge digital solutions align perfectly with your
            industry needs!
          </p>
          <div className="tier_contents">
            <div className="tier_titles">
              {tierTitles.map((title, index) => (
                <div className={`tier_title ${title.titleColor}`} style={TireTitle} key={index}>
                  {title.title}
                </div>
              ))}
            </div>
            <div className="services_description_para">
              {tierTitles[activeCon].para}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Tier;