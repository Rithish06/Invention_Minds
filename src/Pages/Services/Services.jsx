import React from 'react'
import './Services.css'
import ServicesBanner from '../../Components/ServicesBanner/ServicesBanner'
import Tier from '../../Components/Tire/Tire'
import ServicesCarousel from '../../Components/ServicesCarousel/ServicesCarousel'
import { Helmet } from 'react-helmet'

const Services = () => {
  return (
    <div className = "services_page">
        {/* meta title and description */}
        <Helmet>
          <title>Professional Web Development and Digital Marketing Services in Bengaluru</title>
          <meta name="description" content='Invention Minds offers expert web development, mobile app creation, and digital marketing services in Bengaluru. Elevate your business with our innovative solutions.' />
          <meta name='keywords' content="Web development services, Digital marketing services, Mobile app development, SEO services, Social media marketing, Custom software development, E-commerce solutions, IT consulting services, Web design services, Online marketing strategies"/>
        </Helmet>

        <div className="services_container_1">
            <div className="services_heading_banner_heading"><span className='Digital'>Digital</span> <span className='solutions'>Solutions</span> That Work for You</div>
            <div className="services_container_1_description">We offer a variety of services designed to help your business thrive online.</div>
        </div>
        <ServicesBanner />
          <div className="services_container_2">
        <ServicesCarousel />
      </div>
      <div className="services_container_3">
        <Tier />
      </div>
    </div>
  )
}

export default Services
