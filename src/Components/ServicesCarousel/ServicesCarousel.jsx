import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './ServicesCarousel.css';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import WebDevelopment from '../../assets/images/WebDevelopment.png';
import UiUx from '../../assets/images/UiUx.png';
import SEO from '../../assets/images/SEO.png';
import SocialMedia from '../../assets/images/SocialMedia.png';
import CreativeContent from '../../assets/images/CreativeContent.png';
import ResponsiveDesign from '../../assets/images/ResponsiveDesign.png';
import Branding from '../../assets/images/Branding.png';
import MobileAppDevelopment from '../../assets/images/MobileAppDevelopment.png';
import DigitalMarketing from '../../assets/images/DigitalMarketing.png';

const ServicesCarousel = () => {
  const CarouselContents = [
    {
      bgImage: DigitalMarketing,
      serviceTitle: 'Digital Marketing',
      buttonColor: '#4F000A',
      RouteUrl: 'digital-marketing',
    },
    {
      bgImage: WebDevelopment,
      serviceTitle: 'Web Development',
      buttonColor: '#808391',
      RouteUrl: 'web-development',
    },
    {
      bgImage: UiUx,
      serviceTitle: 'UI & UX Design',
      buttonColor: '#643F93',
      RouteUrl: 'ui-ux-design',
    },
    {
      bgImage: SEO,
      serviceTitle: 'SEO For Any Business',
      buttonColor: '#58797D',
      RouteUrl: 'seo',
    },
    {
      bgImage: SocialMedia,
      serviceTitle: 'Social Media',
      buttonColor: '#103081',
      RouteUrl: 'social-media',
    },
  ];

  const [carouselBg, setCarouselBg] = useState('');

  useEffect(() => {
    // Set the initial background to the first item's bgImage
    if (CarouselContents.length > 0) {
      setCarouselBg(CarouselContents[0].bgImage);
    }
  }, []);

  const bg = {
    backgroundImage: `url(${carouselBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    height: '1000px',
    width: '500px',
  };

  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 30,
          stretch: -50,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev', 
        }}
        pagination={false}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {CarouselContents.map((content, index) => (
          <SwiperSlide key={index}>
            <div
              style={{ backgroundImage: `url(${content.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '500px', width: '500px' }}
              className="servicebg"
            >
              <div className="name">{content.serviceTitle}</div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next">Next</div>
        <div className="swiper-button-prev">Prev</div>
      </Swiper>
    </>
  );
};

export default ServicesCarousel;
