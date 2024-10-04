import React from 'react'
import './CreativeContent.css'
import ServicesBannerDesign from '../../Components/ServicesBannerDesign/ServicesBannerDesign'
import { assets } from '../../assets/assets'

const CreativeContent = () => {
  return (
    <div className='servicesPage'>
      <ServicesBannerDesign 
        staza1Color = "#fff"
        staza2Color = "#F99B2B"
        staza3Color = "#fff"
        stanza1 = "Craft Compelling "
        stanza2 = "Creative Content "
        stanza3 = "That Drives Engagement "
        decription = "Elevate your brand with creative content designed to inform, inspire, and convert your audience."
        smallTitle = "Creative Content"
      />
    <div className="CC_container_2">
        <div className="gradient_headings CC_heading">Creative Content</div>
        <div className="services_para">At Invention Minds, we specialize in producing high-quality content that captivates and informs your audience. Our services include crafting well-researched articles, engaging blog posts, and impactful email campaigns designed to align with your brand’s voice and goals. We ensure that each piece of content not only attracts attention but also effectively communicates your message and drives audience engagement.</div>
        <div className="services_para">Our approach combines expert writing with strategic insights to meet your specific needs. From detailed articles and compelling blog posts to effective email campaigns, we offer comprehensive content solutions that enhance your brand’s visibility and contribute to your business success. Partner with Invention Minds to elevate your content and achieve measurable results.</div>
        <img src={assets.CreativeContentImg} alt="" />
    </div>

    </div>
  )
}

export default CreativeContent
