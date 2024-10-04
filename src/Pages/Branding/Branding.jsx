import React from 'react'
import './Branding.css'
import { assets } from '../../assets/assets'
import ServicesBannerDesign from '../../Components/ServicesBannerDesign/ServicesBannerDesign'

const Branding = () => {
  return (
    <div className='servicesPage'>
      <ServicesBannerDesign 
        staza1Color = "#fff"
        staza2Color = "#F99B2B"
        staza3Color = "#fff"
        stanza1 = "Elevate Your "
        stanza2 = "Business Identity "
        stanza3 = "with Strategic Branding Solutions"
        decription = "Build a strong brand identity that resonates with your audience and drives lasting success."
        smallTitle = "BRANDING"
      />

      <div className="Branding_container_2">
            <div className="gradient_headings BrandingHeading1">BRANDING</div>
            <div className="services_para">At Invention Minds, we specialise in crafting unique brand identities that reflect your business values and essence. A brand represents more than just a name or symbol; it embodies your identity and communicates what you stand for. Our team is dedicated to creating brands that drive value, growth, and profit for your business.</div>
            <div className="services_para">With our expertise in brand strategy, design, and communication solutions, we have transformed numerous businesses by incubating new brands and revitalising existing ones. Our goal is to design a brand that embodies strength, professionalism, innovation, and resonates with your target audience.</div>
            <div className="gradient_headings BrandingHeading2">Our comprehensive branding services include:</div>
            <div className="BrandingBox_1">
                <div className="Branding_contents">
                    <ul className="Branding_list">
                        <li className="services_para">New product initiatives</li>
                        <li className="services_para">Business presentation</li>
                        <li className="services_para">Custom logo design</li>
                        <li className="services_para">Website design</li>
                        <li className="services_para">Corporate catalogue design</li>
                        <li className="services_para">Label design</li>
                    </ul>
                </div>
                <div className="Branding_img">
                    <img src={assets.BrandingImg1} alt="" />
                </div>
            </div>

            <div className="BrandingBox_1 BrandingBox_2">
                <div className="Branding_contents">
                    <ul className="Branding_list Branding_list_2">
                        <li className="services_para">Brand alignment and revamp of existing brands</li>
                        <li className="services_para">Information visualization through annual reports, magazines, and brochures</li>
                        <li className="services_para">Conceptualization of brand identity and business communication design</li>
                    </ul>
                </div>
                <div className="Branding_img">
                    <img src={assets.BrandingImg2} alt="" />
                </div>
            </div>
            <div className="services_para services_description">Partner with Invention Minds to create a brand that sets you apart and drives your business forward!</div>
      </div>
    
    </div>
  )
}

export default Branding
