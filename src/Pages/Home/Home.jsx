import React, { useEffect, useRef } from 'react'
import './Home.css'
import { assets } from '../../assets/assets'
import Accordion from '../../Components/Accordion/Accordion'
import Clients from '../../Components/Clients/Clients'
import ContactPageBanner from '../../Components/ContactPageBanner/ContactPageBanner'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
// const container2images = ["HomeContainerImg1","HomeContainerImg2","HomeContainerImg3","HomeContainerImg4","HomeContainerImg5","HomeContainerImg6","HomeContainerImg7","HomeContainerImg8"]

const Home = () => {

  const nextContainerRef = useRef(null);

  const scrollToNextContainer = () => {
    nextContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>

      <Helmet>
        <title>Invention Minds | Web Development, Mobile Apps & SEO Experts</title>
        <meta name='description' content="Invention Minds specializes in web development, mobile app solutions, and SEO strategies to grow your business online." />
        <meta name='keywords' content="Web Development Company, Mobile App Development, SEO Experts, Digital Marketing Services, Custom Software Solutions, Full-Stack Development, Responsive Web Design, E-Commerce Development, App Development Agency, Best Web Developers in Bengaluru" />
      </Helmet>
      <div className='Home_container'>
        {/* container_1 bg */}
        <div className="container_1_bg">
          <div className="Home_bg_circle"></div>
        </div>
        {/* container_1 contents */}
        <div className="home_container_1">
          <div className="home_content_container">
            <div className="greeting">Welcome to Invention Minds</div>
            <div className="container_1_heading">We Partner With You</div>
            <div className="container_1_description">to Transform Vision into Impactful Digital Growth.</div>
            <div className="contaier_1_buttons">
              <Link to="/contact-us" style={{ textDecoration: "none" }}><button className="container_1_btn container_1_btn_1">Get Started</button></Link>
              <button className="container_1_btn container_1_btn_2" onClick={scrollToNextContainer}>Explore More</button>
            </div>
          </div>
          <div className="home_container_1_box">
            <div className='home_container_1_box_text'>
              <span className="">Inv</span>
              <span className="changebg">ent</span>
              <span className="changebg">ion</span>
              <span className="changebg"> Min</span>
              <span className="changebg">ds</span>
            </div>
          </div>
        </div>
        {/* container_1_bottom_shadow */}
        <div className="bottom_shadow_container"></div>
      </div>
      <div className="home_container_2" ref={nextContainerRef}>
        <div className="home_container_2_content">
          <div className="home_container_2_heading">Who we are</div>
          <div className="container_2_para">Invention Minds team comes with a unique strategy and our market analyses are accurate and subject-orientated. We are best at providing consistently successful strategies, unique, and forward-thinking digital marketing solutions that consider each client’s individual requirements and unique demands.</div>
          <div className="container_2_para">We pursue perfection via expertise, knowledge, and excellence. Our content is relevant and results-driven, as opposed to just creating links. We assist brands in understanding customer expectations and communicating this understanding in insightful language. The basic ideals at Invention Minds are quality over quantity, context over substance, and accuracy over-production.</div>
        </div>
        <div className="container_2_images">
          <div className="container_2_slide_1">
            <div className="container_2_slide_1_images">
              <img src={assets.HomeContainerImg1} alt="Digital marketing agency in Bangalore offering innovative solutions" className='container_2_images' />
              <img src={assets.HomeContainerImg2} alt="Professional web development services in Bangalore by Invention Minds" className='container_2_images' />
              <img src={assets.HomeContainerImg3} alt="SEO experts in Bangalore providing effective search engine optimization" className='container_2_images' />
              <img src={assets.HomeContainerImg4} alt="Social media marketing services in Bangalore to boost your online presence" className='container_2_images' />
            </div>
            <div className="container_2_slide_1_images">
              <img src={assets.HomeContainerImg1} alt="Digital marketing agency in Bangalore offering innovative solutions" className='container_2_images' />
              <img src={assets.HomeContainerImg2} alt="Professional web development services in Bangalore by Invention Minds" className='container_2_images' />
              <img src={assets.HomeContainerImg3} alt="SEO experts in Bangalore providing effective search engine optimization" className='container_2_images' />
              <img src={assets.HomeContainerImg4} alt="Social media marketing services in Bangalore to boost your online presence" className='container_2_images' />
            </div>
            <div className="container_2_slide_1_images container_2_slide_1_images_copy">
              <img src={assets.HomeContainerImg1} alt="Digital marketing agency in Bangalore offering innovative solutions" className='container_2_images' />
              <img src={assets.HomeContainerImg2} alt="Professional web development services in Bangalore by Invention Minds" className='container_2_images' />
              <img src={assets.HomeContainerImg3} alt="SEO experts in Bangalore providing effective search engine optimization" className='container_2_images' />
              <img src={assets.HomeContainerImg4} alt="Social media marketing services in Bangalore to boost your online presence" className='container_2_images' />
            </div>
          </div>
          <div className="container_2_slide_1 container_2_slide_2">
            <div className="container_2_slide_2_images">
              <img src={assets.HomeContainerImg5} alt="Mobile app development company in Bangalore creating user-friendly apps" className='container_2_images' />
              <img src={assets.HomeContainerImg6} alt="IT consulting services in Bangalore for business growth and efficiency" className='container_2_images' />
              <img src={assets.HomeContainerImg7} alt="Custom software development company in Bangalore delivering tailored solutions" className='container_2_images' />
              <img src={assets.HomeContainerImg8} alt="Content marketing services in Bangalore to enhance brand visibility" className='container_2_images' />
            </div>
            <div className="container_2_slide_2_images">
              <img src={assets.HomeContainerImg5} alt="Mobile app development company in Bangalore creating user-friendly apps" className='container_2_images' />
              <img src={assets.HomeContainerImg6} alt="IT consulting services in Bangalore for business growth and efficiency" className='container_2_images' />
              <img src={assets.HomeContainerImg7} alt="Custom software development company in Bangalore delivering tailored solutions" className='container_2_images' />
              <img src={assets.HomeContainerImg8} alt="Content marketing services in Bangalore to enhance brand visibility" className='container_2_images' />
            </div>
            <div className="container_2_slide_2_images">
              <img src={assets.HomeContainerImg5} alt="Mobile app development company in Bangalore creating user-friendly apps" className='container_2_images' />
              <img src={assets.HomeContainerImg6} alt="IT consulting services in Bangalore for business growth and efficiency" className='container_2_images' />
              <img src={assets.HomeContainerImg7} alt="Custom software development company in Bangalore delivering tailored solutions" className='container_2_images' />
              <img src={assets.HomeContainerImg8} alt="Content marketing services in Bangalore to enhance brand visibility" className='container_2_images' />
            </div>
          </div>
        </div>
      </div>
      {/* <div className="home_container_4"> */}
      <Accordion />
      {/* </div>  */}

      <Clients />

      <div className="h_form_container">
        <ContactPageBanner />
      </div>

    </>
  )
}

export default Home
