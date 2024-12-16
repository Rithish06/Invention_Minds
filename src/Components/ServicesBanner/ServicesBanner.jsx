import React from 'react'
import './ServicesBanner.css'
import { assets } from '../../assets/assets'

const ServicesBanner = () => {
  return (
    <div className='services_banner'>
        <div className="hidercontainer">
            <div className="hider_top">
                <div className="border_top"></div>
            </div>
        </div>
        <div className="servicesBannerImagesContainer">
            <div className="BannerImages">
                <img src={assets.HomeContainerImg1} alt="Invention Minds content strategy services in Bangalore for effective marketing"/>
                <img src={assets.HomeContainerImg2} alt="Invention Minds marketing campaign management in Bangalore for business success"/>
                <img src={assets.HomeContainerImg3} alt="Invention Minds online reputation management services in Bangalore for brand credibility"/>
                <img src={assets.HomeContainerImg4} alt="Invention Minds web app development services in Bangalore for scalable web solutions"/>
            </div>
            <div className="BannerImages">
                <img src={assets.HomeContainerImg1} alt="Invention Minds custom software solutions in Bangalore for unique business needs"/>
                <img src={assets.HomeContainerImg2} alt="Invention Minds data analytics services in Bangalore for actionable business insights"/>
                <img src={assets.HomeContainerImg3} alt="Invention Minds e-commerce development services in Bangalore for online business growth"/>
                <img src={assets.HomeContainerImg4} alt="Invention Minds cloud computing services in Bangalore for scalable IT solutions"/>
            </div>
            <div className="BannerImages">
                <img src={assets.HomeContainerImg1} alt="Invention Minds tech support services in Bangalore for continuous IT assistance"/>
                <img src={assets.HomeContainerImg2} alt="Invention Minds software integration services in Bangalore for seamless operations"/>
                <img src={assets.HomeContainerImg3} alt="Invention Minds web hosting services in Bangalore for reliable online presence"/>
                <img src={assets.HomeContainerImg4} alt="Invention Minds business automation services in Bangalore for streamlined processes"/>
            </div>
            <div className="BannerImages">
                <img src={assets.HomeContainerImg1} alt="Invention Minds product development services in Bangalore for innovative solutions"/>
                <img src={assets.HomeContainerImg2} alt="Invention Minds graphic design services in Bangalore for creative visuals"/>
                <img src={assets.HomeContainerImg3} alt="nvention Minds social media management services in Bangalore for brand visibility"/>
                <img src={assets.HomeContainerImg4} alt="Invention Minds web development services in Bangalore for custom websites"/>
            </div>
        </div>
        <div className="hidercontainer">
            <div className="hider_bottom">
                <div className="border_bottom"></div>
            </div>
        </div>
            
    </div>
  )
}

export default ServicesBanner
