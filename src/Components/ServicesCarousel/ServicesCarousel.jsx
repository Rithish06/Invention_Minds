import React, {useRef, useEffect} from 'react'
import { assets } from '../../assets/assets'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
// import SwiperCore, { EffectCoverflow, Navigation, Pagination } from 'swiper';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ServicesCarousel.css'
import Brand from '../../assets/images/Branding.png'
import CreativeContent from '../../assets/images/CreativeContent.png'
import DigitalMarketing from '../../assets/images/DigitalMarketing.png'
import MobileAppDevelopment from '../../assets/images/MobileAppDevelopment.png'
import ResponsiveDesign from '../../assets/images/ResponsiveDesign.png'
import SeoForBusiness from '../../assets/images/SEO.png'
import SocialMedia from '../../assets/images/SocialMedia.png'
import WebDevelopment from '../../assets/images/WebDevelopment.png'
import UiUx from '../../assets/images/UiUx.png'
import { Link } from 'react-router-dom';



const ServicesCarousel = () => {

  const nextEl = useRef(null);
  const prevEl = useRef(null);

  const carousel = [
    {
      image : DigitalMarketing,
      heading : "Digital Marketing",
      btnColor : "#4F000A",
      RouteUrl : "digital-marketing"
    },
    {
      image : WebDevelopment,
      heading : "Web Development",
      btnColor : "#808391",
      RouteUrl : "web-development"
    },
    {
      image : UiUx,
      heading : "UI & UX Design",
      btnColor : "#643F93",
      RouteUrl : "ui-ux-design"
    },
    {
      image : SeoForBusiness,
      heading : "SEO For Any Business",
      btnColor : "#58797D",
      RouteUrl : "seo"
    },
    {
      image : SocialMedia,
      heading : "Social Media",
      btnColor : "#103081",
      RouteUrl : "social-media"
    },
    {
      image : CreativeContent,
      heading : "Creative Content",
      btnColor : "#817573",
      RouteUrl : "creative-content"
    },
    {
      image : ResponsiveDesign,
      heading : "Responsive Design",
      btnColor : "#843C55",
      RouteUrl : "responsive-design"
    },
    {
      image : Brand,
      heading : "Branding",
      btnColor : "#675F5C",
      RouteUrl : "branding"
    },
    {
      image : MobileAppDevelopment,
      heading : "Mobile App Develop",
      btnColor : "#516274",
      RouteUrl : "mobile-app-development"
    }
  ]

  useEffect(() => {
    if (prevEl.current && nextEl.current) {
      // Dynamically assign the navigation buttons once the component is rendered
    }
  }, []);


  return (
    <div className='ServicesCarousel'>
      <div className="Carousel_heading_1">Our Services</div>
        <Swiper 
         autoplay={{
          delay: 3000, // Time between slides (in milliseconds)
          disableOnInteraction: false, // Autoplay won't stop after user interaction
        }}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true} 
        slidesPerView={2}
        coverflowEffect={{
          rotate: 30,
          stretch: 70,
          depth: 400,
          modifier: 1,
          slideShadows: false,
        }}
       
        pagination={false}
        modules={[EffectCoverflow, Pagination]}
         
        className="Carousel">
          {
            carousel.map((card, index) => (
              <SwiperSlide key={index}>
                <div className="carousel_cards" style={{background : `url(${card.image})`, backgroundSize: "cover"}}>
                    <div className="Carousel_title">{card.heading}</div>
                    <Link to={`/services/${card.RouteUrl}`}><button className='Carousel_button' style = {{backgroundColor : card.btnColor}}>Explore More</button></Link>
                </div>
              </SwiperSlide>
            ))
          }
          
        </Swiper>
        {/* <div className="navigators">
            <div className='nav_button nav_button_prev' ref={prevEl}>
              <i className='fa-solid fa-angle-left angles'></i>
            </div>
            <div className='nav_button nav_button_next' ref={nextEl}>
              <i className='fa-solid fa-angle-right angles'></i>
            </div>
        </div> */}
    </div>
  )
}

export default ServicesCarousel
