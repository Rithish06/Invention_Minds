import React, { useState } from "react";
import "./Tire.css";
import { assets } from "../../assets/assets";

const Tier = () => {
  const tierTitles = [
    {
      title: "Healthcare industry",
      titleColor: "tire_title1_color",
    },
    {
      title: "Educational Institutions",
      titleColor: "tire_title2_color",
    },
    {
      title: "Real Estate Industry",
      titleColor: "tire_title3_color",
    },
    {
      title: "Small Businesses",
      titleColor: "tire_title4_color",
    },
  ];

  const [degree, setDegree] = useState(0);
  const [titleTransform, settiTleTransform] = useState(0);

  const TireImage = {
    transform: `rotate(${degree}deg)`,
    transition: "transform 1s ease-in-out",
  };

  const TireTitle = {
    transform : `translateY(-${titleTransform}px)`,
    transition: "transform 1s ease-in-out",
  }

  const RotateFunction = () => {
    setDegree((curr) => curr + 90);

    if (titleTransform < 400){
      settiTleTransform((curr) => curr + 100)
    }

    if (titleTransform >= 300){
      settiTleTransform(0)
    }
  };

  return (
    <div className="tier_Container">
      <div className="tier_container">
        <div className="tier_img">
          <img
            style={TireImage}
            src={assets.tire}
            alt=""
            onClick={RotateFunction}
          />
          <p className="image_txt">
            Where cutting-edge digital solutions align perfectly with your
            industry needs!
          </p>
          <div className="tier_titles">
            {tierTitles.map((title, index) => (
              <div className={`tier_title ${title.titleColor}`} style={TireTitle} key={index}>
                {title.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tier;
