import React from 'react'
import './Services.css'
import ServicesBanner from '../../Components/ServicesBanner/ServicesBanner'
import Tier from '../../Components/Tire/Tire'
import ServicesCarousel from '../../Components/ServicesCarousel/ServicesCarousel'

const Services = () => {
  return (
    <div className = "services_page">
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
