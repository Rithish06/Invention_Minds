import React, { useEffect, useState } from 'react'
import './Accordion.css'

const content = {
    digitalMarketing: {
      title: "Digital Marketing",
      para_1:
        "Invention Minds stands out among the myriad of online marketing firms by treating each client as a unique project. We customize our services to develop tailored strategies and individual plans, ensuring that every business receives personalized attention. Our team is dedicated to elevating your brand through conversion-optimized websites and targeted digital marketing solutions, focusing on exponential growth and enhanced online presence.",
      para_2:
        "With a committed team of experts in SEO, social media marketing, PPC, and a holistic approach to digital marketing, Invention Minds is your trusted partner in reaching your potential customers effectively. We specialize in designing and developing successful digital marketing solutions, offering a comprehensive range of services from content development to digital campaigns and brand advertising. Our goal is to deliver high ROI and establish a strong online presence for businesses across diverse industries.",
      btn_cls: "btns color_1",
    },
    websiteDevelopment: {
      title: "Web Designing and Web Development",
      para_1:
        "Crafting a unique online presence is crucial, as your website serves as your digital identity. Web development encompasses a range of projects, from simple static web pages to complex internet applications, electronic businesses, or social network services. Similar to advertisements, a website's function is to impress customers with the aesthetics and presentation of your products and services while offering comprehensive information about your company.",
      para_2:
        "At Invention Minds, we understand the significance of a business website and offer creative web design services to meet your digital requirements. We cater to businesses of all sizes. Our services blend creative conception, brand sensitivity, technical expertise, and design execution. We priorities engaging, informative, and user-friendly designs to make a positive impression on every visitor. Depending on your needs, we can incorporate graphics, special effects, videos, audio, and more into the website",
      btn_cls: "btns color_2",
    },
    seo: {
      title: "SEO For Any Business",
      para_1:
        "We specialize in providing SEO services for businesses of all kinds. Our expert team employs a variety of techniques to enhance your website's popularity with search engines, ensuring a robust online presence. Experience high rankings and a significant boost in traffic with our dedicated SEO solutions.",
      para_2: null,
      btn_cls: "btns color_3",
    },
    UiUx: {
      title: "UI & UX Design",
      para_1:
        "The success of a website hinges greatly on its User Interface (UI) and User Experience (UX). The UI encompasses the visual elements of a site, from its color schemes to typography, ensuring a cohesive and aesthetically pleasing design that resonates with the brand identity. Equally important is the UX, which focuses on the overall experience of the user. This involves understanding the target audience through research and crafting a journey that is intuitive and seamless. Clear navigation, responsive design across various devices, and accessibility features are paramount for a positive UX. Additionally, incorporating feedback loops and iterative design processes enable continuous improvement. By prioritizing both UI and UX, a website can effectively engage users, foster trust, and drive conversions.",
      para_2: null,
      btn_cls: "btns color_4",
    },
};


const Accordion = () => {

    const [accordion_1, setAccordion1] = useState(true)
    const [accordion_2, setAccordion2] = useState(false)
    const [accordion_3, setAccordion3] = useState(false)
    const [accordion_4, setAccordion4] = useState(false)
    const [activeContent, setActiveContent] = useState("digitalMarketing")
    const [fadeInClass, setFadeInClass] = useState("");

    const Slide_1 = () => {
        setAccordion1(true)
        setAccordion2(false)
        setAccordion3(false)
        setAccordion4(false)
        setActiveContent("digitalMarketing")
    }
    const Slide_2 = () => {
        setAccordion1(false)
        setAccordion2(true)
        setAccordion3(false)
        setAccordion4(false)
        setActiveContent("websiteDevelopment")
    }

    const Slide_3 = () => {
        setAccordion1(false)
        setAccordion2(false)
        setAccordion3(true)
        setAccordion4(false)
        setActiveContent("seo")
    }

    const Slide_4 = () => {
        setAccordion1(false)
        setAccordion2(false)
        setAccordion3(false)
        setAccordion4(true)
    }

  return (
    <div className='accordian'>
        <div className="home_container_4_heading">Our Services</div>
        <div className="container_4_contents">
            {/* left side */}
            <div className="container_4_leftside">
                {/* accordion 1*/}
                <div className={`accordian_container accordian_container_1 ${accordion_1 ? 'max-width' : 'min_width'}`} > 
                    <div className="vertical_button">
                        <div className={`sildebutton color_1 ${accordion_1 ? 'hide_slide_btn' : ''}`} onClick={Slide_1}>Digital Marketing</div>
                    </div>
                    <div className={`bottom_button ${accordion_1 ? 'show_accordion_title' : 'translate'}`}>
                        <div className="title color_1">Digital Marketing</div>
                    </div>
                </div>
                {/* accordion 2*/}
                <div className={`accordian_container accordian_container_2 ${accordion_2 ? 'max-width' : 'min_width'}`} > 
                    <div className="vertical_button">
                        <div className={`sildebutton color_2 ${accordion_2 ? 'hide_slide_btn' : ''}`} onClick={Slide_2}>Website design & development</div>
                    </div>
                    <div className={`bottom_button ${accordion_2 ? 'show_accordion_title' : 'translate'}`}>
                        <div className="title color_2">Website design & development</div>
                    </div>
                </div>
                {/* accordion 3*/}
                <div className={`accordian_container accordian_container_3 ${accordion_3 ? 'max-width' : 'min_width'}`} > 
                    <div className="vertical_button">
                        <div className={`sildebutton color_3 ${accordion_3 ? 'hide_slide_btn' : ''}`} onClick={Slide_3}>SEO For Any Business</div>
                    </div>
                    <div className={`bottom_button ${accordion_3 ? 'show_accordion_title' : 'translate'}`}>
                        <div className="title color_3">SEO For Any Business</div>
                    </div>
                </div>
                {/* accordion 4*/}
                <div className={`accordian_container accordian_container_4 ${accordion_4 ? 'max-width' : 'min_width'}`} > 
                    <div className="vertical_button">
                        <div className={`sildebutton color_4 ${accordion_4 ? 'hide_slide_btn' : ''}`} onClick={Slide_4}>UI & UX Design</div>
                    </div>
                    <div className={`bottom_button ${accordion_4 ? 'show_accordion_title' : 'translate'}`}>
                        <div className="title color_4">UI & UX Design</div>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className={`container_4_right_side ${fadeInClass}`}>
                <div className="container_4_right_content">
                    <div className={`services_heading`}>{content[activeContent].title}</div>
                    <div className="para_1">{content[activeContent].para_1}</div>
                    <div className="para_1">{content[activeContent].para_2}</div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Accordion
