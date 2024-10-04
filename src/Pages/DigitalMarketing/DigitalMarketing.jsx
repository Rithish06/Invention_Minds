import React from 'react'
import './DigitalMarketing.css'
import ServicesBannerDesign from '../../Components/ServicesBannerDesign/ServicesBannerDesign'
import { assets } from '../../assets/assets'

const DigitalMarketing = () => {
  return (
    <div className='servicesPage'>
        <ServicesBannerDesign 
            staza1Color = "#fff"
            staza2Color = "#F99B2B"
            staza3Color = ""
            stanza1 = "Transforming Visions into Digital"
            stanza2 = "Success"
            decription = "Drive business growth with strategic digital marketing solutions that boost online visibility and engagement."
            smallTitle = "Digital Marketing"
        />
        <div className="DMcontainer_2">
            <div className="DMbox_1">
                <div className="DMbox1_content">
                    <div className="gradient_headings">Why Choose Invention Minds for Your Digital Marketing Needs?</div>
                    <div className="services_para">Invention Minds stands out among the myriad of online marketing firms by treating each client as a unique project. We customise our services to develop tailored strategies and individual plans, ensuring that every business receives personalised attention.</div>
                    <div className="services_para">Our team is dedicated to elevating your brand through conversion-optimised websites and targeted digital marketing solutions, focusing on exponential growth and enhanced online presence.</div>
                </div>
                <div className="DMbox_1_img">
                    <img src={assets.digitalMarketing1} alt="" />
                </div>
            </div>
            <div className="DMbox_1 DMbox_2">
                <div className="DMbox1_content">
                    <div className="services_para">With a committed team of experts in SEO, social media marketing, PPC, and a holistic approach to digital marketing, Invention Minds is your trusted partner in reaching your potential customers effectively. We specialise in designing and developing successful digital marketing solutions, offering a comprehensive range of services from content development to digital campaigns and brand advertising. Our goal is to deliver high ROI and establish a strong online presence for businesses across diverse industries.</div>
                    <div className="services_para">At Invention Minds, our dedicated team of marketers, strategists, developers, designers, and storytellers is driven by a singular objective: to broaden consumer traffic and interaction, thereby boosting your business' exposure, revenue, and growth. We combine innovative solutions with in-depth research to create cutting-edge strategies tailored to your business needs. From brand strategy and design to SEO, social media marketing, PPC campaigns, and lead generation, we ensure that your business stands out and thrives in the digital landscape.</div>
                    <div className="services_para">Ready to take your business to new heights? Partner with Invention Minds and experience the difference in digital marketing expertise!</div>
                </div>
                <div className="DMbox_1_img">
                    <img src={assets.digitalMarketing2} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DigitalMarketing
