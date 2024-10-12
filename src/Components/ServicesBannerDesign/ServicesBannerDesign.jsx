import React from 'react'
import { assets } from '../../assets/assets'
import './ServicesBannerDesign.css'
import { Link } from 'react-router-dom'

const ServicesBannerDesign = (props) => {


    const stanzaColor1 = {
        color : props.staza1Color,
    }
    const stanzaColor2 = {
        color : props.staza2Color,
    }
    const stanzaColor3 = {
        color : props.staza3Color,
    }

  return (
    <div className='BannerDesignContainer'>
        <div className="Bannerdesign">
            <div className="star">
                <img src={assets.star} alt=""/>
            </div>
            <div className="BannerDesignContent">
                <div className="bannerDesignHeading">
                    <span className="stanza_1" style={stanzaColor1}>{props.stanza1}</span>
                    <span className="stanza_2" style={stanzaColor2}>{props.stanza2}</span>
                    <span className="stanza_3" style={stanzaColor3}>{props.stanza3}</span>
                </div>
                <div className="bannerDesignDescription">{props.decription}</div>
                <div className="banner_button_container">
                    <img src={assets.star} alt="" className='small_star small_star_1' />
                    <Link style = {{textDecoration : "none"}} to = '/contact-us'><div className="bannerDesignButton">Book A Meeting</div></Link>
                    <img src={assets.star} alt="" className='small_star small_star_2' />
                </div>
                <div className="smallHeading">
                    <div className="line"></div>
                        <div className="smallHeadingText">{props.smallTitle}</div>
                    <div className="line"></div>
                </div>                
            </div>
        </div>
    </div>
  )
}

export default ServicesBannerDesign

{/* <ServicesBannerDesign 
        staza1Color = ""
        staza2Color = ""
        staza3Color = ""
        stanza1 = ""
        stanza2 = ""
        decription = ""
        smallTitle = ""
      /> */}
