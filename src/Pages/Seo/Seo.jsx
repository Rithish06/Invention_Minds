import React from 'react'
import './Seo.css'
import ServicesBannerDesign from '../../Components/ServicesBannerDesign/ServicesBannerDesign'
import { assets } from '../../assets/assets'

const Seo = () => {
  return (
    <div className='servicesPage'>
        <ServicesBannerDesign 
            staza1Color = "#fff"
            staza2Color = "#F99B2B"
            staza3Color = "#fff"
            stanza1 = "Boost Visibility with Expert "
            stanza2 = "SEO Solutions "
            stanza3 = "for Any Business"
            decription = "Optimize your online presence with proven SEO techniques that increase rankings and grow engagement."
            smallTitle = "SEO For Any Business"
        />

        <div className="Seo_Container_2">
            <div className="gradient_headings services_heading">Drive Results with Proven SEO Strategies for Any Business</div>
            <div className="SeoContentContainer">
                <div className="SeoContent">
                    <div className="services_para">At Invention Minds, we understand that no two businesses are the same, which is why we offer customized SEO strategies to meet your unique goals. Whether you're a small local business or an enterprise-level organization, our team is equipped with the knowledge and tools to help you rank higher on search engines, increase organic traffic and improve your online visibility. We employ proven techniques, including on-page optimization, keyword research and technical SEO, to ensure your website is search-engine-friendly.</div>
                    <div className="services_para">Our SEO services go beyond simple rankings. We focus on holistic SEO that enhances the overall user experience. By improving website speed, mobile-friendliness and content relevancy, we ensure that users not only find your site but also engage with it. Our team is committed to developing long-term strategies that yield sustainable growth, driving more qualified traffic to your site and ultimately increasing conversions.</div>
                    <div className="services_para">With a data-driven approach, we track key metrics and adjust our SEO tactics to align with search engine updates and evolving industry trends. Partner with Invention Minds to build a strong online presence and achieve measurable, lasting success through effective SEO strategies.</div>
                </div>
                <div className="SeoImage">
                    <img src={assets.SeoImage} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seo