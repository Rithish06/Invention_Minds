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
                <img src={assets.HomeContainerImg1} alt=""/>
                <img src={assets.HomeContainerImg2} alt=""/>
                <img src={assets.HomeContainerImg3} alt=""/>
                <img src={assets.HomeContainerImg4} alt=""/>
            </div>
            <div className="BannerImages">
                <img src={assets.HomeContainerImg1} alt=""/>
                <img src={assets.HomeContainerImg2} alt=""/>
                <img src={assets.HomeContainerImg3} alt=""/>
                <img src={assets.HomeContainerImg4} alt=""/>
            </div>
            <div className="BannerImages">
                <img src={assets.HomeContainerImg1} alt=""/>
                <img src={assets.HomeContainerImg2} alt=""/>
                <img src={assets.HomeContainerImg3} alt=""/>
                <img src={assets.HomeContainerImg4} alt=""/>
            </div>
            <div className="BannerImages">
                <img src={assets.HomeContainerImg1} alt=""/>
                <img src={assets.HomeContainerImg2} alt=""/>
                <img src={assets.HomeContainerImg3} alt=""/>
                <img src={assets.HomeContainerImg4} alt=""/>
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
