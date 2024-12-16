import React from 'react'
import ServicesBannerDesign from '../../Components/ServicesBannerDesign/ServicesBannerDesign'
import './Webdevelopment.css'
import { assets } from '../../assets/assets'
import { Helmet } from 'react-helmet'

const Webdevelopment = () => {
  return (
    <div className='servicesPage'>
      <Helmet>
        <title>Top Web Development Services | Custom Websites for Business Growth</title>
        <meta name='description' content="Boost your online presence with Invention Minds' expert web development services. We build responsive, SEO-friendly, and custom websites tailored to your business." />
        <meta name='keywords' content="Web Development Services, Custom Website Design, Responsive Web Design, SEO-Friendly Websites,  Business Website Development, Professional Web Development, Best Web Development Company, E-Commerce Website Development, Mobile-Friendly Web Solutions, Website Development for Business Growth"/>
      </Helmet>

      <ServicesBannerDesign 
        staza1Color = "#fff"
        staza2Color = "#F99B2B"
        staza3Color = ""
        stanza1 = "Bangalore’s Expert"
        stanza2 = " Web Design & Development"
        decription = "Professional Web Development Services in Bengaluru – Invention Minds"
        smallTitle = "Web Design & Development"
      />

      <div className="web_container_2">
        <div className="gradient_headings web_con_2_heading">Web Designing and Web Development in Bangalore</div>
            <div className="services_para">We work closely with you, understanding your needs and translating them into designs that deliver results. Whether you’re looking for web design services, web page design, or expert UI/UX design, we ensure your website meets your goals. We’re affordable. If you’re concerned about website design costs, rest assured we offer high-quality solutions that fit your budget, whether you’re searching for freelance website designers or the best website builders in Bangalore. We’re flexible. Whether you’re looking for freelance web designers, a web design agency, or a long-term partner, we adapt to your needs with tailored solutions in website design and web application development.</div>  
            <div className="services_para">At Invention Minds, we understand the significance of a business website and offer creative web design services to meet your digital requirements. We cater to businesses of all sizes. Our services blend creative conception, brand sensitivity, technical expertise, and design execution. We prioritise engaging, informative, and user-friendly designs to make a positive impression on every visitor. Depending on your needs, we can incorporate graphics, special effects, videos, audio, and more into the website</div>
            <div className="services_para">Whether you are just starting or looking to update an existing website, make Invention Minds your choice for web design and development. Here's why you should choose us and what makes us stand out:</div>
        <div className="dev_list">
            <ul className='div_list_1'>
                <li className="dev_list_item">Innovative web design</li>
                <li className="dev_list_item">Professional website designers</li>
                <li className="dev_list_item">Experienced web developers</li>
                <li className="dev_list_item">Mobile-friendly design</li>
                <li className="dev_list_item">SEO-friendly website</li>
            </ul>
            <ul className='div_list_1'>
                <li className="dev_list_item">Effective layout & call-to-action</li>
                <li className="dev_list_item">Clean code</li>
                <li className="dev_list_item">On-time delivery</li>
                <li className="dev_list_item">Striking graphics</li>
            </ul>
        </div>
            <div className="services_para">Our extensive team comprises highly qualified website designers, web developers, graphic designers, and SEO specialists. Together, we collaborate to deliver creative, engaging, cost-effective, user-friendly and search engine-friendly designs without compromising on quality or precision.</div>
            
            <div className="webImgContainer">
                <div className='dev_image_text'>
                    I'm currently looking to join a <span className='crossFunctional'>cross-functional </span><br />
                    <span className='img_text_small'>that values improving people's lives through accessible design </span>
                </div>
                <img src={assets.webServices} alt="Best web development services in Bangalore | Invention Minds" className='webServiceImg' />
            </div>
      </div>
    </div>
  )
}

export default Webdevelopment
