import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './ServicesCarousel.css';
import { Link } from 'react-router-dom';
import Brand from '../../assets/images/invention-minds-branding-services-bangalore.png';
import CreativeContent from '../../assets/images/invention-minds-creative-content-services-bangalore.png';
import DigitalMarketing from '../../assets/images/invention-minds-digital-marketing-services-bangalore.png';
import MobileAppDevelopment from '../../assets/images/invention-minds-mobile-app-development-bangalore.png';
import ResponsiveDesign from '../../assets/images/invention-minds-responsive-web-design-bangalore.png';
import SeoForBusiness from '../../assets/images/invention-minds-seo-services-bangalore.png';
import SocialMedia from '../../assets/images/invention-minds-social-media-management-bangalore.png';
import WebDevelopment from '../../assets/images/invention-minds-web-development-services-bangalore.png';
import UiUx from '../../assets/images/invention-minds-ui-ux-design-services-bangalore.png';

const ServicesCarousel = () => {

  const carousel = [
    { image: DigitalMarketing, heading: "Digital Marketing", btnColor: "#4F000A", RouteUrl: "digital-marketing" },
    { image: WebDevelopment, heading: "Web Development", btnColor: "#808391", RouteUrl: "web-development" },
    { image: UiUx, heading: "UI & UX Design", btnColor: "#643F93", RouteUrl: "ui-ux-design" },
    { image: SeoForBusiness, heading: "SEO For Any Business", btnColor: "#58797D", RouteUrl: "seo" },
    { image: SocialMedia, heading: "Social Media", btnColor: "#103081", RouteUrl: "social-media" },
    { image: CreativeContent, heading: "Creative Content", btnColor: "#817573", RouteUrl: "creative-content" },
    { image: ResponsiveDesign, heading: "Responsive Design", btnColor: "#843C55", RouteUrl: "responsive-design" },
    { image: Brand, heading: "Branding", btnColor: "#675F5C", RouteUrl: "branding" },
    { image: MobileAppDevelopment, heading: "Mobile App Development", btnColor: "#516274", RouteUrl: "mobile-app-development" }
  ];

  const swiperRef = useRef(null); // Reference to Swiper instance

  // Handlers for manual next/prev navigation
  const goNext = () => {
    if (swiperRef.current && swiperRef.current.slideNext) {
      swiperRef.current.slideNext(); // Use slideNext() method
    }
  };

  const goPrev = () => {
    if (swiperRef.current && swiperRef.current.slidePrev) {
      swiperRef.current.slidePrev(); // Use slidePrev() method
    }
  };

  return (
    <div className='ServicesCarousel'>
      <div className="Carousel_heading_1">Our Services</div>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper; // Assign swiper instance to ref
        }}
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
        className="Carousel"
      >
        {
          carousel.map((card, index) => (
            <SwiperSlide key={index}>
              <div className="carousel_cards" style={{ background: `url(${card.image})`, backgroundSize: "cover" }}>
                <div className="Carousel_title">{card.heading}</div>
                <Link to={`/services/${card.RouteUrl}`}><button className='Carousel_button' style={{ backgroundColor: card.btnColor }}>Explore More</button></Link>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

      {/* Manual Next and Prev Buttons */}
      <div className="navigators">
        <div className='nav_button nav_button_prev' onClick={goPrev}>
          <i className='fa-solid fa-angle-left angles'></i>
        </div>
        <div className='nav_button nav_button_next' onClick={goNext}>
          <i className='fa-solid fa-angle-right angles'></i>
        </div>
      </div>
    </div>
  );
};

export default ServicesCarousel;
